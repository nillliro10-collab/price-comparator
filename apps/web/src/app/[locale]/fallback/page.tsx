import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';

export default async function FallbackPage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ productId?: string }> }) {
  const { locale } = await params;
  const { productId } = await searchParams;
  let product = null;

  if (productId) {
    product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        brand: true,
        variants: {
          include: {
            offers: {
              where: { status: 'ACTIVE', store: { isActive: true, isDemo: false } },
              include: { store: true }
            }
          }
        }
      }
    });
  }

  // Count active offers across all variants for this product
  let totalActiveOffers = 0;
  if (product) {
    product.variants.forEach(v => {
      totalActiveOffers += v.offers.length;
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
        <div className="text-4xl mb-4">🚧</div>
        <h1 className="text-2xl font-black mb-2">Estamos en fase Beta</h1>
        <p className="text-gray-500 mb-8">
          La oferta a la que intentabas acceder forma parte de nuestro entorno de pruebas. Estamos integrando las tiendas reales (Zalando, Foot Locker, etc.) en este momento.
          <br/><br/>
          No publicamos datos falsos que puedas usar para tomar decisiones.
        </p>
        
        {product && totalActiveOffers > 0 ? (
          <div className="mb-6 bg-gray-50 p-4 rounded-xl">
            <p className="text-sm font-bold text-gray-700 mb-2">Aún hay {totalActiveOffers} ofertas reales para:</p>
            <p className="font-bold text-black">{product.name}</p>
            <Link 
              href={`/${locale}/product/${product.slug}`} 
              className="mt-4 block w-full bg-black text-white font-bold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Ver las ofertas reales
            </Link>
          </div>
        ) : (
          <Link 
            href={`/${locale}`} 
            className="block w-full bg-black text-white font-bold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Volver al catálogo
          </Link>
        )}
      </div>
    </div>
  );
}
