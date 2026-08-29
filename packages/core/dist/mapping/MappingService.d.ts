import { MappedItem, StoreMappingProfile, TransformFunction } from './mapping.types';
export declare class MappingError extends Error {
    readonly originalObject?: any | undefined;
    constructor(message: string, originalObject?: any | undefined);
}
export declare class MappingService {
    /**
     * Mapea un payload en bruto a un array de MappedItems.
     * Si el profile tiene `variants`, expande el array de variantes en múltiples MappedItems.
     * Si no, devuelve un array de 1 elemento.
     */
    map(rawItem: any, profile: StoreMappingProfile): MappedItem[];
    /**
     * Resuelve una ruta que puede contener puntos y corchetes de array.
     * Ejemplos: "product.name", "product.articles[0].sku", "offers[0].price", "articles.0.price"
     */
    resolvePath(obj: any, path: string): any;
    applyTransform(value: any, transform?: 'string' | 'number' | 'price' | 'boolean' | TransformFunction): any;
}
