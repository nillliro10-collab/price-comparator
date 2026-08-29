import { prisma } from './packages/database/src/index';

async function main() {
  console.log('Seeding CTO Test...');
  
  // Create stores
  const storeA = await prisma.store.upsert({ where: { slug: 'tienda-a' }, update: { isDemo: false }, create: { name: 'Tienda A', slug: 'tienda-a', websiteUrl: '#', integrationType: 'CUSTOM', isDemo: false } });
  const storeB = await prisma.store.upsert({ where: { slug: 'tienda-b' }, update: { isDemo: false }, create: { name: 'Tienda B', slug: 'tienda-b', websiteUrl: '#', integrationType: 'CUSTOM', isDemo: false } });
  const storeC = await prisma.store.upsert({ where: { slug: 'tienda-c' }, update: { isDemo: false }, create: { name: 'Tienda C', slug: 'tienda-c', websiteUrl: '#', integrationType: 'CUSTOM', isDemo: false } });

  const brand = await prisma.brand.upsert({ where: { slug: 'nike' }, update: {}, create: { name: 'Nike', slug: 'nike' } });

  const product = await prisma.product.upsert({
    where: { slug: 'nike-air-force-1-cto' },
    update: {},
    create: {
      brandId: brand.id,
      name: "Nike Air Force 1",
      slug: 'nike-air-force-1-cto',
      model: "Air Force 1",
      imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
    }
  });

  // Variants
  const v42 = await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '42', sizeSystem: 'EU', colorNormalized: 'White' } },
    update: {}, create: { productId: product.id, sizeValue: '42', sizeSystem: 'EU', colorNormalized: 'White' }
  });
  const v43 = await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '43', sizeSystem: 'EU', colorNormalized: 'White' } },
    update: {}, create: { productId: product.id, sizeValue: '43', sizeSystem: 'EU', colorNormalized: 'White' }
  });
  const v44 = await prisma.variant.upsert({
    where: { productId_sizeValue_sizeSystem_colorNormalized: { productId: product.id, sizeValue: '44', sizeSystem: 'EU', colorNormalized: 'White' } },
    update: {}, create: { productId: product.id, sizeValue: '44', sizeSystem: 'EU', colorNormalized: 'White' }
  });

  // Talla 42 Offers
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeA.id, externalProductId: 'A-42', externalVariantId: '' } },
    update: { priceBase: 109, priceShipping: 0, priceTotal: 109, stockStatus: 'IN_STOCK' },
    create: { variantId: v42.id, storeId: storeA.id, externalProductId: 'A-42', externalVariantId: '', url: '#', priceBase: 109, priceShipping: 0, priceTotal: 109, stockStatus: 'IN_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeB.id, externalProductId: 'B-42', externalVariantId: '' } },
    update: { priceBase: 114, priceShipping: 0, priceTotal: 114, stockStatus: 'IN_STOCK' },
    create: { variantId: v42.id, storeId: storeB.id, externalProductId: 'B-42', externalVariantId: '', url: '#', priceBase: 114, priceShipping: 0, priceTotal: 114, stockStatus: 'IN_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeC.id, externalProductId: 'C-42', externalVariantId: '' } },
    update: { priceBase: 121, priceShipping: 0, priceTotal: 121, stockStatus: 'IN_STOCK' },
    create: { variantId: v42.id, storeId: storeC.id, externalProductId: 'C-42', externalVariantId: '', url: '#', priceBase: 121, priceShipping: 0, priceTotal: 121, stockStatus: 'IN_STOCK' }
  });

  // Talla 43 Offers
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeA.id, externalProductId: 'A-43', externalVariantId: '' } },
    update: { priceBase: 112, priceShipping: 0, priceTotal: 112, stockStatus: 'IN_STOCK' },
    create: { variantId: v43.id, storeId: storeA.id, externalProductId: 'A-43', externalVariantId: '', url: '#', priceBase: 112, priceShipping: 0, priceTotal: 112, stockStatus: 'IN_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeB.id, externalProductId: 'B-43', externalVariantId: '' } },
    update: { priceBase: 108, priceShipping: 0, priceTotal: 108, stockStatus: 'IN_STOCK' },
    create: { variantId: v43.id, storeId: storeB.id, externalProductId: 'B-43', externalVariantId: '', url: '#', priceBase: 108, priceShipping: 0, priceTotal: 108, stockStatus: 'IN_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeC.id, externalProductId: 'C-43', externalVariantId: '' } },
    update: { priceBase: 120, priceShipping: 5, priceTotal: 125, stockStatus: 'OUT_OF_STOCK' },
    create: { variantId: v43.id, storeId: storeC.id, externalProductId: 'C-43', externalVariantId: '', url: '#', priceBase: 120, priceShipping: 5, priceTotal: 125, stockStatus: 'OUT_OF_STOCK' }
  });

  // Talla 44 Offers
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeA.id, externalProductId: 'A-44', externalVariantId: '' } },
    update: { priceBase: 110, priceShipping: 0, priceTotal: 110, stockStatus: 'OUT_OF_STOCK' },
    create: { variantId: v44.id, storeId: storeA.id, externalProductId: 'A-44', externalVariantId: '', url: '#', priceBase: 110, priceShipping: 0, priceTotal: 110, stockStatus: 'OUT_OF_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeB.id, externalProductId: 'B-44', externalVariantId: '' } },
    update: { priceBase: 116, priceShipping: 0, priceTotal: 116, stockStatus: 'IN_STOCK' },
    create: { variantId: v44.id, storeId: storeB.id, externalProductId: 'B-44', externalVariantId: '', url: '#', priceBase: 116, priceShipping: 0, priceTotal: 116, stockStatus: 'IN_STOCK' }
  });
  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: storeC.id, externalProductId: 'C-44', externalVariantId: '' } },
    update: { priceBase: 114, priceShipping: 5, priceTotal: 119, stockStatus: 'IN_STOCK' },
    create: { variantId: v44.id, storeId: storeC.id, externalProductId: 'C-44', externalVariantId: '', url: '#', priceBase: 114, priceShipping: 5, priceTotal: 119, stockStatus: 'IN_STOCK' }
  });

  console.log('Seeded successfully!');
}

main();
