import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding EVEN MORE products and brands...');

  const ropa = await prisma.category.findUnique({ where: { slug: 'ropa' } });
  const perfumes = await prisma.category.findUnique({ where: { slug: 'perfumes' } });
  const electronica = await prisma.category.findUnique({ where: { slug: 'electronica' } });
  
  if (!ropa || !perfumes || !electronica) {
    console.log('Categories not found!');
    return;
  }

  // Create MORE Subcategories
  const pantalones = await prisma.category.upsert({
    where: { slug: 'pantalones' }, update: {}, create: { name: 'Pantalones', slug: 'pantalones', parentId: ropa.id }
  });
  const tablets = await prisma.category.upsert({
    where: { slug: 'tablets' }, update: {}, create: { name: 'Tablets', slug: 'tablets', parentId: electronica.id }
  });
  const ordenadores = await prisma.category.upsert({
    where: { slug: 'ordenadores' }, update: {}, create: { name: 'Ordenadores', slug: 'ordenadores', parentId: electronica.id }
  });

  const stores = await prisma.store.findMany();
  
  const brandSamsung = await prisma.brand.upsert({ where: { slug: 'samsung' }, update: {}, create: { name: 'Samsung', slug: 'samsung' }});
  const brandLenovo = await prisma.brand.upsert({ where: { slug: 'lenovo' }, update: {}, create: { name: 'Lenovo', slug: 'lenovo' }});
  const brandArmani = await prisma.brand.upsert({ where: { slug: 'armani' }, update: {}, create: { name: 'Giorgio Armani', slug: 'armani' }});
  const brandLevis = await prisma.brand.upsert({ where: { slug: 'levis' }, update: {}, create: { name: 'Levi\'s', slug: 'levis' }});

  const newProducts = [
    {
      categoryId: ordenadores.id,
      brandId: brandLenovo.id,
      name: 'Lenovo ThinkPad X1 Carbon',
      slug: 'lenovo-thinkpad-x1',
      model: 'ThinkPad',
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
      variants: ['i7 16GB', 'i7 32GB']
    },
    {
      categoryId: tablets.id,
      brandId: brandSamsung.id,
      name: 'Samsung Galaxy Tab S9',
      slug: 'samsung-galaxy-tab-s9',
      model: 'Galaxy Tab',
      imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      variants: ['128GB', '256GB']
    },
    {
      categoryId: perfumes.id,
      brandId: brandArmani.id,
      name: 'Acqua Di Gio Profumo',
      slug: 'acqua-di-gio',
      model: 'Acqua Di Gio',
      imageUrl: 'https://images.unsplash.com/photo-1595532587847-f5bc81a28189?w=800&q=80',
      variants: ['75ml', '125ml']
    },
    {
      categoryId: pantalones.id,
      brandId: brandLevis.id,
      name: 'Levi\'s 501 Original Fit',
      slug: 'levis-501',
      model: '501',
      imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      variants: ['30', '32', '34']
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
              colorNormalized: 'Standard',
              offers: {
                create: {
                  storeId: stores[0].id,
                  externalProductId: `ext-${p.slug}-${i}`,
                  url: `https://example.com/buy/${p.slug}`,
                  priceBase: Math.floor(Math.random() * 500) + 50,
                  priceTotal: Math.floor(Math.random() * 500) + 55,
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

  console.log('✅ Done seeding more products v2');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
