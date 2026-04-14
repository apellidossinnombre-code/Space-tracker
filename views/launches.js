// views/launches.js
import { getUpcomingLaunches } from "../services/api.js";
import { formatDate } from "../utils/format.js";

export async function loadLaunches(app) {
  app.innerHTML = "<h2>🚀 Próximos lanzamientos</h2><div id='list'></div>";

  const data = await getUpcomingLaunches();
  const list = document.getElementById("list");

  data.results.forEach(l => {
    const el = document.createElement("div");

    const time = new Date(l.net).getTime();
    const now = Date.now();

    el.className = "card";
    el.innerHTML = `
      <h3>${l.name}</h3>
      <p><span class="badge">${l.status.name}</span></p>
      <p>📅 ${formatDate(l.net)}</p>
      <p>🚀 ${l.rocket.configuration.name}</p>
    `;

    el.onclick = () => {
      location.hash = "#launch-" + l.id;
    };

    list.appendChild(el);
  });
}
