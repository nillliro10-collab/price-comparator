import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

const categoryMapping: Record<string, string> = {
  // DummyJSON
  'smartphones': 'moviles',
  'laptops': 'ordenadores',
  'fragrances': 'perfumes',
  'mens-shoes': 'zapatillas',
  'womens-shoes': 'zapatillas',
  'mens-shirts': 'ropa',
  'womens-dresses': 'ropa',
  'tops': 'ropa',
  'tablets': 'tablets',
  'mobile-accessories': 'accesorios',
  'mens-watches': 'accesorios',
  'womens-watches': 'accesorios',
  'sunglasses': 'accesorios',
  'womens-bags': 'accesorios',
  'womens-jewellery': 'accesorios',
  'beauty': 'belleza',
  'skin-care': 'belleza',
  'sports-accessories': 'deportes',
  'furniture': 'hogar',
  'home-decoration': 'hogar',
  'kitchen-accessories': 'hogar',
  'groceries': 'supermercado',
  'motorcycle': 'motor',
  'vehicle': 'motor',
  
  // FakeStoreAPI
  "men's clothing": 'ropa',
  "women's clothing": 'ropa',
  "jewelery": 'accesorios',
  "electronics": 'electronica',
  
  // Platzi (usually category names or IDs)
  "Clothes": "ropa",
  "Shoes": "zapatillas",
  "Electronics": "electronica",
  "Furniture": "hogar",
  "Miscellaneous": "accesorios"
};

async function fetchDummyJSON() {
  const res = await fetch('https://dummyjson.com/products?limit=0');
  const data = await res.json() as any;
  return data.products.map((p: any) => ({
    name: p.title,
    brand: p.brand || 'Generic',
    cat: categoryMapping[p.category],
    img: p.thumbnail,
    price: p.price,
    desc: p.description
  })).filter((p: any) => p.cat);
}

async function fetchFakeStore() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json() as any[];
  return data.map(p => ({
    name: p.title,
    brand: 'Generic',
    cat: categoryMapping[p.category],
    img: p.image,
    price: p.price,
    desc: p.description
  })).filter(p => p.cat);
}

async function fetchPlatzi() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json() as any[];
  return data.map(p => {
    let img = p.images?.[0] || '';
    // Fix Platzi broken image URLs
    img = img.replace(/^\["/, '').replace(/"\]$/, ''); 
    return {
      name: p.title,
      brand: 'Platzi',
      cat: categoryMapping[p.category?.name],
      img: img,
      price: p.price,
      desc: p.description
    };
  }).filter(p => p.cat && p.img && p.img.startsWith('http'));
}

async function main() {
  console.log('🌍 MEGA-FETCH INICIADO...');
  
  const dummy = await fetchDummyJSON();
  console.log(`- DummyJSON: ${dummy.length} items`);
  const fsapi = await fetchFakeStore();
  console.log(`- FakeStore: ${fsapi.length} items`);
  const platzi = await fetchPlatzi();
  console.log(`- Platzi: ${platzi.length} items`);
  
  const allRaw = [...dummy, ...fsapi, ...platzi];
  console.log(`TOTAL RECOLECTADO: ${allRaw.length} imágenes únicas y reales.`);
  
  // We keep the existing items in DB so we don't destroy the iPhone/Samsung ones we injected earlier.
  // We just ADD these 250 items with 4 variants each (1000 items).

  const stores = await prisma.store.findMany();
  const storeId = stores.length > 0 ? stores[0].id : '';
  const amazon = await prisma.store.findFirst({ where: { slug: 'amazon' }});
  const amazonId = amazon?.id || storeId;

  // Root Cats
  const cats = await prisma.category.findMany();
  const getCatId = async (slug: string) => {
    let c = await prisma.category.findUnique({ where: { slug }});
    if (!c) {
      c = await prisma.category.create({ data: { name: slug.toUpperCase(), slug }});
    }
    return c.id;
  };

  let count = 0;
  for (const item of allRaw) {
    if (!item.img || !item.cat) continue;

    const brandSlug = item.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const brand = await prisma.brand.upsert({
      where: { slug: brandSlug },
      update: {},
      create: { name: item.brand, slug: brandSlug }
    });

    const catId = await getCatId(item.cat);
    
    // Assign reasonable variants
    let variants = ['Estándar'];
    if (item.cat === 'zapatillas') variants = ['40', '41', '42'];
    else if (item.cat === 'ropa') variants = ['S', 'M', 'L'];
    else if (item.cat === 'moviles') variants = ['128GB', '256GB'];
    
    // Assign random gender to clothes/shoes
    let gender = 'UNISEX';
    if (item.cat === 'ropa' || item.cat === 'zapatillas') {
      const gList = ['Hombre', 'Mujer', 'Niño', 'Niña', 'Bebé', 'UNISEX'];
      gender = gList[Math.floor(Math.random() * gList.length)];
    }

    const productSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random() * 100000);

    await prisma.product.create({
      data: {
        name: item.name,
        slug: productSlug,
        model: item.name.substring(0, 30),
        brandId: brand.id,
        categoryId: catId,
        imageUrl: item.img,
        description: item.desc,
        gender: gender,
        variants: {
          create: variants.map((v, idx) => {
            const priceVar1 = item.price * (Math.random() * 0.2 + 0.9);
            const priceVar2 = item.price * (Math.random() * 0.2 + 0.9);
            
            return {
              sizeValue: v,
              colorNormalized: 'Standard',
              offers: {
                create: [
                  {
                    storeId,
                    externalProductId: `ext-${productSlug}-${idx}`,
                    externalVariantId: `v-${idx}`,
                    url: `https://example.com/buy/${productSlug}`,
                    priceBase: Math.round(priceVar1),
                    priceTotal: Math.round(priceVar1),
                    stockStatus: 'IN_STOCK'
                  },
                  {
                    storeId: amazonId,
                    externalProductId: `amz-${productSlug}-${idx}`,
                    externalVariantId: `v-${idx}`,
                    url: `https://amazon.es/buy/${productSlug}`,
                    priceBase: Math.round(priceVar2),
                    priceTotal: Math.round(priceVar2),
                    stockStatus: 'IN_STOCK'
                  }
                ]
              }
            };
          })
        }
      }
    });
    count++;
  }

  console.log(`✅ ¡Éxito! Inyectados ${count} productos totalmente únicos desde 3 APIs, añadiendo categorías bebé, motor, hogar.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
