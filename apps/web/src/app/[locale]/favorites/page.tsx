"use client";

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  const locale = useLocale();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  const removeFavorite = (id: string) => {
    const newFavs = favorites.filter(f => f.id !== id);
    setFavorites(newFavs);
    localStorage.setItem('favorites', JSON.stringify(newFavs));
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center w-full mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Mis Favoritos
          </h1>
          <p className="text-lg text-gray-500">
            Los productos que estás siguiendo
          </p>
        </div>

        <div className="w-full animate-fade-in">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {favorites.map((product) => (
                <div key={product.id} className="group block relative">
                  <button 
                    onClick={() => removeFavorite(product.id)}
                    className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-sm transition-all"
                    aria-label="Remove Favorite"
                  >
                    <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                  <Link href={`/${locale}/product/${product.slug}`}>
                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-50 mb-3 transition-colors group-hover:bg-gray-100">
                      {product.imageUrl ? (
                        <Image 
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">SIN IMAGEN</div>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.brand || 'Varios'}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
              No tienes ningún producto en favoritos todavía.<br/>
              <Link href={`/${locale}`} className="text-black font-bold mt-4 inline-block hover:underline">Ir a explorar</Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
