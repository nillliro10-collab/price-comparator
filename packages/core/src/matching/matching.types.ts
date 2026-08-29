export type MatchStatus = 'MATCHED' | 'NEEDS_REVIEW' | 'REJECTED';
export type MatchMethod = 'GTIN' | 'MPN_BRAND' | 'ATTRIBUTES' | 'FUZZY' | 'NONE';
export type MatchConfidence = 'HIGH' | 'MEDIUM' | 'LOW';

export interface MatchingResult {
  status: MatchStatus;
  confidenceScore: number; // 0 to 1
  matchingMethod: MatchMethod;
  matchedBy?: string; // Nombre de la regla o subsistema
  confidence: MatchConfidence;
  matchedVariantId: string | null;
  reasons: string[];
}
