import { MetadataRoute } from 'next';
import { prisma } from '@price-comparator/database/src/index';

const BASE_URL = 'https://pricecomparator.com'; // Placeholder domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapUrls: MetadataRoute.Sitemap = [];
  
  // Add Home
  sitemapUrls.push({
    url: `${BASE_URL}/`,
    lastModified: new Date(),
  });

  try {
    // Fetch products with active offers
    const activeProducts = await prisma.product.findMany({
      where: {
        variants: {
          some: {
            offers: {
              some: {
                store: { isDemo: false },
                stockStatus: 'IN_STOCK',
                priceBase: { gt: 0 }
              }
            }
          }
        }
      },
      include: {
        brand: true,
        variants: {
          include: {
            offers: {
              orderBy: { updatedAt: 'desc' },
              take: 1
            }
          }
        }
      }
    });

    activeProducts.forEach((product) => {
      // Determine lastModified based on the most recently updated offer
      let lastModified = product.updatedAt;
      product.variants.forEach((v: any) => {
        v.offers.forEach((o: any) => {
          if (o.updatedAt > lastModified) {
            lastModified = o.updatedAt;
          }
        });
      });

      sitemapUrls.push({
        url: `${BASE_URL}/product/${product.slug}`,
        lastModified: lastModified,
      });
    });

    // Fetch active brands
    const activeBrands = await prisma.brand.findMany({
      where: {
        products: {
          some: {
            variants: {
              some: {
                offers: {
                  some: {
                    store: { isDemo: false },
                    stockStatus: 'IN_STOCK'
                  }
                }
              }
            }
          }
        }
      }
    });

    activeBrands.forEach((brand) => {
      sitemapUrls.push({
        url: `${BASE_URL}/marca/${brand.slug}`,
        lastModified: new Date(),
      });
    });

    // Add programmatic SEO routes (Brand + Model & Brand + Model + Size)
    activeProducts.forEach((product) => {
      // 1. Brand + Model
      sitemapUrls.push({
        url: `${BASE_URL}/marca/${product.brand?.slug || 'unknown'}/${product.slug}`,
        lastModified: product.updatedAt,
      });

      // 2. Brand + Model + Size
      const sizes = new Set<string>();
      product.variants.forEach(v => {
        if (v.sizeValue) sizes.add(v.sizeValue);
      });

      sizes.forEach(size => {
        sitemapUrls.push({
          url: `${BASE_URL}/marca/${product.brand?.slug || 'unknown'}/${product.slug}/talla-${size}`,
          lastModified: product.updatedAt,
        });
      });
    });

    // Fetch active categories
    const activeCategories = await prisma.category.findMany({
      where: {
        products: {
          some: {
            variants: {
              some: {
                offers: {
                  some: {
                    store: { isDemo: false },
                    stockStatus: 'IN_STOCK'
                  }
                }
              }
            }
          }
        }
      }
    });

    activeCategories.forEach((category) => {
      sitemapUrls.push({
        url: `${BASE_URL}/categoria/${category.slug}`,
        lastModified: new Date(),
      });
    });
  } catch (error) {
    console.warn("Could not connect to DB for sitemap generation. Returning default sitemap.");
  }

  return sitemapUrls;
}
