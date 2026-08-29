import { prisma } from "@price-comparator/database/src/index";
import { runAutoImport } from "@price-comparator/core/src/importer/autoImport";
import { NextResponse } from "next/server";

export async function GET() {
  const stores = await prisma.store.findMany({
    where: { isActive: true, feedUrl: { not: null } },
  });

  const results = [];

  for (const store of stores) {
    if (!store.feedUrl) continue;
    
    try {
      const result = await runAutoImport(store);
      results.push({ store: store.name, ...result });
    } catch (e: any) {
      results.push({ store: store.name, error: String(e.message || e) });
    }
  }

  return NextResponse.json(results);
}
