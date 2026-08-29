import Link from 'next/link';
import { prisma } from '@price-comparator/database/src/index';
import { redirect } from 'next/navigation';

export default function NewStorePage({ searchParams }: { searchParams: { error?: string } }) {
  async function createStore(formData: FormData) {
    'use server';
    
    const name = formData.get('name') as string;
    const websiteUrl = formData.get('websiteUrl') as string;
    const affiliateNetwork = formData.get('affiliateNetwork') as string;
    const deeplinkTemplate = formData.get('deeplinkTemplate') as string;
    const programId = formData.get('programId') as string;
    const trackingEnabled = formData.get('trackingEnabled') === 'on';
    
    // Server-side validation
    if (!name || name.trim() === '') redirect('/admin/stores/new?error=El+nombre+es+obligatorio');
    if (!websiteUrl) redirect('/admin/stores/new?error=La+web+es+obligatoria');
    if (affiliateNetwork !== 'Ninguna' && !deeplinkTemplate) redirect('/admin/stores/new?error=Falta+la+plantilla+deeplink+de+la+red');

    // Auto-generate slug
    let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    if (!slug) slug = 'store-' + Math.random().toString(36).substring(2, 7);

    // Check if slug exists
    const existing = await prisma.store.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Math.random().toString(36).substring(2, 7)}`;
    }

    const newStore = await prisma.store.create({
      data: {
        name,
        slug,
        websiteUrl,
        affiliateNetwork: affiliateNetwork === 'Ninguna' ? null : affiliateNetwork,
        deeplinkTemplate: deeplinkTemplate || null,
        programId,
        trackingEnabled,
        isActive: false, // Explicitly false initially as requested
        isAffiliate: affiliateNetwork !== 'Ninguna',
      }
    });

    redirect(`/admin/stores/${newStore.id}`);
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/stores" className="text-sm text-gray-500 hover:text-black mb-4 inline-block">&larr; Volver a Empresas</Link>
        <h1 className="text-3xl font-black">NUEVA EMPRESA</h1>
      </div>

      {searchParams.error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 font-bold flex items-center gap-2">
          <span>❌</span> {searchParams.error}
        </div>
      )}

      <form action={createStore} className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 space-y-6">
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
            <input name="name" type="text" required placeholder="Ej: Foot Locker" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Web (URL) *</label>
            <input name="websiteUrl" type="url" required placeholder="https://" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
          <div>
            <label className="block text-sm font-bold text-purple-900 mb-2">Red de afiliación *</label>
            <select name="affiliateNetwork" className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white">
              <option value="Ninguna">Ninguna</option>
              <option value="AWIN">AWIN</option>
              <option value="TradeDoubler">TradeDoubler</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-purple-900 mb-2">ID (Program ID)</label>
            <input name="programId" type="text" placeholder="Ej: 12345" className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-bold text-purple-900 mb-2">Deeplink Template (OBLIGATORIO para Afiliados)</label>
            <input name="deeplinkTemplate" type="text" placeholder="Ej: https://awin1.com/cread.php?awinmid={programId}&clickref={clickId}" className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none font-mono text-sm" />
            <p className="text-xs text-purple-600 mt-2">Usa las variables: {'{programId}'}, {'{clickId}'}, {'{encodedUrl}'}</p>
          </div>
          <div className="col-span-2 flex items-center gap-3 mt-2">
            <input name="trackingEnabled" type="checkbox" id="tracking" className="w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500" defaultChecked />
            <label htmlFor="tracking" className="text-sm font-bold text-purple-900">Activar inyección de tracking de afiliado</label>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center border-t border-gray-100">
          <p className="text-sm text-gray-500 font-medium italic">Nota: La tienda se creará en estado INACTIVO por seguridad.</p>
          <button type="submit" className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
            CREAR EMPRESA
          </button>
        </div>

      </form>
    </div>
  );
}
