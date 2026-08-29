import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const EXPANSION_PLAN = [
  // --- BELLEZA Y SALUD (20 products) ---
  { cat: 'belleza', dummyCats: ['skincare', 'fragrances'], brandBase: 'Sephora', items: [
    'Sérum Vitamina C', 'Crema Hidratante Noche', 'Limpiador Facial Suave', 'Tónico Exfoliante AHA', 'Mascarilla Arcilla Purificante',
    'Aceite de Argán Puro', 'Bálsamo Labial Reparador', 'Protector Solar SPF50', 'Crema Contorno de Ojos', 'Agua Termal Calmante',
    'Champú Reparador Sin Sulfatos', 'Acondicionador Brillo', 'Secador Pelo Iónico', 'Plancha de Pelo Cerámica', 'Depiladora Láser IPL',
    'Cepillo Limpiador Facial', 'Rodillo de Jade Masaje', 'Maquillaje Base Líquida', 'Paleta Sombras Nude', 'Set Brochas Profesionales'
  ]},

  // --- DEPORTES (20 products) ---
  { cat: 'deportes', dummyCats: ['sports-accessories', 'mens-shoes'], brandBase: 'Nike', items: [
    'Mancuernas Hexagonales 5kg', 'Esterilla Yoga Antideslizante', 'Banda Elástica Resistencia', 'Rodillo Espuma Masaje', 'Kettlebell 12kg',
    'Botella Agua Acero Inoxidable', 'Bolsa Deporte Gimnasio', 'Guantes Levantamiento Pesas', 'Cuerda Saltar Alta Velocidad', 'Cinturón Halterofilia',
    'Reloj Pulsómetro Deportivo', 'Camiseta Técnica Transpirable', 'Pantalón Corto Running', 'Calcetines Compresión', 'Zapatillas Running Pro',
    'Mochila Trail Ligera', 'Gafas Ciclismo Polarizadas', 'Casco Bici Aerodinámico', 'Luz Trasera Bici LED', 'Toalla Microfibra Secado Rápido'
  ]},

  // --- HOGAR (20 products) ---
  { cat: 'hogar', dummyCats: ['furniture', 'home-decoration', 'lighting', 'kitchen-accessories'], brandBase: 'IKEA', items: [
    'Lámpara Techo Moderna', 'Jarrón Cerámica Minimalista', 'Cojín Terciopelo Decorativo', 'Alfombra Salón Pelo Corto', 'Espejo Pared Redondo',
    'Mesa Centro Madera Maciza', 'Silla Comedor Tapizada', 'Estantería Librería 5 Baldas', 'Mueble TV Industrial', 'Sofá Cama 3 Plazas',
    'Juego Sábanas Algodón', 'Funda Nórdica Estampada', 'Toallas Baño Algodón', 'Dispensador Jabón Bambú', 'Vela Aromática Vainilla',
    'Set Sartenes Antiadherentes', 'Vajilla Porcelana 18 Piezas', 'Cubertería Acero Inoxidable', 'Cafetera Espresso Manual', 'Tostadora 2 Ranuras Anchas'
  ]},

  // --- MOVILIDAD Y BATERÍAS (20 products) ---
  { cat: 'motor', dummyCats: ['automotive', 'motorcycle', 'smartphones'], brandBase: 'Xiaomi', items: [
    'Patinete Eléctrico Pro', 'Batería Externa 10000mAh', 'Cargador Coche Carga Rápida', 'Soporte Móvil Bici', 'Casco Moto Modular',
    'Guantes Moto Invierno', 'Chaqueta Moto Protecciones', 'Candado Disco Alarma', 'Funda Protectora Patinete', 'Cámara Acción 4K',
    'Compresor Aire Portátil', 'Arrancador Batería Coche', 'Kit Herramientas Bici', 'Luz Delantera Potente 1000lm', 'Bolsa Manillar Bici',
    'Retrovisores Patinete', 'Timbre Bicicleta Clásico', 'Candado Cadena Seguridad Alta', 'Localizador GPS Vehículos', 'Batería Repuesto E-Bike'
  ]}
];

async function main() {
  console.log('Fetching DummyJSON for EXPANDED image pools...');
  const res = await fetch('https://dummyjson.com/products?limit=200');
  const json = await res.json() as any;
  
  // Extract ALL images (not just thumbnails) to get a massive pool of unique photos
  const imagePool: Record<string, string[]> = {};
  for (const product of json.products) {
    if (!imagePool[product.category]) imagePool[product.category] = [];
    if (product.images && Array.isArray(product.images)) {
      // Add all images for this product to the category pool
      imagePool[product.category].push(...product.images);
    } else {
      imagePool[product.category].push(product.thumbnail);
    }
  }

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';

  const catCache: Record<string, string> = {};
  const allCats = await prisma.category.findMany();
  for (const c of allCats) catCache[c.slug] = c.id;

  let totalAdded = 0;

  for (const block of EXPANSION_PLAN) {
    const categoryId = catCache[block.cat];
    if (!categoryId) {
      console.warn(`Category ${block.cat} not found in DB!`);
      continue;
    }

    // Build the combined image pool for this block
    const blockImagePool: string[] = [];
    for (const dummyCat of block.dummyCats) {
      if (imagePool[dummyCat]) {
        blockImagePool.push(...imagePool[dummyCat]);
      }
    }
    
    // Shuffle the image pool so it looks organic
    blockImagePool.sort(() => Math.random() - 0.5);

    const brand = await prisma.brand.upsert({
      where: { name: block.brandBase },
      update: {},
      create: { name: block.brandBase, slug: block.brandBase.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
    });

    for (let i = 0; i < block.items.length; i++) {
      const itemName = block.items[i];
      // Get an image, fallback to a safe default if we run out (unlikely with all images combined)
      const img = blockImagePool.length > 0 ? blockImagePool.shift()! : 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg';
      
      const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random()*100000);

      await prisma.product.create({
        data: {
          name: itemName,
          slug: slug,
          model: itemName,
          brandId: brand.id,
          categoryId: categoryId,
          imageUrl: img,
          gender: 'UNISEX',
          variants: {
            create: {
              sizeValue: 'Estándar',
              colorNormalized: 'Standard',
              offers: {
                create: {
                  storeId,
                  externalProductId: `ext-${slug}`,
                  url: `https://example.com/buy/${slug}`,
                  priceBase: Math.floor(Math.random() * 150) + 15,
                  priceTotal: Math.floor(Math.random() * 150) + 15,
                  stockStatus: 'IN_STOCK'
                }
              }
            }
          }
        }
      });
      totalAdded++;
    }
  }

  console.log(`✅ EXPANSIÓN MASIVA COMPLETADA. Añadidos ${totalAdded} productos únicos a Belleza, Deportes, Hogar y Motor.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
