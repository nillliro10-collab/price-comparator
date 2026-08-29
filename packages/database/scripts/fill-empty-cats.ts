import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EXTRA_CATALOG = [
  // --- BELLEZA Y SALUD ---
  { brand: 'L\'Oreal', cat: 'belleza', lines: ['Sérum Revitalift', 'Crema Día Anti-Arrugas'], dummyCat: 'skincare', price: 25, type: 'belleza' },
  { brand: 'Garnier', cat: 'belleza', lines: ['Agua Micelar 400ml', 'Mascarilla Capilar Fructis'], dummyCat: 'skincare', price: 8, type: 'belleza' },
  { brand: 'Braun', cat: 'belleza', lines: ['Depiladora Silk-épil 9', 'Recortadora de Barba'], dummyCat: 'skincare', price: 80, type: 'belleza' },

  // --- DEPORTES ---
  { brand: 'Under Armour', cat: 'deportes', lines: ['Camiseta Compresión', 'Bolsa de Deporte'], dummyCat: 'sports-accessories', price: 35, type: 'deportes' },
  { brand: 'Salomon', cat: 'deportes', lines: ['Mochila Hidratación 5L', 'Bastones Trail Running'], dummyCat: 'sports-accessories', price: 90, type: 'deportes' },
  { brand: 'Garmin', cat: 'deportes', lines: ['Forerunner 255', 'Banda de Frecuencia Cardíaca'], dummyCat: 'sports-accessories', price: 250, type: 'deportes' },

  // --- ELECTRÓNICA: AUDIO & TABLETS ---
  { brand: 'Sony', cat: 'audio', lines: ['Auriculares WH-1000XM5', 'Altavoz Bluetooth SRS'], dummyCat: 'smartphones', price: 280, type: 'electronica' },
  { brand: 'JBL', cat: 'audio', lines: ['Flip 6', 'Charge 5'], dummyCat: 'smartphones', price: 130, type: 'electronica' },
  { brand: 'Apple', cat: 'tablets', lines: ['iPad Pro 11"', 'iPad Air 5'], dummyCat: 'laptops', price: 900, type: 'electronica' },
  { brand: 'Samsung', cat: 'tablets', lines: ['Galaxy Tab S9', 'Galaxy Tab A8'], dummyCat: 'laptops', price: 700, type: 'electronica' },
  
  // --- ACCESORIOS (Para rellenar más) ---
  { brand: 'Ray-Ban', cat: 'accesorios', lines: ['Gafas Aviator Classic', 'Gafas Wayfarer'], dummyCat: 'sunglasses', price: 140, type: 'accesorios' },
  { brand: 'Casio', cat: 'accesorios', lines: ['Reloj G-Shock', 'Reloj Vintage Gold'], dummyCat: 'mens-watches', price: 65, type: 'accesorios' },
];

async function main() {
  console.log('Fetching DummyJSON for additional categories...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;
  
  const imagePool: Record<string, string[]> = {};
  for (const product of json.products) {
    if (!imagePool[product.category]) imagePool[product.category] = [];
    imagePool[product.category].push(product.thumbnail);
  }
  const backupImage = 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg';

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  const catCache: Record<string, string> = {};
  const allCats = await prisma.category.findMany();
  for (const c of allCats) catCache[c.slug] = c.id;

  let count = 0;
  for (const block of EXTRA_CATALOG) {
    const brand = await prisma.brand.upsert({
      where: { name: block.brand },
      update: {},
      create: { name: block.brand, slug: block.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
    });

    const categoryId = catCache[block.cat];
    if (!categoryId) {
      console.warn(`Category ${block.cat} not found in DB!`);
      continue;
    }

    for (const line of block.lines) {
      const pool = imagePool[block.dummyCat] || [];
      const img = pool.length > 0 ? pool.shift()! : backupImage;
      if (pool.length > 0) pool.push(img);

      const slug = line.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random()*10000);

      await prisma.product.create({
        data: {
          name: line,
          slug: slug,
          model: line,
          brandId: brand.id,
          categoryId: categoryId,
          imageUrl: img,
          gender: 'UNISEX',
          variants: {
            create: ['Estándar'].map((v, idx) => {
              const finalPrice = Math.round(block.price * (Math.random() * 0.2 + 0.9));
              return {
                sizeValue: v,
                colorNormalized: 'Standard',
                offers: {
                  create: {
                    storeId,
                    externalProductId: `ext-${slug}-${idx}`,
                    url: `https://example.com/buy/${slug}`,
                    priceBase: finalPrice,
                    priceTotal: finalPrice,
                    stockStatus: 'IN_STOCK'
                  }
                }
              };
            })
          }
        }
      });
      count++;
    }
  }

  console.log(`✅ Rellenadas las categorías vacías (Deportes, Belleza, Tablets, Audio, Accesorios) con ${count} productos nuevos y únicos.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
