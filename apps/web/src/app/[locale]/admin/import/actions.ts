'use server';
import { prisma } from '@price-comparator/database/src/index';
import { NormalizationService } from '@price-comparator/core/src/normalization/NormalizationService';
import { ProductMatchingService, CanonicalVariantCandidate } from '@price-comparator/core/src/matching/ProductMatchingService';
import { MappingService } from '@price-comparator/core/src/mapping/MappingService';
import { StoreMappingProfile } from '@price-comparator/core/src/mapping/mapping.types';

// Un perfil por defecto super flexible para que el "pegar JSON" de la admin no explote
// con diferentes formatos básicos de prueba. En la vida real, se cargará de la DB.
// Perfil de mapeo estricto para la Prueba de Fuego del CTO
const defaultDemoProfile: StoreMappingProfile = {
  name: 'CTO Trial Ingestion',
  requiredFields: ['externalId', 'price', 'url'],
  fields: {
    externalId: 'sku_tienda',
    name: 'titulo',
    brand: 'marca',
    price: {
      path: 'precios.PVP',
      transform: 'price'
    },
    size: 'variantes.talla',
    color: 'variantes.color',
    stock: 'disponibilidad.estado',
    url: 'link'
  }
};

export async function processPastedJSON(storeId: string, jsonString: string) {
  let parsed: any[];
  try {
    parsed = JSON.parse(jsonString);
    if (!Array.isArray(parsed)) throw new Error("Debe ser un array de objetos");
  } catch (e) {
    return { success: false, error: 'JSON Invalido: ' + (e as Error).message };
  }

  const store = await prisma.store.findUnique({ where: { id: storeId } });
  if (!store) return { success: false, error: 'Tienda no encontrada' };

  const job = await prisma.importJob.create({
    data: {
      storeId,
      sourceType: 'PASTE',
      status: 'PROCESSING',
      totalReceived: parsed.length
    }
  });

  const mapper = new MappingService();
  const normalizer = new NormalizationService();
  const matcher = new ProductMatchingService();

  let newCount = 0;
  let errorCount = 0;
  let reviewCount = 0;
  const detailedErrors: { externalId?: string, error: string }[] = [];

  for (const rawItem of parsed) {
    try {
      // 1. Map to standard payload (this handles validation, nested paths and transforms)
      const mapped = mapper.map(rawItem, defaultDemoProfile);
      
      const externalVariantId = mapped.externalVariantId || mapped.sku || '';

      // 2. Ingest to RawOffer
      const raw = await prisma.rawOffer.upsert({
        where: { storeId_externalId_externalVariantId: { storeId, externalId: mapped.externalId, externalVariantId } },
        update: {
          rawTitle: mapped.name,
          rawBrand: mapped.brand,
          rawColor: mapped.color,
          rawSize: mapped.size,
          rawGtin: mapped.gtin,
          price: mapped.price,
          shipping: mapped.shipping !== undefined ? mapped.shipping : null,
          url: mapped.url,
          stock: mapped.stock || 'IN_STOCK',
          rawPayload: JSON.stringify(rawItem),
          isDemo: store.isDemo,
          importJobId: job.id,
          status: 'PENDING'
        },
        create: {
          storeId,
          externalId: mapped.externalId,
          externalVariantId,
          rawTitle: mapped.name,
          rawBrand: mapped.brand,
          rawColor: mapped.color,
          rawSize: mapped.size,
          rawGtin: mapped.gtin,
          price: mapped.price,
          shipping: mapped.shipping !== undefined ? mapped.shipping : null,
          url: mapped.url,
          stock: mapped.stock || 'IN_STOCK',
          rawPayload: JSON.stringify(rawItem),
          isDemo: store.isDemo,
          importJobId: job.id,
          status: 'PENDING'
        }
      });
      newCount++;

      // 3. Normalize
      const normalized = normalizer.normalize(raw);

      // 4. Match
      const variants = await prisma.variant.findMany({ include: { product: true } });
      const candidates: CanonicalVariantCandidate[] = variants.map(v => ({
        id: v.id,
        productId: v.productId,
        brandName: v.product.brandId,
        productModel: v.product.model,
        productName: v.product.name,
        gtin: v.gtin,
        mpn: v.mpn,
        sizeValue: v.sizeValue,
        colorNormalized: v.colorNormalized
      }));

      const match = matcher.match(normalized, candidates);

      // 5. If MATCHED, create Offer
      if (match.status === 'MATCHED' && match.matchedVariantId) {
        await prisma.rawOffer.update({ where: { id: raw.id }, data: { status: 'MATCHED' } });
        
        await prisma.offer.upsert({
          where: { storeId_externalProductId_externalVariantId: { storeId, externalProductId: raw.externalId, externalVariantId } },
          update: {
            priceBase: raw.price,
            priceShipping: raw.shipping,
            priceTotal: raw.shipping !== null ? raw.price + raw.shipping : null,
            stockStatus: raw.stock || 'IN_STOCK',
          },
          create: {
            storeId,
            variantId: match.matchedVariantId,
            externalProductId: raw.externalId,
            externalVariantId,
            url: raw.url,
            priceBase: raw.price,
            priceShipping: raw.shipping,
            priceTotal: raw.shipping !== null ? raw.price + raw.shipping : null,
            stockStatus: raw.stock || 'IN_STOCK',
          }
        });
      } else {
        reviewCount++;
        await prisma.rawOffer.update({ where: { id: raw.id }, data: { status: match.status } });
      }

    } catch (e: any) {
      errorCount++;
      detailedErrors.push({
        externalId: rawItem?.sku_tienda || 'unknown',
        error: e.message || 'Unknown error'
      });
    }
  }

  await prisma.importJob.update({
    where: { id: job.id },
    data: {
      status: 'COMPLETED',
      totalNew: newCount,
      totalErrors: errorCount,
      totalNeedsReview: reviewCount,
      completedAt: new Date()
    }
  });

  return { 
    success: true, 
    total: parsed.length, 
    successCount: newCount,
    errors: errorCount, 
    reviews: reviewCount,
    detailedErrors
  };
}
