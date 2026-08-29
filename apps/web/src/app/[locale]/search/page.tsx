import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

export default async function SearchResults({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ q: string }> }) {
  const { locale } = await params;
  const { q } = await searchParams;
  const query = q || '';
  
  const results = await prisma.product.findMany({
    where: {
      name: { contains: query },
      variants: {
        some: {
          offers: {
            some: {
              store: { isActive: true }
            }
          }
        }
      }
    },
    include: { 
      brand: true,
      variants: {
        include: {
          offers: {
            where: { store: { isActive: true } },
            include: { store: true }
          }
        }
      }
    }
  });

  // Calculate best price, stores, and availability for each product
  const enrichedResults = results.map(product => {
    let minPrice = Infinity;
    const storeIds = new Set<string>();
    let isAvailable = false;

    product.variants.forEach(variant => {
      variant.offers.forEach(offer => {
        storeIds.add(offer.storeId);
        
        if (offer.stockStatus !== 'OUT_OF_STOCK') {
          isAvailable = true;
        }

        const price = offer.priceTotal ?? offer.priceBase;
        if (price < minPrice) {
          minPrice = price;
        }
      });
    });

    return {
      ...product,
      bestPrice: minPrice === Infinity ? null : minPrice,
      storeCount: storeIds.size,
      isAvailable
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans flex flex-col">
      <Header />
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <SearchBar placeholder={`Buscando: ${query}`} />
        </div>
      </div>
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <h1 className="text-2xl font-bold mb-8">Resultados para "{query}"</h1>
        
        {enrichedResults.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500 mb-4">No se encontraron productos.</p>
            <Link href={`/${locale}`} className="text-black font-semibold hover:underline">Volver al inicio</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {enrichedResults.map((product) => (
              <Link key={product.id} href={`/${locale}/product/${product.slug}`} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-black transition-colors flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
                <div className="w-full sm:w-32 aspect-square relative rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  {product.imageUrl && <Image src={product.imageUrl} alt={product.name} fill className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform" unoptimized />}
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-1">{product.brand?.name}</p>
                  <h3 className="font-extrabold text-2xl leading-tight mb-2">{product.name}</h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm mt-4">
                    <span className="font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{product.storeCount} tiendas</span>
                    {product.isAvailable ? (
                      <span className="font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> Disponible
                      </span>
                    ) : (
                      <span className="font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">Agotado</span>
                    )}
                  </div>
                </div>
                <div className="w-full sm:w-auto text-center sm:text-right pt-4 sm:pt-0 sm:border-l sm:pl-6 border-gray-100 flex flex-col justify-center items-center sm:items-end">
                  <span className="text-gray-400 text-sm font-medium mb-1">Desde</span>
                  <span className="font-black text-3xl">
                    {product.bestPrice ? formatPrice(product.bestPrice) : '---'}
                  </span>
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-full font-semibold w-full sm:w-auto hover:bg-gray-800 transition-colors">
                    Ver ofertas
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
