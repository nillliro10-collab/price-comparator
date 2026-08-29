import { z } from "zod";
export declare const CsvRowSchema: z.ZodObject<{
    externalId: z.ZodString;
    name: z.ZodString;
    brand: z.ZodString;
    price: z.ZodPreprocess<z.ZodNumber, unknown>;
    shipping: z.ZodPreprocess<z.ZodNumber, unknown>;
    productUrl: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodString>;
    size: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
    ean: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    stock: z.ZodPreprocess<z.ZodNumber, unknown>;
}, z.core.$strip>;
