import { router } from "./router.js";

const app = document.getElementById("app");

window.addEventListener("hashchange", () => router(app));
window.addEventListener("load", () => router(app));
