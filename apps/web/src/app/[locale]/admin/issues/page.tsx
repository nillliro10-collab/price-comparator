import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IssuesPage() {
  const syncErrors = await prisma.syncError.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: { store: true }
  });

  const brokenOffers = await prisma.offer.findMany({
    where: { status: 'STALE' },
    take: 50,
    include: { store: true, variant: { include: { product: true } } }
  });

  const brokenStores = await prisma.store.findMany({
    where: {
      OR: [
        { isActive: false },
        { offers: { none: { status: 'ACTIVE' } } }
      ]
    }
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">Registro de Problemas (Issues)</h1>
        <p className="text-gray-500">Supervisión de errores de importación y catálogo.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Sync Errors */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🚨</span> Errores de Importación (Últimos 50)
          </h2>
          <div className="bg-white rounded-xl border border-red-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-50 border-b border-red-100">
                  <tr>
                    <th className="px-4 py-3 font-bold text-red-900 uppercase text-xs">Tienda</th>
                    <th className="px-4 py-3 font-bold text-red-900 uppercase text-xs">Error</th>
                    <th className="px-4 py-3 font-bold text-red-900 uppercase text-xs">Mensaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-50">
                  {syncErrors.length === 0 ? (
                    <tr><td colSpan={3} className="px-4 py-8 text-center text-gray-500">No hay errores recientes</td></tr>
                  ) : (
                    syncErrors.map(err => (
                      <tr key={err.id} className="hover:bg-red-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">{err.store.name}</td>
                        <td className="px-4 py-3 font-mono text-xs text-red-600">{err.errorCode}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs truncate max-w-[200px]" title={err.message}>
                          {err.message}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Broken Offers */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>⚠️</span> Ofertas Rotas / STALE (Últimas 50)
          </h2>
          <div className="bg-white rounded-xl border border-yellow-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-yellow-50 border-b border-yellow-100">
                  <tr>
                    <th className="px-4 py-3 font-bold text-yellow-900 uppercase text-xs">Tienda</th>
                    <th className="px-4 py-3 font-bold text-yellow-900 uppercase text-xs">Producto</th>
                    <th className="px-4 py-3 font-bold text-yellow-900 uppercase text-xs">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-50">
                  {brokenOffers.length === 0 ? (
                    <tr><td colSpan={3} className="px-4 py-8 text-center text-gray-500">El catálogo está sano</td></tr>
                  ) : (
                    brokenOffers.map(offer => (
                      <tr key={offer.id} className="hover:bg-yellow-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">{offer.store.name}</td>
                        <td className="px-4 py-3">
                          <Link href={`/product/${offer.variant.product.slug}`} className="text-blue-600 hover:underline">
                            {offer.variant.product.name}
                          </Link>
                        </td>
                        <td className="px-4 py-3 font-bold text-yellow-700">{offer.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Broken Stores */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🔴</span> Tiendas Problemáticas (Inactivas o con 0 ofertas)
          </h2>
          <div className="bg-white rounded-xl border border-orange-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-orange-50 border-b border-orange-100">
                  <tr>
                    <th className="px-4 py-3 font-bold text-orange-900 uppercase text-xs">Tienda</th>
                    <th className="px-4 py-3 font-bold text-orange-900 uppercase text-xs">Estado</th>
                    <th className="px-4 py-3 font-bold text-orange-900 uppercase text-xs">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {brokenStores.length === 0 ? (
                    <tr><td colSpan={3} className="px-4 py-8 text-center text-gray-500">Todas las tiendas operativas</td></tr>
                  ) : (
                    brokenStores.map(store => (
                      <tr key={store.id} className="hover:bg-orange-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">{store.name}</td>
                        <td className="px-4 py-3 font-bold text-orange-700">
                          {!store.isActive ? 'INACTIVA' : '0 OFERTAS ACTIVAS'}
                        </td>
                        <td className="px-4 py-3">
                          <Link href={`/admin/stores/${store.id}`} className="text-blue-600 hover:underline font-bold text-xs">
                            Ir a arreglar ↗
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
