"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeText = normalizeText;
function normalizeText(text) {
    if (!text)
        return null;
    // Convert to lower case, remove special chars, trim
    return text
        .toLowerCase()
        .replace(/[^\w\s\.\-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
