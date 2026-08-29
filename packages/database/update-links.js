const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function setDeeplinks() {
  await prisma.store.updateMany({
    where: { slug: 'foot-locker' },
    data: { 
      deeplinkTemplate: 'https://awin1.com/cread.php?awinmid={programId}&clickref={clickId}&p={encodedUrl}'
    }
  });

  await prisma.store.updateMany({
    where: { slug: 'zalando' },
    data: { 
      deeplinkTemplate: 'https://clk.tradedoubler.com/click?p={programId}&a=MY_ACCOUNT_ID&url={encodedUrl}&epi={clickId}'
    }
  });

  console.log('Deeplinks injected.');
}

setDeeplinks().finally(() => prisma.$disconnect());
