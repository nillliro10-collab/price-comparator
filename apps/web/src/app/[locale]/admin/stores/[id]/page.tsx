import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { revalidatePath } from 'next/cache';

export default async function StoreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const store = await prisma.store.findUnique({
    where: { id },
    include: {
      _count: {
        select: { offers: true }
      }
    }
  });

  if (!store) return notFound();

  const activeOffers = await prisma.offer.count({
    where: { storeId: store.id, status: 'ACTIVE' }
  });

  const uniqueProducts = await prisma.offer.findMany({
    where: { storeId: store.id },
    select: { variant: { select: { productId: true } } },
    distinct: ['variantId'] 
  });
  
  const productIds = new Set(uniqueProducts.map(o => o.variant.productId));
  const productCount = productIds.size;

  async function handleMockImport() {
    'use server';
    // MOCK IMPORT: This simulates fetching a CSV feed and saving it.
    // We will generate 3 fake products and 9 variants/offers for this store.
    const brands = await prisma.brand.findMany({ take: 2 });
    if (brands.length === 0) return;
    const brand = brands[0];
    
    for (let i = 0; i < 3; i++) {
       const productName = `Zapatilla Simulada ${Math.floor(Math.random() * 1000)}`;
       const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
       
       // Upsert Product
       let prod = await prisma.product.findFirst({ where: { slug } });
       if (!prod) {
          prod = await prisma.product.create({
             data: {
                name: productName,
                slug,
                model: 'Simulada',
                brandId: brand.id,
                imageUrl: `https://placehold.co/800x800?text=${encodeURIComponent(productName)}`
             }
          });
       }
       
       // Create 3 variants and offers
       for (const size of ['40', '41', '42']) {
          const variant = await prisma.variant.create({
             data: {
                productId: prod.id,
                sizeValue: size,
                sizeSystem: 'EU',
                colorNormalized: 'White',
             }
          });
          
          await prisma.offer.create({
             data: {
                storeId: id,
                variantId: variant.id,
                externalProductId: `ext-${Math.random()}`,
                externalVariantId: `ext-var-${Math.random()}`,
                url: `https://example.com/product/${slug}?size=${size}`,
                priceBase: 90 + Math.random() * 30,
                priceShipping: 4.99,
                priceTotal: 94.99 + Math.random() * 30,
                status: 'ACTIVE',
                stockStatus: 'IN_STOCK'
             }
          });
       }
    }
    revalidatePath(`/admin/stores/${id}`);
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/admin/stores" className="text-sm text-gray-500 hover:text-black mb-4 inline-block">&larr; Volver a Empresas</Link>
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-black uppercase tracking-tight">{store.name}</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black font-bold rounded-lg text-sm transition-colors">Editar</button>
            <form action={handleMockImport}>
              <button type="submit" className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 font-bold rounded-lg text-sm transition-colors cursor-pointer flex items-center gap-2">
                <span>⚡</span> Importar catálogo
              </button>
            </form>
            <button className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 font-bold rounded-lg text-sm transition-colors">Desactivar</button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Estado:</span>
            {store.isActive ? (
              <span className="font-bold text-green-700 flex items-center gap-2">🟢 ACTIVO</span>
            ) : (
              <span className="font-bold text-red-700 flex items-center gap-2">🔴 INACTIVO</span>
            )}
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Afiliación:</span>
            {store.isAffiliate ? (
              <span className="font-bold text-purple-700 flex items-center gap-2">🟢 AUTORIZADA ({store.affiliateNetwork})</span>
            ) : (
              <span className="font-bold text-gray-700 flex items-center gap-2">⚪ NINGUNA</span>
            )}
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Última sync:</span>
            <span className="font-bold text-gray-900">{store.lastSuccessfulSyncAt ? store.lastSuccessfulSyncAt.toLocaleString() : 'Nunca'}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Productos:</span>
            <span className="font-bold text-gray-900 text-lg">{productCount}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Ofertas (Totales):</span>
            <span className="font-bold text-gray-900 text-lg">{store._count.offers}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-500 font-bold text-sm">Ofertas activas:</span>
            <span className="font-bold text-green-700 text-lg">{activeOffers}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href={`/admin/catalog?store=${store.id}`} className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold rounded-lg text-sm transition-colors text-center">
          Ver catálogo completo
        </Link>
        <Link href={`/admin/sync?store=${store.id}&filter=errors`} className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold rounded-lg text-sm transition-colors text-center">
          Ver errores de sincronización
        </Link>
      </div>

    </div>
  );
}
