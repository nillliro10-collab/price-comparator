// @ts-nocheck
import { prisma, Store, SyncRun } from '@price-comparator/database/src/index';
import { MappingService } from '../mapping/MappingService';
import { NormalizationService } from '../normalization/NormalizationService';
import { ProductMatchingService, CanonicalVariantCandidate } from '../matching/ProductMatchingService';
import { StoreConnector } from '@price-comparator/connectors/src/StoreConnector';

export class IngestionPipeline {
  private mapper: MappingService;
  private normalizer: NormalizationService;
  private matcher: ProductMatchingService;

  constructor() {
    this.mapper = new MappingService();
    this.normalizer = new NormalizationService();
    this.matcher = new ProductMatchingService();
  }

  public async run(connector: StoreConnector): Promise<any> {
    const store = await prisma.store.findUnique({ where: { id: connector.storeId } });
    if (!store) {
      throw new Error(`Store not found: ${connector.storeId}`);
    }

    // 1. Control de concurrencia: Evitar dos SyncRuns simultáneos
    const activeRun = await prisma.syncRun.findFirst({
      where: { storeId: store.id, status: 'RUNNING' }
    });
    if (activeRun) {
      throw new Error(`SYNC_ALREADY_RUNNING: Store ${store.name} already has an active sync (ID: ${activeRun.id})`);
    }

    // Iniciar SyncRun
    const syncRun = await prisma.syncRun.create({
      data: {
        storeId: store.id,
        sourceType: 'API_CONNECTOR',
        status: 'RUNNING',
      }
    });

    let rawData;
    try {
      rawData = await connector.fetch();
    } catch (e: any) {
      await this.failSyncRun(syncRun.id, store.id, 'FETCH_ERROR', e.message);
      throw e;
    }

    // 2. Anomaly Detection (Volume Drop Protection)
    const lastSuccessfulRun = await prisma.syncRun.findFirst({
      where: { storeId: store.id, status: 'SUCCESS' },
      orderBy: { startedAt: 'desc' }
    });

    const currentItemsCount = rawData.items?.length || 0;

    // Si recibimos 0, es un feed vacío. Fallar, pero no marcar anomalía de catálogo
    if (currentItemsCount === 0) {
      await this.failSyncRun(syncRun.id, store.id, 'EMPTY_FEED', 'The feed returned 0 items. Aborting to prevent accidental deletion of stale data.');
      throw new Error('EMPTY_FEED: Cannot process 0 items.');
    }

    if (lastSuccessfulRun && lastSuccessfulRun.itemsReceived > 0) {
      const dropRatio = currentItemsCount / lastSuccessfulRun.itemsReceived;
      // Umbral conservador: si cae al 20% o menos
      if (dropRatio < 0.2) {
        await this.failSyncRun(syncRun.id, store.id, 'ANOMALY_DETECTED', `Extreme volume drop detected. Last successful run had ${lastSuccessfulRun.itemsReceived} items, current has ${currentItemsCount} (${(dropRatio * 100).toFixed(2)}%). Aborting.`);
        throw new Error(`ANOMALY_DETECTED: Volume drop protection triggered. Check feed.`);
      }
    }

    // Actualizar count inicial
    await prisma.syncRun.update({
      where: { id: syncRun.id },
      data: { itemsReceived: currentItemsCount }
    });

    const profile = connector.getMappingProfile();
    
    let itemsProcessed = 0;
    let itemsCreated = 0;
    let itemsUpdated = 0;
    let itemsFailed = 0;
    
    // Quality Metrics
    let missingSkuCount = 0;
    let invalidPriceCount = 0;
    let outOfStockCount = 0;
    
    const errorsToSave: any[] = [];
    const ITEM_TIMEOUT_MS = 10000; // 10 seconds per item max

    // Obtener candidatos de matching una vez por batch para eficiencia
    const variants = await prisma.variant.findMany({ 
      include: { 
        product: { include: { brand: true } } 
      } 
    });
    const candidates: CanonicalVariantCandidate[] = variants.map(v => ({
      id: v.id,
      productId: v.productId,
      brandName: v.product.brand?.name || 'Unknown',
      productModel: v.product.model,
      productName: v.product.name,
      gtin: v.gtin,
      mpn: v.mpn,
      sizeValue: v.sizeValue,
      colorNormalized: v.colorNormalized
    }));

    // Procesar items individualmente asegurando idempotencia
    for (const rawItem of rawData.items) {
      try {
        const mappedItems = this.mapper.map(rawItem, profile);
        
        for (const mapped of mappedItems) {
          try {
            await Promise.race([
              this.processItem(rawItem, mapped, store.id, syncRun.id, store.isDemo, candidates),
              new Promise((_, reject) => setTimeout(() => reject(new Error('ITEM_TIMEOUT')), ITEM_TIMEOUT_MS))
            ]);
            
            itemsProcessed++;
            itemsUpdated++; 
            if (mapped.stock === 'OUT_OF_STOCK' || mapped.stock === false) outOfStockCount++;
            
          } catch (e: any) {
            itemsFailed++;
            const probableId = mapped.externalId || 'UNKNOWN_ID';
            const errorMsg = e.message || 'Unknown error during mapped item processing';
            
            if (errorMsg.toLowerCase().includes('sku') || errorMsg.toLowerCase().includes('externalid')) missingSkuCount++;
            if (errorMsg.toLowerCase().includes('price')) invalidPriceCount++;
                               
            errorsToSave.push({
              syncRunId: syncRun.id,
              storeId: store.id,
              externalId: String(probableId),
              errorCode: e.message === 'ITEM_TIMEOUT' ? 'TIMEOUT' : 'PROCESSING_ERROR',
              message: errorMsg,
              rawPayload: JSON.stringify(rawItem)
            });
          }
        }
        
      } catch (e: any) {
        // Mapeo falló para el item base entero
        itemsFailed++;
        const probableId = Object.keys(rawItem).find(k => k.toLowerCase().includes('id')) 
                           ? rawItem[Object.keys(rawItem).find(k => k.toLowerCase().includes('id'))!] 
                           : 'UNKNOWN_ID';
        
        const errorMsg = e.message || 'Error during item mapping';
        if (errorMsg.toLowerCase().includes('sku') || errorMsg.toLowerCase().includes('externalid')) missingSkuCount++;
        if (errorMsg.toLowerCase().includes('price')) invalidPriceCount++;
                           
        errorsToSave.push({
          syncRunId: syncRun.id,
          storeId: store.id,
          externalId: probableId ? String(probableId) : null,
          errorCode: 'MAPPING_ERROR',
          message: errorMsg,
          rawPayload: JSON.stringify(rawItem)
        });
      }
    }

    // Guardar todos los errores en batch
    if (errorsToSave.length > 0) {
      await prisma.syncError.createMany({ data: errorsToSave });
    }

    // 3. Estado Final
    const status = itemsFailed === 0 ? 'SUCCESS' : (itemsProcessed > 0 ? 'PARTIAL_SUCCESS' : 'FAILED');

    await prisma.syncRun.update({
      where: { id: syncRun.id },
      data: {
        status,
        itemsProcessed,
        itemsCreated,
        itemsUpdated,
        itemsFailed,
        errorCount: itemsFailed,
        missingSkuCount,
        invalidPriceCount,
        outOfStockCount,
        finishedAt: new Date()
      }
    });

    // 4. Actualizar Store lastSuccessfulSyncAt o consecutiveFailures
    if (status === 'SUCCESS' || status === 'PARTIAL_SUCCESS') {
      await prisma.store.update({
        where: { id: store.id },
        data: { 
          lastSuccessfulSyncAt: new Date(),
          consecutiveFailures: 0
        }
      });
    } else if (status === 'FAILED') {
      await prisma.store.update({
        where: { id: store.id },
        data: { consecutiveFailures: { increment: 1 } }
      });
    }

    return { 
      syncRunId: syncRun.id,
      status,
      itemsReceived: rawData.items.length,
      itemsProcessed,
      itemsFailed,
      errors: errorsToSave.length
    };
  }

