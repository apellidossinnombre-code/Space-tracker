import { initList } from "./list.js";
import { renderDetail } from "./detail.js";

export function router(app) {
  const hash = location.hash;

  if (!hash || hash === "#/") {
    initList(app);
  }

  if (hash.startsWith("#/launch/")) {
    const id = hash.split("/")[2];
    renderDetail(id, app);
  }
}
