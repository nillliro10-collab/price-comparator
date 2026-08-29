import { prisma } from '@price-comparator/database/src/index';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const [
    productsCount,
    offersCount,
    storesCount,
    productViewsCount,
    outboundClicksCount,
    // Quality Metrics
    brokenOffers,
    inactiveStoresWithOffers,
    missingImageProducts
  ] = await Promise.all([
    prisma.product.count(),
    prisma.offer.count(),
    prisma.store.count(),
    prisma.analyticsEvent.count({ where: { type: 'PRODUCT_VIEW' } }),
    prisma.analyticsEvent.count({ where: { type: 'OUTBOUND_CLICK' } }),
    // Quality
    prisma.offer.count({ where: { status: 'STALE' } }),
    prisma.store.count({ where: { isActive: false, offers: { some: {} } } }),
    prisma.product.count({ where: { imageUrl: null } })
  ]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-black mb-8">Cockpit (Fase 1: Visibilidad)</h1>
      
      {/* Alertas de Negocio Críticas */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Alertas Críticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4">
             <div className="text-3xl">🚨</div>
             <div>
                <p className="text-red-900 font-bold">Ofertas STALE / Rotas</p>
                <p className="text-red-700 font-black text-2xl">{brokenOffers}</p>
             </div>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-4">
             <div className="text-3xl">🚨</div>
             <div>
                <p className="text-red-900 font-bold">Tiendas Inactivas (con offers)</p>
                <p className="text-red-700 font-black text-2xl">{inactiveStoresWithOffers}</p>
             </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex items-center gap-4">
             <div className="text-3xl">⚠️</div>
             <div>
                <p className="text-yellow-900 font-bold">Productos sin imagen</p>
                <p className="text-yellow-700 font-black text-2xl">{missingImageProducts}</p>
             </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Volumen Total</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Productos Totales</p>
          <p className="text-4xl font-black">{productsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Offers (Precios)</p>
          <p className="text-4xl font-black">{offersCount}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Tiendas Conectadas</p>
          <p className="text-4xl font-black">{storesCount}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">Métricas de Negocio</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <p className="text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">Product Views</p>
          <p className="text-4xl font-black text-blue-900">{productViewsCount}</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm">
          <p className="text-green-800 text-xs font-bold uppercase tracking-wider mb-2">Outbound Clicks (Afiliación)</p>
          <p className="text-4xl font-black text-green-900">{outboundClicksCount}</p>
        </div>
      </div>
    </div>
  );
}
