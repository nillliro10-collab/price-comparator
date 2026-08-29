export function normalizeText(text: string | null | undefined): string | null {
  if (!text) return null;
  
  // Convert to lower case, remove special chars, trim
  return text
    .toLowerCase()
    .replace(/[^\w\s\.\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
