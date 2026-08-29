"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = parseCsv;
const papaparse_1 = __importDefault(require("papaparse"));
const schema_1 = require("./schema");
function parseCsv(text) {
    const { data, errors } = papaparse_1.default.parse(text, {
        header: true,
        skipEmptyLines: true,
    });
    const valid = [];
    const failed = [];
    for (const row of data) {
        const result = schema_1.CsvRowSchema.safeParse(row);
        if (result.success) {
            // 4. Normalización simple - limpiar EAN y redondear precio
            const item = result.data;
            if (item.ean) {
                item.ean = item.ean.replace(/[^0-9]/g, "");
            }
            item.price = Math.round(item.price * 100) / 100;
            if (item.shipping) {
                item.shipping = Math.round(item.shipping * 100) / 100;
            }
            valid.push(item);
        }
        else {
            failed.push({
                row,
                error: result.error.message,
            });
        }
    }
    return { valid, failed, errors };
}
