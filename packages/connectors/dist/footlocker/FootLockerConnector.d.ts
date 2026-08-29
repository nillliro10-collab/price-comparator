import { StoreConnector, RawOfferInput } from '../base/StoreConnector';
export declare class FootLockerConnector extends StoreConnector {
    constructor(storeId: string);
    fetchOffers(limit?: number): Promise<RawOfferInput[]>;
}
