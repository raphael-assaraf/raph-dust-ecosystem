// One-time bootstrap: redirects to the ElevenLabs authorize page with PKCE.
// Visit /api/el-oauth/start in a browser while logged into ElevenLabs.
import {
  EL_AUTHORIZE_URL,
  EL_MCP_URL,
  EL_SCOPES,
  clientId,
  redirectUri,
} from "@/lib/el-oauth";

function b64url(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64url");
}

export async function GET(req: Request) {
  const verifier = b64url(crypto.getRandomValues(new Uint8Array(32)));
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  const challenge = b64url(new Uint8Array(digest));
  const state = b64url(crypto.getRandomValues(new Uint8Array(16)));

  const authorize = new URL(EL_AUTHORIZE_URL);
  authorize.search = new URLSearchParams({
    response_type: "code",
    client_id: clientId(req),
    redirect_uri: redirectUri(req),
    scope: EL_SCOPES,
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
    resource: EL_MCP_URL,
  }).toString();

  const cookie = [
    `el_oauth=${verifier}.${state}`,
    "Path=/api/el-oauth",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=600",
  ].join("; ");

  return new Response(null, {
    status: 302,
    headers: { Location: authorize.toString(), "Set-Cookie": cookie },
  });
}
