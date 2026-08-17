import { createRemoteJWKSet, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE = "wr_admin";

function cognitoIssuer() {
  const region = process.env.COGNITO_REGION || process.env.NEXT_PUBLIC_COGNITO_REGION;
  const pool = process.env.COGNITO_USER_POOL_ID || process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;
  if (!region || !pool) return null;
  return `https://cognito-idp.${region}.amazonaws.com/${pool}`;
}

export async function verifyIdToken(token: string): Promise<{ email?: string; sub: string } | null> {
  const issuer = cognitoIssuer();
  if (!issuer) return null;
  try {
    const JWKS = createRemoteJWKSet(new URL(`${issuer}/.well-known/jwks.json`));
    const { payload } = await jwtVerify(token, JWKS, { issuer, audience: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID });
    return { sub: String(payload.sub), email: typeof payload.email === "string" ? payload.email : undefined };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  return verifyIdToken(token);
}

export function adminCookie(token: string) {
  return {
    name: COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 8,
  };
}

export function clearAdminCookie() {
  return {
    name: COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 0,
  };
}

export { COOKIE as ADMIN_COOKIE };
