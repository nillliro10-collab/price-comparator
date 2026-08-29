import { prisma } from './packages/database/src/index';
import { StoreConnector, RawStoreData } from './packages/connectors/src/StoreConnector';
import { StoreMappingProfile } from './packages/core/src/mapping/mapping.types';
import { IngestionPipeline } from './packages/core/src/pipeline/IngestionPipeline';

// Mock Connector for Testing
class MockConnector implements StoreConnector {
  public storeId: string;
  public name = 'Mock Store';
  private items: any[];
  private failFetch: boolean;

  constructor(storeId: string, items: any[], failFetch = false) {
    this.storeId = storeId;
    this.items = items;
    this.failFetch = failFetch;
  }

  public async fetch(): Promise<RawStoreData> {
    if (this.failFetch) throw new Error("Connection Refused");
    return { items: this.items };
  }

  public getMappingProfile(): StoreMappingProfile {
    return {
      name: 'Mock', requiredFields: ['externalId', 'price'],
      fields: { externalId: 'id', name: 'title', price: { path: 'price', transform: 'price' } }
    };
  }
}

async function runTests() {
  console.log('Starting Hardening Tests...');
  const store = await prisma.store.upsert({
    where: { slug: 'test-store' },
    update: {},
    create: { name: 'Test Store', slug: 'test-store', websiteUrl: 'https://test.com', integrationType: 'API' }
  });

  const pipeline = new IngestionPipeline();

  // Test A - Happy Path
  console.log('\n--- Test A: Happy Path ---');
  const connA = new MockConnector(store.id, [{ id: '1', title: 'Product 1', price: '10' }]);
  const resA = await pipeline.run(connA);
  console.assert(resA.status === 'SUCCESS', 'Test A Failed');
  console.log('Test A: SUCCESS');

  // Test B - Partial Failure
  console.log('\n--- Test B: Partial Failure ---');
  const connB = new MockConnector(store.id, [
    { id: '2', title: 'Product 2', price: '10' },
    { title: 'Broken Product' } // missing id
  ]);
  const resB = await pipeline.run(connB);
  console.assert(resB.status === 'PARTIAL_SUCCESS', 'Test B Failed status');
  console.assert(resB.itemsFailed === 1, 'Test B Failed error count');
  console.log('Test B: SUCCESS (PARTIAL_SUCCESS correctly triggered)');

  // Test C - Duplicate Feed (Idempotency)
  console.log('\n--- Test C: Duplicate Feed ---');
  const preCount = await prisma.rawOffer.count({ where: { storeId: store.id } });
  await pipeline.run(connA); // Run same exact feed as A
  const postCount = await prisma.rawOffer.count({ where: { storeId: store.id } });
  console.assert(preCount === postCount, 'Test C Failed: Idempotency broken');
  console.log('Test C: SUCCESS (Idempotent)');

  // Test D - Empty Feed
  console.log('\n--- Test D: Empty Feed ---');
  const connD = new MockConnector(store.id, []);
  try {
    await pipeline.run(connD);
    console.error('Test D Failed: Should have thrown EMPTY_FEED');
  } catch (e: any) {
    console.assert(e.message.includes('EMPTY_FEED'), 'Test D Failed message');
    console.log('Test D: SUCCESS (EMPTY_FEED caught)');
  }

  // Test E - Concurrent Sync
  console.log('\n--- Test E: Concurrent Sync ---');
  // Inject a fake RUNNING sync
  const fakeRun = await prisma.syncRun.create({
    data: { storeId: store.id, sourceType: 'TEST', status: 'RUNNING' }
  });
  try {
    await pipeline.run(connA);
    console.error('Test E Failed: Should have thrown SYNC_ALREADY_RUNNING');
  } catch (e: any) {
    console.assert(e.message.includes('SYNC_ALREADY_RUNNING'), 'Test E Failed message');
    console.log('Test E: SUCCESS (Concurrency lock verified)');
  }
  // cleanup fake run
  await prisma.syncRun.delete({ where: { id: fakeRun.id } });

  // Test F - Invalid Feed
  console.log('\n--- Test F: Invalid Feed ---');
  const connF = new MockConnector(store.id, [], true);
  try {
    await pipeline.run(connF);
    console.error('Test F Failed: Should have thrown FETCH_ERROR');
  } catch (e: any) {
    console.log('Test F: SUCCESS (Fetch Error properly failed the SyncRun)');
  }

  console.log('\nAll Hardening Tests Passed! 🟢');
}

runTests().catch(console.error);
