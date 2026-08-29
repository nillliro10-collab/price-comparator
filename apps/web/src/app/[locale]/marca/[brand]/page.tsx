import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { prisma } from '@price-comparator/database/src/index';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

async function getBrandData(slug: string) {
  return prisma.brand.findUnique({
    where: { slug },
    include: {
      products: {
        include: {
          variants: {
            include: {
              offers: {
                where: { store: { isDemo: false }, stockStatus: 'IN_STOCK' },
              }
            }
          }
        }
      }
    }
  });
}

function getActiveProducts(brand: any) {
  if (!brand) return [];
  return brand.products.filter((product: any) => {
    return product.variants.some((v: any) => v.offers.length > 0);
  });
}

export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
  const brand = await getBrandData(params.brand);
  const activeProducts = getActiveProducts(brand);

  if (!brand) {
    return { title: 'Marca no encontrada' };
  }

  const title = `Comparar precios de productos ${brand.name}`;
  const description = `Encuentra las mejores ofertas y compara precios de zapatillas y ropa ${brand.name}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://pricecomparator.com/marca/${brand.slug}`
    },
    robots: {
      index: activeProducts.length > 0,
      follow: true,
    }
  };
}

export default async function BrandPage({ params }: { params: { brand: string } }) {
  const brand = await getBrandData(params.brand);

  if (!brand) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Marca no encontrada</h1>
        <Link href="/" className="text-gray-500 hover:text-black underline">Volver al inicio</Link>
      </div>
    );
  }

  const activeProducts = getActiveProducts(brand);

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      <Header />
      <div className="bg-white border-b border-gray-100 py-4 hidden md:block">
        <div className="max-w-5xl mx-auto px-4">
          <SearchBar placeholder="Buscar zapatillas, ropa..." />
        </div>
      </div>
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Comparar precios de productos {brand.name}
          </h1>
          <p className="text-gray-600 text-lg">
            Mostrando {activeProducts.length} {activeProducts.length === 1 ? 'producto' : 'productos'} con ofertas activas.
          </p>
        </div>

        {activeProducts.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">No hay ofertas disponibles</h2>
            <p className="text-gray-500">Actualmente no tenemos precios registrados para esta marca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProducts.map((product: any) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group block">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4">
                    {product.imageUrl ? (
                      <Image src={product.imageUrl} alt={product.name} fill className="object-cover mix-blend-multiply" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full" />
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{brand.name}</span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Ver ofertas</span>
                      <span className="text-black font-bold">➔</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
