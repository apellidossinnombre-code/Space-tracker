import { getLaunches } from "./api.js";

let offset = 0;
let loading = false;

const app = document.getElementById("app");
app.innerHTML = `<div class="grid" id="grid"></div>`;

const grid = document.getElementById("grid");

async function load() {
  if (loading) return;
  loading = true;

  const data = await getLaunches(offset);

  data.results.forEach(l => {
    const el = document.createElement("div");
    el.className = "card";

    const status =
      l.status.name.toLowerCase().includes("go") ? "go" :
      l.status.name.toLowerCase().includes("fail") ? "fail" : "tbd";

    el.innerHTML = `
      <img src="${l.image || 'https://via.placeholder.com/120'}" />
      <div class="card-content">
        <div class="title">${l.name}</div>
        <div class="meta">${l.rocket?.configuration?.name || "Unknown"}</div>
        <div class="meta">${new Date(l.net).toLocaleString()}</div>
        <span class="badge ${status}">${l.status.name}</span>
      </div>
    `;

    el.onclick = () => {
      location.href = `launch_detail.html?id=${l.id}`;
    };

    grid.appendChild(el);
  });

  offset += 20;
  loading = false;
}

load();

window.addEventListener("scroll", () => {
  if (window.innerHeight + scrollY >= document.body.offsetHeight - 300) {
    load();
  }
});
