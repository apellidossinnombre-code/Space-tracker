const BASE = "https://ll.thespacedevs.com/2.2.0";

export async function getLaunches(offset = 0) {
  const res = await fetch(`${BASE}/launch/upcoming/?limit=20&offset=${offset}`);
  return res.json();
}

export async function getRockets() {
  const res = await fetch(`${BASE}/config/launcher/`);
  return res.json();
}

export async function getAgencies() {
  const res = await fetch(`${BASE}/agencies/?limit=50`);
  return res.json();
}

export async function getPads() {
  const res = await fetch(`${BASE}/pad/`);
  return res.json();
}

export async function getLaunchById(id) {
  const res = await fetch(`${BASE}/launch/${id}`);
  return res.json();
}
