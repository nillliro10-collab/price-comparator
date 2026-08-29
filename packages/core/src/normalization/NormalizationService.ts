import { normalizeSize, NormalizedSize } from './size.normalizer';
import { normalizeColor } from './color.normalizer';
import { normalizeText } from './text.normalizer';

export interface NormalizedOffer {
  rawOfferId: string;
  title: string | null;
  brand: string | null;
  color: string | null;
  size: NormalizedSize;
  gtin: string | null;
  mpn: string | null;
}

export class NormalizationService {
  /**
   * Transforma una RawOffer en datos normalizados sin modificar el payload original.
   */
  public normalize(rawOffer: any): NormalizedOffer {
    return {
      rawOfferId: rawOffer.id,
      title: normalizeText(rawOffer.rawTitle),
      brand: normalizeText(rawOffer.rawBrand),
      color: normalizeColor(rawOffer.rawColor),
      size: normalizeSize(rawOffer.rawSize),
      gtin: rawOffer.rawGtin ? rawOffer.rawGtin.trim() : null,
      mpn: rawOffer.rawMpn ? rawOffer.rawMpn.trim() : null,
    };
  }
}
