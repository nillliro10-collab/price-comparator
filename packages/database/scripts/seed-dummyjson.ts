import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Limpiando catálogo actual...');
  await prisma.priceHistory.deleteMany({});
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});

  console.log('🌍 Descargando mega-catálogo desde DummyJSON (194 productos reales)...');
  const res = await fetch('https://dummyjson.com/products?limit=0');
  const data = (await res.json()) as any;
  const products = data.products;

  const stores = await prisma.store.findMany();
  let storeId = stores.length > 0 ? stores[0].id : '';

  // Asegurar que Amazon existe para tener otra tienda
  const amazon = await prisma.store.upsert({
    where: { slug: 'amazon' },
    update: {},
    create: {
      name: 'Amazon',
      slug: 'amazon',
      websiteUrl: 'https://amazon.es',
      isActive: true,
      trackingEnabled: false,
    }
  });

  const categoryMapping: Record<string, string> = {
    'smartphones': 'moviles',
    'laptops': 'ordenadores',
    'fragrances': 'perfumes',
    'mens-shoes': 'zapatillas',
    'womens-shoes': 'zapatillas',
    'mens-shirts': 'ropa',
    'womens-dresses': 'ropa',
    'tops': 'ropa',
    'tablets': 'tablets',
    'mobile-accessories': 'accesorios',
    'mens-watches': 'accesorios',
    'womens-watches': 'accesorios',
    'sunglasses': 'accesorios',
    'womens-bags': 'accesorios',
    'womens-jewellery': 'accesorios',
    'beauty': 'belleza',
    'skin-care': 'belleza',
    'sports-accessories': 'deportes'
  };

  // Crear categorías principales si no existen
  const catRopa = await prisma.category.upsert({ where: { slug: 'ropa' }, update: {}, create: { name: 'Ropa', slug: 'ropa' }});
  const catZapatillas = await prisma.category.upsert({ where: { slug: 'zapatillas' }, update: {}, create: { name: 'Zapatillas', slug: 'zapatillas' }});
  const catPerfumes = await prisma.category.upsert({ where: { slug: 'perfumes' }, update: {}, create: { name: 'Perfumes', slug: 'perfumes' }});
  const catElec = await prisma.category.upsert({ where: { slug: 'electronica' }, update: {}, create: { name: 'Electrónica', slug: 'electronica' }});
  const catAcc = await prisma.category.upsert({ where: { slug: 'accesorios' }, update: {}, create: { name: 'Accesorios', slug: 'accesorios' }});
  const catBelleza = await prisma.category.upsert({ where: { slug: 'belleza' }, update: {}, create: { name: 'Belleza y Salud', slug: 'belleza' }});
  const catDeportes = await prisma.category.upsert({ where: { slug: 'deportes' }, update: {}, create: { name: 'Deportes', slug: 'deportes' }});

  // Subcategorías
  const subCats: Record<string, string> = {
    'moviles': (await prisma.category.upsert({ where: { slug: 'moviles' }, update: {}, create: { name: 'Móviles', slug: 'moviles', parentId: catElec.id }})).id,
    'ordenadores': (await prisma.category.upsert({ where: { slug: 'ordenadores' }, update: {}, create: { name: 'Ordenadores', slug: 'ordenadores', parentId: catElec.id }})).id,
    'tablets': (await prisma.category.upsert({ where: { slug: 'tablets' }, update: {}, create: { name: 'Tablets', slug: 'tablets', parentId: catElec.id }})).id,
    'ropa': catRopa.id,
    'zapatillas': catZapatillas.id,
    'perfumes': catPerfumes.id,
    'accesorios': catAcc.id,
    'belleza': catBelleza.id,
    'deportes': catDeportes.id,
  };

  let count = 0;
  for (const p of products) {
    const targetCatSlug = categoryMapping[p.category];
    if (!targetCatSlug) continue; // Ignorar groceries, furniture, etc.

    const catId = subCats[targetCatSlug];
    const brandName = p.brand || 'Generic';
    const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const brand = await prisma.brand.upsert({
      where: { slug: brandSlug },
      update: {},
      create: { name: brandName, slug: brandSlug }
    });

    const productSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + p.id;
    
    // Determinar variantes (falsas pero realistas según categoría)
    let variants = ['Estándar'];
    if (targetCatSlug === 'zapatillas') variants = ['40', '41', '42', '43'];
    else if (targetCatSlug === 'ropa') variants = ['S', 'M', 'L', 'XL'];
    else if (targetCatSlug === 'moviles' || targetCatSlug === 'tablets') variants = ['128GB', '256GB'];
    else if (targetCatSlug === 'perfumes') variants = ['50ml', '100ml'];

    await prisma.product.create({
      data: {
        name: p.title,
        slug: productSlug,
        model: p.title,
        description: p.description,
        brandId: brand.id,
        categoryId: catId,
        imageUrl: p.thumbnail, // <-- REAL IMAGE FROM DUMMYJSON
        variants: {
          create: variants.map((v, idx) => {
            const price = p.price;
            return {
              sizeValue: v,
              colorNormalized: 'Standard',
              offers: {
                create: [
                  {
                    storeId: storeId,
                    externalProductId: `ext-${productSlug}-${idx}`,
                    externalVariantId: `var-${idx}`,
                    url: `https://example.com/buy/${productSlug}`,
                    priceBase: price,
                    priceTotal: price,
                    stockStatus: 'IN_STOCK'
                  },
                  // Añadir segunda oferta a veces para que haya competición
                  ...(Math.random() > 0.5 ? [{
                    storeId: amazon.id,
                    externalProductId: `amz-${productSlug}-${idx}`,
                    externalVariantId: `var-${idx}`,
                    url: `https://amazon.es/dp/${productSlug}`,
                    priceBase: price + (Math.random() * 10 - 5),
                    priceTotal: price + (Math.random() * 10 - 5),
                    stockStatus: 'IN_STOCK'
                  }] : [])
                ]
              }
            };
          })
        }
      }
    });
    count++;
  }

  console.log(`✅ ¡Éxito! Importados ${count} productos reales de DummyJSON con fotos de catálogo impecables.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
