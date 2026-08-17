import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";

const COOKIE = "wr_admin";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get(COOKIE)?.value;
  if (!token) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  const region = process.env.COGNITO_REGION || process.env.NEXT_PUBLIC_COGNITO_REGION;
  const pool = process.env.COGNITO_USER_POOL_ID || process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;
  const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  if (!region || !pool || !clientId) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    const issuer = `https://cognito-idp.${region}.amazonaws.com/${pool}`;
    const JWKS = createRemoteJWKSet(new URL(`${issuer}/.well-known/jwks.json`));
    await jwtVerify(token, JWKS, { issuer, audience: clientId });
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
