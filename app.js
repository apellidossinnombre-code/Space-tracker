// app.js
import { loadHome } from "./views/home.js";
import { loadLaunches } from "./views/launches.js";

const app = document.getElementById("app");

function router() {
  const hash = location.hash;

  if (!hash || hash === "#home") {
    loadHome(app);
  } else if (hash === "#launches") {
    loadLaunches(app);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
window.addEventListener("search", async (e) => {
  const q = e.detail;

  if (!q) return router();

  const { searchLaunches } = await import("./services/api.js");
  const data = await searchLaunches(q);

  const app = document.getElementById("app");
  app.innerHTML = "<h2>Resultados</h2>";

  data.results.forEach(l => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${l.name}</h3>`;
    app.appendChild(div);
  });
});
// search global
document.getElementById("search").addEventListener("input", (e) => {
  window.dispatchEvent(new CustomEvent("search", {
    detail: e.target.value
  }));
});
