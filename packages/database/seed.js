const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  console.log('--- SEEDING REALISTIC DATA ---');
  
  // Clear previous products, variants and offers to avoid mess
  await prisma.matchingDecision.deleteMany({});
  await prisma.affiliateConversion.deleteMany({});
  await prisma.analyticsEvent.deleteMany({});
  await prisma.syncError.deleteMany({});
  await prisma.syncRun.deleteMany({});
  await prisma.rawOffer.deleteMany({});
  await prisma.priceHistory.deleteMany({});
  await prisma.offer.deleteMany({});
  await prisma.variant.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.brand.deleteMany({});
  await prisma.store.deleteMany({});

  console.log('Cleared DB.');

  // Categories
  const catSneakers = await prisma.category.create({
    data: { name: 'Zapatillas', slug: 'zapatillas' }
  });

  // Brands
  const nike = await prisma.brand.create({ data: { name: 'Nike', slug: 'nike' } });
  const adidas = await prisma.brand.create({ data: { name: 'Adidas', slug: 'adidas' } });

  // Stores
  const footLocker = await prisma.store.create({
    data: {
      name: 'Foot Locker',
      slug: 'foot-locker',
      websiteUrl: 'https://footlocker.es',
      shopScore: 90,
      isAffiliate: true,
      isActive: true,
      isDemo: false,
      affiliateNetwork: 'AWIN',
      programId: '1111',
      trackingEnabled: true
    }
  });

  const zalando = await prisma.store.create({
    data: {
      name: 'Zalando',
      slug: 'zalando',
      websiteUrl: 'https://zalando.es',
      shopScore: 95,
      isAffiliate: true,
      isActive: true,
      isDemo: false,
      affiliateNetwork: 'ZAN',
      programId: '2222',
      trackingEnabled: true
    }
  });

  // Products
  const af1 = await prisma.product.create({
    data: {
      brandId: nike.id,
      categoryId: catSneakers.id,
      name: 'Nike Air Force 1 \'07',
      model: 'Air Force 1',
      slug: 'nike-air-force-1-07',
      description: 'La mítica zapatilla que revolucionó el baloncesto en 1982.',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-WgH8Vl.png'
    }
  });

  const samba = await prisma.product.create({
    data: {
      brandId: adidas.id,
      categoryId: catSneakers.id,
      name: 'Adidas Samba OG',
      model: 'Samba',
      slug: 'adidas-samba-og',
      description: 'El clásico atemporal de las calles.',
      imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg'
    }
  });

  console.log('Created Products.');

  // Variants & Offers for AF1
  for (const size of ['41', '42', '43', '44']) {
    const variant = await prisma.variant.create({
      data: {
        productId: af1.id,
        sizeRaw: size,
        sizeValue: size,
        sizeSystem: 'EU',
        colorRaw: 'White',
        colorNormalized: 'White',
        gtin: `00881234567${size}`
      }
    });

    // FootLocker Offer
    await prisma.offer.create({
      data: {
        variantId: variant.id,
        storeId: footLocker.id,
        externalProductId: `FL-AF1-WHT`,
        externalVariantId: `FL-AF1-WHT-${size}`,
        url: 'https://footlocker.es/af1',
        priceBase: 119.99,
        priceShipping: 0,
        priceTotal: 119.99,
        status: 'ACTIVE',
        stockStatus: 'IN_STOCK'
      }
    });

    // Zalando Offer (Slightly more expensive)
    await prisma.offer.create({
      data: {
        variantId: variant.id,
        storeId: zalando.id,
        externalProductId: `ZAL-AF1-WHT`,
        externalVariantId: `ZAL-AF1-WHT-${size}`,
        url: 'https://zalando.es/af1',
        priceBase: 125.00,
        priceShipping: 3.99,
        priceTotal: 128.99,
        status: 'ACTIVE',
        stockStatus: 'IN_STOCK'
      }
    });
  }

  // Variants & Offers for Samba
  for (const size of ['41', '42', '43', '44']) {
    const variant = await prisma.variant.create({
      data: {
        productId: samba.id,
        sizeRaw: size,
        sizeValue: size,
        sizeSystem: 'EU',
        colorRaw: 'Black',
        colorNormalized: 'Black',
        gtin: `00887654321${size}`
      }
    });

    // FootLocker Offer
    await prisma.offer.create({
      data: {
        variantId: variant.id,
        storeId: footLocker.id,
        externalProductId: `FL-SAM-BLK`,
        externalVariantId: `FL-SAM-BLK-${size}`,
        url: 'https://footlocker.es/samba',
        priceBase: 120.00,
        priceShipping: 5.00,
        priceTotal: 125.00,
        status: 'ACTIVE',
        stockStatus: 'IN_STOCK'
      }
    });

    // Zalando Offer (Cheaper)
    await prisma.offer.create({
      data: {
        variantId: variant.id,
        storeId: zalando.id,
        externalProductId: `ZAL-SAM-BLK`,
        externalVariantId: `ZAL-SAM-BLK-${size}`,
        url: 'https://zalando.es/samba',
        priceBase: 115.00,
        priceShipping: 0.00,
        priceTotal: 115.00,
        status: 'ACTIVE',
        stockStatus: 'IN_STOCK'
      }
    });
  }

  console.log('✅ Seeding completed! Database is ready for Smoke Tests.');
}

seed().catch(console.error).finally(() => prisma.$disconnect());
