import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const imgs = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80',
  'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
];

async function fix() {
  const prods = await prisma.product.findMany();
  for (let i=0; i<prods.length; i++) {
    await prisma.product.update({
      where: { id: prods[i].id },
      data: { imageUrl: imgs[i % imgs.length] }
    });
  }
  console.log('Images fixed with real photos');
}

fix()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
