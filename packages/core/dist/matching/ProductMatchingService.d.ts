import { NormalizedOffer } from '../normalization/NormalizationService';
import { MatchingResult } from './matching.types';
export interface CanonicalVariantCandidate {
    id: string;
    productId: string;
    brandName: string | null;
    productModel: string | null;
    productName: string | null;
    gtin: string | null;
    mpn: string | null;
    sizeValue: string | null;
    colorNormalized: string | null;
}
export declare class ProductMatchingService {
    match(offer: NormalizedOffer, candidates: CanonicalVariantCandidate[]): MatchingResult;
}
