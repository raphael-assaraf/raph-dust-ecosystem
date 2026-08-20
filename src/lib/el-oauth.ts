// ElevenLabs OAuth helpers for the hosted-MCP wrapper.
//
// ElevenLabs' MCP auth server supports CIMD (client_id = URL of a metadata
// document) with PKCE public clients, but no Dynamic Client Registration.
// Dust supports everything but CIMD — this module is the bridge.

export const EL_AUTHORIZE_URL = "https://elevenlabs.io/app/oauth/authorize";
export const EL_TOKEN_URL = "https://api.us.elevenlabs.io/v1/oauth/token";
export const EL_MCP_URL = "https://api.us.elevenlabs.io/v1/mcp";
export const EL_SCOPES =
  "convai_read convai_write text_to_speech speech_history_read flows image_video_generation";

export function baseUrl(req: Request): string {
  const url = new URL(req.url);
  const host = req.headers.get("x-forwarded-host") ?? url.host;
  const proto = req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  return `${proto}://${host}`;
}

export function clientId(req: Request): string {
  return `${baseUrl(req)}/api/el-oauth/client`;
}

export function redirectUri(req: Request): string {
  return `${baseUrl(req)}/api/el-oauth/callback`;
}

// --- access token cache (per lambda instance) ---
let cachedAccessToken: string | null = null;
let cachedExpiry = 0;
// If ElevenLabs rotates refresh tokens, prefer the newest one we've seen over
// the env seed for the lifetime of this instance.
let liveRefreshToken: string | null = null;

export async function getAccessToken(req: Request): Promise<string> {
  const now = Date.now();
  if (cachedAccessToken && now < cachedExpiry - 30_000) return cachedAccessToken;

  const refreshToken = liveRefreshToken ?? process.env.ELEVENLABS_REFRESH_TOKEN;
  if (!refreshToken) {
    throw new Error(
      "ELEVENLABS_REFRESH_TOKEN is not set. Run the one-time bootstrap at /api/el-oauth/start."
    );
  }

  const res = await fetch(EL_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId(req),
      resource: EL_MCP_URL,
    }),
  });
  if (!res.ok) {
    throw new Error(`ElevenLabs token refresh failed (${res.status}): ${await res.text()}`);
  }
  const data = await res.json();
  cachedAccessToken = data.access_token as string;
  cachedExpiry = now + (data.expires_in ?? 3600) * 1000;
  if (data.refresh_token) liveRefreshToken = data.refresh_token as string;
  return cachedAccessToken;
}
