"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectSyncExecutor = void 0;
const IngestionPipeline_1 = require("../pipeline/IngestionPipeline");
const index_1 = require("@price-comparator/database/src/index");
const FootLockerAwinConnector_1 = require("@price-comparator/connectors/src/implementations/FootLockerAwinConnector");
class DirectSyncExecutor {
    async execute(storeId) {
        const store = await index_1.prisma.store.findUnique({ where: { id: storeId } });
        if (!store) {
            throw new Error(`Store not found: ${storeId}`);
        }
        let connector;
        // In the future this should be a ConnectorFactory
        if (store.slug === 'footlocker' || store.integrationType === 'AFFILIATE') {
            connector = new FootLockerAwinConnector_1.FootLockerAwinConnector(storeId);
        }
        else {
            throw new Error(`No connector implementation found for store: ${store.name}`);
        }
        const pipeline = new IngestionPipeline_1.IngestionPipeline();
        const startTime = Date.now();
        try {
            const result = await pipeline.run(connector);
            const durationMs = Date.now() - startTime;
            // We manually update durationMs since the pipeline doesn't know about it yet,
            // or we could add it to IngestionPipeline. Let's do it here.
            if (result.syncRunId) {
                await index_1.prisma.syncRun.update({
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
        }
        catch (error) {
            const isAlreadyRunning = error.message.includes('SYNC_ALREADY_RUNNING');
            return {
                runId: 'unknown',
                status: isAlreadyRunning ? 'REJECTED' : 'FAILED',
                error: error.message
            };
        }
    }
}
exports.DirectSyncExecutor = DirectSyncExecutor;
