import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { riderSchema } from "./riderSchema";

// GET /api/riders - Get all riders
export async function GET(req: NextRequest) {
  try {
    const riders = await prisma.rider.findMany();
    if (!riders || riders.length === 0) {
      return NextResponse.json({ error: "No riders found" }, { status: 404 });
    }
    return NextResponse.json(riders);
  } catch (error) {
    console.error("Error fetching riders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST /api/riders - Create a new rider
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = riderSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const riderData = validation.data;
    const newRider = await prisma.rider.create({
      data: riderData,
    });
    return NextResponse.json(newRider, { status: 201 });
  } catch (error) {
    console.error("Error creating rider:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
