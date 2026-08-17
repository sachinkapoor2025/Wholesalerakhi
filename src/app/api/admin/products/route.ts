import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { deleteProduct, listProducts, upsertProduct } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const products = await listProducts(false);
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.categorySlug) {
    return NextResponse.json({ error: "Name and category are required." }, { status: 400 });
  }
  const product = await upsertProduct(body);
  return NextResponse.json({ product });
}

export async function DELETE(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  if (!body?.sku) return NextResponse.json({ error: "Missing sku." }, { status: 400 });
  await deleteProduct(body.sku);
  return NextResponse.json({ ok: true });
}
