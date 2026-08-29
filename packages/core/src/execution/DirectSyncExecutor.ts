import { SyncExecutor, SyncExecutionResult } from './SyncExecutor';
import { IngestionPipeline } from '../pipeline/IngestionPipeline';
import { prisma } from '@price-comparator/database/src/index';
import { FootLockerAwinConnector } from '@price-comparator/connectors/src/implementations/FootLockerAwinConnector';
import { StoreConnector } from '@price-comparator/connectors/src/StoreConnector';

export class DirectSyncExecutor implements SyncExecutor {
  public async execute(storeId: string): Promise<SyncExecutionResult> {
    const store = await prisma.store.findUnique({ where: { id: storeId } });
    if (!store) {
      throw new Error(`Store not found: ${storeId}`);
    }

    let connector: StoreConnector;
    
    // In the future this should be a ConnectorFactory
    if (store.slug === 'footlocker' || store.integrationType === 'AFFILIATE') {
      connector = new FootLockerAwinConnector(storeId);
    } else {
      throw new Error(`No connector implementation found for store: ${store.name}`);
    }

    const pipeline = new IngestionPipeline();
    const startTime = Date.now();

    try {
      const result = await pipeline.run(connector);
      
      const durationMs = Date.now() - startTime;
      
      // We manually update durationMs since the pipeline doesn't know about it yet,
      // or we could add it to IngestionPipeline. Let's do it here.
      if (result.syncRunId) {
        await prisma.syncRun.update({
          where: { id: result.syncRunId },
          data: { durationMs }
        });
      }

      return {
        runId: result.syncRunId,
        status: result.status,
        itemsReceived: result.itemsReceived,
        itemsProcessed: result.itemsProcessed,
        itemsFailed: result.itemsFailed
      };

    } catch (error: any) {
      const isAlreadyRunning = error.message.includes('SYNC_ALREADY_RUNNING');
      return {
        runId: 'unknown',
        status: isAlreadyRunning ? 'REJECTED' : 'FAILED',
        error: error.message
      };
    }
  }
}
