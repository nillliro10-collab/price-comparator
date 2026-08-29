/**
 * Simple text similarity function for the MVP (can be replaced by Levenshtein or Trigram later).
 * Returns a score between 0 and 1.
 */
export declare function calculateTextSimilarity(a: string | null, b: string | null): number;
