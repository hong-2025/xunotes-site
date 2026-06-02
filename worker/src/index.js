const ALLOWED_ORIGINS = new Set([
  "https://www.xunotes.com",
  "https://xunotes.com",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : "https://www.xunotes.com",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(request, value, init = {}) {
  return new Response(JSON.stringify(value), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(request),
      ...init.headers,
    },
  });
}

function isAllowedOrigin(request) {
  return ALLOWED_ORIGINS.has(request.headers.get("Origin"));
}

function isAuthorized(request, env) {
  return request.headers.get("Authorization") === `Bearer ${env.ADMIN_TOKEN}`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    if (url.pathname === "/api/messages" && request.method === "POST") {
      if (!isAllowedOrigin(request)) return json(request, { error: "Origin not allowed." }, { status: 403 });

      const body = await request.json().catch(() => null);
      const message = body?.message?.trim();

      // Silently accept bot submissions that fill the hidden field.
      if (body?.website) return json(request, { ok: true }, { status: 201 });
      if (!message || message.length > 2000) {
        return json(request, { error: "Message must contain 1 to 2000 characters." }, { status: 400 });
      }

      await env.DB.prepare("INSERT INTO messages (message) VALUES (?)").bind(message).run();
      return json(request, { ok: true }, { status: 201 });
    }

    if (url.pathname === "/api/messages" && request.method === "GET") {
      if (!isAuthorized(request, env)) return json(request, { error: "Unauthorized." }, { status: 401 });
      const { results } = await env.DB.prepare(
        "SELECT id, message, created_at FROM messages ORDER BY id DESC LIMIT 200",
      ).all();
      return json(request, results);
    }

    if (url.pathname === "/api/health") return json(request, { ok: true });
    return json(request, { error: "Not found." }, { status: 404 });
  },
};
