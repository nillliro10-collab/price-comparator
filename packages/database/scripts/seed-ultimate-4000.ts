import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATALOG_STRUCTURE = [
  // --- APPLE ---
  {
    brand: 'Apple',
    cat: 'moviles',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    lines: ['iPhone 15', 'iPhone 14', 'iPhone 13'],
    modifiers: ['Pro Max', 'Pro', 'Plus', 'Estándar'],
    variants: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Negro', 'Blanco', 'Titanio', 'Azul'],
    basePrice: 900
  },
  {
    brand: 'Apple',
    cat: 'accesorios',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
    lines: ['AirPods', 'Apple Watch', 'Funda MagSafe iPhone', 'Cartera MagSafe'],
    modifiers: ['Pro', 'Max', 'Series 9', 'Ultra 2', 'Silicone', 'Piel'],
    variants: ['Estándar'],
    colors: ['Blanco', 'Medianoche', 'Rojo', 'Azul'],
    basePrice: 150
  },
  {
    brand: 'Apple',
    cat: 'ordenadores',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
    lines: ['MacBook Pro 14"', 'MacBook Pro 16"', 'MacBook Air 13"', 'MacBook Air 15"', 'iMac 24"', 'Mac Studio'],
    modifiers: ['M3', 'M3 Pro', 'M3 Max', 'M2'],
    variants: ['256GB', '512GB', '1TB', '2TB'],
    colors: ['Plata', 'Gris Espacial', 'Negro Espacial'],
    basePrice: 1200
  },
  
  // --- SAMSUNG ---
  {
    brand: 'Samsung',
    cat: 'moviles',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/es/2401/gallery/es-galaxy-s24-s928-sm-s928bztqeub-539573336?$650_519_PNG$',
    lines: ['Galaxy S24', 'Galaxy S23', 'Galaxy S22', 'Galaxy Z Fold5', 'Galaxy Z Flip5', 'Galaxy A54', 'Galaxy A34'],
    modifiers: ['Ultra', 'Plus', 'Estándar', 'FE'],
    variants: ['128GB', '256GB', '512GB'],
    colors: ['Phantom Black', 'Cream', 'Green', 'Lavender'],
    basePrice: 800
  },
  {
    brand: 'Samsung',
    cat: 'accesorios',
    img: 'https://images.samsung.com/is/image/samsung/p6pim/es/sm-r510nzaaeub/gallery/es-galaxy-buds2-pro-r510-sm-r510nzaaeub-533192271?$650_519_PNG$',
    lines: ['Galaxy Watch6', 'Galaxy Watch5', 'Galaxy Buds2', 'Galaxy Buds FE', 'Funda Silicona', 'Cargador 45W'],
    modifiers: ['Classic', 'Pro', 'Estándar'],
    variants: ['40mm', '44mm', '47mm', 'Estándar'],
    colors: ['Negro', 'Plata', 'Grafito'],
    basePrice: 100
  },

  // --- XIAOMI ---
  {
    brand: 'Xiaomi',
    cat: 'moviles',
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1708869851.32599657.png',
    lines: ['Xiaomi 14', 'Xiaomi 13', 'Redmi Note 13', 'Redmi Note 12', 'POCO F5', 'POCO X6'],
    modifiers: ['Ultra', 'Pro', 'Plus', '5G'],
    variants: ['128GB', '256GB', '512GB'],
    colors: ['Negro', 'Azul', 'Blanco'],
    basePrice: 400
  },
  {
    brand: 'Xiaomi',
    cat: 'accesorios',
    img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1660636279.79975762.png',
    lines: ['Xiaomi Smart Band 8', 'Xiaomi Watch 2', 'Redmi Buds 5', 'Xiaomi Power Bank'],
    modifiers: ['Pro', 'Active', 'Estándar'],
    variants: ['Estándar'],
    colors: ['Negro', 'Blanco'],
    basePrice: 40
  },

  // --- NIKE ---
  {
    brand: 'Nike',
    cat: 'zapatillas',
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ffcc979-913a-4dd2-83de-a8e5fc8eeeb0/dunk-low-retro-zapatillas-w5z5c3.png',
    lines: ['Air Force 1', 'Air Max 90', 'Air Max 95', 'Air Max 97', 'Dunk Low', 'Jordan 1', 'Pegasus 40', 'Blazer Mid'],
    modifiers: ['\'07', 'Retro', 'High', 'Mid', 'GORE-TEX', 'Premium'],
    variants: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    colors: ['Triple White', 'Triple Black', 'Panda', 'Chicago', 'University Blue'],
    basePrice: 120
  },
  {
    brand: 'Nike',
    cat: 'ropa',
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdfb4556-9769-4e78-becc-ea0da7d59196/sportswear-club-sudadera-con-capucha-de-tejido-fleece-2wRj8W.png',
    lines: ['Sudadera Sportswear', 'Pantalón Chándal', 'Camiseta Dri-FIT', 'Chaqueta Windrunner', 'Mallas Pro', 'Calcetines Everyday'],
    modifiers: ['Club Fleece', 'Tech Fleece', 'Essential'],
    variants: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Gris', 'Azul Marino', 'Blanco'],
    basePrice: 45
  },

  // --- ADIDAS ---
  {
    brand: 'Adidas',
    cat: 'zapatillas',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatilla_Samba_OG_Blanco_B75806_01_standard.jpg',
    lines: ['Samba', 'Gazelle', 'Campus 00s', 'Stan Smith', 'Superstar', 'Ultraboost', 'NMD_R1', 'Forum Low'],
    modifiers: ['OG', 'Indoor', 'Light', 'Vegan'],
    variants: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'],
    colors: ['Cloud White', 'Core Black', 'Navy', 'Red'],
    basePrice: 110
  },

  // --- ZARA ---
  {
    brand: 'Zara',
    cat: 'ropa',
    img: 'https://static.zara.net/photos///2024/I/0/2/p/6861/420/800/2/w/824/6861420800_1_1_1.jpg?ts=1723538804921',
    lines: ['Chaqueta Efecto Piel', 'Abrigo Lana Manteco', 'Pantalón Chino', 'Vaquero Skinny', 'Camisa Popelín', 'Vestido Midi', 'Jersey Punto'],
    modifiers: ['Básico', 'Oversize', 'Slim', 'Cropped'],
    variants: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Beige', 'Azul Claro', 'Khaki'],
    basePrice: 39
  },

  // --- POLO RALPH LAUREN ---
  {
    brand: 'Ralph Lauren',
    cat: 'ropa',
    img: 'https://www.ralphlauren.es/on/demandware.static/-/Sites-masterCatalog_RalphLauren/default/dwaf3c75ab/images/large/710853310001_lifestyle.jpg',
    lines: ['Polo Custom Fit', 'Polo Slim Fit', 'Camisa Oxford', 'Jersey Cuello Pico', 'Chaqueta Harrington', 'Sudadera Polo Bear'],
    modifiers: ['Algodón', 'Lino', 'Cable-Knit'],
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Azul Marino', 'Blanco', 'Rojo', 'Verde', 'Negro'],
    basePrice: 120
  }
];

