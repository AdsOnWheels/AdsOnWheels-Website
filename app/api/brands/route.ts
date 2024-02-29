import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { brandSchema } from "./brandSchema";

// GET /api/brands - Get all brands
export async function GET(req: NextRequest) {
  try {
    const brands = await prisma.brand.findMany();
    if (!brands || brands.length === 0) {
      return NextResponse.json({ error: "No brands found" }, { status: 404 });
    }
    return NextResponse.json(brands);
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/brands - Create a new brand
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = brandSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const brandData = validation.data;
    const newBrand = await prisma.brand.create({
      data: brandData,
    });
    return NextResponse.json(newBrand, { status: 201 });
  } catch (error) {
    console.error("Error creating brand:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
