import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 BORRADO TOTAL de catálogo previo (Reset absoluto)...');
  await prisma.priceHistory.deleteMany();
  await prisma.analyticsEvent.deleteMany();
  await prisma.affiliateConversion.deleteMany();
  await prisma.syncError.deleteMany();
  await prisma.syncRun.deleteMany();
  await prisma.rawOffer.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.store.deleteMany();

  const jsonPath = path.resolve(process.cwd(), 'apps/web/src/data/mockProducts.json');
  const fileContent = fs.readFileSync(jsonPath, 'utf-8');
  const productsData = JSON.parse(fileContent);

  console.log(`📦 Encontrados ${productsData.length} productos semilla en el JSON. Procesando...`);

  console.log('🔄 Extrayendo PACKSHOTS únicos de DummyJSON para sustituir las fotos lifestyle...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;
  
  const imagePool: Record<string, string[]> = {};
  for (const product of json.products) {
    // Basic mapping from our JSON categories to DummyJSON categories
    let mappedCat = 'mens-shoes';
    const c = product.category;
    if (!imagePool[c]) imagePool[c] = [];
    if (product.images && Array.isArray(product.images)) {
      imagePool[c].push(...product.images);
    } else {
      imagePool[c].push(product.thumbnail);
    }
  }

  // Helper to pick a packshot based on JSON category
  const getPackshot = (catName: string) => {
    let dummyCat = 'smartphones';
    const c = catName.toUpperCase();
    if (c.includes('ZAPATILLAS')) dummyCat = 'mens-shoes';
    else if (c.includes('ROPA')) dummyCat = 'mens-shirts';
    else if (c.includes('PERFUMES')) dummyCat = 'fragrances';
    else if (c.includes('ELECTRÓNICA')) dummyCat = 'smartphones';
    else if (c.includes('ACCESORIOS')) dummyCat = 'sunglasses';
    else if (c.includes('BELLEZA')) dummyCat = 'skincare';
    else if (c.includes('DEPORTES')) dummyCat = 'sports-accessories';
    else if (c.includes('HOGAR')) dummyCat = 'home-decoration';
    else if (c.includes('MOVILIDAD') || c.includes('MOTOR')) dummyCat = 'automotive';
    else if (c.includes('MASCOTAS')) dummyCat = 'groceries';

    const pool = imagePool[dummyCat] || imagePool['smartphones'];
    return pool.length > 0 ? pool.shift()! : 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg';
  };

  // Cache caches
  const categoryCache = new Map<string, string>();
  const storeCache = new Map<string, string>();

  // 1. Create or get categories (Root & Sub)
  for (const item of productsData) {
    const rootName = item.category.trim();
    const subName = item.subcategory.trim();
    const rootSlug = rootName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const subSlug = subName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    if (!categoryCache.has(rootSlug)) {
      const rootCat = await prisma.category.create({
        data: { name: rootName, slug: rootSlug }
      });
      categoryCache.set(rootSlug, rootCat.id);
    }

    if (!categoryCache.has(subSlug)) {
      const rootId = categoryCache.get(rootSlug)!;
      const subCat = await prisma.category.create({
        data: { name: subName, slug: subSlug, parentId: rootId }
      });
      categoryCache.set(subSlug, subCat.id);
    }
  }

  // 2. Insert Products, Brands, Stores, Variants and Offers
  for (const item of productsData) {
    // Brand
    const brandSlug = item.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const brand = await prisma.brand.upsert({
      where: { name: item.brand },
      update: {},
      create: { name: item.brand, slug: brandSlug }
    });

    // Subcategory ID is the direct parent of the product
    const subSlug = item.subcategory.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const categoryId = categoryCache.get(subSlug)!;

    // Create the Product
    const pSlug = item.id.toLowerCase();
    
    // Clean target audience to match our DB ENUM or string expectation
    let gender = item.target_audience;
    if (gender.includes('Hombre')) gender = 'Hombre';
    else if (gender.includes('Mujer')) gender = 'Mujer';
    else if (gender.includes('Bebé')) gender = 'Bebé';
    else if (gender.includes('Niñ')) gender = 'Niños';
    else if (gender.includes('Unisex') || gender.includes('Hogar')) gender = 'Unisex';
    // Mascotas specific: 'Perros y Gatos' -> 'Perros y Gatos' is fine.

    const product = await prisma.product.create({
      data: {
        name: item.name,
        slug: pSlug,
        model: item.name,
        brandId: brand.id,
        categoryId: categoryId,
        imageUrl: getPackshot(item.category),
        gender: gender,
      }
    });

    // Create Variants & Offers
    for (const variantData of item.variants) {
      const variant = await prisma.variant.create({
        data: {
          productId: product.id,
          sizeValue: variantData.size,
          colorNormalized: item.color,
        }
      });

      for (const storeData of variantData.stores) {
        // Find or create Store
        const storeSlug = storeData.storeName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (!storeCache.has(storeSlug)) {
          const newStore = await prisma.store.create({
            data: {
              name: storeData.storeName,
              slug: storeSlug,
              websiteUrl: `https://${storeSlug}.com`,
              isActive: true,
              isDemo: true, // IMPORTANT: Triggers Beta fallback
              trackingEnabled: true
            }
          });
          storeCache.set(storeSlug, newStore.id);
        }
        const storeId = storeCache.get(storeSlug)!;

        // Create Offer
        await prisma.offer.create({
          data: {
            variantId: variant.id,
            storeId: storeId,
            externalProductId: `${item.id}-${variantData.size}-${storeSlug}`,
            url: storeData.affiliateUrl,
            priceBase: storeData.price,
            priceTotal: storeData.price + (storeData.shipping || 0),
            stockStatus: storeData.inStock ? 'IN_STOCK' : 'OUT_OF_STOCK'
          }
        });
      }
    }
  }

  console.log('🚀 ¡JSON validado inyectado con éxito! Arquitectura 1:1, subcategorías y múltiples tiendas aplicadas.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
