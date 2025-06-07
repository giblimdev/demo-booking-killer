// /app/api/admin/AccommodationType/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/AccommodationType
export async function GET() {
  const data = await prisma.accommodationType.findMany();
  return NextResponse.json(data);
}

// POST /api/admin/AccommodationType
export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = await prisma.accommodationType.create({ data: body });
  return NextResponse.json(item, { status: 201 });
}
