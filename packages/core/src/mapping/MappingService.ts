import { MappedItem, StoreMappingProfile, FieldMapping, TransformFunction } from './mapping.types';

export class MappingError extends Error {
  constructor(message: string, public readonly originalObject?: any) {
    super(message);
    this.name = 'MappingError';
  }
}

export class MappingService {
  
  /**
   * Mapea un payload en bruto a un array de MappedItems.
   * Si el profile tiene `variants`, expande el array de variantes en múltiples MappedItems.
   * Si no, devuelve un array de 1 elemento.
   */
  public map(rawItem: any, profile: StoreMappingProfile): MappedItem[] {
    if (!rawItem || typeof rawItem !== 'object') {
      throw new MappingError('rawItem debe ser un objeto', rawItem);
    }

    const baseResult: Partial<MappedItem> = {};

    // 1. Mapear campos base
    for (const [key, mapping] of Object.entries(profile.fields)) {
      if (!mapping) continue;
      const fieldDef = typeof mapping === 'string' ? { path: mapping } : mapping;
      const rawValue = this.resolvePath(rawItem, fieldDef.path);
      baseResult[key as keyof MappedItem] = this.applyTransform(rawValue, fieldDef.transform);
    }

    const items: MappedItem[] = [];

    // 2. Si hay definición de variantes, iterar sobre el source
    if (profile.variants) {
      const variantSource = this.resolvePath(rawItem, profile.variants.source);
      
      if (Array.isArray(variantSource)) {
        for (const variantRaw of variantSource) {
          const variantResult = { ...baseResult };
          
          for (const [key, mapping] of Object.entries(profile.variants.fields)) {
            if (!mapping) continue;
            const fieldDef = typeof mapping === 'string' ? { path: mapping } : mapping;
            // IMPORTANTE: resolvemos la ruta DENTRO del objeto de la variante
            const rawValue = this.resolvePath(variantRaw, fieldDef.path);
            variantResult[key as keyof MappedItem] = this.applyTransform(rawValue, fieldDef.transform);
          }
          
          items.push(variantResult as MappedItem);
        }
      } else {
        // Fallback if source is empty or missing but it was expected
        items.push(baseResult as MappedItem);
      }
    } else {
      // 3. Flat mapping
      items.push(baseResult as MappedItem);
    }

    // 4. Validar obligatorios en todos los items generados
    for (const item of items) {
      for (const req of profile.requiredFields) {
        const val = item[req];
        if (val === undefined || val === null || val === '') {
          throw new MappingError(`Campo obligatorio faltante o inválido después del mapeo: ${String(req)}`, rawItem);
        }
      }
    }

    return items;
  }

  /**
   * Resuelve una ruta que puede contener puntos y corchetes de array.
   * Ejemplos: "product.name", "product.articles[0].sku", "offers[0].price", "articles.0.price"
   */
  public resolvePath(obj: any, path: string): any {
    if (obj === undefined || obj === null || !path) return undefined;
    
    // Normalizar "[0]" a ".0" para que el split por punto funcione universalmente
    const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1');
    const keys = normalizedPath.split('.');
    
    let current = obj;
    for (const key of keys) {
      if (current === undefined || current === null) return undefined;
      current = current[key];
    }
    
    return current;
  }

  public applyTransform(value: any, transform?: 'string' | 'number' | 'price' | 'boolean' | TransformFunction): any {
    if (value === undefined || value === null) return undefined;

    if (!transform) {
      if (typeof value === 'string' && value.trim() === '') return undefined;
      return typeof value === 'string' ? value.trim() : value;
    }

    if (typeof transform === 'function') {
      return transform(value);
    }

    switch (transform) {
      case 'string':
        return String(value).trim();
      
      case 'number': {
        const num = Number(value);
        return isNaN(num) ? undefined : num;
      }
      
      case 'price': {
        if (typeof value === 'number') return value;
        const cleaned = String(value).replace(/[^0-9.,-]/g, '').replace(',', '.');
        const num = parseFloat(cleaned);
        return isNaN(num) ? undefined : num;
      }
        
      case 'boolean':
        if (typeof value === 'boolean') return value;
        const str = String(value).toLowerCase().trim();
        return str === 'true' || str === '1' || str === 'yes';
        
      default:
        return value;
    }
  }
}
