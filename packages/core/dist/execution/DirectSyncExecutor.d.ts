import { SyncExecutor, SyncExecutionResult } from './SyncExecutor';
export declare class DirectSyncExecutor implements SyncExecutor {
    execute(storeId: string): Promise<SyncExecutionResult>;
}
