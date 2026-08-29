import { PrismaClient } from '@prisma/client';
import { IngestionPipeline } from '../../core/src/pipeline/IngestionPipeline.ts';
import { FootLockerAwinConnector } from '../../connectors/src/implementations/FootLockerAwinConnector.ts';

const prisma = new PrismaClient();

async function main() {
  console.log('🔗 Preparando integración AWIN (Simulator Mode)...');

  // 1. Ensure Store Exists
  const store = await prisma.store.upsert({
    where: { slug: 'footlocker' },
    update: {
      isAffiliate: true,
      affiliateNetwork: 'AWIN',
      programId: '11306',
      trackingEnabled: true,
      deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      isActive: true
    },
    create: {
      name: 'Foot Locker',
      slug: 'footlocker',
      websiteUrl: 'https://www.footlocker.es',
      isAffiliate: true,
      affiliateNetwork: 'AWIN',
      programId: '11306',
      trackingEnabled: true,
      deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      isActive: true
    }
  });

  console.log(`✅ Tienda configurada: ${store.name}`);
  console.log(`🔗 AWIN Deeplink: ${store.deeplinkTemplate}`);

  // 2. Clear old pending or running runs to avoid concurrent locks
  await prisma.syncRun.updateMany({
    where: { storeId: store.id, status: 'RUNNING' },
    data: { status: 'FAILED' }
  });

  // 3. Run Pipeline
  console.log('\n🤖 Lanzando IngestionPipeline...');
  const connector = new FootLockerAwinConnector(store.id);
  const pipeline = new IngestionPipeline();
  
  try {
    const result = await pipeline.run(connector);
    console.log('\n📊 RESULTADOS DE LA SINCRONIZACIÓN:');
    console.log(JSON.stringify(result, null, 2));

    // Verificar las ofertas actualizadas
    console.log('\n🛍️ OFERTAS EN BASE DE DATOS (FootLocker):');
    const offers = await prisma.offer.findMany({
      where: { storeId: store.id },
      include: { variant: { include: { product: true } } }
    });

    for (const off of offers) {
      console.log(` - ${off.variant.product.name} (Talla: ${off.variant.sizeValue}): ${off.priceTotal}€ [Stock: ${off.stockStatus}]`);
    }

  } catch (error) {
    console.error('❌ Error en sincronización:', error);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
