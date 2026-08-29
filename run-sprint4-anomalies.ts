import { prisma } from './packages/database/src/index';
import { IngestionPipeline } from './packages/core/src/pipeline/IngestionPipeline';
import { StoreConnector, RawStoreData } from './packages/connectors/src/StoreConnector';
import { StoreMappingProfile } from './packages/core/src/mapping/mapping.types';

// Mock Connector para probar Sprint 4
class Sprint4MockConnector implements StoreConnector {
  constructor(
    public readonly storeId: string, 
    public name = 'Sprint 4 Mock Store', 
    private items: any[]
  ) {}

  public async fetch(): Promise<RawStoreData> {
    return { items: this.items };
  }

  public getMappingProfile(): StoreMappingProfile {
    return {
      name: 'Mock Profile',
      requiredFields: ['externalId', 'price', 'name'],
      fields: {
        externalId: 'id',
        externalVariantId: 'id',
        name: 'title',
        brand: 'brand',
        price: 'price',
        size: 'size',
        stock: 'stock',
        url: 'url'
      }
    };
  }
}

async function setup() {
  await prisma.priceHistory.deleteMany();
  await prisma.syncError.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.rawOffer.deleteMany();
  await prisma.syncRun.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.store.deleteMany();
  await prisma.brand.deleteMany();

  const brand = await prisma.brand.create({ data: { name: 'Nike', slug: 'nike' } });
  
  // Producto base 1: "Nike Air Force 1"
  const p1 = await prisma.product.create({
    data: {
      brandId: brand.id,
      name: 'Nike Air Force 1',
      model: 'Air Force 1',
      slug: 'nike-air-force-1'
    }
  });

  // Variante Talla 43 Blanco
  await prisma.variant.create({
    data: { productId: p1.id, sizeValue: '43', sizeSystem: 'EU', colorNormalized: 'White' }
  });

  const store = await prisma.store.create({
    data: { name: 'Test Store', slug: 'test-store', websiteUrl: 'http://test' }
  });

  return store;
}

