export interface SyncExecutionResult {
    runId: string;
    status: string;
    itemsReceived?: number;
    itemsProcessed?: number;
    itemsFailed?: number;
    error?: string;
}
export interface SyncExecutor {
    /**
     * Executes the synchronization process for a given store.
     * In a direct execution model, this will block and return the final result.
     * In a durable/worker model, this may immediately return a RUNNING status and the caller must poll the DB.
     */
    execute(storeId: string): Promise<SyncExecutionResult>;
}
