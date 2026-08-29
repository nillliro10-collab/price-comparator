import { prisma } from './packages/database/src/index';
import { FootLockerAwinConnector } from './packages/connectors/src/implementations/FootLockerAwinConnector';
import { IngestionPipeline } from './packages/core/src/pipeline/IngestionPipeline';

async function main() {
  console.log('--- STARTING INGESTION PIPELINE TEST ---');
  
  // Ensure the store exists
  const store = await prisma.store.upsert({
    where: { slug: 'footlocker' },
    update: {},
    create: {
      name: 'Foot Locker',
      slug: 'footlocker',
      websiteUrl: 'https://footlocker.es',
      integrationType: 'API_FEED',
      isDemo: false
    }
  });

  console.log(`1. Initialized Store: ${store.name}`);

  // Seed Canonical Product to ensure Matching works
  const brand = await prisma.brand.upsert({ where: { slug: 'nike' }, update: {}, create: { name: 'Nike', slug: 'nike' } });
  const product = await prisma.product.upsert({
    where: { slug: 'nike-air-force-1-07' },
    update: {},
    create: { brandId: brand.id, name: "Nike Air Force 1 '07", slug: 'nike-air-force-1-07', model: "Air Force 1" }
  });
  await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '42', sizeSystem: 'EU', colorNormalized: 'Blanco' } },
    update: {}, create: { productId: product.id, sizeValue: '42', sizeSystem: 'EU', colorNormalized: 'Blanco' }
  });
  await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '43', sizeSystem: 'EU', colorNormalized: 'Blanco' } },
    update: {}, create: { productId: product.id, sizeValue: '43', sizeSystem: 'EU', colorNormalized: 'Blanco' }
  });
  await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '44', sizeSystem: 'EU', colorNormalized: 'Blanco' } },
    update: {}, create: { productId: product.id, sizeValue: '44', sizeSystem: 'EU', colorNormalized: 'Blanco' }
  });
  
  // Instantiate the connector and the pipeline
  const connector = new FootLockerAwinConnector(store.id);
  const pipeline = new IngestionPipeline();

  console.log(`2. Connecting to ${connector.name} and fetching raw data via static fixture...`);
  console.log(`3. Running IngestionPipeline...`);

  // Run the pipeline
  const result = await pipeline.run(connector);

  console.log('\n--- INGESTION RESULT ---');
  console.log(`Total Received: ${result.total}`);
  console.log(`Successfully Imported: ${result.successCount}`);
  console.log(`Failed Items: ${result.errors}`);
  console.log(`Needs Manual Review: ${result.reviews}`);
  
  if (result.detailedErrors && result.detailedErrors.length > 0) {
    console.log('\n--- DETAILED ERRORS ---');
    result.detailedErrors.forEach((err: any) => {
      console.log(`❌ [${err.externalId}] ${err.error}`);
    });
  }

  // Count final DB state
  const offers = await prisma.offer.count({ where: { storeId: store.id } });
  console.log(`\n=> Total live offers for ${store.name} in DB: ${offers}`);
  console.log('Done.');
}

main();
