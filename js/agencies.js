import { getAgencies } from "./api.js";

const app = document.getElementById("app");
app.innerHTML = `<div class="grid" id="grid"></div>`;
const grid = document.getElementById("grid");

const data = await getAgencies();

data.results.forEach(a => {
  const el = document.createElement("div");
  el.className = "card";

  el.innerHTML = `
    <img src="${a.logo_url || 'https://via.placeholder.com/120'}" />
    <div class="card-content">
      <div class="title">${a.name}</div>
      <div class="meta">${a.country_code}</div>
    </div>
  `;

  grid.appendChild(el);
});
