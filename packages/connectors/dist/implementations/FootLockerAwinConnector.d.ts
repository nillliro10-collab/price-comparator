import { StoreConnector, RawStoreData } from '../StoreConnector';
import { StoreMappingProfile } from '@price-comparator/core/src/mapping/mapping.types';
export declare class FootLockerAwinConnector implements StoreConnector {
    readonly storeId: string;
    readonly name = "Foot Locker (Awin)";
    constructor(storeId: string);
    fetch(): Promise<RawStoreData>;
    getMappingProfile(): StoreMappingProfile;
}
