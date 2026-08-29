import { prisma } from '@price-comparator/database/src/index';
import { ImportClient } from './ImportClient';

export default async function AdminImportPage() {
  const stores = await prisma.store.findMany({ where: { isActive: true } });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Importar Catálogo</h1>
      <ImportClient stores={stores} />
    </div>
  );
}
