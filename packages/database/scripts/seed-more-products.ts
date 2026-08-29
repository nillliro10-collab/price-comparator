import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding more products for new categories...');

  const ropa = await prisma.category.findUnique({ where: { slug: 'ropa' } });
  const perfumes = await prisma.category.findUnique({ where: { slug: 'perfumes' } });
  const electronica = await prisma.category.findUnique({ where: { slug: 'electronica' } });
  
  if (!ropa || !perfumes || !electronica) {
    console.log('Categories not found!');
    return;
  }

  // Create Subcategories
  const polos = await prisma.category.upsert({
    where: { slug: 'polos' },
    update: {},
    create: { name: 'Polos', slug: 'polos', parentId: ropa.id }
  });
  
  const moviles = await prisma.category.upsert({
    where: { slug: 'moviles' },
    update: {},
    create: { name: 'Móviles', slug: 'moviles', parentId: electronica.id }
  });

  const stores = await prisma.store.findMany();
  const brandNike = await prisma.brand.findUnique({ where: { slug: 'nike' } });
  const brandApple = await prisma.brand.upsert({
    where: { slug: 'apple' },
    update: {},
    create: { name: 'Apple', slug: 'apple' }
  });
  const brandDior = await prisma.brand.upsert({
    where: { slug: 'dior' },
    update: {},
    create: { name: 'Dior', slug: 'dior' }
  });

  const newProducts = [
    {
      categoryId: polos.id,
      brandId: brandNike!.id,
      name: 'Nike Sportswear Polo',
      slug: 'nike-sportswear-polo',
      model: 'Sportswear',
      imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      variants: ['M', 'L']
    },
    {
      categoryId: perfumes.id,
      brandId: brandDior.id,
      name: 'Dior Sauvage Eau de Parfum',
      slug: 'dior-sauvage',
      model: 'Sauvage',
      imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
      variants: ['50ml', '100ml']
    },
    {
      categoryId: moviles.id,
      brandId: brandApple.id,
      name: 'iPhone 15 Pro Max',
      slug: 'iphone-15-pro-max',
      model: '15 Pro',
      imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&q=80',
      variants: ['128GB', '256GB']
    }
  ];

  for (const p of newProducts) {
    const existing = await prisma.product.findUnique({ where: { slug: p.slug } });
    if (!existing) {
      const prod = await prisma.product.create({
        data: {
          name: p.name,
          slug: p.slug,
          model: p.model,
          brandId: p.brandId,
          categoryId: p.categoryId,
          imageUrl: p.imageUrl,
          variants: {
            create: p.variants.map((v, i) => ({
              sizeValue: v,
              colorNormalized: i === 0 ? 'Black' : 'White',
              offers: {
                create: {
                  storeId: stores[0].id,
                  externalProductId: `ext-${p.slug}-${i}`,
                  url: `https://example.com/buy/${p.slug}`,
                  priceBase: Math.floor(Math.random() * 200) + 50,
                  priceTotal: Math.floor(Math.random() * 200) + 55,
                  status: 'ACTIVE'
                }
              }
            }))
          }
        }
      });
      console.log(`Created dummy product: ${prod.name}`);
    }
  }

  console.log('✅ Done seeding more products');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
