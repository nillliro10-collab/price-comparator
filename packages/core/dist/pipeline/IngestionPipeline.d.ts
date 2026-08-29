import { StoreConnector } from '@price-comparator/connectors/src/StoreConnector';
export declare class IngestionPipeline {
    private mapper;
    private normalizer;
    private matcher;
    constructor();
    run(connector: StoreConnector): Promise<any>;
    private failSyncRun;
    private processItem;
}
