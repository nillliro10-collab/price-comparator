import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔗 Preparando integración AWIN (Simulator Mode)...');

  // 1. Ensure Foot Locker Store Exists and has Affiliate config
  const store = await prisma.store.upsert({
    where: { slug: 'footlocker' },
    update: {
      isAffiliate: true,
      affiliateNetwork: 'AWIN',
      programId: '11306',
      trackingEnabled: true,
      deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      isActive: true
    },
    create: {
      name: 'Foot Locker',
      slug: 'footlocker',
      websiteUrl: 'https://www.footlocker.es',
      isAffiliate: true,
      affiliateNetwork: 'AWIN',
      programId: '11306',
      trackingEnabled: true,
      deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      isActive: true
    }
  });

  console.log(`✅ Tienda configurada: ${store.name}`);
  console.log(`🔗 AWIN Deeplink: ${store.deeplinkTemplate}`);

  // 2. Fetch variants for Air Force 1
  const af1 = await prisma.product.findUnique({
    where: { slug: 'nike-air-force-1-07' },
    include: { variants: true }
  });

  if (!af1) {
    console.error('No se encontró el Air Force 1');
    return;
  }

  // 3. Insert mock AWIN Offers at 99€
  console.log('\n🤖 Simulando Ingestión de Datos de AWIN...');
  let i = 0;
  for (const variant of af1.variants) {
    await prisma.offer.upsert({
      where: { storeId_externalProductId_externalVariantId: { storeId: store.id, externalProductId: 'awin-af1', externalVariantId: variant.id } },
      update: {
        priceBase: 99,
        priceTotal: 99,
        url: 'https://www.footlocker.es/nike-air-force-1',
        stockStatus: 'IN_STOCK'
      },
      create: {
        storeId: store.id,
        variantId: variant.id,
        externalProductId: 'awin-af1',
        externalVariantId: variant.id,
        url: 'https://www.footlocker.es/nike-air-force-1',
        priceBase: 99,
        priceTotal: 99,
        stockStatus: 'IN_STOCK'
      }
    });
    i++;
  }

  // Do the same for Dior Sauvage
  const dior = await prisma.product.findUnique({
    where: { slug: 'dior-sauvage-eau-de-parfum' },
    include: { variants: true }
  });
  
  if (dior) {
    const sephora = await prisma.store.upsert({
      where: { slug: 'sephora' },
      update: {
        isAffiliate: true,
        affiliateNetwork: 'AWIN',
        programId: '9999',
        trackingEnabled: true,
        deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      },
      create: {
        name: 'Sephora',
        slug: 'sephora',
        websiteUrl: 'https://www.sephora.es',
        isAffiliate: true,
        affiliateNetwork: 'AWIN',
        programId: '9999',
        trackingEnabled: true,
        deeplinkTemplate: 'https://www.awin1.com/cread.php?awinmid={programId}&awinaffid=DEMO_12345&ued={encodedUrl}',
      }
    });
    
    for (const variant of dior.variants) {
      await prisma.offer.upsert({
        where: { storeId_externalProductId_externalVariantId: { storeId: sephora.id, externalProductId: 'awin-dior', externalVariantId: variant.id } },
        update: {
          priceBase: 89,
          priceTotal: 89,
          url: 'https://www.sephora.es/dior-sauvage',
          stockStatus: 'IN_STOCK'
        },
        create: {
          storeId: sephora.id,
          variantId: variant.id,
          externalProductId: 'awin-dior',
          externalVariantId: variant.id,
          url: 'https://www.sephora.es/dior-sauvage',
          priceBase: 89,
          priceTotal: 89,
          stockStatus: 'IN_STOCK'
        }
      });
    }
  }

  console.log(`✅ ¡Éxito! 2 productos actualizados a precios más bajos vía 'AWIN'.`);
  console.log(`¡Prueba a entrar al Air Force 1 o al Dior Sauvage y haz clic en Comprar para ver la redirección AWIN!`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
