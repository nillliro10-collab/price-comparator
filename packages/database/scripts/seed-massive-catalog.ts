import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const IMAGE_POOLS = {
  iphone: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&q=80',
  macbook: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
  ipad: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
  watch: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
  airpods: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80',
  sneaker: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  polo: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
  belt: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
  suit: 'https://images.unsplash.com/photo-1594938298598-70f443b8110b?w=800&q=80',
  perfume: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
  pants: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'
};

async function main() {
  console.log('🚀 Iniciando inyección masiva de catálogo...');

  // 1. Obtener/Crear Categorías Raíz
  const catRopa = await prisma.category.upsert({ where: { slug: 'ropa' }, update: {}, create: { name: 'Ropa', slug: 'ropa' }});
  const catElec = await prisma.category.upsert({ where: { slug: 'electronica' }, update: {}, create: { name: 'Electrónica', slug: 'electronica' }});
  const catPerf = await prisma.category.upsert({ where: { slug: 'perfumes' }, update: {}, create: { name: 'Perfumes', slug: 'perfumes' }});
  const catZap = await prisma.category.upsert({ where: { slug: 'zapatillas' }, update: {}, create: { name: 'Zapatillas', slug: 'zapatillas' }});

  // 2. Obtener/Crear Subcategorías
  const cats = {
    moviles: await prisma.category.upsert({ where: { slug: 'moviles' }, update: {}, create: { name: 'Móviles', slug: 'moviles', parentId: catElec.id }}),
    ordenadores: await prisma.category.upsert({ where: { slug: 'ordenadores' }, update: {}, create: { name: 'Ordenadores', slug: 'ordenadores', parentId: catElec.id }}),
    tablets: await prisma.category.upsert({ where: { slug: 'tablets' }, update: {}, create: { name: 'Tablets', slug: 'tablets', parentId: catElec.id }}),
    wearables: await prisma.category.upsert({ where: { slug: 'wearables' }, update: {}, create: { name: 'Smartwatches', slug: 'wearables', parentId: catElec.id }}),
    audio: await prisma.category.upsert({ where: { slug: 'audio' }, update: {}, create: { name: 'Audio', slug: 'audio', parentId: catElec.id }}),
    polos: await prisma.category.upsert({ where: { slug: 'polos' }, update: {}, create: { name: 'Polos', slug: 'polos', parentId: catRopa.id }}),
    pantalones: await prisma.category.upsert({ where: { slug: 'pantalones' }, update: {}, create: { name: 'Pantalones', slug: 'pantalones', parentId: catRopa.id }}),
    cinturones: await prisma.category.upsert({ where: { slug: 'cinturones' }, update: {}, create: { name: 'Cinturones', slug: 'cinturones', parentId: catRopa.id }}),
    trajes: await prisma.category.upsert({ where: { slug: 'trajes' }, update: {}, create: { name: 'Trajes', slug: 'trajes', parentId: catRopa.id }}),
    zapatillas: catZap,
    perfumes: catPerf,
  };

  // 3. Crear Marcas
  const bApple = await prisma.brand.upsert({ where: { slug: 'apple' }, update: {}, create: { name: 'Apple', slug: 'apple' }});
  const bNike = await prisma.brand.upsert({ where: { slug: 'nike' }, update: {}, create: { name: 'Nike', slug: 'nike' }});
  const bRalph = await prisma.brand.upsert({ where: { slug: 'ralph-lauren' }, update: {}, create: { name: 'Polo Ralph Lauren', slug: 'ralph-lauren' }});
  const bBoss = await prisma.brand.upsert({ where: { slug: 'hugo-boss' }, update: {}, create: { name: 'Hugo Boss', slug: 'hugo-boss' }});

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  // 4. Catálogo a generar
  const productsToCreate: any[] = [];

  // --- APPLE ---
  ['13', '14', '15', '16', '17'].forEach(gen => {
    productsToCreate.push({ b: bApple.id, c: cats.moviles.id, n: `iPhone ${gen}`, m: `iPhone ${gen}`, img: IMAGE_POOLS.iphone, v: ['128GB', '256GB', '512GB'] });
    productsToCreate.push({ b: bApple.id, c: cats.moviles.id, n: `iPhone ${gen} Pro`, m: `iPhone ${gen} Pro`, img: IMAGE_POOLS.iphone, v: ['256GB', '512GB', '1TB'] });
    productsToCreate.push({ b: bApple.id, c: cats.moviles.id, n: `iPhone ${gen} Pro Max`, m: `iPhone ${gen} Pro Max`, img: IMAGE_POOLS.iphone, v: ['256GB', '512GB', '1TB'] });
  });
  ['Air M1', 'Air M2', 'Pro 14 M2', 'Pro 16 M3'].forEach(m => productsToCreate.push({ b: bApple.id, c: cats.ordenadores.id, n: `MacBook ${m}`, m: 'MacBook', img: IMAGE_POOLS.macbook, v: ['256GB', '512GB'] }));
  ['Series 8', 'Series 9', 'Ultra 2'].forEach(m => productsToCreate.push({ b: bApple.id, c: cats.wearables.id, n: `Apple Watch ${m}`, m: 'Watch', img: IMAGE_POOLS.watch, v: ['41mm', '45mm'] }));
  ['Pro 2', 'Max'].forEach(m => productsToCreate.push({ b: bApple.id, c: cats.audio.id, n: `AirPods ${m}`, m: 'AirPods', img: IMAGE_POOLS.airpods, v: ['Estándar'] }));

  // --- NIKE ---
  ['Air Max 90', 'Air Max 95', 'Jordan 1 High', 'Jordan 4 Retro', 'Pegasus 40', 'Dunk Low'].forEach(m => productsToCreate.push({ b: bNike.id, c: cats.zapatillas.id, n: `Nike ${m}`, m, img: IMAGE_POOLS.sneaker, v: ['40', '41', '42', '43'] }));
  ['Sportswear Club', 'Tech Fleece'].forEach(m => productsToCreate.push({ b: bNike.id, c: cats.polos.id, n: `Nike Camiseta ${m}`, m, img: IMAGE_POOLS.polo, v: ['S', 'M', 'L', 'XL'] }));
  ['Pro Dri-FIT', 'Tech Fleece Jogger'].forEach(m => productsToCreate.push({ b: bNike.id, c: cats.pantalones.id, n: `Nike Pantalón ${m}`, m, img: IMAGE_POOLS.pants, v: ['S', 'M', 'L'] }));
  productsToCreate.push({ b: bNike.id, c: cats.perfumes.id, n: `Nike Man Blue EDT`, m: 'Blue', img: IMAGE_POOLS.perfume, v: ['75ml', '100ml'] });

  // --- POLO RALPH LAUREN ---
  ['Slim Fit Piqué', 'Classic Fit Custom', 'Bear Logo', 'Striped Cotton'].forEach(m => productsToCreate.push({ b: bRalph.id, c: cats.polos.id, n: `Polo Ralph Lauren ${m}`, m, img: IMAGE_POOLS.polo, v: ['S', 'M', 'L', 'XL', 'XXL'] }));
  ['Leather Dress Belt', 'Reversible Casual Belt'].forEach(m => productsToCreate.push({ b: bRalph.id, c: cats.cinturones.id, n: `Cinturón Ralph Lauren ${m}`, m, img: IMAGE_POOLS.belt, v: ['85', '90', '95', '100'] }));
  ['Blue Eau de Toilette', 'Red Rush', 'Earth'].forEach(m => productsToCreate.push({ b: bRalph.id, c: cats.perfumes.id, n: `Polo ${m}`, m, img: IMAGE_POOLS.perfume, v: ['50ml', '100ml', '200ml'] }));

  // --- HUGO BOSS ---
  ['Slim-fit Super 120s', 'Regular-fit Virgin Wool'].forEach(m => productsToCreate.push({ b: bBoss.id, c: cats.trajes.id, n: `Traje Boss ${m}`, m, img: IMAGE_POOLS.suit, v: ['46', '48', '50', '52'] }));
  ['Italian Leather Logo', 'Suede Belt'].forEach(m => productsToCreate.push({ b: bBoss.id, c: cats.cinturones.id, n: `Cinturón Boss ${m}`, m, img: IMAGE_POOLS.belt, v: ['90', '95', '100'] }));
  ['Bottled', 'The Scent', 'Alive', 'Orange'].forEach(m => productsToCreate.push({ b: bBoss.id, c: cats.perfumes.id, n: `Boss ${m} Parfum`, m, img: IMAGE_POOLS.perfume, v: ['50ml', '100ml', '150ml'] }));

  let count = 0;
  for (const p of productsToCreate) {
    const slug = p.n.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const existing = await prisma.product.findUnique({ where: { slug } });
    if (!existing) {
      await prisma.product.create({
        data: {
          name: p.n,
          slug,
          model: p.m,
          brandId: p.b,
          categoryId: p.c,
          imageUrl: p.img,
          variants: {
            create: p.v.map((sizeValue: string, idx: number) => ({
              sizeValue,
              colorNormalized: 'Standard',
              offers: {
                create: {
                  storeId,
                  externalProductId: `ext-${slug}-${idx}`,
                  url: `https://example.com/buy/${slug}`,
                  priceBase: Math.floor(Math.random() * 800) + 50,
                  priceTotal: Math.floor(Math.random() * 800) + 55,
                  status: 'ACTIVE'
                }
              }
            }))
          }
        }
      });
      count++;
    }
  }

  console.log(`✅ Inyección masiva completada: ${count} nuevos productos de Apple, Nike, Polo y Boss añadidos con variantes y ofertas falsas.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
