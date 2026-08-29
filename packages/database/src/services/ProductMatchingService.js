"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMatchingService = void 0;
var NormalizationService_1 = require("./NormalizationService");
var index_1 = require("../index");
var ProductMatchingService = /** @class */ (function () {
    function ProductMatchingService() {
    }
    ProductMatchingService.validateGtin = function (gtin) {
        return __awaiter(this, void 0, void 0, function () {
            var cleanGtin;
            return __generator(this, function (_a) {
                if (!gtin)
                    return [2 /*return*/, false];
                cleanGtin = gtin.replace(/\s/g, '');
                if (cleanGtin.length !== 12 && cleanGtin.length !== 13 && cleanGtin.length !== 14)
                    return [2 /*return*/, false];
                // We could add checksum validation here, but numeric and length is a start
                return [2 /*return*/, /^\d+$/.test(cleanGtin)];
            });
        });
    };
    ProductMatchingService.findMatch = function (rawOffer) {
        return __awaiter(this, void 0, void 0, function () {
            var normBrand, normColor, normSize, normTitle, gtinMatch, mpnMatch, brandId, brands, matchedBrand, products, _i, products_1, product, productNorm, titleKeywords, contradiction, contradictionReason, _a, titleKeywords_1, kw, inRaw, inProd, isMatch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        normBrand = NormalizationService_1.NormalizationService.normalizeString(rawOffer.rawBrand);
                        normColor = NormalizationService_1.NormalizationService.normalizeColor(rawOffer.rawColor);
                        normSize = NormalizationService_1.NormalizationService.normalizeSize(rawOffer.rawSize);
                        normTitle = NormalizationService_1.NormalizationService.normalizeString(rawOffer.rawTitle);
                        return [4 /*yield*/, this.validateGtin(rawOffer.rawGtin)];
                    case 1:
                        if (!_b.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, index_1.prisma.variant.findFirst({
                                where: { gtin: rawOffer.rawGtin },
                                include: { product: { include: { brand: true } } }
                            })];
                    case 2:
                        gtinMatch = _b.sent();
                        if (gtinMatch && gtinMatch.product) {
                            // Sanity Check: Brand must match to avoid GTIN collision
                            if (NormalizationService_1.NormalizationService.normalizeString(gtinMatch.product.brand.name) === normBrand) {
                                return [2 /*return*/, { level: 'HIGH', candidateProductId: gtinMatch.productId, reason: 'GTIN_EXACT', signals: { gtin: rawOffer.rawGtin } }];
                            }
                        }
                        _b.label = 3;
                    case 3:
                        if (!(rawOffer.rawMpn && normBrand)) return [3 /*break*/, 5];
                        return [4 /*yield*/, index_1.prisma.variant.findFirst({
                                where: { mpn: rawOffer.rawMpn },
                                include: { product: { include: { brand: true } } }
                            })];
                    case 4:
                        mpnMatch = _b.sent();
                        if (mpnMatch && mpnMatch.product) {
                            if (NormalizationService_1.NormalizationService.normalizeString(mpnMatch.product.brand.name) === normBrand) {
                                // Contradiction Check: If color or size clearly clashes, we don't blindly merge
                                if (mpnMatch.colorNormalized && normColor && mpnMatch.colorNormalized !== normColor) {
                                    return [2 /*return*/, { level: 'MEDIUM', candidateProductId: mpnMatch.productId, reason: 'CONFLICT_COLOR_MPN', signals: { mpn: rawOffer.rawMpn, colorRaw: normColor, colorExisting: mpnMatch.colorNormalized } }];
                                }
                                return [2 /*return*/, { level: 'HIGH', candidateProductId: mpnMatch.productId, reason: 'MPN_EXACT', signals: { mpn: rawOffer.rawMpn } }];
                            }
                        }
                        _b.label = 5;
                    case 5:
                        brandId = null;
                        if (!normBrand) return [3 /*break*/, 7];
                        return [4 /*yield*/, index_1.prisma.brand.findMany()];
                    case 6:
                        brands = _b.sent();
                        matchedBrand = brands.find(function (b) { return NormalizationService_1.NormalizationService.normalizeString(b.name) === normBrand; });
                        if (matchedBrand)
                            brandId = matchedBrand.id;
                        _b.label = 7;
                    case 7:
                        if (!brandId) return [3 /*break*/, 9];
                        return [4 /*yield*/, index_1.prisma.product.findMany({
                                where: { brandId: brandId },
                                include: { variants: true }
                            })];
                    case 8:
                        products = _b.sent();
                        for (_i = 0, products_1 = products; _i < products_1.length; _i++) {
                            product = products_1[_i];
                            productNorm = NormalizationService_1.NormalizationService.normalizeString(product.name);
                            titleKeywords = ['shadow', '07', 'junior', 'og', 'adv', 'essential', 'mid', 'high', 'low'];
                            contradiction = false;
                            contradictionReason = '';
                            for (_a = 0, titleKeywords_1 = titleKeywords; _a < titleKeywords_1.length; _a++) {
                                kw = titleKeywords_1[_a];
                                inRaw = normTitle.includes(" ".concat(kw, " ")) || normTitle.endsWith(" ".concat(kw)) || normTitle.startsWith("".concat(kw, " "));
                                inProd = productNorm.includes(" ".concat(kw, " ")) || productNorm.endsWith(" ".concat(kw)) || productNorm.startsWith("".concat(kw, " "));
                                if (inRaw !== inProd) {
                                    contradiction = true;
                                    contradictionReason = kw;
                                    break;
                                }
                            }
                            if (contradiction)
                                continue;
                            isMatch = normTitle.includes(productNorm) || productNorm.includes(normTitle);
                            if (isMatch) {
                                // It's a match, but because it's text-based, we mark it MEDIUM for review
                                return [2 /*return*/, { level: 'MEDIUM', candidateProductId: product.id, reason: 'FUZZY_TITLE', signals: { normTitle: normTitle, productNorm: productNorm } }];
                            }
                        }
                        _b.label = 9;
                    case 9: 
                    // NO MATCH -> LOW
                    return [2 /*return*/, { level: 'LOW', reason: 'NO_MATCH', signals: {} }];
                }
            });
        });
    };
    return ProductMatchingService;
}());
exports.ProductMatchingService = ProductMatchingService;
