export type MatchStatus = 'MATCHED' | 'NEEDS_REVIEW' | 'REJECTED';
export type MatchMethod = 'GTIN' | 'MPN_BRAND' | 'ATTRIBUTES' | 'FUZZY' | 'NONE';
export type MatchConfidence = 'HIGH' | 'MEDIUM' | 'LOW';
export interface MatchingResult {
    status: MatchStatus;
    confidenceScore: number;
    matchingMethod: MatchMethod;
    matchedBy?: string;
    confidence: MatchConfidence;
    matchedVariantId: string | null;
    reasons: string[];
}
