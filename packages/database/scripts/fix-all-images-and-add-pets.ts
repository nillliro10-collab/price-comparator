import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const MASCOTAS_DATA = [
  { name: 'Pienso Premium Adulto', animal: 'Perro', type: 'Comida', price: 45, img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800' },
  { name: 'Juguete Cuerda Resistente', animal: 'Perro', type: 'Juguetes', price: 12, img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800' },
  { name: 'Comida Húmeda Salmón', animal: 'Gato', type: 'Comida', price: 25, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' },
  { name: 'Ratón de Juguete con Catnip', animal: 'Gato', type: 'Juguetes', price: 8, img: 'https://images.unsplash.com/photo-1623912185521-cb233b86064d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Alimento Escamas Colores', animal: 'Pez', type: 'Comida', price: 10, img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800' },
  { name: 'Mezcla Premium Semillas', animal: 'Pájaro', type: 'Comida', price: 15, img: 'https://images.unsplash.com/photo-1552728089-57168bb3e003?auto=format&fit=crop&q=80&w=800' },
  { name: 'Pienso Ecológico Ponedoras', animal: 'Gallina', type: 'Comida', price: 30, img: 'https://images.unsplash.com/photo-1548550023-2bf3c49b3380?auto=format&fit=crop&q=80&w=800' },
  { name: 'Heno Fresco de Montaña', animal: 'Roedor', type: 'Comida', price: 18, img: 'https://images.unsplash.com/photo-1585110396000-c9fd4e4e5030?auto=format&fit=crop&q=80&w=800' }
];

const BABY_DATA = [
  { name: 'Body Algodón Orgánico Pack 3', type: 'XS', price: 15, img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800' },
  { name: 'Pijama Entero Invierno', type: 'S', price: 22, img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800' },
  { name: 'Zapatillas Primeros Pasos', type: 'M', price: 35, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800' }
];

async function main() {
  console.log('🔧 Aplicando fixes finales de imágenes y añadiendo Mascotas/Bebés...');

  // 1. GLOBAL FIX FOR ALL BROKEN IMAGES ACROSS ALL CATEGORIES
  const badDomains = ['nike.com', 'adidas.com', 'puma.com', 'zara.net', 'ralphlauren.es', 'cdn-apple.com', 'samsung.com', 'appmifile.com'];
  
  const allProducts = await prisma.product.findMany();
  let fixedCount = 0;
  
  for (const p of allProducts) {
    if (p.imageUrl && badDomains.some(domain => p.imageUrl!.includes(domain))) {
      let newImage = 'https://i.imgur.com/qNOjJje.jpeg';
      
      const slug = p.slug.toLowerCase();
      // Assign generic but beautiful images based on brand
      if (slug.includes('nike')) newImage = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('adidas')) newImage = 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('puma')) newImage = 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('apple') || slug.includes('iphone') || slug.includes('mac')) newImage = 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('samsung') || slug.includes('galaxy')) newImage = 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('xiaomi') || slug.includes('redmi') || slug.includes('poco')) newImage = 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('zara') || slug.includes('ropa')) newImage = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800';
      else if (slug.includes('ralph')) newImage = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800';
      
      await prisma.product.update({
        where: { id: p.id },
        data: { imageUrl: newImage }
      });
      fixedCount++;
    }
  }
  console.log(`✅ Arregladas ${fixedCount} imágenes problemáticas GLOBALMENTE.`);

  // 2. CREAR CATEGORÍA MASCOTAS Y PRODUCTOS
  const store = await prisma.store.findFirst();
  if (!store) return;

  const catMascotas = await prisma.category.upsert({
    where: { slug: 'mascotas' },
    update: {},
    create: { name: 'Mascotas', slug: 'mascotas' }
  });

  const brandGeneric = await prisma.brand.upsert({
    where: { slug: 'generico' },
    update: {},
    create: { name: 'Genérico', slug: 'generico' }
  });

  for (let i = 0; i < MASCOTAS_DATA.length; i++) {
    const item = MASCOTAS_DATA[i];
    const slug = `mascota-${item.animal.toLowerCase()}-${item.type.toLowerCase()}-${i}`;
    
    // Multiplicar un poco para dar volumen
    for (let variantIdx = 1; variantIdx <= 3; variantIdx++) {
      const vSlug = `${slug}-v${variantIdx}`;
      await prisma.product.upsert({
        where: { slug: vSlug },
        update: {},
        create: {
          name: `${item.name} v${variantIdx}`,
          slug: vSlug,
          model: item.name,
          brandId: brandGeneric.id,
          categoryId: catMascotas.id,
          imageUrl: item.img,
          gender: item.animal, // Animal = Gender field for filtering
          variants: {
            create: {
              sizeValue: item.type, // Tipo = Size field for filtering
              colorNormalized: 'Standard',
              offers: {
                create: {
                  storeId: store.id,
                  externalProductId: `ext-${vSlug}`,
                  url: `https://example.com/${vSlug}`,
                  priceBase: item.price + variantIdx,
                  priceTotal: item.price + variantIdx,
                }
              }
            }
          }
        }
      });
    }
  }
  console.log(`✅ Categoría MASCOTAS creada y poblada (Perros, Gatos, Peces, Gallinas...).`);

  // 3. POBLAR ROPA DE BEBÉ
  const catRopa = await prisma.category.findUnique({ where: { slug: 'ropa' }});
  if (catRopa) {
    for (let i = 0; i < BABY_DATA.length; i++) {
      const item = BABY_DATA[i];
      const slug = `bebe-${item.name.toLowerCase().replace(/ /g, '-')}-${i}`;
      
      for (let variantIdx = 1; variantIdx <= 5; variantIdx++) {
        const vSlug = `${slug}-v${variantIdx}`;
        await prisma.product.upsert({
          where: { slug: vSlug },
          update: {},
          create: {
            name: `${item.name} Modelo ${variantIdx}`,
            slug: vSlug,
            model: item.name,
            brandId: brandGeneric.id,
            categoryId: catRopa.id,
            imageUrl: item.img,
            gender: 'Bebé', 
            variants: {
              create: {
                sizeValue: item.type, 
                colorNormalized: 'Standard',
                offers: {
                  create: {
                    storeId: store.id,
                    externalProductId: `ext-${vSlug}`,
                    url: `https://example.com/${vSlug}`,
                    priceBase: item.price + variantIdx,
                    priceTotal: item.price + variantIdx,
                  }
                }
              }
            }
          }
        });
      }
    }
    console.log(`✅ Productos de ROPA DE BEBÉ creados.`);
  }

}

main().catch(console.error).finally(() => prisma.$disconnect());
