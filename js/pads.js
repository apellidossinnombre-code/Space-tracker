import { getPads } from "./api.js";

const app = document.getElementById("app");
app.innerHTML = `<div id="map"></div>`;

const L = await import("https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js");

const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const data = await getPads();

data.results.forEach(p => {
  if (!p.latitude) return;

  L.marker([p.latitude, p.longitude])
    .addTo(map)
    .bindPopup(`<b>${p.name}</b><br>${p.location.name}`);
});
