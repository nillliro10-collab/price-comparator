import { z } from 'zod';

export const RawOfferSchema = z.object({
  externalId: z.string().min(1, "externalId is required").max(255),
  title: z.string().min(3, "Title must be at least 3 characters").max(500),
  url: z.string().url("Must be a valid URL"),
  price: z.number().positive("Price must be greater than 0"),
  brand: z.string().optional(),
  gtin: z.string().optional().refine(val => !val || val.length >= 8, {
    message: "GTIN must be at least 8 characters if provided"
  }),
  mpn: z.string().optional(),
  imageUrl: z.string().url("Image must be a valid URL").optional().or(z.literal('')),
  category: z.string().optional(),
  stockStatus: z.enum(['IN_STOCK', 'OUT_OF_STOCK', 'PREORDER']).default('IN_STOCK'),
});

export type ValidatedRawOffer = z.infer<typeof RawOfferSchema>;

export const StoreConfigSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  websiteUrl: z.string().url(),
  trackingEnabled: z.boolean().default(true),
  deeplinkTemplate: z.string().optional()
});
