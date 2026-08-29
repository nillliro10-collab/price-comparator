import { prisma } from '@price-comparator/database/src/index';

export const dynamic = 'force-dynamic';
export default async function CommercialDashboardPage() {
  const [
    totalViews,
    totalOfferViews, // Currently we don't have explicit offer views, using product views as proxy
    totalClicks,
    totalConversions,
    totalRevenue,
    totalCommission
  ] = await Promise.all([
    prisma.analyticsEvent.count({ where: { type: 'PRODUCT_VIEW' } }),
    prisma.analyticsEvent.count({ where: { type: 'VARIANT_SELECT' } }),
    prisma.analyticsEvent.count({ where: { type: 'OUTBOUND_CLICK' } }),
    prisma.affiliateConversion.count({ where: { status: 'CONFIRMED' } }),
    prisma.affiliateConversion.aggregate({ _sum: { orderValue: true }, where: { status: 'CONFIRMED' } }),
    prisma.affiliateConversion.aggregate({ _sum: { commission: true }, where: { status: 'CONFIRMED' } })
  ]);

  const ctr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(2) : '0';
  const cvr = totalClicks > 0 ? ((totalConversions / totalClicks) * 100).toFixed(2) : '0';
  const epc = totalClicks > 0 ? ((totalCommission._sum.commission || 0) / totalClicks).toFixed(2) : '0';

  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Rendimiento Comercial (Sprint 8)</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Product Views</p>
            <p className="text-4xl font-black">{totalViews}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Outbound Clicks</p>
            <p className="text-4xl font-black">{totalClicks}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <p className="text-blue-800 text-sm font-bold uppercase tracking-wider">Outbound CTR</p>
            <p className="text-4xl font-black text-blue-900">{ctr}%</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Conversiones</p>
            <p className="text-4xl font-black">{totalConversions}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <p className="text-purple-800 text-sm font-bold uppercase tracking-wider">Conversion Rate (CVR)</p>
            <p className="text-4xl font-black text-purple-900">{cvr}%</p>
            <p className="text-xs text-purple-600 mt-1">Ventas por cada 100 clicks</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <p className="text-green-800 text-sm font-bold uppercase tracking-wider">Revenue Generado</p>
            <p className="text-4xl font-black text-green-700">€{(totalRevenue._sum.orderValue || 0).toFixed(2)}</p>
            <p className="text-xs text-green-600 mt-1">Valor total de los pedidos</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl border border-green-300">
            <p className="text-green-900 text-sm font-bold uppercase tracking-wider">Comisión Atribuida</p>
            <p className="text-5xl font-black text-green-800">€{(totalCommission._sum.commission || 0).toFixed(2)}</p>
            <p className="text-xs text-green-700 mt-1">EPC (Earnings per Click): €{epc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
