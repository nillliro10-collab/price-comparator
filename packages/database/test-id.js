const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.offer.findFirst().then(o => console.log(o.id)).finally(() => prisma.$disconnect());
