"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importSingleItem = importSingleItem;
const index_1 = require("@price-comparator/database/src/index");
async function importSingleItem(item, store) {
    // 1. Brand
    const brand = await index_1.prisma.brand.upsert({
        where: { name: item.brand },
        update: {},
        create: { name: item.brand, slug: item.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
    });
    // 2. Product
    const productSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const product = await index_1.prisma.product.upsert({
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
    let variant = await index_1.prisma.variant.findFirst({
        where: {
            productId: product.id,
            sizeValue: item.size,
            colorRaw: item.color || "Unknown",
        }
    });
    if (!variant) {
        variant = await index_1.prisma.variant.create({
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
    // AWIN Affiliate Link Builder
    // Si la tienda tiene template, lo procesamos. El clickId se inyecta en frontend.
    let finalUrl = item.productUrl;
    if (store.deeplinkTemplate) {
        finalUrl = store.deeplinkTemplate.replace("{url}", encodeURIComponent(item.productUrl));
    }
    // 4. Offer
    await index_1.prisma.offer.upsert({
        where: {
            storeId_variantId: {
                storeId: store.id,
                variantId: variant.id,
            },
        },
        update: {
            externalProductId: item.externalId,
            priceBase: item.price,
            priceTotal: item.price + (item.shipping || 0),
            priceShipping: item.shipping,
            url: finalUrl,
            status: item.stock ? "ACTIVE" : "OUT_OF_STOCK",
            stockStatus: item.stock ? "IN_STOCK" : "OUT_OF_STOCK",
            lastSeenAt: new Date()
        },
        create: {
            storeId: store.id,
            variantId: variant.id,
            externalProductId: item.externalId,
            url: finalUrl,
            priceBase: item.price,
            priceTotal: item.price + (item.shipping || 0),
            priceShipping: item.shipping,
            status: item.stock ? "ACTIVE" : "OUT_OF_STOCK",
            stockStatus: item.stock ? "IN_STOCK" : "OUT_OF_STOCK",
        },
    });
}
