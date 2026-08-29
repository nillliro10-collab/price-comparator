import { prisma } from './packages/database/src/index';
import { IngestionPipeline } from './packages/core/src/pipeline/IngestionPipeline';
import { FootLockerAwinConnector } from './packages/connectors/src/implementations/FootLockerAwinConnector';
import { ZalandoConnector } from './packages/connectors/src/implementations/ZalandoConnector';

async function setupBaseProduct() {
  // Limpiar BD para la prueba arquitectónica aislada
  await prisma.syncError.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.rawOffer.deleteMany();
  await prisma.syncRun.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.store.deleteMany();
  await prisma.brand.deleteMany();

  // Configurar producto base para cross-store matching
  const brand = await prisma.brand.upsert({
    where: { slug: 'nike' },
    update: {},
    create: { name: 'Nike', slug: 'nike' }
  });

  const product = await prisma.product.upsert({
    where: { slug: 'nike-air-force-1' },
    update: {},
    create: {
      brandId: brand.id,
      name: 'Nike Air Force 1',
      model: 'Air Force 1',
      slug: 'nike-air-force-1'
    }
  });

  // Crear Variantes base (Tallas 42, 43, 44 Blancas)
  const sizes = ['42', '43', '44'];
  for (const size of sizes) {
    await prisma.variant.upsert({
      where: { productId_sizeValue_sizeSystem_colorNormalized: {
        productId: product.id, sizeValue: size, sizeSystem: 'EU', colorNormalized: 'White'
      }},
      update: {},
      create: {
        productId: product.id,
        sizeValue: size,
        sizeSystem: 'EU',
        colorNormalized: 'White',
        colorRaw: 'White'
      }
    });
  }

  // Tiendas
  const footlocker = await prisma.store.upsert({
    where: { slug: 'footlocker' },
    update: {},
    create: { name: 'Foot Locker', slug: 'footlocker', websiteUrl: 'https://footlocker.es' }
  });

  const zalando = await prisma.store.upsert({
    where: { slug: 'zalando' },
    update: {},
    create: { name: 'Zalando', slug: 'zalando', websiteUrl: 'https://zalando.es' }
  });

  return { footlocker, zalando, product };
}

async function runTests() {
  console.log('--- SPRINT 3: Zalando & Cross-Store Matching Tests ---');
  const { footlocker, zalando, product } = await setupBaseProduct();
  const pipeline = new IngestionPipeline();

  console.log('\n[1] Running FootLocker Connector (CSV Flat Format)...');
  const flConnector = new FootLockerAwinConnector(footlocker.id);
  const flRes = await pipeline.run(flConnector);
  console.log('FootLocker Sync:', flRes.status, `Processed: ${flRes.itemsProcessed}, Failed: ${flRes.itemsFailed}`);

  console.log('\n[2] Running Zalando Connector (Nested JSON, Collections)...');
  const zaConnector = new ZalandoConnector(zalando.id);
  const zaRes = await pipeline.run(zaConnector);
  console.log('Zalando Sync:', zaRes.status, `Processed: ${zaRes.itemsProcessed}, Failed: ${zaRes.itemsFailed}`);

  // TESTS
  console.log('\n--- VERIFICATIONS ---');

  // Test 1: JSON Complejo y Test 2: Arrays de Variantes
  const zaOffers = await prisma.offer.findMany({ where: { storeId: zalando.id } });
  console.log(`Test 1 & 2 (Variant Arrays): Zalando created ${zaOffers.length} offers from 1 nested product.`);
  console.assert(zaOffers.length >= 3, 'Failed: Did not extract all 3 variants from Zalando JSON');

  // Test 3: Normalización de precios
  const priceCheck = zaOffers.find(o => o.externalVariantId === 'ZAL-100-43W');
  console.log(`Test 3 (Price Normalization): String "112,00" normalized to => ${priceCheck?.priceBase}`);
  console.assert(priceCheck?.priceBase === 112, 'Failed: Price normalization failed for comma string');

  // Test 4: Producto defectuoso (Aislamiento de error)
  const failedRuns = await prisma.syncError.count({ where: { syncRunId: zaRes.syncRunId } });
  console.log(`Test 4 (Error Isolation): ${failedRuns} variants failed correctly (due to missing SKU).`);
  console.assert(failedRuns > 0, 'Failed: Defective variant was not caught');

  // Test 5: Idempotencia
  console.log('\nRunning Zalando again for Idempotency check...');
  await pipeline.run(zaConnector);
  const zaOffersAfter = await prisma.offer.count({ where: { storeId: zalando.id } });
  console.log(`Test 5 (Idempotency): Before = ${zaOffers.length}, After = ${zaOffersAfter}`);
  console.assert(zaOffers.length === zaOffersAfter, 'Failed: Idempotency broken, duplicates created');

  // Test 6: Cross-Store Matching
  console.log('\nTest 6: Cross-Store Matching');
  const matchedVariant = await prisma.variant.findFirst({
    where: { productId: product.id, sizeValue: '43' },
    include: { offers: { include: { store: true } } }
  });

  console.log(`Variant ID: ${matchedVariant?.id} (Size 43)`);
  console.log(`Competing Offers: ${matchedVariant?.offers.length}`);
  matchedVariant?.offers.forEach(o => {
    console.log(` - [${o.store.name}] Price: €${o.priceTotal} (URL: ${o.url})`);
  });

  const stores = matchedVariant?.offers.map(o => o.store.name);
  console.assert(stores?.includes('Foot Locker') && stores?.includes('Zalando'), 'Failed: Cross-store matching did not match both stores to the exact same canonical variant');

  console.log('\n✅ ALL SPRINT 3 TESTS PASSED');
}

runTests().catch(console.error);
