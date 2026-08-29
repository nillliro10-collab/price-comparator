import { NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simplistic validation
    if (!body.type || !['SEARCH', 'PRODUCT_VIEW', 'VARIANT_SELECT', 'OFFER_VIEW', 'OUTBOUND_CLICK'].includes(body.type)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    await prisma.analyticsEvent.create({
      data: {
        type: body.type,
        sessionId: body.sessionId || null,
        productId: body.productId || null,
        variantId: body.variantId || null,
        offerId: body.offerId || null,
        storeId: body.storeId || null,
        metadata: body.metadata ? JSON.stringify(body.metadata) : null,
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
