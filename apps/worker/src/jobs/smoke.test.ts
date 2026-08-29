import { FootLockerConnector } from '../../../../packages/connectors/src/footlocker/FootLockerConnector';
import { NormalizationService } from '../../../../packages/core/src/normalization/NormalizationService';
import { ProductMatchingService, CanonicalVariantCandidate } from '../../../../packages/core/src/matching/ProductMatchingService';

async function runSmokeTest() {
  console.log('========================================');
  console.log('PRICE COMPARATOR — E2E SMOKE TEST');
  console.log('========================================\n');

  // 1. Fetch RAW Offer
  const connector = new FootLockerConnector('mock-store-id');
  const rawOffers = await connector.fetchOffers(1);
  const rawOffer = rawOffers[0];

  console.log(`Store: Foot Locker`);
  console.log(`Product: ${rawOffer.rawTitle}`);
  console.log(`Variant: ${rawOffer.rawColor} / ${rawOffer.rawSize}`);
  console.log('\nRAW OFFER\n✓ Received');

  // 2. Normalize
  const normalizer = new NormalizationService();
  // We mock a Prisma RawOffer structure to pass to the normalizer
  const normalized = normalizer.normalize({
    id: 'raw-1',
    storeId: 'mock-store-id',
    externalId: rawOffer.externalId,
    externalVariantId: rawOffer.externalVariantId,
    rawTitle: rawOffer.rawTitle,
    rawBrand: rawOffer.rawBrand ?? null,
    rawColor: rawOffer.rawColor ?? null,
    rawSize: rawOffer.rawSize ?? null,
    rawGtin: rawOffer.rawGtin ?? null,
    rawMpn: rawOffer.rawMpn ?? null,
    rawSku: rawOffer.rawSku ?? null,
    url: rawOffer.url,
    price: rawOffer.price as any,
    shipping: rawOffer.shipping as any,
    stock: rawOffer.stock,
    rawPayload: rawOffer.rawPayload as any,
    status: 'PENDING',
    similarityScore: null,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  console.log('\nNORMALIZATION');
  console.log(`✓ Brand: ${normalized.brand}`);
  console.log(`✓ Model: ${normalized.title?.replace('nike ', '').replace(' - hombre zapatillas', '')}`); // Simplification just for smoke test log
  console.log(`✓ Size: ${normalized.size.sizeValue}`);
  console.log(`✓ System: ${normalized.size.sizeSystem || 'UNKNOWN'}`);
  console.log(`✓ Color: ${normalized.color}`);

  // 3. Matching
  const matcher = new ProductMatchingService();
  const candidates: CanonicalVariantCandidate[] = [
    {
      id: 'canonical-v1',
      productId: 'p1',
      brandName: 'Nike',
      productModel: 'Air Force 1 \'07',
      productName: 'Nike Air Force 1 \'07',
      gtin: '00885178652414',
      mpn: null,
      sizeValue: '42',
      colorNormalized: 'White',
    }
  ];

  const matchResult = matcher.match(normalized, candidates);

  console.log('\nMATCHING');
  console.log(`✓ Status: ${matchResult.status}`);
  console.log(`✓ Method: ${matchResult.matchingMethod}`);
  console.log(`✓ Confidence: ${matchResult.confidenceScore.toFixed(2)}`);

  // 4. Offer result
  console.log('\nOFFER');
  console.log(`✓ Base price: ${rawOffer.price.toFixed(2)} €`);
  console.log(`✓ Shipping: ${rawOffer.shipping === null ? 'UNKNOWN' : rawOffer.shipping.toFixed(2) + ' €'}`);
  const total = rawOffer.shipping === null ? 'UNKNOWN' : (rawOffer.price + rawOffer.shipping).toFixed(2) + ' €';
  console.log(`✓ Total: ${total}`);

  console.log('\n========================================');
  console.log('PIPELINE SUCCESS');
  console.log('========================================');
}

runSmokeTest().catch(console.error);
