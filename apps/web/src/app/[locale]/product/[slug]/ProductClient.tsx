'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { trackEvent, getSessionId } from '@/lib/tracking';
import { formatPrice } from '@/lib/utils';

import { useLocale } from 'next-intl';

export function ProductClient({ product, sessionId: serverSessionId }: { product: any, sessionId?: string }) {
  const locale = useLocale();
  const variants = product.variants || [];
  const sizes = Array.from(new Set(variants.map((v: any) => v?.sizeValue).filter(Boolean))) as string[];
  const sortedSizes = sizes.sort((a, b) => {
     const numA = parseFloat(a);
     const numB = parseFloat(b);
     if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
     return a.localeCompare(b);
  });
  
  const [selectedSize, setSelectedSize] = useState<string>(sortedSizes[0] || '');

  const [clientSessionId, setClientSessionId] = useState<string>('');
  const [abVariant, setAbVariant] = useState<'A' | 'C'>('A');

  useEffect(() => {
    setClientSessionId(getSessionId());
    let stored = localStorage.getItem('abVariant') as 'A' | 'C';
    if (!stored || (stored !== 'A' && stored !== 'C')) {
      stored = Math.random() > 0.5 ? 'A' : 'C';
      localStorage.setItem('abVariant', stored);
    }
    setAbVariant(stored);
  }, []);

  const activeVariant = variants.find((v: any) => v.sizeValue === selectedSize);
  
  const offers = [...(activeVariant?.offers || [])].filter((a: any) => a.status === 'ACTIVE').sort((a: any, b: any) => {
    if (a.stockStatus === 'OUT_OF_STOCK') return 1;
    if (b.stockStatus === 'OUT_OF_STOCK') return -1;
    const priceA = a.priceTotal ?? a.priceBase;
    const priceB = b.priceTotal ?? b.priceBase;
    return priceA - priceB;
  });

  const bestOffer = offers.length > 0 && offers[0].stockStatus !== 'OUT_OF_STOCK' ? offers[0] : null;

  // Compute urgency signals based on market context
  const urgencyData = (() => {
    let increases = 0;
    const activeOffers = offers.filter(o => o.stockStatus !== 'OUT_OF_STOCK');
    
    let minPrice = Infinity;
    let maxPrice = -Infinity;

    activeOffers.forEach(offer => {
      const price = offer.priceTotal ?? offer.priceBase;
      if (price < minPrice) minPrice = price;
      if (price > maxPrice) maxPrice = price;

      if (offer.priceHistory && offer.priceHistory.length > 1) {
        const sorted = [...offer.priceHistory].sort((a:any, b:any) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
        const newest = sorted[0];
        const prev = sorted[1];
        
        const hoursSinceNewest = (Date.now() - new Date(newest.recordedAt).getTime()) / (1000 * 60 * 60);
        if (hoursSinceNewest <= 48) {
          const newPrice = newest.priceTotal ?? newest.priceBase;
          const oldPrice = prev.priceTotal ?? prev.priceBase;
          if (newPrice > oldPrice) {
            increases++;
          }
        }
      }
    });

    const dispersion = (maxPrice !== -Infinity && minPrice !== Infinity) ? maxPrice - minPrice : 0;
    
    let signalType: string | null = null;
    let message = null;

    if (increases >= 2) {
      signalType = 'price_increase';
      message = `${increases} tiendas han subido este precio recientemente`;
      if (dispersion > 10) {
        message += ` y hay hasta ${dispersion.toFixed(0)}€ de diferencia entre tiendas.`;
        signalType = 'price_increase_and_dispersion';
      }
    } else if (dispersion > 10) {
      signalType = 'high_dispersion';
      message = `Hay hasta ${dispersion.toFixed(0)}€ de diferencia entre tiendas.`;
    }

    return { increases, dispersion, signalType, message };
  })();

  // Analytics for Product View
  useEffect(() => {
    trackEvent({ 
      type: 'PRODUCT_VIEW', 
      productId: product.id,
      metadata: { abVariant, urgencySignal: urgencyData.signalType }
    });
  }, [product.id, abVariant, urgencyData.signalType]);

  // Analytics for Variant Select
  useEffect(() => {
    if (!selectedSize) return;
    const variant = product.variants.find((v: any) => v.sizeValue === selectedSize);
    if (variant) {
      trackEvent({ 
        type: 'VARIANT_SELECT', 
        productId: product.id, 
        variantId: variant.id, 
        metadata: { size: selectedSize, abVariant, urgencySignal: urgencyData.signalType } 
      });
    }
  }, [selectedSize, product.id, product.variants, abVariant, urgencyData.signalType]);

  // Calculate savings diff
  const savingsDiff = (() => {
    if (offers.length > 1 && bestOffer) {
      const secondOffer = offers[1];
      const diff = (secondOffer.priceTotal ?? secondOffer.priceBase) - (bestOffer.priceTotal ?? bestOffer.priceBase);
      if (diff > 0) return diff;
    }
    return 0;
  })();

  // Simple calculation to find the price drop
  let priceDropMessage = null;
  if (bestOffer && bestOffer.priceHistory?.length > 1) {
     const history = [...bestOffer.priceHistory].sort((a: any, b: any) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime());
     const oldestPrice = history[0].priceTotal ?? history[0].priceBase;
     const currentPrice = bestOffer.priceTotal ?? bestOffer.priceBase;
     if (currentPrice < oldestPrice) {
       const dropPct = Math.round(((oldestPrice - currentPrice) / oldestPrice) * 100);
       priceDropMessage = `Ahora está un ${dropPct}% por debajo de su precio habitual.`;
     }
  }

  // Handle Outbound Click Client-side tracking
  const handleOutboundClick = () => {
    if (bestOffer) {
       fetch('/api/track', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           type: 'OUTBOUND_CLICK',
           sessionId,
           productId: product.id,
           variantId: activeVariant?.id,
           offerId: bestOffer.id,
           storeId: bestOffer.storeId,
           metadata: { abVariant, urgencySignal: urgencyData.signalType }
         })
       }).catch(() => {});
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 md:py-16">
      {/* Upper Section */}
      <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
        
        <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
          {product.imageUrl && <Image src={product.imageUrl} alt={product.name} fill className="object-cover mix-blend-multiply" unoptimized />}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {product.brand?.slug ? (
            <Link href={`/${locale}/marca/${product.brand.slug}`} className="text-gray-500 font-semibold tracking-widest uppercase mb-2 text-sm hover:text-black transition-colors block w-max">
              {product.brand?.name}
            </Link>
          ) : (
            <p className="text-gray-500 font-semibold tracking-widest uppercase mb-2 text-sm">{product.brand?.name}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">{product.name}</h1>
          <div className="flex items-center gap-2 mb-8">
             <div className="flex text-black">★★★★★</div>
             <span className="text-sm text-gray-400 font-medium">(Valoración ficticia)</span>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-900">
                {product.category?.parent?.slug === 'perfumes' || product.category?.slug === 'perfumes' ? 'Selecciona tu tamaño' : 
                 product.category?.parent?.slug === 'electronica' || product.category?.slug === 'electronica' ? 'Selecciona tu capacidad' : 
                 'Selecciona tu talla'}
              </span>
              {activeVariant?.colorNormalized && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                  {product.category?.parent?.slug === 'perfumes' || product.category?.slug === 'perfumes' ? 'Versión:' : 'Color:'} <span className="text-black font-bold">{activeVariant.colorNormalized}</span>
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {sortedSizes.length > 0 ? sortedSizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 h-12 md:h-14 rounded-xl font-semibold text-base md:text-lg border transition-all min-w-[3rem] ${
                    selectedSize === size 
                    ? 'border-black bg-black text-white shadow-md scale-105' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              )) : (
                <span className="text-gray-400 font-medium">Sin stock de opciones</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Best Offer Section */}
      <div className="max-w-3xl mx-auto">
        
        {bestOffer ? (
          <div className="mb-12">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Precio para {selectedSize}
            </h2>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-black flex flex-col items-center justify-between gap-6 relative overflow-hidden group">
              
              <div className="flex flex-col text-center w-full animate-fade-in">
                <span className="text-sm font-bold px-4 py-1.5 bg-black text-white rounded-full mb-6 inline-block w-max mx-auto shadow-sm">
                  🥇 MEJOR OFERTA
                </span>
                
                <div className="flex flex-col items-center justify-center mb-6">
                   <span className="font-black text-6xl md:text-7xl tracking-tight mb-2">{formatPrice(bestOffer.priceTotal ?? bestOffer.priceBase)}</span>
                   <span className="text-base text-gray-800 font-bold bg-yellow-100 px-3 py-1 rounded-md">PRECIO FINAL (ENVÍO INCLUIDO)</span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 w-full md:w-1/2 mx-auto mb-6 text-sm md:text-base border border-gray-200">
                  <p className="font-bold text-gray-700 mb-2">Desglose:</p>
                  <div className="flex justify-between items-center text-gray-600 mb-1">
                    <span>Producto:</span>
                    <span className="font-semibold">{formatPrice(bestOffer.priceBase)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 border-b border-gray-200 pb-2 mb-2">
                    <span>Envío:</span>
                    <span className="font-semibold">
                      {bestOffer.priceShipping === null ? 'Consultar' : formatPrice(bestOffer.priceShipping)}
                    </span>
                  </div>
                </div>

                {savingsDiff > 0 && (
                  <div className="mb-4 flex items-center justify-center gap-2 text-green-700 font-bold bg-green-50 px-4 py-2 rounded-lg w-max mx-auto border border-green-200">
                    💡 Ahorras {formatPrice(savingsDiff)}
                  </div>
                )}

                {/* Variante C Context Block */}
                {abVariant === 'C' && urgencyData.signalType && urgencyData.message && (
                  <div className="mb-6 flex items-center justify-center gap-2 text-gray-600 font-medium bg-gray-50 px-4 py-2 rounded-lg w-max mx-auto border border-gray-200 text-sm">
                    <span>ℹ️</span>
                    <span>{urgencyData.message}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-center w-full gap-4 pt-4 border-t border-gray-100">
                <a 
                  href={`/api/outbound?offerId=${bestOffer.id}&sessionId=${clientSessionId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-5 rounded-full font-black text-xl w-full md:w-2/3 text-center hover:bg-gray-800 transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex justify-center items-center gap-3"
                >
                  IR A COMPRAR
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <p className="text-xs text-gray-400 mt-2 text-center max-w-sm">
                  Al hacer clic y comprar a través de nuestros enlaces, podemos recibir una pequeña comisión de afiliado sin coste adicional para ti. Mantenemos el ranking de ofertas estrictamente ordenado por precio.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-12 text-center p-8 bg-gray-100 rounded-2xl border border-gray-200">
             <h2 className="text-xl font-bold text-gray-700 mb-2">Sin stock disponible</h2>
             <p className="text-gray-500">No hemos encontrado ninguna oferta disponible para la opción {selectedSize} en este momento.</p>
          </div>
        )}

        {/* Comparison Table */}
        <h2 className="text-lg font-bold mb-4 px-2">Comparar todas las tiendas</h2>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-xs">Tienda</th>
                  <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-right">Precio</th>
                  <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-right">Envío</th>
                  <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-right">Total</th>
                  <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-xs text-center">Estado</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {offers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 font-medium">
                      No hay ofertas registradas para esta talla.
                    </td>
                  </tr>
                ) : (
                  offers.map((offer: any) => (
                    <tr key={offer.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4 font-bold text-gray-900">{offer.store.name}</td>
                      <td className="px-6 py-4 font-medium text-gray-600 text-right">{formatPrice(offer.priceBase)}</td>
                      <td className="px-6 py-4 font-medium text-gray-500 text-right">
                        {offer.priceShipping === null ? '—' : formatPrice(offer.priceShipping)}
                      </td>
                      <td className="px-6 py-4 font-black text-lg text-right">
                        {offer.priceTotal ? formatPrice(offer.priceTotal) : formatPrice(offer.priceBase)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {offer.stockStatus === 'OUT_OF_STOCK' ? (
                          <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded-md text-xs">Agotado</span>
                        ) : (
                          <span className="text-green-700 font-bold bg-green-50 px-2 py-1 rounded-md text-xs">Disponible</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                         <a href={`/api/outbound?offerId=${offer.id}&sessionId=${clientSessionId}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-bold text-xs transition-colors ${offer.stockStatus === 'OUT_OF_STOCK' ? 'bg-gray-100 text-gray-400 pointer-events-none' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                            Ver oferta
                         </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price History Simple Graph */}
        {bestOffer && bestOffer.priceHistory?.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
             <h3 className="text-lg font-bold mb-6">Historial de precio</h3>
             {priceDropMessage && (
               <div className="mb-6 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                 </svg>
                 {priceDropMessage}
               </div>
             )}
             
             <div className="relative h-32 w-full flex items-end justify-between border-b border-gray-200 pb-2">
                {/* Pseudo-graph using CSS height based on max price */}
                {(() => {
                   const maxPrice = Math.max(...bestOffer.priceHistory.map((h:any) => h.priceTotal ?? h.priceBase)) * 1.1; // Add 10% padding
                   return bestOffer.priceHistory.slice(-10).map((h:any, i:number) => {
                      const price = h.priceTotal ?? h.priceBase;
                      const heightPct = (price / maxPrice) * 100;
                      return (
                         <div key={h.id} className="flex flex-col items-center group w-full relative">
                            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                               {formatPrice(price)}
                            </div>
                            <div className="w-1/2 md:w-3/4 bg-gray-200 group-hover:bg-black transition-colors rounded-t-sm" style={{ height: `${heightPct}%` }}></div>
                         </div>
                      );
                   });
                })()}
             </div>
             <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium px-1">
                <span>Antiguo</span>
                <span>Reciente</span>
             </div>
          </div>
        )}

      </div>
    </main>
  );
}
