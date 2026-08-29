import { PrismaClient } from '@prisma/client';
import { NormalizationService } from '../packages/database/src/services/NormalizationService';
import { ProductMatchingService } from '../packages/database/src/services/ProductMatchingService';
import { ZalandoAffiliateConnector } from '../packages/database/src/connectors/zalando';

const prisma = new PrismaClient();

async function runBenchmark() {
  console.log('--- STARTING INGESTION BENCHMARK ---');
  
  // 1. Get raw offers from Zalando
  const rawOffers = await ZalandoAffiliateConnector.fetchFeed(); // Returns an array
  
  // Generate 1000 items to start the benchmark
  const massiveFeed = [];
  for (let i = 0; i < 1000; i++) {
     // Clone the mock feed and mutate awin_id to make it massive
     for (const item of rawOffers) {
       massiveFeed.push({
         ...item,
         awin_id: `${item.awin_id}-${i}`,
         current_price: (parseFloat(item.current_price) + Math.random() * 5).toFixed(2)
       });
     }
  }

  console.log(`Prepared ${massiveFeed.length} RawOffers.`);
  
  const startTime = Date.now();
  let highMatches = 0;
  let mediumMatches = 0;
  let lowMatches = 0;

  for (const item of massiveFeed) {
    const rawOffer = {
      rawBrand: item.brand_name,
      rawColor: item.color_description,
      rawSize: item.size_eu,
      rawTitle: item.product_title,
      rawGtin: item.ean,
      rawMpn: item.mpn,
    };
    
    const match = await ProductMatchingService.findMatch(rawOffer);
    
    // Log decision
    await prisma.matchingDecision.create({
      data: {
        rawOfferId: item.awin_id,
        candidateProductId: match.candidateProductId,
        confidenceLevel: match.level,
        signals: JSON.stringify(match.signals),
        reason: match.reason
      }
    });

    if (match.level === 'HIGH') highMatches++;
    if (match.level === 'MEDIUM') mediumMatches++;
    if (match.level === 'LOW') lowMatches++;
  }

  const duration = Date.now() - startTime;
  console.log('--- BENCHMARK RESULTS ---');
  console.log(`Processed: ${massiveFeed.length} items`);
  console.log(`Time: ${duration}ms (${(duration / massiveFeed.length).toFixed(2)}ms per item)`);
  console.log(`HIGH Matches: ${highMatches}`);
  console.log(`MEDIUM Matches (Sent to Review): ${mediumMatches}`);
  console.log(`LOW Matches (Splits): ${lowMatches}`);
}

runBenchmark().catch(console.error).finally(() => prisma.$disconnect());
