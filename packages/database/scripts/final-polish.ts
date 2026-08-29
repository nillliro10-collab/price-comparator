import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EXTRA_PETS = [
  { name: 'Terrario de Cristal 100L', animal: 'Reptil', type: 'Cuidado', price: 120, img: 'https://images.unsplash.com/photo-1544641618-971780005747?auto=format&fit=crop&q=80&w=800' },
  { name: 'Lámpara de Calor UVB', animal: 'Reptil', type: 'Cuidado', price: 35, img: 'https://images.unsplash.com/photo-1628185526322-a0ce6a8775f0?auto=format&fit=crop&q=80&w=800' },
  { name: 'Pienso para Iguana 2kg', animal: 'Reptil', type: 'Comida', price: 18, img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800' },
  
  { name: 'Jaula Grande para Loros', animal: 'Pájaro', type: 'Cuidado', price: 85, img: 'https://images.unsplash.com/photo-1552728089-57168bb3e003?auto=format&fit=crop&q=80&w=800' },
  { name: 'Espejo y Campana Colgante', animal: 'Pájaro', type: 'Juguetes', price: 6, img: 'https://images.unsplash.com/photo-1522728003666-419139fc11e1?auto=format&fit=crop&q=80&w=800' },
  
  { name: 'Rueda de Ejercicio Silenciosa', animal: 'Roedor', type: 'Juguetes', price: 12, img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=800' },
  { name: 'Jaula Hámster Tubos Mágicos', animal: 'Roedor', type: 'Cuidado', price: 40, img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800' },
  
  { name: 'Correa Extensible 5m Premium', animal: 'Perro', type: 'Cuidado', price: 20, img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800' },
  
  { name: 'Rascador Árbol 120cm', animal: 'Gato', type: 'Cuidado', price: 45, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' },
  { name: 'Arena Aglomerante Premium 10kg', animal: 'Gato', type: 'Cuidado', price: 14, img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800' }
];

async function main() {
  console.log('🧹 Limpieza final y pulido de catálogo...');

  // 1. DELETE SUPERMERCADO
  const superCat = await prisma.category.findUnique({ where: { slug: 'supermercado' }});
  if (superCat) {
    const products = await prisma.product.findMany({ where: { categoryId: superCat.id } });
    for (const p of products) {
      await prisma.priceHistory.deleteMany({ where: { offer: { variant: { productId: p.id } } } });
      await prisma.offer.deleteMany({ where: { variant: { productId: p.id } } });
      await prisma.variant.deleteMany({ where: { productId: p.id } });
      await prisma.product.delete({ where: { id: p.id } });
    }
    await prisma.category.delete({ where: { id: superCat.id } });
    console.log(`✅ Categoría 'Supermercado' eliminada (se borraron ${products.length} productos).`);
  }

  // 2. FILL MISSING IMAGES (Guarantee 100%)
  const noImageProducts = await prisma.product.findMany({
    where: { OR: [ { imageUrl: null }, { imageUrl: '' } ] }
  });
  
  for (const p of noImageProducts) {
    await prisma.product.update({
      where: { id: p.id },
      data: { imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' } // Generic clean product image
    });
  }
  if (noImageProducts.length > 0) {
    console.log(`✅ Añadidas fotos de respaldo a ${noImageProducts.length} productos sin imagen.`);
  } else {
    console.log(`✅ El 100% del catálogo ya tiene imágenes asignadas.`);
  }

  // 3. INJECT EXTRA PETS
  const catMascotas = await prisma.category.findUnique({ where: { slug: 'mascotas' }});
  const brandGeneric = await prisma.brand.findUnique({ where: { slug: 'generico' }});
  const store = await prisma.store.findFirst();

  if (catMascotas && brandGeneric && store) {
    let addedCount = 0;
    for (let i = 0; i < EXTRA_PETS.length; i++) {
      const item = EXTRA_PETS[i];
      const slug = `mascota-extra-${item.animal.toLowerCase()}-${i}`;
      
      await prisma.product.upsert({
        where: { slug },
        update: {},
        create: {
          name: item.name,
          slug,
          model: item.name,
          brandId: brandGeneric.id,
          categoryId: catMascotas.id,
          imageUrl: item.img,
          gender: item.animal,
          variants: {
            create: {
              sizeValue: item.type,
              colorNormalized: 'Standard',
              offers: {
                create: {
                  storeId: store.id,
                  externalProductId: `ext-${slug}`,
                  url: `https://example.com/${slug}`,
                  priceBase: item.price,
                  priceTotal: item.price,
                }
              }
            }
          }
        }
      });
      addedCount++;
    }
    console.log(`✅ Inyectados ${addedCount} productos extra para mascotas (Reptiles, Roedores, más pájaros...).`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
