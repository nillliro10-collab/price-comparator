export class NormalizationService {
  static normalizeString(str: string | null | undefined): string {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      // Remove diacritics
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      // Remove punctuation
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  static normalizeColor(color: string | null | undefined): string {
    if (!color) return '';
    const map: Record<string, string> = {
      'triple white': 'white',
      'triple black': 'black',
      'core black': 'black',
      'ftwr white': 'white',
      'blanco': 'white',
      'negro': 'black'
    };
    const c = this.normalizeString(color);
    return map[c] || c;
  }

  static normalizeSize(size: string | null | undefined): string {
    if (!size) return '';
    let s = this.normalizeString(size);
    // Remove sizing systems if present to extract raw value
    s = s.replace(/\beu\b/, '').replace(/\bus\b/, '').replace(/\buk\b/, '').trim();
    // Sometimes sizes come as "42 2/3", leave them clean
    return s;
  }
}
