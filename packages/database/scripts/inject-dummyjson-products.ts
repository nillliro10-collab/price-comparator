import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATEGORY_MAP: Record<string, string> = {
  'smartphones': 'ELECTRÓNICA',
  'laptops': 'ELECTRÓNICA',
  'fragrances': 'PERFUMES',
  'skincare': 'BELLEZA Y SALUD',
  'home-decoration': 'HOGAR',
  'furniture': 'HOGAR',
  'lighting': 'HOGAR',
  'tops': 'ROPA',
  'womens-dresses': 'ROPA',
  'mens-shirts': 'ROPA',
  'womens-shoes': 'ZAPATILLAS',
  'mens-shoes': 'ZAPATILLAS',
  'mens-watches': 'ACCESORIOS',
  'womens-watches': 'ACCESORIOS',
  'womens-bags': 'ACCESORIOS',
  'womens-jewellery': 'ACCESORIOS',
  'sunglasses': 'ACCESORIOS',
  'automotive': 'MOVILIDAD Y BATERÍAS',
  'motorcycle': 'MOVILIDAD Y BATERÍAS',
  'sports-accessories': 'DEPORTES',
  // 'groceries': skip
};

async function main() {
  console.log('🔄 Extrayendo productos reales de DummyJSON...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;

  // Get existing root categories
  const categories = await prisma.category.findMany({ where: { parentId: null } });
  const catMap = new Map<string, string>();
  for (const c of categories) {
    catMap.set(c.name.toUpperCase(), c.id);
  }

  // Get existing stores
  const stores = await prisma.store.findMany();
  
  let addedCount = 0;

  for (const item of json.products) {
    const targetCatName = CATEGORY_MAP[item.category];
    if (!targetCatName) continue; // Skip unmapped categories like groceries

    const categoryId = catMap.get(targetCatName);
    if (!categoryId) {
      console.log(`⚠️ Categoría destino no encontrada en BD: ${targetCatName}`);
      continue;
    }

    // Brand
    const brandName = item.brand || 'Genérico';
    const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const brand = await prisma.brand.upsert({
      where: { name: brandName },
      update: {},
      create: { name: brandName, slug: brandSlug }
    });

    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + item.id;
    
    // Choose gender based on dummyjson category
    let gender = 'Unisex';
    if (item.category.includes('mens')) gender = 'Hombre';
    if (item.category.includes('womens')) gender = 'Mujer';

    // Insert Product using DummyJSON's real names and real images!
    const product = await prisma.product.create({
      data: {
        name: item.title,
        slug: slug,
        model: item.title,
        brandId: brand.id,
        categoryId: categoryId,
        imageUrl: item.thumbnail,
        description: item.description,
        gender: gender
      }
    });

    // 1 Variant
    const variant = await prisma.variant.create({
      data: {
        productId: product.id,
        sizeValue: 'Estándar',
        colorNormalized: 'Standard'
      }
    });

    // 2-3 Stores
    const numStores = Math.floor(Math.random() * 2) + 2;
    const shuffledStores = [...stores].sort(() => Math.random() - 0.5).slice(0, numStores);
    
    for (const store of shuffledStores) {
      const storePrice = item.price + (Math.random() * (item.price * 0.1) - (item.price * 0.05));
      await prisma.offer.create({
        data: {
          variantId: variant.id,
          storeId: store.id,
          externalProductId: `${slug}-${store.slug}`,
          url: `https://example.com/buy/${slug}`,
          priceBase: Math.round(storePrice * 100) / 100,
          priceTotal: Math.round(storePrice * 100) / 100,
          stockStatus: 'IN_STOCK'
        }
      });
    }
    
    addedCount++;
  }

  console.log(`✅ ¡Completado! Se añadieron ${addedCount} productos reales de DummyJSON al catálogo respetando las categorías actuales.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
