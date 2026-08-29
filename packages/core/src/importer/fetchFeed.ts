export async function fetchFeed(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error descargando feed: ${res.statusText}`);
  }

  const text = await res.text();
  return text;
}
