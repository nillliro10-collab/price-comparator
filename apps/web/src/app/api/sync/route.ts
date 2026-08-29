import { NextRequest, NextResponse } from 'next/server';
import { DirectSyncExecutor } from '@price-comparator/core/src/execution/DirectSyncExecutor';

export async function POST(req: NextRequest) {
  try {
    // In a real app, verify admin session here.
    const { storeId } = await req.json();

    if (!storeId) {
      return NextResponse.json({ error: 'storeId is required' }, { status: 400 });
    }

    const executor = new DirectSyncExecutor();
    
    // We execute it directly (synchronous wait for MVP, returning result when done)
    // The CTO wants it durable later, but this fits the "DirectSyncExecutor" spec for MVP
    const result = await executor.execute(storeId);

    if (result.status === 'REJECTED') {
      return NextResponse.json(result, { status: 409 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
