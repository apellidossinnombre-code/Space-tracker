import { loadFeed } from "./feed.js";
import { loadDetail } from "./detail.js";

export function router(app) {
  const hash = location.hash;

  if (!hash || hash === "#/") {
    loadFeed(app);
  }

  if (hash.startsWith("#/launch/")) {
    const id = hash.split("/")[2];
    loadDetail(app, id);
  }
}
