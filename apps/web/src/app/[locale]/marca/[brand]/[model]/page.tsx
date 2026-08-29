import { prisma } from "@price-comparator/database/src/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string; brand: string; model: string } }) {
  const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
  const modelName = params.model.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return {
    title: `${brandName} ${modelName} baratas → Comparar precios`,
    description: `Encuentra las mejores ofertas para ${brandName} ${modelName}. Comparamos los precios de múltiples tiendas en tiempo real.`,
  };
}

export default async function BrandModelPage({ params }: { params: { locale: string; brand: string; model: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'common' });
  const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
  const modelName = params.model.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const brand = await prisma.brand.findUnique({
    where: { slug: params.brand.toLowerCase() }
  });

  if (!brand) return notFound();

  // Find products matching the model
  const products = await prisma.product.findMany({
    where: {
      brandId: brand.id,
      slug: { contains: params.model.toLowerCase() }
    },
    include: {
      variants: {
        include: {
          offers: {
            where: { status: 'ACTIVE' },
            orderBy: { priceTotal: 'asc' }
          }
        }
      }
    }
  });

  if (products.length === 0) return notFound();

  // Extract all sizes available for this model
  const allSizes = new Set<string>();
  let minPrice = Infinity;
  let totalOffers = 0;

  products.forEach(p => {
    p.variants.forEach(v => {
      if (v.sizeValue) allSizes.add(v.sizeValue);
      v.offers.forEach(o => {
        totalOffers++;
        if (o.priceTotal && o.priceTotal < minPrice) minPrice = o.priceTotal;
        else if (!o.priceTotal && o.priceBase < minPrice) minPrice = o.priceBase;
      });
    });
  });

  const sizes = Array.from(allSizes).sort((a, b) => parseFloat(a) - parseFloat(b));
  const displayMinPrice = minPrice === Infinity ? null : minPrice;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{brandName} {modelName} al mejor precio</h1>
      
      <p className="text-slate-600 text-lg mb-8">
        Encuentra {brandName} {modelName} al mejor precio. 
        Comparamos {totalOffers} ofertas en tiempo real.
        {displayMinPrice && <span> Precio mínimo actual: <strong className="text-emerald-600">{displayMinPrice.toFixed(2)}€</strong>.</span>}
      </p>

      {sizes.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Filtrar por talla:</h2>
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <Link 
                key={size}
                href={`/${params.locale}/marca/${params.brand}/${params.model}/talla-${size}`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-md hover:border-black hover:bg-slate-50 transition-colors"
              >
                Talla {size}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/${params.locale}/product/${product.slug}`} className="group block">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-slate-100 flex items-center justify-center p-4">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="object-contain w-full h-full group-hover:scale-105 transition-transform" />
                ) : (
                  <span className="text-slate-400">Sin imagen</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{brand.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    {displayMinPrice ? `Desde ${displayMinPrice.toFixed(2)}€` : 'Ver ofertas'}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                    {product.variants.reduce((acc, v) => acc + v.offers.length, 0)} ofertas
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
