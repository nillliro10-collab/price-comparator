import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Limpiando catálogo actual...');
  await prisma.priceHistory.deleteMany({});
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});

  console.log('🌍 Descargando mega-catálogo desde DummyJSON...');
  const res = await fetch('https://dummyjson.com/products?limit=0');
  const data = (await res.json()) as any;
  const products = data.products;

  const stores = await prisma.store.findMany();
  let storeId = stores.length > 0 ? stores[0].id : '';

  const amazon = await prisma.store.upsert({
    where: { slug: 'amazon' },
    update: {},
    create: { name: 'Amazon', slug: 'amazon', websiteUrl: 'https://amazon.es', isActive: true, trackingEnabled: false }
  });
  
  const fnac = await prisma.store.upsert({
    where: { slug: 'fnac' },
    update: {},
    create: { name: 'Fnac', slug: 'fnac', websiteUrl: 'https://fnac.es', isActive: true, trackingEnabled: false }
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
    'sports-accessories': 'deportes',
    'furniture': 'hogar',
    'home-decoration': 'hogar',
    'kitchen-accessories': 'hogar',
    'groceries': 'supermercado',
    'motorcycle': 'motor',
    'vehicle': 'motor'
  };

  // Crear categorías principales
  const rootCats: Record<string, string> = {
    'ropa': (await prisma.category.upsert({ where: { slug: 'ropa' }, update: {}, create: { name: 'Ropa', slug: 'ropa' }})).id,
    'zapatillas': (await prisma.category.upsert({ where: { slug: 'zapatillas' }, update: {}, create: { name: 'Zapatillas', slug: 'zapatillas' }})).id,
    'perfumes': (await prisma.category.upsert({ where: { slug: 'perfumes' }, update: {}, create: { name: 'Perfumes', slug: 'perfumes' }})).id,
    'electronica': (await prisma.category.upsert({ where: { slug: 'electronica' }, update: {}, create: { name: 'Electrónica', slug: 'electronica' }})).id,
    'accesorios': (await prisma.category.upsert({ where: { slug: 'accesorios' }, update: {}, create: { name: 'Accesorios', slug: 'accesorios' }})).id,
    'belleza': (await prisma.category.upsert({ where: { slug: 'belleza' }, update: {}, create: { name: 'Belleza y Salud', slug: 'belleza' }})).id,
    'deportes': (await prisma.category.upsert({ where: { slug: 'deportes' }, update: {}, create: { name: 'Deportes', slug: 'deportes' }})).id,
    'hogar': (await prisma.category.upsert({ where: { slug: 'hogar' }, update: {}, create: { name: 'Hogar', slug: 'hogar' }})).id,
    'supermercado': (await prisma.category.upsert({ where: { slug: 'supermercado' }, update: {}, create: { name: 'Supermercado', slug: 'supermercado' }})).id,
    'motor': (await prisma.category.upsert({ where: { slug: 'motor' }, update: {}, create: { name: 'Motor', slug: 'motor' }})).id,
  };

  // Subcategorías
  const subCats: Record<string, string> = {
    'moviles': (await prisma.category.upsert({ where: { slug: 'moviles' }, update: {}, create: { name: 'Móviles', slug: 'moviles', parentId: rootCats['electronica'] }})).id,
    'ordenadores': (await prisma.category.upsert({ where: { slug: 'ordenadores' }, update: {}, create: { name: 'Ordenadores', slug: 'ordenadores', parentId: rootCats['electronica'] }})).id,
    'tablets': (await prisma.category.upsert({ where: { slug: 'tablets' }, update: {}, create: { name: 'Tablets', slug: 'tablets', parentId: rootCats['electronica'] }})).id,
    'ropa': rootCats['ropa'],
    'zapatillas': rootCats['zapatillas'],
    'perfumes': rootCats['perfumes'],
    'accesorios': rootCats['accesorios'],
    'belleza': rootCats['belleza'],
    'deportes': rootCats['deportes'],
    'hogar': rootCats['hogar'],
    'supermercado': rootCats['supermercado'],
    'motor': rootCats['motor'],
  };

  const variations = [
    { suffix: '', priceMult: 1 },
    { suffix: ' Pro', priceMult: 1.25 },
    { suffix: ' Ultra', priceMult: 1.5 },
    { suffix: ' Lite', priceMult: 0.8 },
    { suffix: ' Plus', priceMult: 1.1 }
  ];

  let count = 0;
  for (const p of products) {
    const targetCatSlug = categoryMapping[p.category];
    if (!targetCatSlug) continue; 

    const catId = subCats[targetCatSlug];
    const brandName = p.brand || 'Generic';
    const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const brand = await prisma.brand.upsert({
      where: { slug: brandSlug },
      update: {},
      create: { name: brandName, slug: brandSlug }
    });

    for (const variation of variations) {
      const pName = p.title + variation.suffix;
      const productSlug = pName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + p.id;
      
      let variants = ['Estándar'];
      if (targetCatSlug === 'zapatillas') variants = ['40', '41', '42', '43'];
      else if (targetCatSlug === 'ropa') variants = ['S', 'M', 'L', 'XL'];
      else if (targetCatSlug === 'moviles' || targetCatSlug === 'tablets') variants = ['128GB', '256GB'];
      else if (targetCatSlug === 'perfumes') variants = ['50ml', '100ml'];

      await prisma.product.create({
        data: {
          name: pName,
          slug: productSlug,
          model: pName,
          description: p.description,
          brandId: brand.id,
          categoryId: catId,
          imageUrl: p.thumbnail, 
          variants: {
            create: variants.map((v, idx) => {
              const basePrice = Math.max(1, p.price * variation.priceMult);
              
              // 3 posibles tiendas con precios aleatorizados compitiendo
              const offersToCreate = [];
              
              // Tienda 1
              offersToCreate.push({
                storeId: storeId,
                externalProductId: `ext-${productSlug}-${idx}`,
                externalVariantId: `var-${idx}`,
                url: `https://example.com/buy/${productSlug}`,
                priceBase: basePrice,
                priceTotal: basePrice,
                stockStatus: 'IN_STOCK'
              });
              
              // Tienda 2
              if (Math.random() > 0.3) {
                const amazonPrice = basePrice + (Math.random() * 20 - 10);
                offersToCreate.push({
                  storeId: amazon.id,
                  externalProductId: `amz-${productSlug}-${idx}`,
                  externalVariantId: `var-${idx}`,
                  url: `https://amazon.es/dp/${productSlug}`,
                  priceBase: amazonPrice,
                  priceTotal: amazonPrice,
                  stockStatus: 'IN_STOCK'
                });
              }
              
              // Tienda 3
              if (Math.random() > 0.6) {
                const fnacPrice = basePrice + (Math.random() * 15 - 5);
                offersToCreate.push({
                  storeId: fnac.id,
                  externalProductId: `fnac-${productSlug}-${idx}`,
                  externalVariantId: `var-${idx}`,
                  url: `https://fnac.es/dp/${productSlug}`,
                  priceBase: fnacPrice,
                  priceTotal: fnacPrice,
                  stockStatus: 'IN_STOCK'
                });
              }

              return {
                sizeValue: v,
                colorNormalized: 'Standard',
                offers: {
                  create: offersToCreate
                }
              };
            })
          }
        }
      });
      count++;
    }
  }

  console.log(`✅ ¡Éxito! Base de datos reventada: Importados ${count} productos variados basados en los datos reales de DummyJSON.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
