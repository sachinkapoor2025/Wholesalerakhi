import { NextResponse } from "next/server";
import { adminCookie, clearAdminCookie, verifyIdToken } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const token = body?.idToken;
  if (!token || typeof token !== "string") {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }
  const session = await verifyIdToken(token);
  if (!session) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true, email: session.email });
  response.cookies.set(adminCookie(token));
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(clearAdminCookie());
  return response;
}
