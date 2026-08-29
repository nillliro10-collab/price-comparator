'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { trackEvent } from '@/lib/tracking';

import { useLocale } from 'next-intl';

export function SearchBar({ placeholder = "Buscar zapatillas, ropa..." }: { placeholder?: string }) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const locale = useLocale();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackEvent({
        type: 'SEARCH',
        metadata: { query: query.trim() }
      });
      router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto relative">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-6 pr-16 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg shadow-sm transition-shadow"
      />
      <button 
        type="submit"
        className="absolute right-2 top-2 bottom-2 aspect-square bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Buscar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
