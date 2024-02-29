import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { brandUpdateSchema } from "../brandSchema";

// GET /api/brands/:id - Get a specific brand by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const brand = await prisma.brand.findUnique({
      where: { id },
    });

    if (!brand) {
      return NextResponse.json(
        { error: `Brand with ID ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(brand);
  } catch (error) {
    console.error("Error fetching brand:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT /api/brands/:id - Update a brand by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = brandUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { id } = params;
    const updatedBrandData = validation.data;

    const updatedBrand = await prisma.brand.update({
      where: { id },
      data: updatedBrandData,
    });

    if (!updatedBrand) {
      return NextResponse.json(
        { error: `Brand with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBrand);
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE /api/brands/:id - Delete a brand by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const brand = await prisma.brand.findUnique({
      where: { id },
    });

    if (!brand) {
      return NextResponse.json(
        { error: `Brand with ID ${id} not found` },
        { status: 404 }
      );
    }

    await prisma.brand.delete({
      where: { id },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Error deleting brand:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
