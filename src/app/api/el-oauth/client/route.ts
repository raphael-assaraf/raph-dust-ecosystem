// CIMD client metadata document. Its own URL is the OAuth client_id.
import { clientId, redirectUri } from "@/lib/el-oauth";

export async function GET(req: Request) {
  return Response.json(
    {
      client_id: clientId(req),
      client_name: "Dust ↔ ElevenLabs MCP Wrapper (demo)",
      client_uri: new URL(req.url).origin,
      redirect_uris: [redirectUri(req)],
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
    },
    { headers: { "Cache-Control": "public, max-age=300" } }
  );
}
