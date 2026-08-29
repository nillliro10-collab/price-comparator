"use server";

import { parseCsv } from "@price-comparator/core/src/importer/parseCsv";
import { importSingleItem } from "@price-comparator/core/src/importer/importSingleItem";

export async function importCsvAction(csvText: string, storeId: string) {
  const store = await prisma.store.findUnique({ where: { id: storeId } });
  if (!store) throw new Error("Tienda no encontrada");

  const { valid, failed } = parseCsv(csvText);

  let success = 0;
  const dbErrors: any[] = [];

  for (const item of valid) {
    try {
      await importSingleItem(item, store);
      success++;
    } catch (e: any) {
      dbErrors.push({ item, error: String(e.message || e) });
    }
  }

  return {
    total: valid.length + failed.length + dbErrors.length,
    success,
    failed: [...failed, ...dbErrors],
  };
}

export async function forceAutoImportAction(storeId: string) {
  const store = await prisma.store.findUnique({ where: { id: storeId } });
  if (!store) throw new Error("Store no encontrada");
  if (!store.feedUrl) throw new Error("La tienda no tiene Feed URL configurada");

  const { runAutoImport } = await import("@price-comparator/core/src/importer/autoImport");
  const result = await runAutoImport(store);
  return result;
}
