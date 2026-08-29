"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MappingService_1 = require("../mapping/MappingService");
describe('MappingService', () => {
    let service;
    beforeEach(() => {
        service = new MappingService_1.MappingService();
    });
    const mockProfile = {
        name: 'Test Store',
        requiredFields: ['externalId', 'price', 'name'],
        fields: {
            externalId: 'sku_id',
            name: 'product_title',
            price: { path: 'pricing.current', transform: 'price' },
            stock: 'availability.in_stock',
            brand: 'attributes.brand',
            size: 'attributes.size',
            url: 'product_url'
        }
    };
    it('should map a complex raw object to StandardizedStorePayload', () => {
        const raw = {
            sku_id: '12345',
            product_title: 'Nike Air Force 1',
            pricing: {
                current: ' 120,50 EUR '
            },
            availability: {
                in_stock: 'IN_STOCK'
            },
            attributes: {
                brand: 'Nike',
                size: '42'
            }
        };
        const result = service.map(raw, mockProfile);
        expect(result.externalId).toBe('12345');
        expect(result.name).toBe('Nike Air Force 1');
        expect(result.price).toBe(120.5); // Extracted and transformed
        expect(result.stock).toBe('IN_STOCK');
        expect(result.brand).toBe('Nike');
        expect(result.size).toBe('42');
    });
    it('should throw an error if a required field is missing', () => {
        const raw = {
            product_title: 'Nike Air Force 1',
            pricing: { current: '120.50' }
            // Missing sku_id
        };
        expect(() => service.map(raw, mockProfile)).toThrow(/Campo obligatorio faltante/);
    });
    it('should transform custom functions', () => {
        const profileWithCustomFn = {
            name: 'Custom',
            requiredFields: ['externalId', 'price', 'name'],
            fields: {
                externalId: 'id',
                name: 'title',
                price: 'price',
                url: 'url',
                size: {
                    path: 'size',
                    transform: (val) => val ? val.replace('EU', '').trim() : undefined
                }
            }
        };
        const raw = {
            id: '1',
            title: 'Shoe',
            price: 100,
            size: ' 42 EU '
        };
        const result = service.map(raw, profileWithCustomFn);
        expect(result.size).toBe('42');
    });
});
