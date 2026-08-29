import { ProductMatchingService } from '../packages/database/src/services/ProductMatchingService';

async function runSafetyTest() {
  console.log('--- STARTING ANTI-COLLISION SAFETY TEST ---');
  
  const testCases = [
    {
      name: "Air Force 1 vs Air Force 1 '07",
      rawOffer: {
        rawBrand: "Nike",
        rawTitle: "Nike Air Force 1 '07",
        rawColor: "White",
      },
      expectReject: true
    },
    {
      name: "Air Force 1 vs Air Force 1 Shadow",
      rawOffer: {
        rawBrand: "Nike",
        rawTitle: "Nike Air Force 1 Shadow pastel",
        rawColor: "White",
      },
      expectReject: true
    },
    {
      name: "Samba OG vs Samba ADV",
      rawOffer: {
        rawBrand: "Adidas",
        rawTitle: "adidas Samba ADV core black",
        rawColor: "Black",
      },
      expectReject: true
    }
  ];

  for (const tc of testCases) {
    const match = await ProductMatchingService.findMatch(tc.rawOffer);
    
    // We expect these to NOT be HIGH. If they are HIGH, it's a false positive.
    const isSafe = match.level !== 'HIGH';
    
    if (isSafe) {
      console.log(`✅ [SAFE] ${tc.name} -> Blocked from automatic merge. (Level: ${match.level}, Reason: ${match.reason})`);
    } else {
      console.error(`❌ [DANGER - FALSE POSITIVE] ${tc.name} -> Automatically merged!`);
    }
  }
}

runSafetyTest();
