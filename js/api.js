const BASE = "https://ll.thespacedevs.com/2.2.0";

export async function fetchLaunches(offset = 0) {
  const res = await fetch(
    `${BASE}/launch/upcoming/?limit=20&offset=${offset}`
  );
  return res.json();
}

export async function fetchLaunch(id) {
  const res = await fetch(`${BASE}/launch/${id}`);
  return res.json();
}
