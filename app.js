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

// search global
document.getElementById("search").addEventListener("input", (e) => {
  window.dispatchEvent(new CustomEvent("search", {
    detail: e.target.value
  }));
});
