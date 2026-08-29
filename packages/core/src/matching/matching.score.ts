/**
 * Simple text similarity function for the MVP (can be replaced by Levenshtein or Trigram later).
 * Returns a score between 0 and 1.
 */
export function calculateTextSimilarity(a: string | null, b: string | null): number {
  if (!a || !b) return 0;
  if (a === b) return 1;

  const aTokens = a.toLowerCase().split(/\s+/);
  const bTokens = b.toLowerCase().split(/\s+/);

  let matches = 0;
  for (const token of aTokens) {
    if (bTokens.includes(token)) {
      matches++;
    }
  }

  const scoreA = matches / aTokens.length;
  const scoreB = matches / bTokens.length;
  
  // Harmonic mean
  return (2 * scoreA * scoreB) / (scoreA + scoreB || 1);
}
