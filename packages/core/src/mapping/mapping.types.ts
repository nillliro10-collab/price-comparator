export interface MappedItem {
  externalId: string;
  externalVariantId?: string;
  name: string;
  brand?: string;
  price: number;
  shipping?: number;
  currency?: string;
  size?: string;
  color?: string;
  stock?: string;
  url: string;
  gtin?: string;
  mpn?: string;
  sku?: string;
}

export type TransformFunction = (value: any) => any;

export interface FieldMapping {
  path: string;
  transform?: 'string' | 'number' | 'price' | 'boolean' | TransformFunction;
}

export interface StoreMappingProfile {
  name: string;
  
  // Mapeo Base (a nivel de Producto)
  fields: {
    externalId?: FieldMapping | string; // Opcional si se saca de variante
    name?: FieldMapping | string;
    brand?: FieldMapping | string;
    url?: FieldMapping | string;
    [key: string]: FieldMapping | string | undefined;
  };
  
  // Mapeo de Variantes (opcional, para fuentes anidadas)
  variants?: {
    source: string; // Ej: "product.articles"
    fields: {
      externalId?: FieldMapping | string;
      externalVariantId?: FieldMapping | string;
      price?: FieldMapping | string;
      shipping?: FieldMapping | string;
      size?: FieldMapping | string;
      color?: FieldMapping | string;
      stock?: FieldMapping | string;
      url?: FieldMapping | string;
      [key: string]: FieldMapping | string | undefined;
    }
  };

  requiredFields: (keyof MappedItem)[];
}
