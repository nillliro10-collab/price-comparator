import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function runCommercialTest() {
  console.log('--- STARTING COMMERCIAL FUNNEL TEST ---');
  
  // 1. Ensure we have an active affiliate store with tracking enabled
  let store = await prisma.store.findFirst({ where: { name: 'Foot Locker Affiliate Demo' } });
  if (!store) {
    store = await prisma.store.create({
      data: {
        name: 'Foot Locker Affiliate Demo',
        slug: 'foot-locker-aff-demo',
        websiteUrl: 'https://footlocker.es',
        isActive: true,
        affiliateNetwork: 'AWIN',
        programId: '12345',
        trackingEnabled: true,
        deeplinkTemplate: 'https://awin.com/click?id={programId}&url={encodedUrl}&clickref={clickId}'
      }
    });
  }

  // 2. Find an active offer and bind it to this store for testing
  const offer = await prisma.offer.findFirst({ where: { status: 'ACTIVE' }, include: { variant: true } });
  if (!offer) {
    console.log('❌ No active offers found to test.');
    return;
  }

  await prisma.offer.update({
    where: { id: offer.id },
    data: { storeId: store.id }
  });

  console.log(`✅ Bound offer ${offer.id} to Affiliate Store.`);

  // 3. Simulate OUTBOUND_CLICK (like the GET /api/outbound does)
  const clickEvent = await prisma.analyticsEvent.create({
    data: {
      type: 'OUTBOUND_CLICK',
      sessionId: 'demo-session-123',
      productId: offer.variant.productId,
      variantId: offer.variantId,
      offerId: offer.id,
      storeId: store.id,
      metadata: JSON.stringify({ source: 'api_outbound_test' })
    }
  });

  console.log(`✅ Generated clickId (AnalyticsEvent ID): ${clickEvent.id}`);

  // 4. Simulate Webhook receiving a conversion
  const txId = `TX-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const conversionData = {
    network: 'AWIN',
    transactionId: txId,
    clickId: clickEvent.id,
    commission: 12.50,
    orderValue: 120.00,
    status: 'CONFIRMED'
  };

  const conversion = await prisma.affiliateConversion.create({
    data: {
      network: conversionData.network,
      storeId: store.id,
      offerId: offer.id,
      clickId: conversionData.clickId,
      externalTransactionId: conversionData.transactionId,
      status: conversionData.status,
      orderValue: conversionData.orderValue,
      commission: conversionData.commission,
      occurredAt: new Date(),
      confirmedAt: new Date(),
      rawPayload: JSON.stringify(conversionData)
    }
  });

  console.log(`✅ Conversion tracked successfully! Revenue: €${conversion.orderValue}, Commission: €${conversion.commission}`);
  
  // Verify Dashboard queries
  const totalCommission = await prisma.affiliateConversion.aggregate({ _sum: { commission: true }, where: { status: 'CONFIRMED' } });
  console.log(`💰 Total Commission in DB: €${totalCommission._sum.commission}`);
}

runCommercialTest().catch(console.error).finally(() => prisma.$disconnect());
