import { normalizeSize } from '../normalization/size.normalizer';
import { normalizeColor } from '../normalization/color.normalizer';
import { ProductMatchingService, CanonicalVariantCandidate } from '../matching/ProductMatchingService';
import { NormalizationService, NormalizedOffer } from '../normalization/NormalizationService';

describe('NormalizationService - Size', () => {
  it('should handle pure numbers', () => {
    expect(normalizeSize('42').sizeValue).toBe('42');
  });

  it('should extract systems correctly', () => {
    const res1 = normalizeSize('42 EU');
    expect(res1.sizeValue).toBe('42');
    expect(res1.sizeSystem).toBe('EU');

    const res2 = normalizeSize('EU 42');
    expect(res2.sizeValue).toBe('42');
    expect(res2.sizeSystem).toBe('EU');
  });

  it('should handle fractional sizes like 42 2/3', () => {
    const res = normalizeSize('42 2/3');
    expect(res.sizeValue).toBe('42.6667');
    expect(res.sizeSystem).toBeNull();
    expect(res.sizeLabel).toBe('42 2/3');
  });
});

describe('NormalizationService - Color', () => {
  it('should normalize Triple White to White', () => {
    expect(normalizeColor('Triple White')).toBe('White');
    expect(normalizeColor('White/White')).toBe('White');
  });

  it('should be conservative with complex colors', () => {
    expect(normalizeColor('Black/Anthracite')).toBe('Black Anthracite');
  });
});

describe('ProductMatchingService', () => {
  const matcher = new ProductMatchingService();

  const candidates: CanonicalVariantCandidate[] = [
    {
      id: 'v1',
      productId: 'p1',
      brandName: 'Nike',
      productModel: 'Air Force 1 \'07',
      productName: 'Nike Air Force 1 \'07',
      gtin: '00885178652414',
      mpn: null,
      sizeValue: '42',
      colorNormalized: 'White',
    },
    {
      id: 'v2',
      productId: 'p2',
      brandName: 'Nike',
      productModel: 'Air Force 1 Shadow',
      productName: 'Nike Air Force 1 Shadow',
      gtin: '111111111',
      mpn: null,
      sizeValue: '42',
      colorNormalized: 'White',
    }
  ];

  it('should match exact GTIN automatically', () => {
    const offer = {
      rawOfferId: 'r1',
      title: 'Zapatilla Blanca',
      brand: 'Nike',
      color: 'White',
      size: normalizeSize('42'),
      gtin: '00885178652414',
      mpn: null
    } as NormalizedOffer;

    const result = matcher.match(offer, candidates);
    expect(result.status).toBe('MATCHED');
    expect(result.matchingMethod).toBe('GTIN');
    expect(result.matchedVariantId).toBe('v1');
  });

  it('should flag GTIN match if sizes differ (bad store data)', () => {
    const offer = {
      rawOfferId: 'r1',
      title: 'Zapatilla Blanca',
      brand: 'Nike',
      color: 'White',
      size: normalizeSize('43'), // Different size!
      gtin: '00885178652414',
      mpn: null
    } as NormalizedOffer;

    const result = matcher.match(offer, candidates);
    expect(result.status).toBe('NEEDS_REVIEW');
  });

  it('should send AF1 07 vs Shadow ambiguity to NEEDS_REVIEW', () => {
    // The names are very similar, but not exactly. GTIN is missing.
    const offer = {
      rawOfferId: 'r2',
      title: 'Nike Air Force 1', // Too generic
      brand: 'Nike',
      color: 'White',
      size: normalizeSize('42'),
      gtin: null,
      mpn: null
    } as NormalizedOffer;

    const result = matcher.match(offer, candidates);
    expect(result.status).toBe('NEEDS_REVIEW');
    expect(result.matchingMethod).toBe('FUZZY');
  });
});
