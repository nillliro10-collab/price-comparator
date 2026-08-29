import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EXACT_PRODUCTS = [
  // --- APPLE ---
  {
    categorySlug: 'moviles',
    brandSlug: 'apple',
    name: 'iPhone 15 Pro Max',
    model: 'iPhone 15 Pro Max',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    variants: ['256GB', '512GB', '1TB'],
    basePrice: 1469
  },
  {
    categorySlug: 'moviles',
    brandSlug: 'apple',
    name: 'iPhone 13',
    model: 'iPhone 13',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    variants: ['128GB', '256GB'],
    basePrice: 739
  },
  {
    categorySlug: 'audio',
    brandSlug: 'apple',
    name: 'AirPods Max',
    model: 'AirPods Max',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=1200&hei=1190&fmt=jpeg&qlt=95&.v=1604021221000',
    variants: ['Plata', 'Gris Espacial'],
    basePrice: 579
  },
  {
    categorySlug: 'wearables',
    brandSlug: 'apple',
    name: 'Apple Watch Ultra 2',
    model: 'Watch Ultra 2',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-titanium-ocean-blue-nc-select_VW_34FR+watch-49-titanium-ultra2_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=png-alpha&.v=1693268800537',
    variants: ['49mm'],
    basePrice: 899
  },
  {
    categorySlug: 'ordenadores',
    brandSlug: 'apple',
    name: 'MacBook Air M2',
    model: 'MacBook Air',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1653084303665',
    variants: ['256GB', '512GB'],
    basePrice: 1299
  },

  // --- NIKE ---
  {
    categorySlug: 'zapatillas',
    brandSlug: 'nike',
    name: 'Nike Air Force 1 \'07',
    model: 'Air Force 1',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-WgH8Vl.png',
    variants: ['40', '41', '42', '43'],
    basePrice: 119
  },
  {
    categorySlug: 'zapatillas',
    brandSlug: 'nike',
    name: 'Nike Air Max 90',
    model: 'Air Max 90',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02d539dc-71df-4b95-a228-c17245bd8f1f/air-max-90-zapatillas-6Mnt8C.png',
    variants: ['41', '42', '44'],
    basePrice: 159
  },
  {
    categorySlug: 'zapatillas',
    brandSlug: 'nike',
    name: 'Nike Dunk Low Retro',
    model: 'Dunk Low',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ffcc979-913a-4dd2-83de-a8e5fc8eeeb0/dunk-low-retro-zapatillas-w5z5c3.png',
    variants: ['40', '42.5', '44.5'],
    basePrice: 119
  },

  // --- PERFUMES ---
  {
    categorySlug: 'perfumes',
    brandSlug: 'dior',
    name: 'Dior Sauvage Eau de Parfum',
    model: 'Sauvage',
    imageUrl: 'https://image.sephora.com/is/image/sephora/3348901250146-1',
    variants: ['60ml', '100ml', '200ml'],
    basePrice: 115
  },
  {
    categorySlug: 'perfumes',
    brandSlug: 'hugo-boss',
    name: 'Boss Bottled Eau de Parfum',
    model: 'Boss Bottled',
    imageUrl: 'https://image.sephora.com/is/image/sephora/3614229828511-1',
    variants: ['50ml', '100ml', '200ml'],
    basePrice: 95
  },

  // --- ROPA ---
  {
    categorySlug: 'polos',
    brandSlug: 'ralph-lauren',
    name: 'Polo Ralph Lauren Bear Slim Fit',
    model: 'Polo Bear',
    imageUrl: 'https://www.ralphlauren.es/on/demandware.static/-/Sites-masterCatalog_RalphLauren/default/dwaf3c75ab/images/large/710853310001_lifestyle.jpg',
    variants: ['S', 'M', 'L', 'XL'],
    basePrice: 149
  },
  {
    categorySlug: 'pantalones',
    brandSlug: 'levis',
    name: 'Levi\'s 501 Original Fit Jeans',
    model: '501',
    imageUrl: 'https://m.media-amazon.com/images/I/61b7Lh81sKL._AC_UX569_.jpg',
    variants: ['30W', '32W', '34W'],
    basePrice: 110
  }
];

async function main() {
  console.log('🧹 Limpiando todo el catálogo de pruebas anterior...');
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});
  console.log('✅ Catálogo limpio.');

  console.log('✨ Inyectando catálogo perfecto para presentación a inversores...');
  
  // Asegurar las marcas extra
  await prisma.brand.upsert({ where: { slug: 'dior' }, update: {}, create: { name: 'Dior', slug: 'dior' }});
  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  let count = 0;
  for (const p of EXACT_PRODUCTS) {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Obtener category ID y Brand ID
    const cat = await prisma.category.findUnique({ where: { slug: p.categorySlug }});
    const brand = await prisma.brand.findUnique({ where: { slug: p.brandSlug }});

    if (!cat || !brand) {
      console.log(`⚠️ Saltando ${p.name}, falta categoría o marca.`);
      continue;
    }

    await prisma.product.create({
      data: {
        name: p.name,
        slug,
        model: p.model,
        brandId: brand.id,
        categoryId: cat.id,
        imageUrl: p.imageUrl,
        variants: {
          create: p.variants.map((sizeValue: string, idx: number) => ({
            sizeValue,
            colorNormalized: 'Standard',
            offers: {
              create: {
                storeId,
                externalProductId: `ext-${slug}-${idx}`,
                url: `https://example.com/buy/${slug}`,
                priceBase: p.basePrice,
                priceTotal: p.basePrice + 5,
                status: 'ACTIVE'
              }
            }
          }))
        }
      }
    });
    count++;
    console.log(`✅ Creado: ${p.name}`);
  }

  console.log(`🎉 Inyección Perfecta Completada: ${count} productos listos para la demo.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
