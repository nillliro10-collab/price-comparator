"use client";

import { useState, useEffect } from "react";
import { importCsvAction } from "./actions";

export default function ImportPage() {
  const [csvText, setCsvText] = useState("");
  const [stores, setStores] = useState<any[]>([]);
  const [storeId, setStoreId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Fetch stores for the selector
  useEffect(() => {
    fetch("/api/admin/stores")
      .then((res) => res.json())
      .then((data) => {
        setStores(data.stores || []);
        if (data.stores?.length > 0) {
          setStoreId(data.stores[0].id);
        }
      });
  }, []);

  async function handleImport() {
    if (!csvText || !storeId) return alert("Falta el CSV o la tienda");
    
    setLoading(true);
    setResult(null);
    try {
      const res = await importCsvAction(csvText, storeId);
      setResult(res);
    } catch (e: any) {
      alert("Error crítico: " + e.message);
    }
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-slate-900">Importador CSV (AWIN/Zalando)</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Tienda de Destino</label>
        <select 
          className="w-full border border-slate-300 rounded p-2"
          value={storeId}
          onChange={e => setStoreId(e.target.value)}
        >
          {stores.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Pega el contenido del CSV aquí</label>
        <p className="text-xs text-slate-500 mb-2">Columnas requeridas: externalId, name, brand, price, shipping, productUrl, size</p>
        <textarea 
          className="w-full border border-slate-300 rounded p-2 font-mono text-sm h-64"
          placeholder="externalId,name,brand,price,shipping,productUrl,imageUrl,size,color,ean,sku,stock..."
          value={csvText}
          onChange={e => setCsvText(e.target.value)}
        />
      </div>

      <button 
        onClick={handleImport}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded font-medium disabled:opacity-50"
      >
        {loading ? "Importando..." : "IMPORTAR"}
      </button>

      {result && (
        <div className="mt-8 p-6 bg-slate-50 rounded border border-slate-200">
          <h2 className="text-lg font-bold mb-4">Resultados de Importación</h2>
          <div className="flex gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow-sm border border-slate-100 flex-1">
              <p className="text-slate-500 text-sm">Total Analizados</p>
              <p className="text-2xl font-bold">{result.total}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-slate-100 flex-1">
              <p className="text-green-600 text-sm">Exitosos (DB)</p>
              <p className="text-2xl font-bold text-green-700">{result.success}</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-slate-100 flex-1">
              <p className="text-red-600 text-sm">Errores</p>
              <p className="text-2xl font-bold text-red-700">{result.failed.length}</p>
            </div>
          </div>

          {result.failed.length > 0 && (
            <div>
              <h3 className="font-medium mb-2 text-red-800">Detalle de errores:</h3>
              <ul className="text-sm space-y-2 max-h-64 overflow-y-auto bg-white p-4 border border-red-100 rounded">
                {result.failed.map((f: any, i: number) => (
                  <li key={i} className="text-slate-700 border-b pb-2 last:border-0">
                    <span className="font-mono bg-slate-100 px-1 mr-2">{f.row?.externalId || f.item?.externalId || 'UNKNOWN'}</span>
                    <span className="text-red-600">{f.error}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
