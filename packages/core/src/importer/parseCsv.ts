import Papa from "papaparse";
import { CsvRowSchema } from "./schema";

export function parseCsv(text: string) {
  const { data, errors } = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  const valid = [];
  const failed = [];

  for (const row of data as any[]) {
    const result = CsvRowSchema.safeParse(row);

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
    } else {
      failed.push({
        row,
        error: result.error.message,
      });
    }
  }

  return { valid, failed, errors };
}
