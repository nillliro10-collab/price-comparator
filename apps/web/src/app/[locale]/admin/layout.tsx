import Link from 'next/link';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 min-h-screen sticky top-0">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 bg-black text-white">
          <Link href="/" className="font-bold text-lg tracking-tight">ALIANZA ADMIN</Link>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          
          <Link href="/admin" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-900 font-bold text-sm">
            <span>📊</span> Dashboard
          </Link>
          
          <div className="pt-4 pb-1 px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Gestión</div>
          <Link href="/admin/catalog" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>👟</span> Catálogo
          </Link>
          <Link href="/admin/offers" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>🏷️</span> Ofertas
          </Link>
          <Link href="/admin/stores" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>🏪</span> Empresas (Tiendas)
          </Link>

          <div className="pt-4 pb-1 px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Operaciones</div>
          <Link href="/admin/sync" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>🔄</span> Sincronizaciones
          </Link>
          <Link href="/admin/matching" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>🔗</span> Matching Queue
          </Link>
          <Link href="/admin/issues" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 text-red-700 font-bold text-sm bg-red-50/50">
            <span>🚨</span> Registro Errores
          </Link>
          <Link href="/admin/commercial" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>💰</span> Afiliación
          </Link>
          <Link href="/admin/analytics" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium text-sm">
            <span>📡</span> Debug Tracking
          </Link>
          
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden min-h-screen">
        {children}
      </main>
    </div>
  );
}
