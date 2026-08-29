import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { products: true }
      }
    }
  });

  for (const cat of categories) {
    console.log(`Category: ${cat.name} (slug: ${cat.slug}) - Products: ${cat._count.products}`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
