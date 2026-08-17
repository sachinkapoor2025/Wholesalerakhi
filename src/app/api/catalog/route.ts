import { NextResponse } from "next/server";
import { listProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await listProducts(true);
  return NextResponse.json({ products });
}
