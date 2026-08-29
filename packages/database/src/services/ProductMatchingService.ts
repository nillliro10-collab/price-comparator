import { NormalizationService } from './NormalizationService';
import { prisma } from '../index';

export class ProductMatchingService {
  static async validateGtin(gtin: string | null | undefined): Promise<boolean> {
    if (!gtin) return false;
    const cleanGtin = gtin.replace(/\s/g, '');
    if (cleanGtin.length !== 12 && cleanGtin.length !== 13 && cleanGtin.length !== 14) return false;
    // We could add checksum validation here, but numeric and length is a start
    return /^\d+$/.test(cleanGtin);
  }

  static async findMatch(rawOffer: any): Promise<{ level: 'HIGH' | 'MEDIUM' | 'LOW', candidateProductId?: string, reason: string, signals: any }> {
    const normBrand = NormalizationService.normalizeString(rawOffer.rawBrand);
    const normColor = NormalizationService.normalizeColor(rawOffer.rawColor);
    const normSize = NormalizationService.normalizeSize(rawOffer.rawSize);
    const normTitle = NormalizationService.normalizeString(rawOffer.rawTitle);
    
    // 1. GTIN EXACT MATCH (HIGH)
    if (await this.validateGtin(rawOffer.rawGtin)) {
      const gtinMatch = await prisma.variant.findFirst({
        where: { gtin: rawOffer.rawGtin },
        include: { product: { include: { brand: true } } }
      });
      if (gtinMatch && gtinMatch.product) {
        // Sanity Check: Brand must match to avoid GTIN collision
        if (NormalizationService.normalizeString(gtinMatch.product.brand.name) === normBrand) {
          return { level: 'HIGH', candidateProductId: gtinMatch.productId, reason: 'GTIN_EXACT', signals: { gtin: rawOffer.rawGtin } };
        }
      }
    }

    // 2. MPN + Brand MATCH (HIGH)
    if (rawOffer.rawMpn && normBrand) {
      // Find variants with the exact MPN and the correct brand
      const mpnMatch = await prisma.variant.findFirst({
        where: { mpn: rawOffer.rawMpn },
        include: { product: { include: { brand: true } } }
      });
      if (mpnMatch && mpnMatch.product) {
        if (NormalizationService.normalizeString(mpnMatch.product.brand.name) === normBrand) {
          // Contradiction Check: If color or size clearly clashes, we don't blindly merge
          if (mpnMatch.colorNormalized && normColor && mpnMatch.colorNormalized !== normColor) {
             return { level: 'MEDIUM', candidateProductId: mpnMatch.productId, reason: 'CONFLICT_COLOR_MPN', signals: { mpn: rawOffer.rawMpn, colorRaw: normColor, colorExisting: mpnMatch.colorNormalized } };
          }
          return { level: 'HIGH', candidateProductId: mpnMatch.productId, reason: 'MPN_EXACT', signals: { mpn: rawOffer.rawMpn } };
        }
      }
    }

    // 3. FUZZY MATCH with Contradiction Rules
    // Attempt to find brand
    let brandId = null;
    if (normBrand) {
      const brands = await prisma.brand.findMany();
      const matchedBrand = brands.find(b => NormalizationService.normalizeString(b.name) === normBrand);
      if (matchedBrand) brandId = matchedBrand.id;
    }

    if (brandId) {
       const products = await prisma.product.findMany({
         where: { brandId },
         include: { variants: true }
       });
       
       for (const product of products) {
         const productNorm = NormalizationService.normalizeString(product.name);
         
         // Contradiction Rules - Block Match
         const titleKeywords = ['shadow', '07', 'junior', 'og', 'adv', 'essential', 'mid', 'high', 'low'];
         let contradiction = false;
         let contradictionReason = '';

         for (const kw of titleKeywords) {
           const inRaw = normTitle.includes(` ${kw} `) || normTitle.endsWith(` ${kw}`) || normTitle.startsWith(`${kw} `);
           const inProd = productNorm.includes(` ${kw} `) || productNorm.endsWith(` ${kw}`) || productNorm.startsWith(`${kw} `);
           
           if (inRaw !== inProd) {
             contradiction = true;
             contradictionReason = kw;
             break;
           }
         }

         if (contradiction) continue;

         // Very basic inclusion fuzzy check. A real fuzzy would use Levenshtein or TF-IDF.
         // If "air force 1 07" is in "nike air force 1 07 black"
         const isMatch = normTitle.includes(productNorm) || productNorm.includes(normTitle);
         
         if (isMatch) {
           // It's a match, but because it's text-based, we mark it MEDIUM for review
           return { level: 'MEDIUM', candidateProductId: product.id, reason: 'FUZZY_TITLE', signals: { normTitle, productNorm } };
         }
       }
    }

    // NO MATCH -> LOW
    return { level: 'LOW', reason: 'NO_MATCH', signals: {} };
  }
}
