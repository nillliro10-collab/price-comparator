'use client';

import { useEffect } from 'react';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center p-8 text-center">
      <div className="bg-white p-10 rounded-2xl border border-red-100 shadow-xl max-w-lg w-full">
        <span className="text-5xl mb-6 block">⚠️</span>
        <h2 className="text-2xl font-black text-gray-900 mb-4">
          No se pudo cargar esta página
        </h2>
        <p className="text-gray-500 mb-8">
          Comprueba la configuración, revisa que la ruta exista, o vuelve al panel de administración. El detalle del error técnico ha sido guardado en los logs para los desarrolladores.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gray-100 text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Reintentar
          </button>
          <a
            href="/admin"
            className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Volver a Admin
          </a>
        </div>
      </div>
    </div>
  );
}
