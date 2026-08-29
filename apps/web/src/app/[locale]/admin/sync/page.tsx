import { prisma } from '@price-comparator/database/src/index';

export default async function SyncDashboardPage() {
  const [
    totalProducts,
    totalVariants,
    activeOffers,
    staleOffers,
    totalMerchants,
    matchesHigh,
    matchesMedium,
    matchesLow
  ] = await Promise.all([
    prisma.product.count(),
    prisma.variant.count(),
    prisma.offer.count({ where: { status: 'ACTIVE' } }),
    prisma.offer.count({ where: { status: 'STALE' } }),
    prisma.store.count(),
    prisma.matchingDecision.count({ where: { confidenceLevel: 'HIGH' } }),
    prisma.matchingDecision.count({ where: { confidenceLevel: 'MEDIUM' } }),
    prisma.matchingDecision.count({ where: { confidenceLevel: 'LOW' } })
  ]);

  const totalMatches = matchesHigh + matchesMedium + matchesLow;
  const pctHigh = totalMatches > 0 ? ((matchesHigh / totalMatches) * 100).toFixed(1) : '0';
  const pctMedium = totalMatches > 0 ? ((matchesMedium / totalMatches) * 100).toFixed(1) : '0';
  const pctLow = totalMatches > 0 ? ((matchesLow / totalMatches) * 100).toFixed(1) : '0';

  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Catalog Health (Sprint 7)</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Productos</p>
            <p className="text-4xl font-black">{totalProducts}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Variantes</p>
            <p className="text-4xl font-black">{totalVariants}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-green-600 text-sm font-bold uppercase tracking-wider">Ofertas Activas</p>
            <p className="text-4xl font-black text-green-700">{activeOffers}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Merchants</p>
            <p className="text-4xl font-black">{totalMerchants}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Calidad de Matching (Historical)</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <p className="text-green-800 text-sm font-bold uppercase tracking-wider">Match HIGH</p>
            <p className="text-3xl font-black text-green-700">{pctHigh}%</p>
            <p className="text-xs text-green-600 mt-1">({matchesHigh} operaciones)</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <p className="text-yellow-800 text-sm font-bold uppercase tracking-wider">Match MEDIUM</p>
            <p className="text-3xl font-black text-yellow-700">{pctMedium}%</p>
            <p className="text-xs text-yellow-600 mt-1">({matchesMedium} revisiones)</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
            <p className="text-red-800 text-sm font-bold uppercase tracking-wider">Match LOW (Separado)</p>
            <p className="text-3xl font-black text-red-700">{pctLow}%</p>
            <p className="text-xs text-red-600 mt-1">({matchesLow} splits)</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-300">
            <p className="text-gray-600 text-sm font-bold uppercase tracking-wider">STALE Offers</p>
            <p className="text-3xl font-black text-gray-800">{staleOffers}</p>
            <p className="text-xs text-gray-500 mt-1">Esperando Expiración</p>
          </div>
        </div>
      </div>
    </div>
  );
}
