"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalizationService = void 0;
const size_normalizer_1 = require("./size.normalizer");
const color_normalizer_1 = require("./color.normalizer");
const text_normalizer_1 = require("./text.normalizer");
class NormalizationService {
    /**
     * Transforma una RawOffer en datos normalizados sin modificar el payload original.
     */
    normalize(rawOffer) {
        return {
            rawOfferId: rawOffer.id,
            title: (0, text_normalizer_1.normalizeText)(rawOffer.rawTitle),
            brand: (0, text_normalizer_1.normalizeText)(rawOffer.rawBrand),
            color: (0, color_normalizer_1.normalizeColor)(rawOffer.rawColor),
            size: (0, size_normalizer_1.normalizeSize)(rawOffer.rawSize),
            gtin: rawOffer.rawGtin ? rawOffer.rawGtin.trim() : null,
            mpn: rawOffer.rawMpn ? rawOffer.rawMpn.trim() : null,
        };
    }
}
exports.NormalizationService = NormalizationService;
