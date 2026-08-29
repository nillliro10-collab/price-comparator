import { PrismaClient } from '@prisma/client';
import path from 'path';

// En Vercel, todo lo que esté en public/ se sube a los servidores.
// Hemos copiado dev.db a apps/web/public/dev.db para garantizar que esté disponible.
const dbPath = path.join(process.cwd(), 'public', 'dev.db');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`
    }
  }
});
export { prisma, PrismaClient };
export * from '@prisma/client';
