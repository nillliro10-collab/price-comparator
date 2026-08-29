"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvRowSchema = void 0;
const zod_1 = require("zod");
exports.CsvRowSchema = zod_1.z.object({
    externalId: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1),
    brand: zod_1.z.string().min(1),
    price: zod_1.z.preprocess((v) => parseFloat(String(v).replace(",", ".")), zod_1.z.number().positive()),
    shipping: zod_1.z.preprocess((v) => parseFloat(String(v || 0)), zod_1.z.number().min(0)),
    productUrl: zod_1.z.string().url(),
    imageUrl: zod_1.z.string().url().optional(),
    size: zod_1.z.string().min(1),
    color: zod_1.z.string().optional(),
    ean: zod_1.z.string().optional(),
    sku: zod_1.z.string().optional(),
    stock: zod_1.z.preprocess((v) => Number(v), zod_1.z.number().int().min(0).max(1)),
});
