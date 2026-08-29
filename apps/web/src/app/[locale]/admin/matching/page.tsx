import { prisma } from '@price-comparator/database/src/index';

export default async function MatchingReviewPage() {
  const pendingDecisions = await prisma.matchingDecision.findMany({
    where: { decision: 'PENDING', confidenceLevel: 'MEDIUM' },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cola de Revisión de Matching</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 font-bold text-sm text-gray-600">
            <div className="col-span-1">ID</div>
            <div className="col-span-3">Oferta Entrante</div>
            <div className="col-span-3">Candidato (Base de Datos)</div>
            <div className="col-span-2">Razón (Regla)</div>
            <div className="col-span-3 text-right">Acción</div>
          </div>

          {pendingDecisions.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No hay ofertas pendientes de revisión.
            </div>
          ) : (
            pendingDecisions.map((decision) => (
              <div key={decision.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center">
                <div className="col-span-1 text-xs text-gray-400 font-mono">
                  {decision.id.split('-')[0]}
                </div>
                <div className="col-span-3 text-sm">
                  {/* Fetch specific info for RawOffer if needed, here just printing signals */}
                  <pre className="text-xs text-blue-600 overflow-x-auto">
                    {JSON.stringify(JSON.parse(decision.signals), null, 2)}
                  </pre>
                </div>
                <div className="col-span-3 text-sm font-medium">
                  ID: {decision.candidateProductId}
                </div>
                <div className="col-span-2 text-xs">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {decision.reason}
                  </span>
                </div>
                <div className="col-span-3 flex justify-end gap-2">
                  <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-bold">
                    ✓ Confirmar
                  </button>
                  <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-bold">
                    ✕ Rechazar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
