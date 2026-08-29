import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding categories...');

  const categories = [
    { name: 'Zapatillas', slug: 'zapatillas' },
    { name: 'Ropa', slug: 'ropa' },
    { name: 'Perfumes', slug: 'perfumes' },
    { name: 'Electrónica', slug: 'electronica' }
  ];

  const createdCats: Record<string, string> = {};

  for (const cat of categories) {
    const existing = await prisma.category.findUnique({ where: { slug: cat.slug } });
    if (!existing) {
      const created = await prisma.category.create({ data: cat });
      createdCats[cat.slug] = created.id;
      console.log(`Created category: ${cat.name}`);
    } else {
      createdCats[cat.slug] = existing.id;
      console.log(`Category already exists: ${cat.name}`);
    }
  }

  // Assign existing products to 'Zapatillas'
  const zapatillasId = createdCats['zapatillas'];
  if (zapatillasId) {
    const result = await prisma.product.updateMany({
      where: { categoryId: null },
      data: { categoryId: zapatillasId }
    });
    console.log(`Updated ${result.count} products to category Zapatillas`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
