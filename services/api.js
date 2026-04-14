// services/api.js

const BASE = "https://ll.thespacedevs.com/2.2.0";

export async function getUpcomingLaunches() {
  const res = await fetch(`${BASE}/launch/upcoming/?limit=20`);
  return res.json();
}

export async function searchLaunches(query) {
  const res = await fetch(
    `${BASE}/launch/upcoming/?search=${query}`
  );
  return res.json();
}
