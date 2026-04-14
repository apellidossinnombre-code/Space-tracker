const BASE = "https://ll.thespacedevs.com/2.2.0/launch/upcoming";

export async function getLaunches(offset = 0) {
  const cacheKey = `launches_${offset}`;

  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const res = await fetch(`${BASE}/?limit=10&offset=${offset}`);
  const data = await res.json();

  localStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
}

export async function getLaunch(id) {
  const cacheKey = `launch_${id}`;

  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const res = await fetch(`https://ll.thespacedevs.com/2.2.0/launch/${id}`);
  const data = await res.json();

  localStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
}
