export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/data/') || url.pathname.startsWith('/api/') || url.pathname === '/sync') {
      const target = 'https://pasukanjogja2.febrilatif.workers.dev' + url.pathname + url.search;
      return fetch(target, {
        headers: request.headers
      });
    }
    return env.ASSETS.fetch(request);
  }
};
