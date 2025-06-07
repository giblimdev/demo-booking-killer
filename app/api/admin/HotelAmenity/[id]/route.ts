// /api/adim/HotelAmenity/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PUT /api/adim/HotelAmenity/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const amenity = await prisma.hotelAmenity.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(amenity);
}

// DELETE /api/adim/HotelAmenity/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.hotelAmenity.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ ok: true });
}
