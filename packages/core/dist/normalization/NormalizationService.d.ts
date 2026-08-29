import { NormalizedSize } from './size.normalizer';
export interface NormalizedOffer {
    rawOfferId: string;
    title: string | null;
    brand: string | null;
    color: string | null;
    size: NormalizedSize;
    gtin: string | null;
    mpn: string | null;
}
export declare class NormalizationService {
    /**
     * Transforma una RawOffer en datos normalizados sin modificar el payload original.
     */
    normalize(rawOffer: any): NormalizedOffer;
}
