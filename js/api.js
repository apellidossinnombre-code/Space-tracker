const BASE = "https://ll.thespacedevs.com/2.2.0";

export async function getLaunches(offset = 0) {
  return fetch(`${BASE}/launch/upcoming/?limit=20&offset=${offset}`)
    .then(r => r.json());
}

export async function getRockets() {
  return fetch(`${BASE}/config/launcher/`).then(r => r.json());
}

export async function getAgencies() {
  return fetch(`${BASE}/agencies/?limit=50`).then(r => r.json());
}

export async function getPads() {
  return fetch(`${BASE}/pad/`).then(r => r.json());
}
