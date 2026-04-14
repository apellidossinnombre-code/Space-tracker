import { getLaunches } from "./api.js";

let offset = 0;
let loading = false;

export function initList(app) {
  app.innerHTML = `<div id="list"></div>`;
  const list = document.getElementById("list");

  async function load() {
    if (loading) return;
    loading = true;

    const data = await getLaunches(offset);

    data.results.forEach(l => {
      const el = document.createElement("div");
      el.className = "card";

      el.innerHTML = `
        <h3>${l.name}</h3>
        <p><span class="badge">${l.status.name}</span></p>
        <p>📅 ${new Date(l.net).toLocaleString()}</p>
      `;

      el.onclick = () => {
        location.hash = "#/launch/" + l.id;
      };

      list.appendChild(el);
    });

    offset += 20;
    loading = false;
  }

  load();

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      load();
    }
  };
}
