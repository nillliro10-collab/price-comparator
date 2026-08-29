"use client";

import Link from 'next/link';
import { useState, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function Header() {
  const [favCount, setFavCount] = useState(0);
  const locale = useLocale();
  const t = useTranslations('navigation');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const updateFavs = () => {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavCount(favs.length);
    };

    updateFavs();
    window.addEventListener('favoritesChanged', updateFavs);
    return () => window.removeEventListener('favoritesChanged', updateFavs);
  }, []);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // Strip current locale from pathname and replace it
      const currentPath = pathname.replace(`/${locale}`, '') || '/';
      const search = searchParams.toString();
      const query = search ? `?${search}` : '';
      router.replace(`/${nextLocale}${currentPath}${query}`, { scroll: false });
    });
  };

  return (
    <header className="border-b border-gray-100 bg-white">
      {/* Beta Banner */}
      <div className="bg-yellow-50 px-4 py-2 text-center border-b border-yellow-100">
        <p className="text-xs md:text-sm text-yellow-800 font-medium">
          🚧 <span className="font-bold">Estamos en fase Beta.</span> El catálogo actual contiene datos de prueba. Algunos precios o enlaces pueden variar.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl tracking-tight text-black">
          comparator.
        </Link>
        <div className="flex items-center space-x-6 text-sm text-gray-500 font-medium">
          
          <select 
            defaultValue={locale}
            disabled={isPending}
            onChange={onSelectChange}
            className="bg-transparent text-gray-500 text-sm focus:outline-none focus:ring-0 cursor-pointer"
          >
            <option value="es">ES</option>
            <option value="ca">CA</option>
            <option value="en">EN</option>
          </select>

          <Link href={`/${locale}/favorites`} className="hover:text-black transition-colors flex items-center gap-1">
            <svg className={`w-4 h-4 ${favCount > 0 ? 'text-red-500 fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            {t('favorites')} {favCount > 0 && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">{favCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
