import { getRockets } from "./api.js";

const app = document.getElementById("app");
app.innerHTML = `<div class="grid" id="grid"></div>`;
const grid = document.getElementById("grid");

const data = await getRockets();

data.results.forEach(r => {
  const el = document.createElement("div");
  el.className = "card";

  el.innerHTML = `
    <img src="${r.image || 'https://via.placeholder.com/120'}" />
    <div class="card-content">
      <div class="title">${r.name}</div>
      <div class="meta">${r.manufacturer?.name || ""}</div>
    </div>
  `;

  grid.appendChild(el);
});
