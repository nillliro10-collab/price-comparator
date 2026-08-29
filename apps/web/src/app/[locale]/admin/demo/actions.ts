'use server';

import { prisma } from '@price-comparator/database/src/index';

export async function runImportPipeline() {
  const brand = await prisma.brand.upsert({
    where: { slug: 'nike' },
    update: {},
    create: { name: 'Nike', slug: 'nike' }
  });

  const product = await prisma.product.upsert({
    where: { slug: 'nike-air-force-1-07' },
    update: {},
    create: {
      brandId: brand.id,
      name: "Nike Air Force 1 '07",
      model: "Air Force 1 '07",
      slug: 'nike-air-force-1-07',
      imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
    }
  });

  const variant42 = await prisma.variant.upsert({
    where: {
      productId_sizeValue_sizeSystem_colorNormalized: {
        productId: product.id,
        sizeValue: '42',
        sizeSystem: 'EU',
        colorNormalized: 'White'
      }
    },
    update: {},
    create: {
      productId: product.id,
      sizeValue: '42',
      sizeSystem: 'EU',
      colorNormalized: 'White',
      gtin: '00885178652414',
    }
  });

  const stores = [
    { name: 'Demo Foot Locker', slug: 'demo-foot-locker', shopScore: 90 },
    { name: 'Demo JD Sports', slug: 'demo-jd-sports', shopScore: 85 },
    { name: 'Demo Footshop', slug: 'demo-footshop', shopScore: 80 }
  ];

  for (const s of stores) {
    await prisma.store.upsert({
      where: { slug: s.slug },
      update: { isDemo: true },
      create: { name: s.name, slug: s.slug, websiteUrl: '#', isDemo: true, integrationType: 'CUSTOM' }
    });
  }

  const s1 = await prisma.store.findUnique({ where: { slug: 'demo-foot-locker' } });
  const s2 = await prisma.store.findUnique({ where: { slug: 'demo-jd-sports' } });
  const s3 = await prisma.store.findUnique({ where: { slug: 'demo-footshop' } });

  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: s1!.id, externalProductId: 'fl-1', externalVariantId: '' } },
    update: { priceBase: 109.99, priceShipping: null, priceTotal: null },
    create: { variantId: variant42.id, storeId: s1!.id, externalProductId: 'fl-1', url: '#', priceBase: 109.99, priceShipping: null, priceTotal: null }
  });

  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: s2!.id, externalProductId: 'jd-1', externalVariantId: '' } },
    update: { priceBase: 114.99, priceShipping: 0, priceTotal: 114.99 },
    create: { variantId: variant42.id, storeId: s2!.id, externalProductId: 'jd-1', url: '#', priceBase: 114.99, priceShipping: 0, priceTotal: 114.99 }
  });

  await prisma.offer.upsert({
    where: { storeId_externalProductId_externalVariantId: { storeId: s3!.id, externalProductId: 'fs-1', externalVariantId: '' } },
    update: { priceBase: 119.99, priceShipping: 5, priceTotal: 124.99 },
    create: { variantId: variant42.id, storeId: s3!.id, externalProductId: 'fs-1', url: '#', priceBase: 119.99, priceShipping: 5, priceTotal: 124.99 }
  });

  return { success: true };
}
