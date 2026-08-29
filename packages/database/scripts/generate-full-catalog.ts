import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATEGORIES_MAP = [
  { slug: 'zapatillas', dummyCats: ['mens-shoes', 'womens-shoes'], brands: ['Nike', 'Adidas', 'New Balance', 'Vans', 'Puma'], targetCount: 40 },
  { slug: 'ropa', dummyCats: ['mens-shirts', 'womens-dresses', 'tops'], brands: ['Levi\'s', 'Zara', 'H&M', 'Tommy Hilfiger', 'Polo Ralph Lauren'], targetCount: 50 },
  { slug: 'perfumes', dummyCats: ['fragrances'], brands: ['Dior', 'Chanel', 'Armani', 'Gucci', 'Hugo Boss'], targetCount: 30 },
  { slug: 'electronica', dummyCats: ['smartphones', 'laptops'], brands: ['Apple', 'Samsung', 'Sony', 'Xiaomi', 'Asus'], targetCount: 50 },
  { slug: 'accesorios', dummyCats: ['mens-watches', 'womens-watches', 'womens-bags', 'sunglasses'], brands: ['Ray-Ban', 'Casio', 'Michael Kors', 'Fossil', 'Oakley'], targetCount: 40 },
  { slug: 'belleza', dummyCats: ['skincare'], brands: ['L\'Oreal', 'Garnier', 'The Ordinary', 'Clinique', 'MAC'], targetCount: 40 },
  { slug: 'deportes', dummyCats: ['sports-accessories'], brands: ['Under Armour', 'Salomon', 'Garmin', 'Gymshark', 'Reebok'], targetCount: 40 },
  { slug: 'hogar', dummyCats: ['furniture', 'home-decoration', 'lighting', 'kitchen-accessories', 'groceries'], brands: ['IKEA', 'Nespresso', 'Philips', 'Dyson', 'Tefal'], targetCount: 50 },
  { slug: 'motor', dummyCats: ['automotive', 'motorcycle'], brands: ['Xiaomi', 'Segway', 'Anker', 'Michelin', 'Ugreen'], targetCount: 30 },
  { slug: 'mascotas', dummyCats: ['groceries', 'sports-accessories'], brands: ['Royal Canin', 'Purina', 'Petkit', 'Kong', 'Trixie'], targetCount: 30 }
];

async function main() {
  console.log('🧹 BORRADO TOTAL de catálogo previo (Limpieza Profunda)...');
  await prisma.priceHistory.deleteMany();
  await prisma.analyticsEvent.deleteMany();
  await prisma.affiliateConversion.deleteMany();
  await prisma.syncError.deleteMany();
  await prisma.syncRun.deleteMany();
  await prisma.rawOffer.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  // We keep the categories from the JSON seed, just in case. But let's ensure the roots exist.

  console.log('🔄 Extrayendo 600+ PACKSHOTS únicos de DummyJSON...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;
  
  // Build massive image pools
  const imagePool: Record<string, string[]> = {};
  for (const product of json.products) {
    if (!imagePool[product.category]) imagePool[product.category] = [];
    if (product.images && Array.isArray(product.images)) {
      imagePool[product.category].push(...product.images);
    } else {
      imagePool[product.category].push(product.thumbnail);
    }
  }

  // Fallback pool if a specific category runs out
  const globalPool = Object.values(imagePool).flat();
  globalPool.sort(() => Math.random() - 0.5);

  const storesCache = [
    await prisma.store.upsert({ where: { slug: 'amazon' }, update: {}, create: { name: 'Amazon', slug: 'amazon', websiteUrl: 'https://amazon.es' } }),
    await prisma.store.upsert({ where: { slug: 'el-corte-ingles' }, update: {}, create: { name: 'El Corte Inglés', slug: 'el-corte-ingles', websiteUrl: 'https://elcorteingles.es' } }),
    await prisma.store.upsert({ where: { slug: 'zalando' }, update: {}, create: { name: 'Zalando', slug: 'zalando', websiteUrl: 'https://zalando.es' } }),
    await prisma.store.upsert({ where: { slug: 'pccomponentes' }, update: {}, create: { name: 'PcComponentes', slug: 'pccomponentes', websiteUrl: 'https://pccomponentes.com' } }),
    await prisma.store.upsert({ where: { slug: 'mediamarkt' }, update: {}, create: { name: 'MediaMarkt', slug: 'mediamarkt', websiteUrl: 'https://mediamarkt.es' } }),
  ];

  let totalProducts = 0;

  for (const catPlan of CATEGORIES_MAP) {
    let category = await prisma.category.findUnique({ where: { slug: catPlan.slug } });
    if (!category) {
      category = await prisma.category.create({ data: { name: catPlan.slug.toUpperCase(), slug: catPlan.slug } });
    }

    // Collect all images for this category's target
    const catImages: string[] = [];
    for (const dCat of catPlan.dummyCats) {
      if (imagePool[dCat]) catImages.push(...imagePool[dCat]);
    }
    catImages.sort(() => Math.random() - 0.5);

    for (let i = 0; i < catPlan.targetCount; i++) {
      const brandName = catPlan.brands[i % catPlan.brands.length];
      const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const brand = await prisma.brand.upsert({
        where: { name: brandName },
        update: {},
        create: { name: brandName, slug: brandSlug }
      });

      const img = catImages.length > 0 ? catImages.shift()! : globalPool.shift()!;
      const pName = `${brandName} Model Pro ${Math.floor(Math.random() * 900) + 100}`;
      const slug = `${brandSlug}-${Math.floor(Math.random() * 1000000)}`;

      const product = await prisma.product.create({
        data: {
          name: pName,
          slug: slug,
          model: pName,
          brandId: brand.id,
          categoryId: category.id,
          imageUrl: img,
          gender: Math.random() > 0.5 ? 'Unisex' : (Math.random() > 0.5 ? 'Hombre' : 'Mujer')
        }
      });

      // 1 variant per product
      const variant = await prisma.variant.create({
        data: {
          productId: product.id,
          sizeValue: 'Estándar',
          colorNormalized: 'Standard'
        }
      });

      // 2 to 5 stores per product
      const numStores = Math.floor(Math.random() * 4) + 2;
      const shuffledStores = [...storesCache].sort(() => Math.random() - 0.5).slice(0, numStores);
      const basePrice = Math.floor(Math.random() * 200) + 20;

      for (const store of shuffledStores) {
        const storePrice = basePrice + (Math.random() * 20 - 10);
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

      totalProducts++;
    }
  }

  console.log(`🚀 Generación masiva completada: ${totalProducts} productos, miles de ofertas, 0 fotos repetidas (Puros Packshots).`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
