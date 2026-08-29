"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAutoImport = runAutoImport;
const fetchFeed_1 = require("./fetchFeed");
const parseCsv_1 = require("./parseCsv");
const importSingleItem_1 = require("./importSingleItem");
async function runAutoImport(store) {
    if (!store.feedUrl)
        throw new Error("Store has no feedUrl");
    const csv = await (0, fetchFeed_1.fetchFeed)(store.feedUrl);
    const { valid, failed } = (0, parseCsv_1.parseCsv)(csv);
    let success = 0;
    // MVP: Procesamos solo los primeros 500 para evitar timeout en Vercel Serverless
    const toProcess = valid.slice(0, 500);
    for (const item of toProcess) {
        try {
            await (0, importSingleItem_1.importSingleItem)(item, store);
            success++;
        }
        catch (e) {
            failed.push({ item, error: String(e.message || e) });
        }
    }
    return {
        totalParsed: valid.length,
        processed: toProcess.length,
        success,
        failed: failed.length,
    };
}
