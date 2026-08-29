import { NextResponse } from 'next/server';
import { prisma } from '@price-comparator/database/src/index';

// Generic Webhook for Affiliate Networks (e.g. Server-to-Server Postback)
// Expected to be called by Awin, TradeDoubler, etc., when a sale is confirmed.
export async function POST(request: Request) {
  try {
    // 1. Authentication (e.g. validate IP, secret token, or signature)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.AFFILIATE_WEBHOOK_SECRET || 'secret123'}`) {
      // In production, strictly enforce this
      // return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Standardize incoming data (each network has a different format, we assume a unified one for this demo)
    const { 
      network, 
      transactionId, 
      clickId, // This is our internal AnalyticsEvent.id
      commission,
      orderValue,
      currency = 'EUR',
      status = 'CONFIRMED'
    } = body;

    if (!clickId || !network || !transactionId) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // 2. Resolve Attribution
    // Find the original outbound click
    const clickEvent = await prisma.analyticsEvent.findUnique({
      where: { id: clickId }
    });

    if (!clickEvent || clickEvent.type !== 'OUTBOUND_CLICK') {
      return NextResponse.json({ error: 'Invalid clickId' }, { status: 400 });
    }

    // 3. Record Conversion (Idempotent)
    const conversion = await prisma.affiliateConversion.upsert({
      where: { externalTransactionId: transactionId },
      create: {
        network,
        storeId: clickEvent.storeId!,
        offerId: clickEvent.offerId,
        clickId: clickEvent.id,
        externalTransactionId: transactionId,
        status,
        orderValue,
        commission,
        currency,
        occurredAt: new Date(),
        confirmedAt: status === 'CONFIRMED' ? new Date() : null,
        rawPayload: JSON.stringify(body)
      },
      update: {
        status,
        orderValue,
        commission,
        confirmedAt: status === 'CONFIRMED' ? new Date() : null,
        rawPayload: JSON.stringify(body)
      }
    });

    return NextResponse.json({ success: true, conversionId: conversion.id });

  } catch (error) {
    console.error('Affiliate webhook error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
