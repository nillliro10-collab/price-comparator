import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

export async function GET(req: NextRequest) {
  try {
    const runs = await prisma.syncRun.findMany({
      orderBy: { startedAt: 'desc' },
      take: 20,
      include: {
        store: {
          select: { name: true }
        }
      }
    });

    return NextResponse.json(runs, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
