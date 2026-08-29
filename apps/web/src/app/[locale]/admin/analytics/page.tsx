import { prisma } from '@price-comparator/database/src/index';

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage({ searchParams }: { searchParams: Promise<{ type?: string, storeId?: string }> }) {
  const { type, storeId } = await searchParams;
  
  const whereClause: any = {};
  if (type) whereClause.type = type;
  if (storeId) whereClause.storeId = storeId;

  const [events, totalViews, totalClicks] = await Promise.all([
    prisma.analyticsEvent.findMany({
      where: whereClause,
      take: 100,
      orderBy: { createdAt: 'desc' },
      include: {
        product: true,
        variant: true,
        store: true
      }
    }),
    prisma.analyticsEvent.count({ where: { type: 'PRODUCT_VIEW' } }),
    prisma.analyticsEvent.count({ where: { type: 'OUTBOUND_CLICK' } })
  ]);

  const ctr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : '0.0';

  const stores = await prisma.store.findMany();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black">Visor de Eventos (Analytics)</h1>
          <p className="text-gray-500 mt-2">Correlación de eventos por sesión y conversión</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center min-w-[120px]">
            <div className="text-sm text-blue-800 font-bold">Vistas</div>
            <div className="text-2xl font-black text-blue-900">{totalViews}</div>
          </div>
          <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center min-w-[120px]">
            <div className="text-sm text-green-800 font-bold">Clics Salida</div>
            <div className="text-2xl font-black text-green-900">{totalClicks}</div>
          </div>
          <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl text-center min-w-[120px]">
            <div className="text-sm text-purple-800 font-bold">CTR Global</div>
            <div className="text-2xl font-black text-purple-900">{ctr}%</div>
          </div>
        </div>
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded-xl flex gap-4 items-end">
        <form className="flex gap-4 items-end" method="GET">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Tipo de Evento</label>
            <select name="type" defaultValue={type || ''} className="px-3 py-2 border border-gray-300 rounded text-sm">
              <option value="">Todos</option>
              <option value="PRODUCT_VIEW">PRODUCT_VIEW</option>
              <option value="VARIANT_SELECT">VARIANT_SELECT</option>
              <option value="OUTBOUND_CLICK">OUTBOUND_CLICK</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Tienda</label>
            <select name="storeId" defaultValue={storeId || ''} className="px-3 py-2 border border-gray-300 rounded text-sm">
              <option value="">Todas</option>
              {stores.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 text-sm font-bold rounded-lg hover:bg-gray-800">
            Filtrar
          </button>
          <a href="/admin/analytics" className="text-gray-500 text-sm font-bold hover:underline px-2">Limpiar</a>
        </form>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Timestamp</th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Tipo</th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Session ID</th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Product ID</th>
                <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Store ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {events.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No hay eventos registrados
                  </td>
                </tr>
              ) : (
                events.map(event => (
                  <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-500">
                      {new Date(event.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        event.type === 'OUTBOUND_CLICK' ? 'bg-green-100 text-green-800' :
                        event.type === 'PRODUCT_VIEW' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-600 font-mono text-xs">{event.sessionId || '-'}</td>
                    <td className="px-6 py-3 text-gray-600 font-mono text-xs">{event.productId || '-'}</td>
                    <td className="px-6 py-3 text-gray-600 font-mono text-xs">{event.storeId || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
