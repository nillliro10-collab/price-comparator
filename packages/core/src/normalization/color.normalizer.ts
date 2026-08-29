export function normalizeColor(rawColor: string | null | undefined): string | null {
  if (!rawColor || rawColor.trim() === '') {
    return null;
  }

  let color = rawColor.trim().toLowerCase();

  // Basic normalization for common sneakers patterns
  color = color.replace(/-/g, ' ');
  color = color.replace(/\//g, ' ');
  
  // Condense spaces
  color = color.replace(/\s+/g, ' ').trim();

  // Simple mappings (deterministic)
  const map: Record<string, string> = {
    'triple white': 'white',
    'white white': 'white',
    'white white white': 'white',
    'triple black': 'black',
    'black black': 'black',
    'black black black': 'black',
  };

  if (map[color]) {
    return capitalize(map[color]);
  }

  // If it's something like "black anthracite", we keep it conservative
  // by just capitalizing the normalized words
  return capitalize(color);
}

function capitalize(str: string): string {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
