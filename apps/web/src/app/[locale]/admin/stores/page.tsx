import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

async function toggleStore(formData: FormData) {
  'use server';
  const id = formData.get('id') as string;
  const currentStatus = formData.get('currentStatus') === 'true';
  await prisma.store.update({
    where: { id },
    data: { isActive: !currentStatus }
  });
  revalidatePath('/admin/stores');
}

export default async function StoresPage() {
  const stores = await prisma.store.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { offers: true }
      }
    }
  });

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">Empresas (Merchants)</h1>
        <Link href="/admin/stores/new" className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors">
          + Añadir Empresa
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase">Estado</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase">Nombre</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase">Red</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase">Offers</th>
              <th className="px-6 py-4 font-bold text-gray-500 uppercase">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stores.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 font-medium">
                  No hay empresas configuradas.
                </td>
              </tr>
            ) : (
              stores.map(store => (
                <tr key={store.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {store.isActive ? (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-xs flex items-center w-max gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        ACTIVA
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-xs flex items-center w-max gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        INACTIVA
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-bold text-lg text-gray-900">
                    <Link href={`/admin/stores/${store.id}`} className="hover:underline">
                      {store.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">
                    {store.affiliateNetwork || 'Ninguna'}
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-gray-600">
                    {store._count.offers}
                  </td>
                  <td className="px-6 py-4">
                    <form action={toggleStore}>
                      <input type="hidden" name="id" value={store.id} />
                      <input type="hidden" name="currentStatus" value={store.isActive.toString()} />
                      <button type="submit" className={`px-4 py-2 rounded-lg font-bold text-xs transition-colors ${store.isActive ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800'}`}>
                        {store.isActive ? 'Desactivar' : 'Activar Tienda'}
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
