import { StoreConnector, RawStoreData } from '../StoreConnector';
import { StoreMappingProfile } from '@price-comparator/core/src/mapping/mapping.types';

export class ZalandoConnector implements StoreConnector {
  public name = 'Zalando Mock';

  constructor(public readonly storeId: string) {}

  public async fetch(): Promise<RawStoreData> {
    // Simulamos un retraso de red
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      items: [
        {
          id: 'ZAL-100',
          title: 'Nike Air Force 1',
          brand: { name: 'Nike' },
          url: 'https://zalando.es/nike-air-force-1',
          articles: [
            {
              sku: 'ZAL-100-42W',
              size: '42',
              color: 'White',
              offers: [
                { price: 109.99, availability: { status: 'AVAILABLE' } }
              ]
            },
            {
              sku: 'ZAL-100-43W',
              size: '43',
              color: 'White',
              offers: [
                { price: '112,00', availability: { status: 'AVAILABLE' } } // String price with comma
              ]
            },
            {
              sku: 'ZAL-100-44W',
              size: '44',
              color: 'White',
              offers: [
                { price: 115.50, availability: { status: 'OUT_OF_STOCK' } }
              ]
            }
          ]
        },
        {
          id: 'ZAL-200',
          title: 'Defective Product',
          brand: { name: 'Unknown' },
          articles: [
            {
              // missing sku -> should fail mapping for this variant
              size: '40',
              offers: [{ price: 50 }]
            },
            {
              sku: 'ZAL-200-41',
              size: '41',
              offers: [{ price: 50 }]
            }
          ]
        }
      ]
    };
  }

  public getMappingProfile(): StoreMappingProfile {
    return {
      name: 'ZalandoJSON',
      requiredFields: ['externalId', 'price', 'name'],
      fields: {
        name: 'title',
        brand: 'brand.name',
        url: 'url'
      },
      variants: {
        source: 'articles',
        fields: {
          externalId: 'sku', // Base ID + Variant ID
          externalVariantId: 'sku', // Usually SKU defines the exact variant
          size: 'size',
          color: 'color',
          price: { path: 'offers[0].price', transform: 'price' },
          stock: { 
            path: 'offers[0].availability.status', 
            transform: (val) => val === 'AVAILABLE' ? 'IN_STOCK' : 'OUT_OF_STOCK'
          }
        }
      }
    };
  }
}
