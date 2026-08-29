"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMatchingService = void 0;
const matching_score_1 = require("./matching.score");
class ProductMatchingService {
    match(offer, candidates) {
        // 1. GTIN / EAN Match (Fuerte)
        if (offer.gtin) {
            const gtinMatch = candidates.find(c => c.gtin === offer.gtin);
            if (gtinMatch) {
                // Confirm attributes to avoid bad GTINs from stores
                if (offer.size.sizeValue && gtinMatch.sizeValue !== offer.size.sizeValue) {
                    return {
                        status: 'NEEDS_REVIEW',
                        confidenceScore: 0.8,
                        matchingMethod: 'GTIN',
                        matchedBy: 'GTIN Rule',
                        confidence: 'MEDIUM',
                        matchedVariantId: gtinMatch.id,
                        reasons: ['GTIN matches but size value differs. Possible store error.']
                    };
                }
                return {
                    status: 'MATCHED',
                    confidenceScore: 1.0,
                    matchingMethod: 'GTIN',
                    matchedBy: 'GTIN Rule',
                    confidence: 'HIGH',
                    matchedVariantId: gtinMatch.id,
                    reasons: ['Exact GTIN match']
                };
            }
        }
        // 2. MPN + Brand + Attributes Match
        if (offer.mpn && offer.brand) {
            const mpnMatch = candidates.find(c => c.mpn === offer.mpn &&
                c.brandName?.toLowerCase() === offer.brand?.toLowerCase());
            if (mpnMatch) {
                if (offer.size.sizeValue && mpnMatch.sizeValue !== offer.size.sizeValue) {
                    return {
                        status: 'NEEDS_REVIEW',
                        confidenceScore: 0.85,
                        matchingMethod: 'MPN_BRAND',
                        matchedBy: 'MPN + Brand Rule',
                        confidence: 'MEDIUM',
                        matchedVariantId: mpnMatch.id,
                        reasons: ['MPN+Brand matches but sizes differ']
                    };
                }
                return {
                    status: 'MATCHED',
                    confidenceScore: 0.95,
                    matchingMethod: 'MPN_BRAND',
                    matchedBy: 'MPN + Brand Rule',
                    confidence: 'HIGH',
                    matchedVariantId: mpnMatch.id,
                    reasons: ['MPN and Brand exact match']
                };
            }
        }
        // 3. Brand + Model + Size + Color (Fuzzy)
        let bestCandidate = null;
        let highestScore = 0;
        for (const candidate of candidates) {
            // Normalizamos el candidato igual que normalizamos la oferta
            const normalizedCandidateName = candidate.productName ?
                candidate.productName.toLowerCase().replace(/[^\w\s\.\-]/g, '').replace(/\s+/g, ' ').trim() : null;
            let similarity = (0, matching_score_1.calculateTextSimilarity)(offer.title, normalizedCandidateName);
            // Penalizar fuertemente si la marca es distinta y explícita
            if (offer.brand && candidate.brandName && offer.brand.toLowerCase() !== candidate.brandName.toLowerCase()) {
                similarity *= 0.5;
            }
            const isSameSize = !offer.size.sizeValue || offer.size.sizeValue === candidate.sizeValue;
            // Bonus para priorizar la variante correcta del mismo producto
            const totalScore = similarity + (isSameSize ? 0.05 : 0);
            if (totalScore > highestScore) {
                highestScore = totalScore;
                bestCandidate = candidate;
            }
        }
        if (bestCandidate) {
            const sameSize = !offer.size.sizeValue || offer.size.sizeValue === bestCandidate.sizeValue;
            let confidence = 'LOW';
            if (highestScore >= 0.90)
                confidence = 'HIGH';
            else if (highestScore >= 0.75)
                confidence = 'MEDIUM';
            // Si la talla es diferente, degradamos radicalmente la confianza y requerimos revisión o rechazamos
            if (!sameSize) {
                if (confidence === 'HIGH')
                    confidence = 'MEDIUM';
                else
                    confidence = 'LOW';
            }
            if (confidence === 'HIGH' && sameSize) {
                return {
                    status: 'MATCHED',
                    confidenceScore: highestScore,
                    matchingMethod: 'FUZZY',
                    matchedBy: 'Fuzzy Text Similarity',
                    confidence: 'HIGH',
                    matchedVariantId: bestCandidate.id,
                    reasons: ['High textual similarity and exact size match']
                };
            }
            if (highestScore > 0.65) { // Un umbral base para considerarlo candidato a revisión
                const reasons = ['Textual similarity is high but attributes may be ambiguous or incompatible'];
                if (!sameSize)
                    reasons.push(`Size mismatch: offer ${offer.size.sizeValue} vs canonical ${bestCandidate.sizeValue}`);
                return {
                    status: 'NEEDS_REVIEW',
                    confidenceScore: highestScore,
                    matchingMethod: 'FUZZY',
                    matchedBy: 'Fuzzy Text Similarity',
                    confidence: confidence,
                    matchedVariantId: bestCandidate.id,
                    reasons
                };
            }
        }
        return {
            status: 'REJECTED',
            confidenceScore: highestScore,
            matchingMethod: 'NONE',
            matchedBy: 'None',
            confidence: 'LOW',
            matchedVariantId: null,
            reasons: ['No suitable candidates found or score too low']
        };
    }
}
exports.ProductMatchingService = ProductMatchingService;
