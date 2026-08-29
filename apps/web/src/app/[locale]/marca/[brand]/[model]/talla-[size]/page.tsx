import { prisma } from "@price-comparator/database/src/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  // Solo devolvemos un array vacío porque las páginas se generarán On-Demand (ISR)
  // De esta forma evitamos consultar a la base de datos vacía durante el build de Vercel.
  return [];
}

export async function generateMetadata({ params }: { params: { locale: string; brand: string; model: string; size: string } }) {
  const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
  const modelName = params.model.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  // Buscar mínimo precio (para el Title)
  const offers = await prisma.offer.findMany({
    where: {
      variant: {
        sizeValue: params.size,
        product: {
          brand: { slug: params.brand.toLowerCase() },
          slug: { contains: params.model.toLowerCase() }
        }
      },
      status: "ACTIVE"
    },
    orderBy: { priceTotal: 'asc' },
    take: 1
  });

  const minPrice = offers.length > 0 ? (offers[0].priceTotal ?? offers[0].priceBase) : null;
  const titlePrice = minPrice ? ` → desde ${minPrice.toFixed(2)}€` : '';

  return {
    title: `${brandName} ${modelName} talla ${params.size}${titlePrice}`,
    description: `Compara precios en múltiples tiendas. Encuentra las mejores ofertas para ${brandName} ${modelName} talla ${params.size}.`,
  };
}

export default async function BrandModelSizePage({ params }: { params: { locale: string; brand: string; model: string; size: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'common' });
  const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
  const modelName = params.model.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const offers = await prisma.offer.findMany({
    where: {
      variant: {
        sizeValue: params.size,
        product: {
          brand: { slug: params.brand.toLowerCase() },
          slug: { contains: params.model.toLowerCase() }
        }
      },
      status: "ACTIVE",
    },
    include: {
      store: true,
      variant: {
        include: { product: true }
      }
    },
    orderBy: {
      priceTotal: "asc",
    },
  });

  if (offers.length === 0) return notFound();

  const minPrice = offers[0].priceTotal ?? offers[0].priceBase;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{brandName} {modelName} talla {params.size} al mejor precio</h1>
      
      <p className="text-slate-600 text-lg mb-8">
        Encuentra {brandName} {modelName} talla {params.size} al mejor precio.<br/>
        Comparamos {offers.length} tiendas en tiempo real.<br/>
        Precio mínimo actual: <strong className="text-emerald-600">{minPrice.toFixed(2)}€</strong>.
      </p>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-12 font-medium text-slate-700 text-sm">
          <div className="col-span-5">Tienda</div>
          <div className="col-span-3 text-center">Talla</div>
          <div className="col-span-2 text-right">Precio</div>
          <div className="col-span-2"></div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {offers.map((offer) => (
            <div key={offer.id} className="p-4 grid grid-cols-12 items-center hover:bg-slate-50 transition-colors">
              <div className="col-span-5 flex items-center gap-3">
                <div className="font-semibold text-slate-900">{offer.store.name}</div>
              </div>
              <div className="col-span-3 text-center">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                  EU {offer.variant.sizeValue}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <div className="font-bold text-lg text-emerald-700">{(offer.priceTotal ?? offer.priceBase).toFixed(2)}€</div>
                {offer.priceShipping !== null && (
                  <div className="text-xs text-slate-500">+ {offer.priceShipping.toFixed(2)}€ envío</div>
                )}
              </div>
              <div className="col-span-2 text-right">
                <a 
                  href={offer.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Ver oferta
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
