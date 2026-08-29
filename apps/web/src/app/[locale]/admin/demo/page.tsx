'use client';
import { runImportPipeline } from './actions';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleImport() {
    setLoading(true);
    await runImportPipeline();
    setDone(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
        <p className="text-gray-500 mb-8">Importador de Catálogo Canónico (Demo SQLite)</p>
        
        <button 
          onClick={handleImport}
          disabled={loading || done}
          className="bg-black text-white px-6 py-3 rounded-xl font-medium disabled:opacity-50"
        >
          {loading ? 'Importando...' : done ? 'Importado con éxito' : 'Ejecutar Pipeline Demo (Seed DB)'}
        </button>

        {done && (
          <div className="mt-8 p-4 bg-green-50 text-green-800 rounded-lg">
            ✓ Base de datos sembrada con 1 Producto, 1 Variante y 3 Ofertas de Tiendas reales.
            <div className="mt-4">
              <Link href="/" className="underline font-bold">Ir a la Home para buscar</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
