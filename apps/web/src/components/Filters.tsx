'use client';

import Form from 'next/form';
import Link from 'next/link';
import { useRef } from 'react';

export function Filters({ 
  locale, 
  categories, 
  brands, 
  categoryId, 
  brand, 
  size, 
  maxPrice, 
  gender,
  tBrand,
  tSize,
  tTargetAudience,
  tClearFilters
}: any) {
  const formRef = useRef<HTMLFormElement>(null);

  const selectedCat = categories.find((c: any) => c.id === categoryId) || categories.find((c: any) => c.slug === 'zapatillas');
  const parentCat = selectedCat?.parentId ? categories.find((c: any) => c.id === selectedCat.parentId) : selectedCat;
  const subcats = categories.filter((c: any) => c.parentId === parentCat?.id);
  
  let sizeOptions = ['39', '40', '41', '42', '43', '44'];
  let genderOptions = ['Hombre', 'Mujer', 'Niño', 'Niña', 'Bebé'];
  
  if (parentCat?.slug === 'ropa') {
    sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  } else if (parentCat?.slug === 'perfumes') {
    sizeOptions = ['50ml', '100ml', '200ml'];
  } else if (parentCat?.slug === 'electronica') {
    sizeOptions = ['64GB', '128GB', '256GB'];
  } else if (parentCat?.slug === 'mascotas') {
    sizeOptions = ['Comida', 'Juguetes', 'Cuidado'];
    genderOptions = ['Perro', 'Gato', 'Pez', 'Pájaro', 'Roedor', 'Gallina', 'Reptil'];
  }

  const handleChange = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <Form ref={formRef} action={`/${locale}`} scroll={false} className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm animate-fade-in">
      
      {/* Subcategories */}
      {subcats.length > 0 && (
        <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-200">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center mr-2">Tipos:</span>
          <Link href={`/${locale}/?categoryId=${parentCat!.id}`} scroll={false} className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${selectedCat?.id === parentCat?.id ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-300 hover:border-gray-800'}`}>
            Ver todo
          </Link>
          {subcats.map((sub: any) => (
            <Link key={sub.id} href={`/${locale}/?categoryId=${sub.id}`} scroll={false} className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${selectedCat?.id === sub.id ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-300 hover:border-gray-800'}`}>
              {sub.name}
            </Link>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-end gap-4 justify-center">
        <input type="hidden" name="categoryId" value={categoryId || parentCat?.id || ''} />
        
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">{tBrand}</label>
          <select name="brand" defaultValue={brand || ''} onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white font-medium min-w-[120px] focus:ring-1 focus:ring-black">
            <option value="">Cualquiera</option>
            {brands.map((b: any) => (
              <option key={b.id} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </div>
        
        {parentCat?.slug !== 'electronica' && parentCat?.slug !== 'perfumes' && (
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">{tSize}</label>
            <select name="size" defaultValue={size || ''} onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white font-medium min-w-[100px] focus:ring-1 focus:ring-black">
              <option value="">Cualquiera</option>
              {sizeOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        {(parentCat?.slug === 'ropa' || parentCat?.slug === 'zapatillas' || parentCat?.slug === 'mascotas') && (
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">{tTargetAudience}</label>
            <select name="gender" defaultValue={gender || ''} onChange={handleChange} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white font-medium min-w-[100px] focus:ring-1 focus:ring-black">
              <option value="">Cualquiera</option>
              {genderOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}
        
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">Max (€)</label>
          <div className="flex items-center gap-2">
             <input type="number" name="maxPrice" defaultValue={maxPrice || ''} placeholder="150" className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white font-medium w-[90px] focus:ring-1 focus:ring-black" onBlur={handleChange} onKeyDown={(e) => { if(e.key==='Enter'){ e.preventDefault(); handleChange();} }} />
          </div>
        </div>
        
        {/* We hide the apply button since it autosubmits, but keep it for fallback */}
        <button type="submit" className="hidden">Aplicar</button>
        
        {(brand || size || maxPrice || gender) && (
          <Link href={`/${locale}/?categoryId=${categoryId || ''}`} scroll={false} className="text-gray-500 text-sm font-bold hover:underline px-2 flex items-center h-[38px]">{tClearFilters}</Link>
        )}
      </div>
    </Form>
  );
}
