import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Buscando imágenes realistas para los productos...');
  const products = await prisma.product.findMany();

  for (const product of products) {
    try {
      // Usar el modelo o nombre para buscar
      const query = encodeURIComponent(product.name);
      console.log(`Buscando imagen para: ${product.name}`);
      
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${query}&per_page=3&page=1`);
      
      if (!res.ok) {
        console.log(`❌ Error HTTP ${res.status} para ${product.name}`);
        continue;
      }
      
      const data = (await res.json()) as any;
      
      if (data.results && data.results.length > 0) {
        // Coger la primera imagen o una aleatoria de las 3 primeras
        const imgUrl = data.results[0].urls.regular;
        
        await prisma.product.update({
          where: { id: product.id },
          data: { imageUrl: imgUrl }
        });
        
        console.log(`✅ Actualizado ${product.name}`);
      } else {
        // Fallback: buscar solo por la marca
        const brandRes = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(product.brandId)}&per_page=1`);
        const brandData = (await brandRes.json()) as any;
        if (brandData.results && brandData.results.length > 0) {
          await prisma.product.update({
            where: { id: product.id },
            data: { imageUrl: brandData.results[0].urls.regular }
          });
          console.log(`⚠️ Fallback usado para ${product.name}`);
        } else {
          console.log(`❌ No se encontraron imágenes para ${product.name}`);
        }
      }
      
      // Esperar un poco para no saturar la API
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.log(`❌ Error procesando ${product.name}:`, error);
    }
  }

  console.log('🎉 Terminado!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
