import { NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

// Simple in-memory rate limiting map for basic protection
const rateLimit = new Map<string, { count: number, resetAt: number }>();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offerId = searchParams.get('offerId');
  const sessionId = searchParams.get('sessionId');
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  // 1. Rate Limiting Protection (Anti-Bot / Anti-Scraping)
  const now = Date.now();
  const rl = rateLimit.get(ip) || { count: 0, resetAt: now + 60000 };
  if (now > rl.resetAt) {
    rl.count = 0;
    rl.resetAt = now + 60000;
  }
  rl.count++;
  rateLimit.set(ip, rl);

  if (rl.count > 30) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // 2. Input Validation
  if (!offerId || !sessionId) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    // 3. Find Offer and Validate Status (ACTIVE)
    const offer = await prisma.offer.findUnique({
      where: { id: offerId },
      include: {
        store: true,
        variant: { include: { product: true } }
      }
    });

    if (!offer) {
      return NextResponse.json({ error: 'Offer not found' }, { status: 404 });
    }

    if (!offer.store.isActive || !offer.url || offer.status !== 'ACTIVE' || offer.store.isDemo) {
      console.warn('Outbound click to inactive, missing, or demo store', { storeId: offer.storeId, offerId: offer.id, isDemo: offer.store.isDemo });
      return NextResponse.redirect(new URL(`/fallback?productId=${offer.variant.productId}`, request.url), 302);
    }

    // 4. Create Analytics Event (Generating clickId)
    // We create the event FIRST so we get a persistent, unique clickId for attribution
    const analyticsEvent = await prisma.analyticsEvent.create({
      data: {
        type: 'OUTBOUND_CLICK',
        sessionId,
        productId: offer.variant.productId,
        variantId: offer.variantId,
        offerId: offer.id,
        storeId: offer.storeId,
        metadata: JSON.stringify({
          source: 'api_outbound',
          userAgent: request.headers.get('user-agent'),
        })
      }
    });

    const clickId = analyticsEvent.id;
    let targetUrl = offer.url;

    // 5. Commercial Affiliate Tracking
    const store = offer.store;
    if (store.trackingEnabled && store.deeplinkTemplate) {
      // Replace placeholders
      // Example template: "https://awin.com/click?id={programId}&url={encodedUrl}&clickref={clickId}"
      targetUrl = store.deeplinkTemplate
        .replace('{programId}', store.programId || '')
        .replace('{encodedUrl}', encodeURIComponent(offer.url))
        .replace('{url}', encodeURIComponent(offer.url))
        .replace('{clickId}', clickId);
    }

    // 6. Sanitizar y validar URL final
    try {
      const finalUrl = new URL(targetUrl);
      if (finalUrl.protocol !== 'http:' && finalUrl.protocol !== 'https:') {
        throw new Error('Invalid protocol');
      }
      return NextResponse.redirect(finalUrl.toString(), 302);
    } catch (e) {
      console.warn('Attempted to redirect to invalid URL', { targetUrl });
      return NextResponse.json({ error: 'Invalid destination URL' }, { status: 400 });
    }
    
  } catch (error) {
    console.error('Outbound tracking error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
