"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTextSimilarity = calculateTextSimilarity;
/**
 * Simple text similarity function for the MVP (can be replaced by Levenshtein or Trigram later).
 * Returns a score between 0 and 1.
 */
function calculateTextSimilarity(a, b) {
    if (!a || !b)
        return 0;
    if (a === b)
        return 1;
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
