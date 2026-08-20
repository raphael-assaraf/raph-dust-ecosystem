// OAuth callback: exchanges the code and persists the refresh token in the
// private Blob store. Reaching here requires the ?key=-gated /start cookie.
import {
  EL_MCP_URL,
  EL_TOKEN_URL,
  clientId,
  redirectUri,
  storeRefreshToken,
} from "@/lib/el-oauth";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = req.headers.get("cookie") ?? "";
  const stored = /el_oauth=([^;]+)/.exec(cookie)?.[1];

  if (!code || !stored) {
    return new Response("Missing code or PKCE cookie. Restart at /api/el-oauth/start.", {
      status: 400,
    });
  }
  const [verifier, expectedState] = stored.split(".");
  if (state !== expectedState) {
    return new Response("State mismatch. Restart at /api/el-oauth/start.", { status: 400 });
  }

  const res = await fetch(EL_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri(req),
      client_id: clientId(req),
      code_verifier: verifier,
      resource: EL_MCP_URL,
    }),
  });
  const body = await res.text();
  if (!res.ok) {
    return new Response(`Token exchange failed (${res.status}):\n${body}`, { status: 502 });
  }
  const data = JSON.parse(body);
  await storeRefreshToken(data.refresh_token);

  return new Response(
    [
      "ElevenLabs OAuth bootstrap complete.",
      "",
      "The refresh token has been stored securely — nothing else to do.",
      "The MCP wrapper at /api/el-mcp is ready for Dust.",
      "",
      `(access token expires in ${data.expires_in}s; scope: ${data.scope ?? "n/a"})`,
    ].join("\n"),
    { headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" } }
  );
}
