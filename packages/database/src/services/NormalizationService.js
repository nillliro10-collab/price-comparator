"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalizationService = void 0;
var NormalizationService = /** @class */ (function () {
    function NormalizationService() {
    }
    NormalizationService.normalizeString = function (str) {
        if (!str)
            return '';
        return str
            .trim()
            .toLowerCase()
            // Remove diacritics
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            // Remove punctuation
            .replace(/[^a-z0-9\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    };
    NormalizationService.normalizeColor = function (color) {
        if (!color)
            return '';
        var map = {
            'triple white': 'white',
            'triple black': 'black',
            'core black': 'black',
            'ftwr white': 'white',
            'blanco': 'white',
            'negro': 'black'
        };
        var c = this.normalizeString(color);
        return map[c] || c;
    };
    NormalizationService.normalizeSize = function (size) {
        if (!size)
            return '';
        var s = this.normalizeString(size);
        // Remove sizing systems if present to extract raw value
        s = s.replace(/\beu\b/, '').replace(/\bus\b/, '').replace(/\buk\b/, '').trim();
        // Sometimes sizes come as "42 2/3", leave them clean
        return s;
    };
    return NormalizationService;
}());
exports.NormalizationService = NormalizationService;
