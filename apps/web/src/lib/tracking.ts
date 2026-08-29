export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sessionId = sessionStorage.getItem('al_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('al_session_id', sessionId);
  }
  return sessionId;
}

export async function trackEvent(payload: {
  type: string;
  productId?: string;
  variantId?: string;
  offerId?: string;
  storeId?: string;
  metadata?: any;
}) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        sessionId: getSessionId(),
      }),
    });
  } catch (e) {
    // Ignore tracking failures
  }
}