async function main() {
  console.log('🧹 Limpiando base de datos...');
  await prisma.priceHistory.deleteMany({});
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  let globalCount = 0;

  for (const block of CATALOG_STRUCTURE) {
    const cat = await prisma.category.findUnique({ where: { slug: block.cat }});
    const brandSlug = block.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const brand = await prisma.brand.upsert({
      where: { slug: brandSlug },
      update: {},
      create: { name: block.brand, slug: brandSlug }
    });

    if (!cat) continue;

    for (const line of block.lines) {
      for (const mod of block.modifiers) {
        for (const color of block.colors) {
          // No crear todas las combinaciones imposibles (ej. Z Flip Ultra). Hacemos un pequeño filtro.
          if (line.includes('Z') && mod === 'Ultra') continue;
          if (line.includes('AirPods') && mod === 'Series 9') continue;
          if (line.includes('Watch') && (mod === 'Pro' || mod === 'Max')) continue;
          
          const pName = `${line} ${mod} ${color}`.trim();
          const slug = pName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          
          // Randomize gender for clothes/shoes
          const genders = ['Hombre', 'Mujer', 'UNISEX', 'Niño', 'Niña', 'Bebé'];
          const gender = (block.cat === 'ropa' || block.cat === 'zapatillas') 
            ? genders[Math.floor(Math.random() * genders.length)] 
            : 'UNISEX';

          await prisma.product.create({
            data: {
              name: pName,
              slug: slug,
              model: line,
              brandId: brand.id,
              categoryId: cat.id,
              imageUrl: block.img,
              gender: gender,
              variants: {
                create: block.variants.map((v, idx) => {
                  const priceVariability = (Math.random() * 0.4) + 0.8; // 80% to 120% of base price
                  const finalPrice = Math.round(block.basePrice * priceVariability);
                  
                  return {
                    sizeValue: v,
                    colorNormalized: color,
                    offers: {
                      create: {
                        storeId,
                        externalProductId: `ext-${slug}-${idx}`,
                        externalVariantId: `var-${idx}`,
                        url: `https://example.com/buy/${slug}`,
                        priceBase: finalPrice,
                        priceTotal: finalPrice,
                        stockStatus: 'IN_STOCK'
                      }
                    }
                  }
                })
              }
            }
          });
          globalCount++;
        }
      }
    }
  }

  console.log(`🚀 INYECCIÓN MASIVA COMPLETADA. Creados ${globalCount} productos únicos (modelos exactos con colores). Generando ~${globalCount * 4} ofertas.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
