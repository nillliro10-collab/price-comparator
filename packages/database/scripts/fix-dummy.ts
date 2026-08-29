import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.updateMany({
    where: { imageUrl: { contains: 'dummyjson' } },
    data: { imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800' }
  });
  console.log('Fixed dummyjson images');
}

main().catch(console.error).finally(() => prisma.$disconnect());
