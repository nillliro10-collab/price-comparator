import { StoreConnector, RawStoreData } from '../StoreConnector';
import { StoreMappingProfile } from '@price-comparator/core/src/mapping/mapping.types';
export declare class ZalandoConnector implements StoreConnector {
    readonly storeId: string;
    name: string;
    constructor(storeId: string);
    fetch(): Promise<RawStoreData>;
    getMappingProfile(): StoreMappingProfile;
}
