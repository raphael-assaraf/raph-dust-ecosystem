// ElevenLabs OAuth helpers for the hosted-MCP wrapper.
//
// ElevenLabs' MCP auth server supports CIMD (client_id = URL of a metadata
// document) with PKCE public clients, but no Dynamic Client Registration.
// Dust supports everything but CIMD — this module is the bridge.
//
// ElevenLabs ROTATES refresh tokens on every use, so the current token is
// persisted in a private Vercel Blob (serverless instances share no memory).
import { get, put } from "@vercel/blob";

export const EL_AUTHORIZE_URL = "https://elevenlabs.io/app/oauth/authorize";
export const EL_TOKEN_URL = "https://api.us.elevenlabs.io/v1/oauth/token";
export const EL_MCP_URL = "https://api.us.elevenlabs.io/v1/mcp";
export const EL_SCOPES =
  "convai_read convai_write text_to_speech speech_history_read flows image_video_generation";

const TOKEN_PATH = "el-mcp/refresh-token.json";

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

export async function storeRefreshToken(token: string): Promise<void> {
  await put(
    TOKEN_PATH,
    JSON.stringify({ refresh_token: token, updated_at: new Date().toISOString() }),
    {
      access: "private",
      allowOverwrite: true,
      addRandomSuffix: false,
      contentType: "application/json",
    }
  );
}

async function readStoredRefreshToken(): Promise<string | null> {
  try {
    const res = await get(TOKEN_PATH, { access: "private", useCache: false });
    if (!res) return null;
    const text = await new Response(res.stream).text();
    return JSON.parse(text).refresh_token ?? null;
  } catch {
    return null;
  }
}

async function tryRefresh(req: Request, refreshToken: string) {
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
  return { ok: res.ok, status: res.status, body: await res.text() };
}

// --- access token cache (best-effort, per lambda instance) ---
let cachedAccessToken: string | null = null;
let cachedExpiry = 0;

export async function getAccessToken(req: Request): Promise<string> {
  const now = Date.now();
  if (cachedAccessToken && now < cachedExpiry - 30_000) return cachedAccessToken;

  let refreshToken =
    (await readStoredRefreshToken()) ?? process.env.ELEVENLABS_REFRESH_TOKEN ?? null;
  if (!refreshToken) {
    throw new Error("No refresh token stored. Run the bootstrap at /api/el-oauth/start?key=...");
  }

  let attempt = await tryRefresh(req, refreshToken);
  if (!attempt.ok && attempt.body.includes("invalid_grant")) {
    // Another instance may have rotated the token since our read; re-read once.
    const latest = await readStoredRefreshToken();
    if (latest && latest !== refreshToken) {
      refreshToken = latest;
      attempt = await tryRefresh(req, refreshToken);
    }
  }
  if (!attempt.ok) {
    throw new Error(
      `ElevenLabs token refresh failed (${attempt.status}): ${attempt.body}. ` +
        "If this persists, redo the bootstrap at /api/el-oauth/start?key=..."
    );
  }

  const data = JSON.parse(attempt.body);
  cachedAccessToken = data.access_token as string;
  cachedExpiry = now + (data.expires_in ?? 3600) * 1000;
  if (data.refresh_token && data.refresh_token !== refreshToken) {
    await storeRefreshToken(data.refresh_token);
  }
  return cachedAccessToken;
}
