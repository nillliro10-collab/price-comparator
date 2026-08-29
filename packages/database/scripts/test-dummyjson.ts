import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Fetching products from DummyJSON...');
  
  const res = await fetch('https://dummyjson.com/products?limit=0');
  const data = (await res.json()) as any;
  const products = data.products;

  console.log(`Fetched ${products.length} products. Grouping by category...`);

  const categoryCounts: Record<string, number> = {};
  for (const p of products) {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  }
  console.log(categoryCounts);
}

main().catch(console.error).finally(() => prisma.$disconnect());
