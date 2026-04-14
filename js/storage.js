export function setCache(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getCache(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
