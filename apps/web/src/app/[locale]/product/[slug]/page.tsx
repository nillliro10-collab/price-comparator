import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { prisma } from '@price-comparator/database/src/index';
import { ProductClient } from './ProductClient';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

async function getProductData(slug: string) {
  return prisma.product.findFirst({
    where: { slug },
    include: {
      brand: true,
      category: { include: { parent: true } },
      variants: {
        include: {
          offers: {
            include: { 
              store: true,
              priceHistory: { orderBy: { recordedAt: 'asc' } }
            }
          }
        }
      }
    }
  });
}

// Function to check if product has active offers (valid price, valid store, recent)
function hasActiveOffers(product: any) {
  if (!product) return false;
  let activeOffersCount = 0;
  for (const variant of product.variants) {
    for (const offer of variant.offers) {
      if (offer.stockStatus !== 'OUT_OF_STOCK' && offer.priceBase > 0) {
        activeOffersCount++;
      }
    }
  }
  return activeOffersCount > 0;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductData(slug);
  
  if (!product) {
    return { title: 'Producto no encontrado' };
  }

  const active = hasActiveOffers(product);
  
  let minPrice = Infinity;
  let storeCount = 0;
  const storeNames = new Set<string>();

  product.variants.forEach((v: any) => {
    v.offers.forEach((o: any) => {
      if (o.stockStatus !== 'OUT_OF_STOCK') {
        if (o.priceBase < minPrice) minPrice = o.priceBase;
        storeNames.add(o.store.name);
      }
    });
  });
  storeCount = storeNames.size;

  const title = `${product.name} — Comparar precios y tiendas`;
  let description = `Compara precios para ${product.name}.`;
  
  if (storeCount > 0 && minPrice !== Infinity) {
    description += ` Disponible desde ${minPrice.toFixed(2)}€ en ${storeCount} ${storeCount === 1 ? 'tienda' : 'tiendas'}. Envío y disponibilidad en tiempo real.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://pricecomparator.com/product/${product.slug}` // Placeholder domain
    },
    openGraph: {
      title,
      description,
      images: product.imageUrl ? [product.imageUrl] : [],
    },
    robots: {
      index: active,
      follow: true,
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const product = await getProductData(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <a href={`/${locale}`} className="text-gray-500 hover:text-black underline">Volver al inicio</a>
      </div>
    );
  }

  const active = hasActiveOffers(product);
  
  // Calculate AggregateOffer data
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  let offerCount = 0;

  product.variants.forEach((v: any) => {
    v.offers.forEach((o: any) => {
      if (o.stockStatus !== 'OUT_OF_STOCK' && o.priceBase > 0) {
        offerCount++;
        if (o.priceBase < minPrice) minPrice = o.priceBase;
        if (o.priceBase > maxPrice) maxPrice = o.priceBase;
      }
    });
  });

  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.imageUrl ? [product.imageUrl] : undefined,
    description: product.description || undefined,
    brand: {
      '@type': 'Brand',
      name: product.brand?.name
    }
  };

  if (active && offerCount > 0) {
    jsonLd.offers = {
      '@type': 'AggregateOffer',
      offerCount: offerCount,
      lowPrice: minPrice,
      highPrice: maxPrice,
      priceCurrency: 'EUR'
    };
  }

  // Generate a random session ID for anonymous tracking
  const sessionId = Math.random().toString(36).substring(2, 15);

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="bg-white border-b border-gray-100 py-4 hidden md:block">
        <div className="max-w-5xl mx-auto px-4">
          <SearchBar placeholder="Buscar zapatillas, ropa..." />
        </div>
      </div>
      <ProductClient product={product} sessionId={sessionId} />
    </div>
  );
}
