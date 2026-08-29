"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootLockerAwinConnector = void 0;
class FootLockerAwinConnector {
    storeId;
    name = 'Foot Locker (Awin)';
    // Use constructor injection for DB storeId mapping
    constructor(storeId) {
        this.storeId = storeId;
    }
    async fetch() {
        // DEVELOPMENT FIXTURE
        // En producción, esto haría un GET a la URL de Awin y parsearía el CSV a JSON.
        return {
            items: [
                // Producto Bueno Talla 42
                {
                    "aw_product_id": "FL-AF1-42",
                    "product_name": "Nike Air Force 1",
                    "merchant_category": "Zapatillas",
                    "brand_name": "Nike",
                    "search_price": "99.99",
                    "delivery_cost": "0",
                    "in_stock": "yes",
                    "aw_deep_link": "https://footlocker.com/af1",
                    "size": "42",
                    "color": "Blanco"
                },
                // Producto Bueno Talla 43
                {
                    "aw_product_id": "FL-AF1-43",
                    "product_name": "Nike Air Force 1",
                    "merchant_category": "Zapatillas",
                    "brand_name": "Nike",
                    "search_price": "99.99",
                    "delivery_cost": "0",
                    "in_stock": "yes",
                    "aw_deep_link": "https://footlocker.com/af1",
                    "size": "43",
                    "color": "Blanco"
                },
                // Producto Bueno Talla 44
                {
                    "aw_product_id": "FL-AF1-44",
                    "product_name": "Nike Air Force 1",
                    "merchant_category": "Zapatillas",
                    "brand_name": "Nike",
                    "search_price": "99.99",
                    "delivery_cost": "0",
                    "in_stock": "yes",
                    "aw_deep_link": "https://footlocker.com/af1",
                    "size": "44",
                    "color": "Blanco"
                },
                // Producto Roto (Sin ID)
                {
                    "product_name": "Nike Air Force 1",
                    "search_price": "99.99",
                    "aw_deep_link": "https://footlocker.com/af1"
                },
                // Producto Roto (Precio Invalido)
                {
                    "aw_product_id": "FL-AF1-BROKEN",
                    "product_name": "Nike Air Max 90",
                    "search_price": "GRATIS",
                    "aw_deep_link": "https://footlocker.com/am90"
                }
            ]
        };
    }
    getMappingProfile() {
        return {
            name: 'FootLocker Awin Feed',
            requiredFields: ['externalId', 'price', 'url', 'name'],
            fields: {
                externalId: 'aw_product_id',
                externalVariantId: 'aw_product_id',
                name: 'product_name',
                brand: 'brand_name',
                price: {
                    path: 'search_price',
                    transform: 'price'
                },
                shipping: {
                    path: 'delivery_cost',
                    transform: 'price'
                },
                size: 'size',
                color: 'color',
                stock: {
                    path: 'in_stock',
                    transform: (val) => {
                        const str = String(val).toLowerCase().trim();
                        if (str === 'yes' || str === 'in stock' || str === 'true')
                            return 'IN_STOCK';
                        return 'OUT_OF_STOCK';
                    }
                },
                url: 'aw_deep_link'
            }
        };
    }
}
exports.FootLockerAwinConnector = FootLockerAwinConnector;
