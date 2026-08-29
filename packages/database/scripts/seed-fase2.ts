import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const STORE_NAMES = ['Zalando', 'Foot Locker', 'JD Sports', 'Snipes'];
const BRANDS = ['Nike', 'Adidas', 'New Balance', 'Puma'];
const COLORS = ['White', 'Black', 'Red', 'Blue', 'Green'];
const SIZES = ['39', '40', '41', '42', '43', '44'];

const SHOE_MODELS = [
  'Air Force 1', 'Air Max 90', 'Dunk Low', 'Jordan 1', 'Cortez', 'Blazer',
  'Samba', 'Gazelle', 'Stan Smith', 'Superstar', 'Ultraboost', 'NMD',
  '574', '327', '990', '2002R', '550', '9060',
  'Suede', 'RS-X', 'Cali', 'Rider', 'Slipstream', 'Mayze'
];

async function main() {
  console.log('🌱 Iniciando Seed Fase 2 (Operabilidad Real)...');

  // 1. Crear Tiendas (3-5 tiendas)
  const stores = [];
  for (const name of STORE_NAMES) {
    const store = await prisma.store.upsert({
      where: { slug: name.toLowerCase().replace(/\s+/g, '-') },
      update: { isActive: true },
      create: {
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        websiteUrl: `https://www.${name.toLowerCase().replace(/\s+/g, '')}.com`,
        isActive: true,
        isAffiliate: true,
        affiliateNetwork: 'AWIN',
        deeplinkTemplate: `https://www.awin1.com/cread.php?awinmid=1234&awinaffid=TEST&ued={url}`
      }
    });
    stores.push(store);
  }
  console.log(`✅ ${stores.length} tiendas configuradas.`);

  // 2. Crear Marcas
  const dbBrands = [];
  for (const name of BRANDS) {
    const b = await prisma.brand.upsert({
      where: { slug: name.toLowerCase() },
      update: {},
      create: { name, slug: name.toLowerCase() }
    });
    dbBrands.push(b);
  }

  // 3. Crear 50 Productos y Variantes (Talla + Color)
  console.log('⏳ Generando 50 productos con variantes...');
  let productCount = 0;
  
  for (let i = 0; i < 50; i++) {
    const brand = dbBrands[i % dbBrands.length];
    const model = SHOE_MODELS[i % SHOE_MODELS.length];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const name = `${brand.name} ${model} ${color}`;
    const slug = name.toLowerCase().replace(/\s+/g, '-') + '-' + i;

    const product = await prisma.product.upsert({
      where: { slug },
      update: {},
      create: {
        name,
        slug,
        model,
        brandId: brand.id,
        imageUrl: `https://via.placeholder.com/800?text=${encodeURIComponent(name)}`
      }
    });

    // Variantes y Ofertas
    for (const size of SIZES) {
      // No todos los productos tienen todas las tallas
      if (Math.random() > 0.7) continue; 

      const variant = await prisma.variant.create({
        data: {
          productId: product.id,
          sizeValue: size,
          sizeSystem: 'EU',
          colorNormalized: color
        }
      });

      // Crear ofertas en tiendas aleatorias
      for (const store of stores) {
        if (Math.random() > 0.5) {
          const priceBase = 80 + Math.floor(Math.random() * 50);
          await prisma.offer.create({
            data: {
              storeId: store.id,
              variantId: variant.id,
              externalProductId: `EXT-${store.id}-${product.id}`,
              externalVariantId: `EXT-VAR-${store.id}-${variant.id}`,
              url: `${store.websiteUrl}/p/${slug}?size=${size}`,
              priceBase,
              priceShipping: 4.99,
              priceTotal: priceBase + 4.99,
              status: 'ACTIVE',
              stockStatus: 'IN_STOCK'
            }
          });
        }
      }
    }
    productCount++;
  }
  console.log(`✅ ${productCount} productos generados con variantes y ofertas.`);

  // 4. Generar Errores de Importación (Debug Visible)
  console.log('⏳ Generando errores de importación de prueba...');
  const storeWithError = stores[0];
  const run = await prisma.syncRun.create({
    data: {
      storeId: storeWithError.id,
      sourceType: 'AWIN_CSV',
      status: 'PARTIAL_SUCCESS',
      itemsReceived: 1000,
      itemsProcessed: 980,
      errorCount: 20
    }
  });

  await prisma.syncError.create({
    data: {
      syncRunId: run.id,
      storeId: storeWithError.id,
      errorCode: 'MISSING_PRICE',
      message: 'La oferta no tiene precio base válido',
      rawPayload: '{"id": "123", "name": "Zapato Roto"}'
    }
  });
  
  await prisma.syncError.create({
    data: {
      syncRunId: run.id,
      storeId: storeWithError.id,
      errorCode: 'INVALID_URL',
      message: 'URL de afiliado mal formada',
      rawPayload: '{"url": "htp:/mal.com"}'
    }
  });

  console.log('✅ Seed completado.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
