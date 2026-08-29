import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

export async function GET(
  req: NextRequest,
  { params }: { params: { runId: string } }
) {
  try {
    const run = await prisma.syncRun.findUnique({
      where: { id: params.runId },
      include: {
        syncErrors: true
      }
    });

    if (!run) {
      return NextResponse.json({ error: 'Run not found' }, { status: 404 });
    }

    return NextResponse.json(run, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
