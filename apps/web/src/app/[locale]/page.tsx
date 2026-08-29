import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { prisma } from '@price-comparator/database/src/index';
import Link from 'next/link';
import Image from 'next/image';
import Form from 'next/form';
import { ProductCard } from '@/components/ProductCard';
import { Filters } from '@/components/Filters';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ brand?: string, size?: string, maxPrice?: string, categoryId?: string, gender?: string }> }) {
  const { locale } = await params;
  const { brand, size, maxPrice, categoryId, gender } = await searchParams;
  const t = await getTranslations();
  
  const whereClause: any = {};
  if (brand) {
    whereClause.brand = { slug: brand };
  }
  if (gender) {
    if (gender === 'Hombre' || gender === 'Mujer') {
      whereClause.gender = { in: [gender, 'UNISEX'] };
    } else {
      whereClause.gender = gender;
    }
  }
  
  // Default to Zapatillas if nothing is selected
  let currentCatId = categoryId;
  if (!currentCatId) {
    const zCat = await prisma.category.findUnique({ where: { slug: 'zapatillas' } });
    if (zCat) currentCatId = zCat.id;
  }
  
  if (currentCatId) {
    whereClause.category = {
      OR: [
        { id: currentCatId },
        { parentId: currentCatId }
      ]
    };
  }
  
  if (size || maxPrice) {
    whereClause.variants = { some: {} };
    if (size) whereClause.variants.some.sizeValue = size;
    if (maxPrice) {
      whereClause.variants.some.offers = {
        some: { priceTotal: { lte: parseFloat(maxPrice) } }
      };
    }
  }

  const products = await prisma.product.findMany({ 
    take: 36,
    where: whereClause,
    include: { brand: true, category: true }
  });

  const brands = await prisma.brand.findMany({
    where: {
      products: currentCatId ? {
        some: {
          category: {
            OR: [
              { id: currentCatId },
              { parentId: currentCatId }
            ]
          }
        }
      } : undefined
    }
  });
  
  const categories = await prisma.category.findMany();

  const categoryTranslations: Record<string, string> = {
    'zapatillas': t('categories.zapatillas'),
    'ropa': t('categories.ropa'),
    'perfumes': t('categories.perfumes'),
    'electronica': t('categories.electronica'),
    'accesorios': t('categories.accesorios'),
    'belleza-y-salud': t('categories.belleza-y-salud'),
    'deportes': t('categories.deportes'),
    'hogar': t('categories.hogar'),
    'movilidad-y-baterias': t('categories.movilidad-y-baterias'),
    'mascotas': t('categories.mascotas')
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Hero Section */}
        <div className="text-center w-full mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            {t('hero.titleLine1')} <br className="hidden md:block"/>{t('hero.titleLine2')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar placeholder={t('navigation.searchPlaceholder')} />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-8 w-full justify-center">
          {categories.filter(c => !c.parentId).map(c => {
            const isSelected = categoryId === c.id || (!categoryId && c.slug === 'zapatillas');
            const displayName = categoryTranslations[c.slug] || c.name;
            
            return (
              <Link 
                key={c.id} 
                href={`/${locale}/?categoryId=${c.id}`} 
                scroll={false}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isSelected 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-black hover:bg-gray-50'
                }`}
              >
                {displayName.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* Dynamic Filters & Subcategories */}
        <div className="mb-10 w-full max-w-4xl mx-auto">
                <Filters 
                  locale={locale} 
                  categories={categories} 
                  brands={brands} 
                  categoryId={categoryId} 
                  brand={brand} 
                  size={size} 
                  maxPrice={maxPrice} 
                  gender={gender} 
                  tBrand={t('filters.brand')}
                  tSize={t('filters.size')}
                  tTargetAudience={t('filters.targetAudience')}
                  tClearFilters={t('filters.clearFilters')}
                />
        </div>

        {/* Popular Products (Minimalist Grid) */}
        <div className="w-full animate-fade-in">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
              {t('product.noProducts')}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