  private async failSyncRun(syncRunId: string, storeId: string, errorCode: string, message: string) {
    await prisma.syncRun.update({
      where: { id: syncRunId },
      data: { status: 'FAILED', finishedAt: new Date() }
    });
    await prisma.syncError.create({
      data: {
        syncRunId,
        storeId,
        errorCode,
        message
      }
    });
  }

  private async processItem(
    rawItem: any, 
    mapped: any, 
    storeId: string, 
    syncRunId: string, 
    isDemo: boolean,
    candidates: CanonicalVariantCandidate[]
  ) {
    const externalVariantId = mapped.externalVariantId || mapped.sku || '';

    // 2. RawOffer (Idempotente)
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
        syncRunId,
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
        isDemo,
        syncRunId,
        status: 'PENDING'
      }
    });

    // 3. Normalization
    const normalized = this.normalizer.normalize(raw);

    // 4. Matching
    const match = this.matcher.match(normalized, candidates);

    // 5. Create/Update Offer
    if (match.status === 'MATCHED' && match.matchedVariantId) {
      await prisma.rawOffer.update({ 
        where: { id: raw.id }, 
        data: { 
          status: 'MATCHED',
          similarityScore: match.confidenceScore,
          matchingMethod: match.matchingMethod,
          matchedBy: match.matchedBy,
          confidence: match.confidence
        } 
      });
      
      const newPriceTotal = raw.shipping !== null ? raw.price + raw.shipping : null;
      
      const existingOffer = await prisma.offer.findUnique({
         where: { storeId_externalProductId_externalVariantId: { storeId, externalProductId: raw.externalId, externalVariantId } }
      });
      
      // Chequear Price Anomaly si ya existía la oferta
      if (existingOffer) {
         const currentPrice = existingOffer.priceTotal ?? existingOffer.priceBase;
         const newPrice = newPriceTotal ?? raw.price;
         // Si el precio cae a menos del 15% del original (Ej: de 100€ a 10€)
         if (newPrice < currentPrice * 0.15) {
             throw new Error(`PRICE_ANOMALY: Price dropped anomalously from ${currentPrice} to ${newPrice}`);
         }
      }
      
      const offer = await prisma.offer.upsert({
        where: { storeId_externalProductId_externalVariantId: { storeId, externalProductId: raw.externalId, externalVariantId } },
        update: {
          variantId: match.matchedVariantId,
          priceBase: raw.price,
          priceShipping: raw.shipping,
          priceTotal: newPriceTotal,
          stockStatus: raw.stock || 'IN_STOCK',
          lastSeenAt: new Date() // <-- Fundamental: Refrescar el staling
        },
        create: {
          storeId,
          variantId: match.matchedVariantId,
          externalProductId: raw.externalId,
          externalVariantId,
          url: raw.url,
          priceBase: raw.price,
          priceShipping: raw.shipping,
          priceTotal: newPriceTotal,
          stockStatus: raw.stock || 'IN_STOCK',
          lastSeenAt: new Date()
        }
      });
      
      // 6. Registrar Price History solo si hay un cambio de precio o es nueva
      if (!existingOffer || existingOffer.priceBase !== offer.priceBase || existingOffer.priceTotal !== offer.priceTotal) {
         await prisma.priceHistory.create({
            data: {
               offerId: offer.id,
               priceBase: offer.priceBase,
               priceShipping: offer.priceShipping,
               priceTotal: offer.priceTotal,
               currency: offer.currency
            }
         });
      }
      
    } else {
      await prisma.rawOffer.update({ 
        where: { id: raw.id }, 
        data: { 
          status: match.status,
          similarityScore: match.confidenceScore,
          matchingMethod: match.matchingMethod,
          matchedBy: match.matchedBy,
          confidence: match.confidence
        } 
      });
    }
  }
}
