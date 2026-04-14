import { getLaunch } from "./api.js";

export async function renderDetail(id, app) {
  app.innerHTML = `<p>Cargando...</p>`;

  const l = await getLaunch(id);

  app.innerHTML = `
    <div class="container">
      <h1>${l.name}</h1>

      <p><strong>Fecha:</strong> ${new Date(l.net).toLocaleString()}</p>

      <p><strong>Estado:</strong> ${l.status.name}</p>

      <p><strong>Cohete:</strong> ${l.rocket?.configuration?.name || "N/A"}</p>

      <p><strong>Pad:</strong> ${l.pad?.name || "N/A"}</p>

      <p>${l.mission?.description || "Sin descripción disponible"}</p>

      <a href="#/">⬅ Volver</a>
    </div>
  `;
}
