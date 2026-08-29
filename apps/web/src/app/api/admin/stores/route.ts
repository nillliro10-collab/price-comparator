import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

export async function GET(req: NextRequest) {
  try {
    const stores = await prisma.store.findMany({
      include: {
        syncRuns: {
          orderBy: { startedAt: 'desc' },
          take: 5
        }
      }
    });

    return NextResponse.json(stores, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
