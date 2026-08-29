"use server";

import { parseCsv } from "@price-comparator/core/src/importer/parseCsv";
import { prisma } from "@price-comparator/database/src/index";

export async function importCsvAction(csvText: string, storeId: string) {
  const { valid, failed } = parseCsv(csvText);

  let success = 0;
  const dbErrors: any[] = [];

  for (const item of valid) {
    try {
      // 1. Brand
      const brand = await prisma.brand.upsert({
        where: { name: item.brand },
        update: {},
        create: { name: item.brand, slug: item.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      });

      // 2. Product
      // En nuestro schema Product se identifica por slug, no externalId
      const productSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const product = await prisma.product.upsert({
        where: { slug: productSlug },
        update: {
          name: item.name,
          model: item.name,
          brandId: brand.id,
          imageUrl: item.imageUrl,
        },
        create: {
          name: item.name,
          model: item.name,
          slug: productSlug,
          brandId: brand.id,
          imageUrl: item.imageUrl,
        },
      });

      // 3. Variant
      // Buscamos si ya existe, sino creamos. 
      // El unique en schema es [productId, sizeValue, sizeSystem, colorNormalized]
      let variant = await prisma.variant.findFirst({
        where: {
          productId: product.id,
          sizeValue: item.size,
          colorRaw: item.color || "Unknown",
        }
      });
      
      if (!variant) {
        variant = await prisma.variant.create({
          data: {
            productId: product.id,
            sizeValue: item.size,
            sizeSystem: "EU",
            colorRaw: item.color || "Unknown",
            colorNormalized: item.color || "UNKNOWN",
            sku: item.sku,
            gtin: item.ean
          }
        });
      }

      // 4. Offer
      await prisma.offer.upsert({
        where: {
          storeId_variantId: {
            storeId,
            variantId: variant.id,
          },
        },
        update: {
          externalProductId: item.externalId,
          priceBase: item.price,
          priceTotal: item.price + (item.shipping || 0),
          priceShipping: item.shipping,
          url: item.productUrl,
          status: item.stock ? "ACTIVE" : "OUT_OF_STOCK",
          stockStatus: item.stock ? "IN_STOCK" : "OUT_OF_STOCK",
          lastSeenAt: new Date()
        },
        create: {
          storeId,
          variantId: variant.id,
          externalProductId: item.externalId,
          url: item.productUrl,
          priceBase: item.price,
          priceTotal: item.price + (item.shipping || 0),
          priceShipping: item.shipping,
          status: item.stock ? "ACTIVE" : "OUT_OF_STOCK",
          stockStatus: item.stock ? "IN_STOCK" : "OUT_OF_STOCK",
        },
      });

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
