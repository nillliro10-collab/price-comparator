import { NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database';

export async function GET() {
  try {
    const totalProducts = await prisma.product.count();
    const totalOffers = await prisma.offer.count();
    
    const stores = await prisma.store.findMany();
    const activeStores = stores.filter(s => s.syncEnabled);
    
    const now = new Date();
    let staleCount = 0;
    
    for (const store of activeStores) {
      if (!store.lastSuccessfulSyncAt) {
        staleCount++;
        continue;
      }
      const msSinceLastSync = now.getTime() - store.lastSuccessfulSyncAt.getTime();
      const minutesSinceLastSync = msSinceLastSync / 60000;
      if (minutesSinceLastSync > store.syncInterval * 1.5) {
        staleCount++;
      }
    }

    const healthyCount = activeStores.length - staleCount;

    // Last 24h Syncs
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const recentSyncs = await prisma.syncRun.findMany({
      where: { startedAt: { gte: yesterday } }
    });
    
    const syncs24h = {
      total: recentSyncs.length,
      success: recentSyncs.filter(s => s.status === 'SUCCESS').length,
      partial: recentSyncs.filter(s => s.status === 'PARTIAL_SUCCESS').length,
      failed: recentSyncs.filter(s => s.status === 'FAILED').length,
    };
    
    // Data Quality
    const totalReceived = recentSyncs.reduce((sum, s) => sum + s.itemsReceived, 0);
    const missingSku = recentSyncs.reduce((sum, s) => sum + s.missingSkuCount, 0);
    const invalidPrice = recentSyncs.reduce((sum, s) => sum + s.invalidPriceCount, 0);
    const outOfStock = recentSyncs.reduce((sum, s) => sum + s.outOfStockCount, 0);
    
    const dataQuality = {
      overall: totalReceived > 0 ? ((totalReceived - missingSku - invalidPrice) / totalReceived * 100).toFixed(1) : '100',
      missingSkuRate: totalReceived > 0 ? (missingSku / totalReceived * 100).toFixed(1) : '0',
      invalidPriceRate: totalReceived > 0 ? (invalidPrice / totalReceived * 100).toFixed(1) : '0',
      outOfStockRate: totalReceived > 0 ? (outOfStock / totalReceived * 100).toFixed(1) : '0'
    };
    
    // Matching Quality (From RawOffers created in last 24h)
    const recentRawOffers = await prisma.rawOffer.findMany({
      where: { createdAt: { gte: yesterday } },
      select: { confidence: true }
    });
    
    const matchedCount = recentRawOffers.filter(r => r.confidence !== 'LOW').length;
    const matchConfidence = recentRawOffers.length > 0 
      ? (matchedCount / recentRawOffers.length * 100).toFixed(1)
      : '100';

    return NextResponse.json({
      platform: {
        activeStores: activeStores.length,
        healthyStores: healthyCount,
        staleStores: staleCount,
        products: totalProducts,
        offers: totalOffers
      },
      last24h: syncs24h,
      dataQuality: {
        ...dataQuality,
        matchingConfidence: matchConfidence
      }
    });

  } catch (error: any) {
    console.error('Error fetching platform health:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
