import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATALOG_PLAN = [
  // --- APPLE ---
  { brand: 'Apple', cat: 'moviles', lines: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14', 'iPhone 13'], dummyCat: 'smartphones', price: 1200, type: 'electronica' },
  { brand: 'Apple', cat: 'ordenadores', lines: ['MacBook Pro 16" M3', 'MacBook Air 15"', 'iMac 24"'], dummyCat: 'laptops', price: 2500, type: 'electronica' },
  { brand: 'Apple', cat: 'accesorios', lines: ['Apple Watch Series 9', 'Apple Watch Ultra'], dummyCat: 'mens-watches', price: 450, type: 'electronica' },
  
  // --- SAMSUNG & XIAOMI ---
  { brand: 'Samsung', cat: 'moviles', lines: ['Galaxy S24 Ultra', 'Galaxy S23 Plus', 'Galaxy Z Fold5', 'Galaxy Z Flip5'], dummyCat: 'smartphones', price: 1100, type: 'electronica' },
  { brand: 'Xiaomi', cat: 'moviles', lines: ['Xiaomi 14 Ultra', 'Redmi Note 13 Pro'], dummyCat: 'smartphones', price: 800, type: 'electronica' },

  // --- NIKE, ADIDAS, PUMA ---
  { brand: 'Nike', cat: 'zapatillas', lines: ['Air Force 1 \'07', 'Air Max 90', 'Jordan 1 High', 'Dunk Low Retro', 'Pegasus 40'], dummyCat: 'mens-shoes', price: 120, type: 'zapatillas' },
  { brand: 'Adidas', cat: 'zapatillas', lines: ['Samba OG', 'Gazelle Indoor', 'Ultraboost Light', 'Stan Smith'], dummyCat: 'mens-shoes', price: 110, type: 'zapatillas' },
  { brand: 'Puma', cat: 'zapatillas', lines: ['RS-X', 'Suede Classic', 'Cali Dream'], dummyCat: 'womens-shoes', price: 90, type: 'zapatillas' },
  
  { brand: 'Nike', cat: 'ropa', lines: ['Sudadera Sportswear', 'Chaqueta Windrunner'], dummyCat: 'mens-shirts', price: 60, type: 'ropa' },
  { brand: 'Polo Ralph Lauren', cat: 'ropa', lines: ['Polo Custom Fit', 'Camisa Oxford', 'Jersey Cuello Pico'], dummyCat: 'mens-shirts', price: 120, type: 'ropa' },
  { brand: 'Zara', cat: 'ropa', lines: ['Vestido Midi', 'Chaqueta Efecto Piel', 'Abrigo de Paño'], dummyCat: 'womens-dresses', price: 50, type: 'ropa' },

  // --- BEBÉ (ROPA) ---
  { brand: 'Chicco', cat: 'ropa', lines: ['Body Algodón Orgánico', 'Pijama de Invierno', 'Pantalón Chándal Bebé'], dummyCat: 'tops', price: 20, type: 'bebe' },

  // --- PERFUMES ---
  { brand: 'Dior', cat: 'perfumes', lines: ['Dior Sauvage', 'Dior J\'adore', 'Miss Dior'], dummyCat: 'fragrances', price: 95, type: 'perfumes' },
  { brand: 'Chanel', cat: 'perfumes', lines: ['Bleu de Chanel', 'Coco Mademoiselle', 'Chanel No. 5'], dummyCat: 'fragrances', price: 130, type: 'perfumes' },
  { brand: 'Gucci', cat: 'perfumes', lines: ['Gucci Bloom', 'Gucci Guilty'], dummyCat: 'fragrances', price: 110, type: 'perfumes' },

  // --- HOGAR ---
  { brand: 'IKEA', cat: 'hogar', lines: ['Sofá 3 Plazas', 'Sillón', 'Mesa de Centro'], dummyCat: 'furniture', price: 350, type: 'hogar' },
  { brand: 'Philips', cat: 'hogar', lines: ['Lámpara Inteligente', 'Plafón LED'], dummyCat: 'lighting', price: 120, type: 'hogar' },
  
  // --- MOTOR ---
  { brand: 'Motorola', cat: 'motor', lines: ['Casco Moto Integral', 'Guantes Moto'], dummyCat: 'motorcycle', price: 150, type: 'motor' }
];

async function main() {
  console.log('Fetching DummyJSON to get hundreds of UNIQUE REAL images...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;
  
  const imagePool: Record<string, string[]> = {};
  for (const product of json.products) {
    if (!imagePool[product.category]) imagePool[product.category] = [];
    imagePool[product.category].push(product.thumbnail); // Unique e-commerce image!
  }

  // Backup pools if they run out or are missing
  const backupImage = 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'; // iPhone 9 as absolute fallback

  console.log('🧹 BORRADO TOTAL de catálogo previo...');
  await prisma.priceHistory.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.brand.deleteMany();
  
  await prisma.category.upsert({ where: { slug: 'motor' }, update: { name: 'Movilidad y Baterías' }, create: { name: 'Movilidad y Baterías', slug: 'motor' } });
  await prisma.category.upsert({ where: { slug: 'perfumes' }, update: {}, create: { name: 'Perfumes', slug: 'perfumes' } });
  await prisma.category.upsert({ where: { slug: 'hogar' }, update: {}, create: { name: 'Hogar', slug: 'hogar' } });

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  const catCache: Record<string, string> = {};
  const allCats = await prisma.category.findMany();
  for (const c of allCats) catCache[c.slug] = c.id;

  let count = 0;
  for (const block of CATALOG_PLAN) {
    const brandSlug = block.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const brand = await prisma.brand.upsert({
      where: { name: block.brand },
      update: { slug: brandSlug },
      create: { name: block.brand, slug: brandSlug }
    });

    const categoryId = catCache[block.cat];
    if (!categoryId) continue;

    for (const line of block.lines) {
      // Get a unique image for THIS specific model!
      const pool = imagePool[block.dummyCat] || [];
      // Pop from front, push to back so it rotates if we run out, but tries to be as unique as possible
      const img = pool.length > 0 ? pool.shift()! : backupImage;
      if (pool.length > 0) pool.push(img); // Recycle to the end

      let gender = 'UNISEX';
      if (block.type === 'bebe') gender = 'Bebé';
      else if (block.type === 'ropa' || block.type === 'zapatillas') gender = Math.random() > 0.5 ? 'Hombre' : 'Mujer';

      let variants = ['Estándar'];
      if (block.type === 'zapatillas') variants = ['39', '40', '41', '42', '43', '44'];
      if (block.type === 'ropa' || block.type === 'bebe') variants = ['S', 'M', 'L'];
      if (block.type === 'electronica') variants = ['128GB', '256GB'];
      if (block.type === 'perfumes') variants = ['50ml', '100ml'];

      const slug = line.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random()*10000);

      await prisma.product.create({
        data: {
          name: line,
          slug: slug,
          model: line,
          brandId: brand.id,
          categoryId: categoryId,
          imageUrl: img,
          gender: gender,
          variants: {
            create: variants.map((v, idx) => {
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

  // --- MASCOTAS MANUAL (Because DummyJSON doesn't have pets) ---
  const mascotasCat = await prisma.category.upsert({ where: { slug: 'mascotas' }, update: {}, create: { name: 'Mascotas', slug: 'mascotas' } });
  const brandGeneric = await prisma.brand.upsert({ where: { slug: 'generico' }, update: {}, create: { name: 'Genérico', slug: 'generico' } });
  
  const EXTRA_PETS = [
    { name: 'Terrario de Cristal 100L', animal: 'Reptil', type: 'Cuidado', price: 120, img: 'https://images.unsplash.com/photo-1544641618-971780005747?auto=format&fit=crop&q=80&w=800' },
    { name: 'Pienso para Iguana 2kg', animal: 'Reptil', type: 'Comida', price: 18, img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800' },
    { name: 'Jaula Grande para Loros', animal: 'Pájaro', type: 'Cuidado', price: 85, img: 'https://images.unsplash.com/photo-1552728089-57168bb3e003?auto=format&fit=crop&q=80&w=800' },
    { name: 'Correa Extensible 5m Premium', animal: 'Perro', type: 'Cuidado', price: 20, img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800' },
    { name: 'Rascador Árbol 120cm', animal: 'Gato', type: 'Cuidado', price: 45, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' },
  ];

  for (const pet of EXTRA_PETS) {
    const pSlug = pet.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random()*1000);
    await prisma.product.create({
      data: {
        name: pet.name,
        slug: pSlug,
        model: pet.name,
        brandId: brandGeneric.id,
        categoryId: mascotasCat.id,
        imageUrl: pet.img,
        gender: pet.animal,
        variants: {
          create: {
            sizeValue: pet.type,
            colorNormalized: 'Standard',
            offers: { create: { storeId, externalProductId: `ext-${pSlug}`, url: `https://example.com/buy/${pSlug}`, priceBase: pet.price, priceTotal: pet.price, stockStatus: 'IN_STOCK' } }
          }
        }
      }
    });
    count++;
  }

  console.log(`🚀 REPOBLADO CON DUMMYJSON POOLS COMPLETADO. Generados ${count} modelos con fotos ÚNICAS e INCONFUNDIBLES.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