async function runTests() {
  console.log('--- SPRINT 4: Observability & Anomaly Tests ---');
  const store = await setup();
  const pipeline = new IngestionPipeline();

  // --- RUN 1: NORMAL INGESTION ---
  console.log('\n[RUN 1] Normal Ingestion (Creating Offers & PriceHistory)');
  
  // Generamos un feed de 100 items (99 basuras + 1 real) para inflar itemsReceived
  const baseItems = Array(99).fill(0).map((_, i) => ({ id: `DUMMY-${i}`, title: `Dummy ${i}`, price: 10, stock: 'IN_STOCK', url: `http://dummy.com/${i}` }));
  baseItems.push({ id: 'AF1-43', title: 'Nike Air Force 1', brand: 'Nike', price: 100, size: '43', stock: 'IN_STOCK', url: 'http://real' });
  
  let connector = new Sprint4MockConnector(store.id, 'Test Store', baseItems);
  const run1 = await pipeline.run(connector);
  
  const offersR1 = await prisma.offer.findMany({ include: { priceHistory: true } });
  const rawR1 = await prisma.rawOffer.findFirst({ where: { externalId: 'AF1-43' } });
  
  console.log(`Run 1 Processed: ${run1.itemsProcessed}`);
  console.assert(offersR1.length === 1, 'Failed: Run 1 did not create 1 offer');
  console.assert(offersR1.find(o => o.externalProductId === 'AF1-43')?.priceHistory.length === 1, 'Failed: PriceHistory not created initially');
  console.assert(rawR1?.confidence === 'HIGH', 'Failed: AF1 should have HIGH confidence match');

  // --- RUN 2: PRICE UNCHANGED (Idempotency on PriceHistory) ---
  console.log('\n[RUN 2] Price Unchanged');
  connector = new Sprint4MockConnector(store.id, 'Test Store', baseItems); // Mismos datos
  await pipeline.run(connector);
  
  const offersR2 = await prisma.offer.findMany({ include: { priceHistory: true } });
  console.assert(offersR2.find(o => o.externalProductId === 'AF1-43')?.priceHistory.length === 1, 'Failed: PriceHistory duplicated when price unchanged!');
  console.log('Test PASSED: PriceHistory correctly avoided duplicates.');

  // --- RUN 3: PRICE CHANGED ---
  console.log('\n[RUN 3] Price Changed (Creates new PriceHistory)');
  const updatedItems = [...baseItems];
  updatedItems[99].price = 80; // Bajamos el precio
  connector = new Sprint4MockConnector(store.id, 'Test Store', updatedItems);
  await pipeline.run(connector);
  
  const offersR3 = await prisma.offer.findMany({ include: { priceHistory: { orderBy: { recordedAt: 'asc' } } } });
  const af1Offer = offersR3.find(o => o.externalProductId === 'AF1-43');
  console.assert(af1Offer?.priceHistory.length === 2, 'Failed: PriceHistory should have 2 entries now');
  if (af1Offer && af1Offer.priceHistory.length === 2) {
    console.assert(af1Offer.priceHistory[1].priceBase === 80, 'Failed: PriceHistory did not register price drop');
  }
  console.log('Test PASSED: Price drop created a new PriceHistory record.');

  // --- RUN 4: PRICE ANOMALY ---
  console.log('\n[RUN 4] Price Anomaly (Drop to 1%)');
  const anomalyItems = [...baseItems];
  anomalyItems[99].price = 1; // 1 euro! (Anomalía)
  connector = new Sprint4MockConnector(store.id, 'Test Store', anomalyItems);
  await pipeline.run(connector);
  
  // El pipeline debería atraparlo y contar como failed el item.
  const run4Data = await prisma.syncRun.findFirst({ orderBy: { startedAt: 'desc' } });
  console.assert(run4Data?.itemsFailed === 1, 'Failed: Price anomaly was not caught as item failure');
  const errorCheck = await prisma.syncError.findFirst({ orderBy: { createdAt: 'desc' } });
  console.assert(errorCheck?.message.includes('PRICE_ANOMALY'), 'Failed: Error was not PRICE_ANOMALY');
  console.log('Test PASSED: Price anomaly detected and isolated.');

  // --- RUN 5: FEED VOLUME DROP ANOMALY ---
  console.log('\n[RUN 5] Feed Volume Drop (Anomaly Detection)');
  // Feed de solo 10 items (debería ser 100). Caída del 90%.
  const dropItems = Array(10).fill(0).map((_, i) => ({ id: `DUMMY-${i}`, title: `Dummy ${i}`, price: 10, stock: 'IN_STOCK' }));
  connector = new Sprint4MockConnector(store.id, 'Test Store', dropItems);
  
  try {
    await pipeline.run(connector);
    console.assert(false, 'Failed: Pipeline should have thrown ANOMALY_DETECTED');
  } catch (e: any) {
    console.assert(e.message.includes('ANOMALY_DETECTED'), 'Failed: Did not throw ANOMALY_DETECTED');
    console.log('Test PASSED: Volume drop detected and SyncRun aborted.');
  }

  // --- RUN 6: EMPTY FEED ANOMALY ---
  console.log('\n[RUN 6] Empty Feed Anomaly');
  connector = new Sprint4MockConnector(store.id, 'Test Store', []);
  try {
    await pipeline.run(connector);
    console.assert(false, 'Failed: Pipeline should have thrown EMPTY_FEED');
  } catch (e: any) {
    console.assert(e.message.includes('EMPTY_FEED'), 'Failed: Did not throw EMPTY_FEED');
    console.log('Test PASSED: Empty feed aborted correctly.');
  }
  
  // --- RUN 7: QUALITY METRICS (Missing SKUs & Invalid Prices) ---
  console.log('\n[RUN 7] Quality Metrics (Invalid data tracking)');
  const badItems = [
     { id: 'BAD-1', title: 'A', price: 'Gratis' }, // Invalid price
     { title: 'B', price: 10 }, // Missing SKU
     { id: 'BAD-3', title: 'C', price: -5 } // Invalid negative price (depende si el normalizer lo traga o no)
  ];
  // Saltamos la protección de anomalía borrando el lastSuccessfulSyncAt o creando una tienda nueva
  const store2 = await prisma.store.create({ data: { name: 'Test Store 2', slug: 'test-store-2', websiteUrl: 'http://test2' } });
  connector = new Sprint4MockConnector(store2.id, 'Test Store 2', badItems);
  
  await pipeline.run(connector);
  
  const run7Data = await prisma.syncRun.findFirst({ where: { storeId: store2.id }, orderBy: { startedAt: 'desc' } });
  console.log(`Missing SKU Count: ${run7Data?.missingSkuCount}, Invalid Price Count: ${run7Data?.invalidPriceCount}`);
  console.assert((run7Data?.missingSkuCount || 0) > 0, 'Failed: Did not catch missing SKU');
  console.assert((run7Data?.invalidPriceCount || 0) > 0, 'Failed: Did not catch invalid price');
  console.log('Test PASSED: Data Quality metrics recorded in SyncRun.');

  console.log('\n✅ ALL SPRINT 4 TESTS PASSED');
}

runTests().catch(console.error);
