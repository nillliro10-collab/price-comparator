
export interface RawOfferInput {
  externalId: string;
  externalVariantId: string;
  rawTitle: string;
  rawBrand?: string | null;
  rawColor?: string | null;
  rawSize?: string | null;
  rawGtin?: string | null;
  rawMpn?: string | null;
  rawSku?: string | null;
  url: string;
  price: number;
  shipping: number | null;
  stock: string | null;
  rawPayload: any;
}

export abstract class StoreConnector {
  protected storeId: string;

  constructor(storeId: string) {
    this.storeId = storeId;
  }

  /**
   * Fetches the raw products from the store (via feed, API, or scraping)
   * and normalizes them into our standard RawOfferInput format for ingestion.
   */
  abstract fetchOffers(limit?: number): Promise<RawOfferInput[]>;
}
