import { z } from "zod";

export const CsvRowSchema = z.object({
  externalId: z.string().min(1),
  name: z.string().min(1),
  brand: z.string().min(1),

  price: z.preprocess(
    (v) => parseFloat(String(v).replace(",", ".")),
    z.number().positive()
  ),

  shipping: z.preprocess(
    (v) => parseFloat(String(v || 0)),
    z.number().min(0)
  ),

  productUrl: z.string().url(),
  imageUrl: z.string().url().optional(),

  size: z.string().min(1),
  color: z.string().optional(),

  ean: z.string().optional(),
  sku: z.string().optional(),

  stock: z.preprocess(
    (v) => Number(v),
    z.number().int().min(0).max(1)
  ),
});
