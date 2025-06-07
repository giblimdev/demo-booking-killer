// /app/api/admin/AccommodationType/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT /api/admin/AccommodationType/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const item = await prisma.accommodationType.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json(item);
}

// DELETE /api/admin/AccommodationType/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.accommodationType.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ ok: true });
}
