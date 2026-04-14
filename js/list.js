import { getLaunches } from "./api.js";

let offset = 0;
let loading = false;

export function loadList(app) {
  app.innerHTML = `<div class="container" id="list"></div>`;
  const list = document.getElementById("list");

  async function loadMore() {
    if (loading) return;
    loading = true;

    const data = await getLaunches(offset);

    data.results.forEach(l => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${l.name}</h3>
        <p><span class="badge">${l.status.name}</span></p>
        <p>📅 ${new Date(l.net).toLocaleString()}</p>
      `;

      div.onclick = () => {
        location.hash = `#/launch/${l.id}`;
      };

      list.appendChild(div);
    });

    offset += 10;
    loading = false;
  }

  loadMore();

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      loadMore();
    }
  };
}
