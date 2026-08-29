import { prisma } from '@price-comparator/database/src/index';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function updateOffer(formData: FormData) {
  'use server';
  const id = formData.get('id') as string;
  const actionType = formData.get('actionType') as string;
  
  if (actionType === 'TOGGLE_STATUS') {
    const current = formData.get('currentStatus') as string;
    await prisma.offer.update({
      where: { id },
      data: { status: current === 'ACTIVE' ? 'DISABLED' : 'ACTIVE' }
    });
  } else if (actionType === 'TOGGLE_STOCK') {
    const current = formData.get('currentStock') as string;
    await prisma.offer.update({
      where: { id },
      data: { stockStatus: current === 'IN_STOCK' ? 'OUT_OF_STOCK' : 'IN_STOCK' }
    });
  } else if (actionType === 'UPDATE_PRICE') {
    const newPrice = parseFloat(formData.get('priceTotal') as string);
    if (!isNaN(newPrice)) {
      await prisma.offer.update({
        where: { id },
        data: { priceTotal: newPrice }
      });
    }
  }
  revalidatePath('/admin/offers');
}

export default async function AdminOffersPage() {
  const offers = await prisma.offer.findMany({
    take: 100,
    orderBy: { updatedAt: 'desc' },
    include: {
      store: true,
      variant: {
        include: { product: true }
      }
    }
  });

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">Control de Ofertas (Offers)</h1>
        <div className="text-sm text-gray-500">Mostrando últimas 100</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Producto</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Talla / Color</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Tienda</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Precio Total</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Estado</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Stock</th>
                <th className="px-4 py-3 font-bold text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {offers.map(offer => (
                <tr key={offer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 truncate max-w-[200px]" title={offer.variant.product.name}>
                    <Link href={`/product/${offer.variant.product.slug}`} className="hover:underline">
                      {offer.variant.product.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    <span className="font-bold">{offer.variant.sizeValue}</span> 
                    {offer.variant.colorNormalized && ` / ${offer.variant.colorNormalized}`}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{offer.store.name}</td>
                  
                  {/* Edición de precio manual */}
                  <td className="px-4 py-3">
                    <form action={updateOffer} className="flex items-center gap-2">
                      <input type="hidden" name="id" value={offer.id} />
                      <input type="hidden" name="actionType" value="UPDATE_PRICE" />
                      <input 
                        type="number" 
                        step="0.01" 
                        name="priceTotal" 
                        defaultValue={offer.priceTotal || offer.priceBase} 
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-right text-sm"
                      />
                      <span className="text-gray-500">€</span>
                      <button type="submit" className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded font-bold">✓</button>
                    </form>
                  </td>

                  {/* Estado (Toggle) */}
                  <td className="px-4 py-3">
                    <form action={updateOffer}>
                      <input type="hidden" name="id" value={offer.id} />
                      <input type="hidden" name="actionType" value="TOGGLE_STATUS" />
                      <input type="hidden" name="currentStatus" value={offer.status} />
                      <button type="submit" className={`px-3 py-1 rounded-full text-xs font-bold ${offer.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {offer.status}
                      </button>
                    </form>
                  </td>

                  {/* Stock (Toggle) */}
                  <td className="px-4 py-3">
                    <form action={updateOffer}>
                      <input type="hidden" name="id" value={offer.id} />
                      <input type="hidden" name="actionType" value="TOGGLE_STOCK" />
                      <input type="hidden" name="currentStock" value={offer.stockStatus} />
                      <button type="submit" className={`px-3 py-1 rounded-full text-xs font-bold ${offer.stockStatus === 'IN_STOCK' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                        {offer.stockStatus}
                      </button>
                    </form>
                  </td>

                  <td className="px-4 py-3">
                    <a href={offer.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-bold">Ver original ↗</a>
                  </td>
                </tr>
              ))}
              {offers.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-500">No hay ofertas en la base de datos.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
