const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.analyticsEvent.count().then(c => console.log('TOTAL:', c)).finally(() => prisma.$disconnect());
