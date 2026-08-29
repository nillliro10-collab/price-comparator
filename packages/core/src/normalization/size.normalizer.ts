export interface NormalizedSize {
  sizeValue: string | null;   // e.g. "42", "42.6667"
  sizeSystem: string | null;  // e.g. "EU", "US"
  sizeLabel: string;          // e.g. "42 2/3"
}

export function normalizeSize(rawSize: string | null | undefined): NormalizedSize {
  if (!rawSize || rawSize.trim() === '') {
    return { sizeValue: null, sizeSystem: null, sizeLabel: '' };
  }

  const label = rawSize.trim();
  let system: string | null = null;
  let valueStr = label;

  // Extract known systems
  const systemRegex = /\b(EU|US|UK|CM)\b/i;
  const sysMatch = label.match(systemRegex);
  if (sysMatch) {
    system = sysMatch[1].toUpperCase();
    // Remove the system from the value string
    valueStr = valueStr.replace(systemRegex, '').trim();
  }

  // Handle fractions like "42 2/3" or "42.5"
  let sizeValue: string | null = valueStr;
  
  // Fraction pattern: "42 2/3" -> groups: ["42", "2", "3"]
  const fractionMatch = valueStr.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (fractionMatch) {
    const whole = parseInt(fractionMatch[1], 10);
    const num = parseInt(fractionMatch[2], 10);
    const den = parseInt(fractionMatch[3], 10);
    if (den !== 0) {
      const dec = whole + (num / den);
      sizeValue = dec.toFixed(4).replace(/\.?0+$/, ''); // e.g. 42.6667
    }
  } else {
    // Just a normal number like "42" or "42.5"
    // Remove any leftover chars if it's purely numeric
    const numMatch = valueStr.match(/^(\d+(?:\.\d+)?)$/);
    if (numMatch) {
      sizeValue = numMatch[1];
    }
  }

  return {
    sizeValue,
    sizeSystem: system,
    sizeLabel: label,
  };
}
