const BASE = "https://TU-WORKER.workers.dev";

export async function getLaunches(offset = 0) {
  const res = await fetch(
    `${BASE}/launch/upcoming/?limit=20&offset=${offset}`
  );
  return res.json();
}

export async function getLaunch(id) {
  const res = await fetch(`${BASE}/launch/${id}`);
  return res.json();
}
