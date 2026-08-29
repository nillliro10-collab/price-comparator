import { StoreMappingProfile } from '@price-comparator/core/src/mapping/mapping.types';
export interface RawStoreData {
    items: any[];
}
export interface StoreConnector {
    readonly storeId: string;
    readonly name: string;
    /**
     * Fetches the raw data from the external source (API, XML, CSV, Affiliate feed).
     * Could be mocked in development via a static fixture.
     */
    fetch(): Promise<RawStoreData>;
    /**
     * Returns the mapping profile to convert this store's raw data into our MappedItem standard.
     */
    getMappingProfile(): StoreMappingProfile;
}
