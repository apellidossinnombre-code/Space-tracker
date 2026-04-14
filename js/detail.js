import { fetchLaunch } from "./api.js";

export async function loadDetail(app, id) {
  app.innerHTML = `<div class="detail">Loading...</div>`;

  const l = await fetchLaunch(id);

  app.innerHTML = `
    <div class="detail">

      <h1>${l.name}</h1>

      <div class="section">
        <h3>📅 Fecha</h3>
        <p>${new Date(l.net).toLocaleString()}</p>
      </div>

      <div class="section">
        <h3>🚀 Cohete</h3>
        <p>${l.rocket?.configuration?.name}</p>
      </div>

      <div class="section">
        <h3>📍 Pad</h3>
        <p>${l.pad?.name}</p>
      </div>

      <div class="section">
        <h3>🧠 Misión</h3>
        <p>${l.mission?.description || "No description available"}</p>
      </div>

      <button onclick="history.back()">← Back</button>

    </div>
  `;
}
