import { PrismaClient } from '@prisma/client';
import { FootLockerConnector } from '../../../packages/connectors/src/footlocker/FootLockerConnector';

const prisma = new PrismaClient();

export async function runIngestJob() {
  console.log('🚀 Iniciando Ingest Job para Foot Locker...');
  
  // 1. Obtener la tienda (mock para MVP si no existe)
  let store = await prisma.store.findUnique({ where: { slug: 'foot-locker' } });
  if (!store) {
    store = await prisma.store.create({
      data: {
        name: 'Foot Locker',
        slug: 'foot-locker',
        websiteUrl: 'https://www.footlocker.es',
        isAffiliate: true,
      }
    });
  }

  // 2. Instanciar conector
  const connector = new FootLockerConnector(store.id);
  
  // 3. Obtener ofertas (límite 10)
  const rawOffers = await connector.fetchOffers(10);
  console.log(`✅ Descargadas ${rawOffers.length} ofertas crudas de Foot Locker.`);

  // 4. Ingestar a RawOffer usando UPSERT (idempotencia)
  let ingested = 0;
  for (const offer of rawOffers) {
    try {
      await prisma.rawOffer.upsert({
        where: {
          storeId_externalId_externalVariantId: {
            storeId: store.id,
            externalId: offer.externalId,
            externalVariantId: offer.externalVariantId,
          }
        },
        update: {
          rawTitle: offer.rawTitle,
          price: offer.price,
          shipping: offer.shipping,
          stock: offer.stock,
          url: offer.url,
          rawPayload: offer.rawPayload,
          // Si cambian datos, lo devolvemos a PENDING para re-evaluar si es necesario
          status: 'PENDING',
          updatedAt: new Date(),
        },
        create: {
          storeId: store.id,
          externalId: offer.externalId,
          externalVariantId: offer.externalVariantId,
          rawTitle: offer.rawTitle,
          rawBrand: offer.rawBrand,
          rawColor: offer.rawColor,
          rawSize: offer.rawSize,
          rawGtin: offer.rawGtin,
          rawMpn: offer.rawMpn,
          rawSku: offer.rawSku,
          url: offer.url,
          price: offer.price,
          shipping: offer.shipping,
          stock: offer.stock,
          rawPayload: offer.rawPayload,
          status: 'PENDING',
        }
      });
      ingested++;
    } catch (e) {
      console.error(`❌ Error ingstando oferta ${offer.externalId}:`, e);
    }
  }

  console.log(`🎉 Ingestión completada. ${ingested} ofertas upserted en RawOffer.`);
}

// Auto-run for testing
if (require.main === module) {
  runIngestJob()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
}
