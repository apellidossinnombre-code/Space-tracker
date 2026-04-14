// utils/format.js
export function formatDate(date) {
  return new Date(date).toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "short"
  });
}
