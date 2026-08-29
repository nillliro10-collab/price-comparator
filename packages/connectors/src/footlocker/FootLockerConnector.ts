import { StoreConnector, RawOfferInput } from '../base/StoreConnector';

export class FootLockerConnector extends StoreConnector {
  
  constructor(storeId: string) {
    super(storeId);
  }

  public async fetchOffers(limit: number = 10): Promise<RawOfferInput[]> {
    // Para el Hito 1: Mockeamos la respuesta del API de afiliación de Foot Locker
    // con datos de zapatillas 100% reales para probar la tubería.
    
    const mockApiResponse = [
      {
        id: "314101150204",
        product_type: "Sneakers",
        brand: "Nike",
        model: "Air Force 1 '07",
        name: "Nike Air Force 1 '07 - Hombre Zapatillas",
        color: "White-White-White",
        size: "42",
        sku: "314101150204_42",
        ean: "00885178652414",
        price: 119.99,
        shipping_cost: 0.00,
        url: "https://www.footlocker.es/es/product/nike-air-force-1-07-hombre-zapatillas/314101150204.html",
        stock_status: "in_stock"
      },
      {
        id: "314101150204",
        product_type: "Sneakers",
        brand: "Nike",
        model: "Air Force 1 '07",
        name: "Nike Air Force 1 '07 - Hombre Zapatillas",
        color: "White-White-White",
        size: "43",
        sku: "314101150204_43",
        ean: "00885178652421",
        price: 119.99,
        shipping_cost: 0.00,
        url: "https://www.footlocker.es/es/product/nike-air-force-1-07-hombre-zapatillas/314101150204.html",
        stock_status: "in_stock"
      },
      {
        id: "314101150205",
        product_type: "Sneakers",
        brand: "Nike",
        model: "Air Force 1 '07",
        name: "Nike Air Force 1 '07 - Hombre Zapatillas",
        color: "Black-Black-Black",
        size: "42",
        sku: "314101150205_42",
        ean: "00885178652514",
        price: 119.99,
        shipping_cost: null, // Simulamos que para este modelo no informa el envío
        url: "https://www.footlocker.es/es/product/nike-air-force-1-07-hombre-zapatillas/314101150205.html",
        stock_status: "low_stock"
      },
      {
        id: "314206536004",
        product_type: "Sneakers",
        brand: "Adidas",
        model: "Samba OG",
        name: "adidas Samba Og - Hombre Zapatillas",
        color: "Core Black-Ftw White-Gum",
        size: "42 2/3",
        sku: "314206536004_426",
        ean: "4066752391234",
        price: 119.99,
        shipping_cost: 0.00,
        url: "https://www.footlocker.es/es/product/adidas-samba-og-hombre-zapatillas/314206536004.html",
        stock_status: "in_stock"
      },
      {
        id: "314206536004",
        product_type: "Sneakers",
        brand: "Adidas",
        model: "Samba OG",
        name: "adidas Samba Og - Hombre Zapatillas",
        color: "Core Black-Ftw White-Gum",
        size: "44",
        sku: "314206536004_440",
        ean: "4066752391258",
        price: 119.99,
        shipping_cost: 0.00,
        url: "https://www.footlocker.es/es/product/adidas-samba-og-hombre-zapatillas/314206536004.html",
        stock_status: "out_of_stock" // Out of stock example
      },
      {
        id: "316701548104",
        product_type: "Sneakers",
        brand: "New Balance",
        model: "530",
        name: "New Balance 530 - Unisex Zapatillas",
        color: "White-Silver-Navy",
        size: "41.5",
        sku: "316701548104_415",
        ean: "194768392012",
        price: 109.99,
        shipping_cost: 5.99,
        url: "https://www.footlocker.es/es/product/new-balance-530-unisex-zapatillas/316701548104.html",
        stock_status: "in_stock"
      }
    ];

    const results: RawOfferInput[] = [];

    // Tomamos solo el límite
    const dataToProcess = mockApiResponse.slice(0, limit);

    for (const item of dataToProcess) {
      results.push({
        externalId: item.id,
        externalVariantId: item.sku, 
        rawTitle: item.name,
        rawBrand: item.brand,
        rawColor: item.color,
        rawSize: item.size,
        rawGtin: item.ean,
        rawMpn: null, // MPN not always provided
        rawSku: item.sku,
        url: item.url,
        price: item.price,
        shipping: item.shipping_cost,
        stock: item.stock_status,
        rawPayload: item // Mantenemos el JSON íntegro original como pidió el CTO
      });
    }

    return results;
  }
}
