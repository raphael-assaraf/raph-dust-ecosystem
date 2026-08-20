// MCP proxy: Dust connects here with Basic auth; we forward streamable-HTTP
// MCP traffic to the ElevenLabs hosted MCP with a live OAuth Bearer token.
import { EL_MCP_URL, getAccessToken } from "@/lib/el-oauth";

export const maxDuration = 120;

function checkBasicAuth(req: Request): boolean {
  const header = req.headers.get("authorization") ?? "";
  if (!header.startsWith("Basic ")) return false;
  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  const [user, pass] = decoded.split(":");
  return (
    !!process.env.EL_MCP_BASIC_USER &&
    user === process.env.EL_MCP_BASIC_USER &&
    pass === process.env.EL_MCP_BASIC_PASS
  );
}

async function proxy(req: Request): Promise<Response> {
  if (!checkBasicAuth(req)) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="el-mcp"' },
    });
  }

  let accessToken: string;
  try {
    accessToken = await getAccessToken(req);
  } catch (err) {
    return new Response(`Upstream auth error: ${(err as Error).message}`, { status: 502 });
  }

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);
  for (const name of ["content-type", "accept", "mcp-session-id", "mcp-protocol-version"]) {
    const value = req.headers.get(name);
    if (value) headers.set(name, value);
  }

  const upstream = await fetch(EL_MCP_URL, {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "DELETE" ? undefined : req.body,
    // @ts-expect-error - required by Node fetch when forwarding a request body stream
    duplex: "half",
  });

  const responseHeaders = new Headers();
  for (const name of ["content-type", "mcp-session-id", "mcp-protocol-version"]) {
    const value = upstream.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  responseHeaders.set("Cache-Control", "no-store");

  return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
}

export async function POST(req: Request) {
  return proxy(req);
}

export async function GET(req: Request) {
  return proxy(req);
}

export async function DELETE(req: Request) {
  return proxy(req);
}
