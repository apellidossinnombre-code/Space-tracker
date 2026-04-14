// utils/countdown.js
export function createCountdown(date, el) {
  function update() {
    const diff = new Date(date) - new Date();

    if (diff <= 0) {
      el.innerHTML = "🚀 Lanzado";
      return;
    }

    const h = Math.floor(diff / 1000 / 60 / 60);
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    el.innerHTML = `⏳ ${h}h ${m}m ${s}s`;
  }

  update();
  setInterval(update, 1000);
}
