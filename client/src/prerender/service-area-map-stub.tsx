// Leaflet needs a browser window at import time, so the prerender build swaps
// the interactive map for nothing. The map has no text content to index.
export default function ServiceAreaMap() {
  return null;
}
