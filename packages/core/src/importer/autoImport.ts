import { fetchFeed } from "./fetchFeed";
import { parseCsv } from "./parseCsv";
import { importSingleItem } from "./importSingleItem";
import { Store } from "@price-comparator/database/src/index";

export async function runAutoImport(store: Store) {
  if (!store.feedUrl) throw new Error("Store has no feedUrl");
  const csv = await fetchFeed(store.feedUrl);

  const { valid, failed } = parseCsv(csv);

  let success = 0;

  // MVP: Procesamos solo los primeros 500 para evitar timeout en Vercel Serverless
  const toProcess = valid.slice(0, 500);

  for (const item of toProcess) {
    try {
      await importSingleItem(item, store);
      success++;
    } catch (e: any) {
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
