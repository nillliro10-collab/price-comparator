"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export function ProductCard({ product }: { product: any }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favs.some((f: any) => f.id === product.id)) {
      setIsFavorite(true);
    }
  }, [product.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      favs = favs.filter((f: any) => f.id !== product.id);
    } else {
      favs.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        brand: product.brand?.name || 'Varios',
        imageUrl: product.imageUrl
      });
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
    
    // Dispatch custom event so Header can update
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  return (
    <Link href={`/${locale}/product/${product.slug}`} className="group block relative">
      <button 
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-sm transition-all"
        aria-label="Toggle Favorite"
      >
        <svg 
          className={`w-5 h-5 transition-colors ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
          fill={isFavorite ? "currentColor" : "none"} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>

      <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-50 mb-3 transition-colors group-hover:bg-gray-100">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src = `https://dummyimage.com/800x600/f3f4f6/6b7280.png&text=${encodeURIComponent(product.category?.name || 'Producto')}`;
            }}
            loading="lazy"
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">SIN IMAGEN</div>
        )}
      </div>
      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black line-clamp-1">{product.name}</h3>
      <p className="text-xs text-gray-500">{product.brand?.name || 'Varios'}</p>
    </Link>
  );
}
