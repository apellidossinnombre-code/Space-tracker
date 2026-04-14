import { getLaunch } from "./api.js";

export async function renderDetail(id, app) {
  app.innerHTML = "Cargando...";

  const l = await getLaunch(id);

  app.innerHTML = `
    <div class="card">
      <h1>${l.name}</h1>

      <p>📅 ${new Date(l.net).toLocaleString()}</p>
      <p>🚀 ${l.rocket?.configuration?.name}</p>
      <p>📍 ${l.pad?.name}</p>

      <p>${l.mission?.description || "Sin descripción"}</p>
    </div>
  `;
}
