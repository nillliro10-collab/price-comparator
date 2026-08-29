import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const REAL_PRODUCTS = [
  // --- APPLE ---
  { cat: 'moviles', brand: 'apple', name: 'iPhone 15 Pro Max', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708', variants: ['256GB', '512GB'], basePrice: 1469 },
  { cat: 'moviles', brand: 'apple', name: 'iPhone 15 Pro', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311', variants: ['128GB', '256GB'], basePrice: 1219 },
  { cat: 'moviles', brand: 'apple', name: 'iPhone 14', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027942322', variants: ['128GB'], basePrice: 859 },
  { cat: 'audio', brand: 'apple', name: 'AirPods Pro (2.ª gen)', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985', variants: ['Estándar'], basePrice: 279 },
  { cat: 'ordenadores', brand: 'apple', name: 'MacBook Pro 16" M3', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290', variants: ['512GB', '1TB'], basePrice: 3049 },

  // --- SAMSUNG ---
  { cat: 'moviles', brand: 'samsung', name: 'Galaxy S24 Ultra', img: 'https://images.samsung.com/is/image/samsung/p6pim/es/2401/gallery/es-galaxy-s24-s928-sm-s928bztqeub-539573336?$650_519_PNG$', variants: ['256GB', '512GB'], basePrice: 1479 },
  { cat: 'moviles', brand: 'samsung', name: 'Galaxy Z Fold5', img: 'https://images.samsung.com/is/image/samsung/p6pim/es/sm-f946bzkbeub/gallery/es-galaxy-z-fold5-f946-sm-f946bzkbeub-537409277?$650_519_PNG$', variants: ['256GB', '512GB'], basePrice: 1909 },
  { cat: 'moviles', brand: 'samsung', name: 'Galaxy Z Flip5', img: 'https://images.samsung.com/is/image/samsung/p6pim/es/sm-f731bzaaeub/gallery/es-galaxy-z-flip5-f731-sm-f731bzaaeub-537407519?$650_519_PNG$', variants: ['256GB'], basePrice: 1209 },

  // --- XIAOMI ---
  { cat: 'moviles', brand: 'xiaomi', name: 'Xiaomi 14 Ultra', img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1708869851.32599657.png', variants: ['512GB'], basePrice: 1499 },
  { cat: 'moviles', brand: 'xiaomi', name: 'Redmi Note 13 Pro', img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1704975510.87114660.png', variants: ['128GB'], basePrice: 399 },

  // --- NIKE ---
  { cat: 'zapatillas', brand: 'nike', name: 'Nike Air Max Plus', img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ffcc979-913a-4dd2-83de-a8e5fc8eeeb0/dunk-low-retro-zapatillas-w5z5c3.png', variants: ['40', '41', '42'], basePrice: 189, gender: 'Hombre' },
  { cat: 'zapatillas', brand: 'nike', name: 'Nike Zoom Fly 5', img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a395fc0f-0744-4861-aff0-c78bceafebcc/zoom-fly-5-zapatillas-de-running-carretera-6bQhT5.png', variants: ['38', '39'], basePrice: 169, gender: 'Mujer' },
  { cat: 'ropa', brand: 'nike', name: 'Sudadera Nike Sportswear Club', img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdfb4556-9769-4e78-becc-ea0da7d59196/sportswear-club-sudadera-con-capucha-de-tejido-fleece-2wRj8W.png', variants: ['S', 'M', 'L'], basePrice: 65, gender: 'Hombre' },
  
  // --- ADIDAS ---
  { cat: 'zapatillas', brand: 'adidas', name: 'Adidas Samba OG', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatilla_Samba_OG_Blanco_B75806_01_standard.jpg', variants: ['40', '42'], basePrice: 120, gender: 'UNISEX' },
  { cat: 'zapatillas', brand: 'adidas', name: 'Adidas Gazelle', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29535bfd336a4dc08c84af08013f9907_9366/Zapatilla_Gazelle_Indoor_Azul_HQ8717_01_standard.jpg', variants: ['39', '41'], basePrice: 120, gender: 'UNISEX' },
  
  // --- PUMA ---
  { cat: 'zapatillas', brand: 'puma', name: 'Puma RS-X', img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390025/01/sv01/fnd/EEA/fmt/png/RS-X-Efekt-PRM-Sneakers', variants: ['41', '42'], basePrice: 110, gender: 'Hombre' },

  // --- ZARA ---
  { cat: 'ropa', brand: 'zara', name: 'Cazadora Bomber Efecto Piel', img: 'https://static.zara.net/photos///2024/V/0/1/p/8281/315/800/2/w/824/8281315800_1_1_1.jpg?ts=1704283838275', variants: ['M', 'L'], basePrice: 59, gender: 'Mujer' },
  { cat: 'ropa', brand: 'zara', name: 'Pantalón Chino Skinny', img: 'https://static.zara.net/photos///2024/I/0/2/p/6861/420/800/2/w/824/6861420800_1_1_1.jpg?ts=1723538804921', variants: ['40', '42'], basePrice: 29, gender: 'Hombre' },

  // --- POLO RALPH LAUREN ---
  { cat: 'ropa', brand: 'ralph-lauren', name: 'Polo Ralph Lauren Bear Slim Fit', img: 'https://www.ralphlauren.es/on/demandware.static/-/Sites-masterCatalog_RalphLauren/default/dwaf3c75ab/images/large/710853310001_lifestyle.jpg', variants: ['S', 'M', 'L'], basePrice: 149, gender: 'Hombre' },
  { cat: 'ropa', brand: 'ralph-lauren', name: 'Camisa Oxford', img: 'https://www.ralphlauren.es/on/demandware.static/-/Sites-masterCatalog_RalphLauren/default/dw9e13b28b/images/large/710542056001_lifestyle.jpg', variants: ['M', 'L'], basePrice: 139, gender: 'Hombre' }
];

async function main() {
  console.log('🧹 Limpiando base de datos anterior...');
  await prisma.priceHistory.deleteMany({});
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});

  console.log('✨ Inyectando catálogo Premium Realista...');
  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  let count = 0;
  for (const p of REAL_PRODUCTS) {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Obtener category ID y Brand ID
    const cat = await prisma.category.findUnique({ where: { slug: p.cat }});
    const brandSlug = p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const brand = await prisma.brand.upsert({
      where: { slug: brandSlug },
      update: {},
      create: { name: p.brand.toUpperCase(), slug: brandSlug }
    });

    if (!cat) continue;

    await prisma.product.create({
      data: {
        name: p.name,
        slug,
        model: p.name,
        brandId: brand.id,
        categoryId: cat.id,
        imageUrl: p.img,
        gender: p.gender || 'UNISEX',
        variants: {
          create: p.variants.map((sizeValue: string, idx: number) => ({
            sizeValue,
            colorNormalized: 'Standard',
            offers: {
              create: {
                storeId,
                externalProductId: `ext-${slug}-${idx}`,
                externalVariantId: `var-${idx}`,
                url: `https://example.com/buy/${slug}`,
                priceBase: p.basePrice,
                priceTotal: p.basePrice + 5,
                stockStatus: 'IN_STOCK'
              }
            }
          }))
        }
      }
    });
    count++;
  }

  console.log(`🎉 Inyección Completada: ${count} productos TOP marcas reales listos.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
