import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const FALLBACK_SHOES: Record<string, string> = {
  'nike': 'https://i.imgur.com/Au8J9sX.jpeg', // Platzi blue shoes
  'adidas': 'https://i.imgur.com/qNOjJje.jpeg', // Platzi casual shoes
  'puma': 'https://i.imgur.com/sC0ztOB.jpeg' // Platzi elegant shoes
};

async function main() {
  console.log('🔧 Aplicando fixes de última hora para la presentación...');

  // 1. Fix Broken Shoe Images
  // We'll replace failing Nike/Adidas/Puma images with stable Platzi shoe images 
  // which are professional e-commerce shots with white backgrounds.
  const products = await prisma.product.findMany({
    where: { category: { slug: 'zapatillas' } },
    include: { brand: true }
  });

  let fixedImages = 0;
  for (const p of products) {
    if (p.imageUrl && (p.imageUrl.includes('nike.com') || p.imageUrl.includes('adidas.com') || p.imageUrl.includes('puma.com'))) {
      const brandSlug = p.brand?.slug || '';
      let newImage = 'https://i.imgur.com/qNOjJje.jpeg'; // default fallback
      if (brandSlug.includes('nike')) newImage = 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800'; // Clean Nike Unsplash
      else if (brandSlug.includes('adidas')) newImage = 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800'; // Clean Adidas-like
      else if (brandSlug.includes('puma')) newImage = 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800'; // Clean Puma-like
      
      await prisma.product.update({
        where: { id: p.id },
        data: { imageUrl: newImage }
      });
      fixedImages++;
    }
  }
  console.log(`✅ Arregladas ${fixedImages} imágenes de zapatillas que fallaban por bloqueos de CDN.`);

  // 2. Clean up "Motor" category to remove actual cars/motorcycles and keep accessories/ebikes
  // We'll delete expensive vehicle offers and products
  const motorCategory = await prisma.category.findUnique({ where: { slug: 'motor' }});
  
  if (motorCategory) {
    // Buscar productos de motor con precio alto
    const expensiveMotorOffers = await prisma.offer.findMany({
      where: {
        variant: {
          product: { categoryId: motorCategory.id }
        },
        priceBase: { gt: 3000 } // Más de 3000€ suele ser un coche/moto entera
      },
      include: { variant: true }
    });

    const productIdsToDelete = new Set(expensiveMotorOffers.map(o => o.variant.productId));

    let removedVehicles = 0;
    for (const pid of productIdsToDelete) {
      await prisma.priceHistory.deleteMany({ where: { offer: { variant: { productId: pid } } } });
      await prisma.offer.deleteMany({ where: { variant: { productId: pid } } });
      await prisma.variant.deleteMany({ where: { productId: pid } });
      await prisma.product.delete({ where: { id: pid } });
      removedVehicles++;
    }
    
    // Cambiar el nombre de la categoría para que quede más claro
    await prisma.category.update({
      where: { id: motorCategory.id },
      data: { name: 'Movilidad y Baterías' }
    });

    console.log(`✅ Eliminados ${removedVehicles} vehículos enteros. La categoría de Motor ahora está enfocada en E-Bikes y Accesorios.`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
