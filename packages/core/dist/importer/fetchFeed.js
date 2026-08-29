"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFeed = fetchFeed;
async function fetchFeed(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error descargando feed: ${res.statusText}`);
    }
    const text = await res.text();
    return text;
}
