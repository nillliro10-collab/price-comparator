import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fix() {
  const prods = await prisma.product.findMany();
  for (const p of prods) {
    if (p.imageUrl?.includes('via.placeholder.com')) {
      const newUrl = p.imageUrl
        .replace('via.placeholder.com/800?text=', 'placehold.co/800x800?text=')
        .replace(/%20/g, '+'); // placehold.co prefers + for spaces
      await prisma.product.update({
        where: { id: p.id },
        data: { imageUrl: newUrl }
      });
    }
  }
  console.log('Images fixed');
}

fix()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
