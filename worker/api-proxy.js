const CACHE_TTL = 60 * 10;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const cacheKey = url.pathname + url.search;

    const cached = await env.KV.get(cacheKey);
    if (cached) {
      return new Response(cached, {
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiUrl = "https://ll.thespacedevs.com/2.2.0" + url.pathname + url.search;

    const res = await fetch(apiUrl);
    const data = await res.json();

    await env.KV.put(cacheKey, JSON.stringify(data), {
      expirationTtl: CACHE_TTL
    });

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
