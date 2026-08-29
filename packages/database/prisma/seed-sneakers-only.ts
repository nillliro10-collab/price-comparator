const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Borrando TODO el catálogo actual...');
  await prisma.matchingDecision.deleteMany();
  await prisma.rawOffer.deleteMany();
  await prisma.syncError.deleteMany();
  await prisma.syncRun.deleteMany();
  await prisma.analyticsEvent.deleteMany();
  await prisma.affiliateConversion.deleteMany();
  await prisma.priceHistory.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  console.log('✅ Base de datos limpia. Creando catálogo ultra-realista de zapatillas (MVP)...');

  // 1. Categoría única
  const catZapatillas = await prisma.category.create({
    data: { name: 'Zapatillas', slug: 'zapatillas' }
  });

  // 2. Marcas reales
  const nike = await prisma.brand.create({ data: { name: 'Nike', slug: 'nike' } });
  const adidas = await prisma.brand.create({ data: { name: 'Adidas', slug: 'adidas' } });
  const nb = await prisma.brand.create({ data: { name: 'New Balance', slug: 'new-balance' } });

  // 3. Tiendas simuladas (isDemo = true para que salte el Fallback)
  const stores = [];
  const storeNames = ['Zalando', 'Foot Locker', 'JD Sports', 'Nike Store'];
  for (const name of storeNames) {
    const slug = name.toLowerCase().replace(' ', '-');
    stores.push(await prisma.store.create({
      data: {
        name,
        slug,
        websiteUrl: `https://www.${slug}.com`,
        isActive: true,
        isDemo: true // MUY IMPORTANTE: para que el outbound lance el aviso de Beta
      }
    }));
  }

  // 4. Productos Reales (10 modelos top)
  const productsData = [
    { name: 'Nike Air Force 1 07', brandId: nike.id, slug: 'nike-air-force-1-07', img: '/images/sneakers/nike-air-force-1-07.png' },
    { name: 'Nike Dunk Low Retro', brandId: nike.id, slug: 'nike-dunk-low-retro', img: '/images/sneakers/nike-dunk-low-retro.png' },
    { name: 'Adidas Samba OG', brandId: adidas.id, slug: 'adidas-samba-og', img: '/images/sneakers/adidas-samba-og.jpg' },
    { name: 'New Balance 550', brandId: nb.id, slug: 'new-balance-550', img: '/images/sneakers/new-balance-550.jpg' },
    { name: 'New Balance 2002R', brandId: nb.id, slug: 'new-balance-2002r', img: '/images/sneakers/new-balance-2002r.jpg' }
  ];

  for (const p of productsData) {
    const product = await prisma.product.create({
      data: {
        name: p.name,
        model: p.name,
        slug: p.slug,
        categoryId: catZapatillas.id,
        brandId: p.brandId,
        gender: 'UNISEX',
        imageUrl: p.img,
        description: 'Una de las zapatillas más icónicas del mercado.'
      }
    });

    // Variantes (tallas 39, 40, 41)
    const sizes = ['39', '40', '41', '42', '43', '44'];
    
    for (const size of sizes) {
      const variant = await prisma.variant.create({
        data: {
          productId: product.id,
          sizeValue: size,
          sizeSystem: 'EU',
          colorNormalized: 'White/Black'
        }
      });

      // Ofertas en 2 tiendas al azar
      const shuffledStores = [...stores].sort(() => 0.5 - Math.random()).slice(0, 2);
      
      for (const store of shuffledStores) {
        const rawBasePrice = 80 + Math.random() * 40;
        const basePrice = Math.round(rawBasePrice * 100) / 100;
        const priceTotal = Math.round((basePrice + 4.99) * 100) / 100;
        await prisma.offer.create({
          data: {
            variantId: variant.id,
            storeId: store.id,
            externalProductId: `${product.slug}-${size}`,
            url: `https://www.example.com/${store.name.toLowerCase().replace(' ', '')}/${product.slug}`,
            priceBase: basePrice,
            priceTotal: priceTotal,
            priceShipping: 4.99,
            stockStatus: Math.random() > 0.1 ? 'IN_STOCK' : 'OUT_OF_STOCK',
            status: 'ACTIVE'
          }
        });
      }
    }
  }

  console.log('🚀 Catálogo real y limpio generado con éxito!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
