import Link from 'next/link';

export default function NewProductPage() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/catalog" className="text-sm text-gray-500 hover:text-black mb-4 inline-block">&larr; Volver al Catálogo</Link>
        <h1 className="text-3xl font-bold">NUEVO PRODUCTO MANUAL</h1>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-6">
        <h3 className="font-bold text-yellow-800 mb-2">Construcción en progreso</h3>
        <p className="text-sm text-yellow-700">
          La creación manual de productos se implementará próximamente. Actualmente el catálogo se nutre de los feeds de los Merchants autorizados y el motor de matching.
        </p>
      </div>
    </div>
  );
}
