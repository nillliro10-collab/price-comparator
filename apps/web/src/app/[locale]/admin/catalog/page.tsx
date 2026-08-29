import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      brand: true,
      category: true,
      _count: {
        select: { variants: true }
      }
    }
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">Catálogo de Productos</h1>
        <Link href="/admin/catalog/new" className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors">
          + Añadir Producto Manual
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Estado</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Producto</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Marca</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider text-xs text-center">Variantes</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  {product.imageUrl ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                      ✅ Publicable
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-100">
                      ⚠️ Sin imagen
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-400 font-mono mt-1">{product.id.substring(0,8)}...</p>
                </td>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {product.brand?.name || <span className="text-red-500">Sin Marca</span>}
                </td>
                <td className="px-6 py-4 text-center font-bold text-gray-600">
                  {product._count.variants}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href={`/product/${product.slug}`} target="_blank" className="text-blue-600 hover:underline font-medium text-sm mr-4">
                    Ver en web
                  </Link>
                  <button className="text-gray-400 hover:text-black font-medium text-sm">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
            
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  El catálogo está vacío.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
