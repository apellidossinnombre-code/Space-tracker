import { fetchLaunches } from "./api.js";

let offset = 0;
let loading = false;

export function loadFeed(app) {
  app.innerHTML = `<div id="feed"></div>`;
  const feed = document.getElementById("feed");

  async function load() {
    if (loading) return;
    loading = true;

    const data = await fetchLaunches(offset);

    data.results.forEach(l => {
      const el = document.createElement("div");
      el.className = "launch-card";

      const statusClass =
        l.status.name.toLowerCase().includes("go") ? "go" :
        l.status.name.toLowerCase().includes("success") ? "success" :
        l.status.name.toLowerCase().includes("failure") ? "failure" : "tbd";

      el.innerHTML = `
        <div class="launch-title">${l.name}</div>

        <div class="meta">
          ${new Date(l.net).toLocaleString()} · ${l.rocket?.configuration?.name || "Unknown rocket"}
        </div>

        <div class="badge ${statusClass}">
          ${l.status.name}
        </div>
      `;

      el.onclick = () => {
        location.hash = "#/launch/" + l.id;
      };

      feed.appendChild(el);
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
