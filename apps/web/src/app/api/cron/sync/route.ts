import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';
import { DirectSyncExecutor } from '@price-comparator/core/src/execution/DirectSyncExecutor';

export async function POST(req: NextRequest) {
  try {
    // 1. Simple Security for Cron Jobs
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Find Stores that need sync
    const activeStores = await prisma.store.findMany({
      where: { syncEnabled: true }
    });

    const executor = new DirectSyncExecutor();
    const results = [];

    const now = new Date();

    for (const store of activeStores) {
      const lastSync = store.lastSuccessfulSyncAt || new Date(0);
      const minutesSinceLastSync = (now.getTime() - lastSync.getTime()) / (1000 * 60);

      // Only run if it has been longer than the syncInterval
      if (minutesSinceLastSync >= store.syncInterval) {
        try {
          // Syncs are run sequentially in the MVP cron
          const res = await executor.execute(store.id);
          results.push({ storeId: store.id, ...res });
        } catch (e: any) {
          results.push({ storeId: store.id, status: 'FAILED', error: e.message });
        }
      } else {
        results.push({ storeId: store.id, status: 'SKIPPED', reason: 'Fresh' });
      }
    }

    return NextResponse.json({ processed: results.length, results }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
