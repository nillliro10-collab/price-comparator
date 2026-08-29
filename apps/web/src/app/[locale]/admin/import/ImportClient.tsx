'use client';
import { useState } from 'react';
import { processPastedJSON } from './actions';

export function ImportClient({ stores }: { stores: any[] }) {
  const [storeId, setStoreId] = useState(stores[0]?.id || '');
  const [method, setMethod] = useState('PASTE');
  const [json, setJson] = useState('[\n  {\n    "id": "ext-1",\n    "variant_id": "v-1",\n    "name": "Nike Air Force 1 \'07",\n    "brand": "Nike",\n    "size": "42 EU",\n    "color": "Triple White",\n    "gtin": "00885178652414",\n    "price": "105.00",\n    "shipping": "4.99",\n    "url": "https://ejemplo.com/producto",\n    "stock": "IN_STOCK"\n  }\n]');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleImport() {
    setLoading(true);
    setResult(null);
    const res = await processPastedJSON(storeId, json);
    setResult(res);
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tienda de origen</label>
        <select value={storeId} onChange={e => setStoreId(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none">
          {stores.map(s => <option key={s.id} value={s.id}>{s.name} {s.isDemo ? '(DEMO)' : ''}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Método de importación</label>
        <div className="flex gap-4">
          <button onClick={() => setMethod('UPLOAD')} className={`px-4 py-2 rounded-lg border ${method==='UPLOAD' ? 'bg-black text-white' : 'bg-gray-50'}`}>Subir Archivo</button>
          <button onClick={() => setMethod('PASTE')} className={`px-4 py-2 rounded-lg border ${method==='PASTE' ? 'bg-black text-white' : 'bg-gray-50'}`}>Pegar JSON</button>
          <button onClick={() => setMethod('URL')} className={`px-4 py-2 rounded-lg border ${method==='URL' ? 'bg-black text-white' : 'bg-gray-50'}`}>URL Feed</button>
        </div>
      </div>

      {method === 'PASTE' && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Pegar catálogo (JSON Array)</label>
          <textarea 
            value={json}
            onChange={e => setJson(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm border border-gray-200 rounded-lg outline-none"
          />
        </div>
      )}

      <button 
        onClick={handleImport}
        disabled={loading}
        className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Procesando pipeline...' : 'Analizar e Importar a RawOffer'}
      </button>

      {result && (
        <div className={`p-4 rounded-xl mt-4 ${result.success ? 'bg-gray-50 border border-gray-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
          {result.success ? (
            <div>
              <h3 className="font-bold text-lg mb-2">Resumen de Importación</h3>
              <p>Procesados: {result.total}</p>
              <p className="text-green-700 font-semibold">Exitosos: {result.successCount}</p>
              <p className="text-red-600 font-semibold">Errores: {result.errors}</p>
              <p className="text-yellow-600 font-semibold">Needs Review: {result.reviews}</p>
              
              {result.detailedErrors && result.detailedErrors.length > 0 && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-bold text-sm mb-2 text-red-700">Detalle de Errores:</h4>
                  <ul className="text-sm space-y-1">
                    {result.detailedErrors.map((err: any, idx: number) => (
                      <li key={idx} className="text-gray-700">
                        <span className="font-semibold">{err.externalId}:</span> {err.error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>Error: {result.error}</div>
          )}
        </div>
      )}
    </div>
  );
}
