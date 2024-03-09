import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { riderUpdateSchema } from "../../../schemas/riderSchema";

// GET /api/riders/:id - Get a specific rider by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const rider = await prisma.rider.findUnique({
      where: {
        id,
      },
    });

    if (!rider) {
      return NextResponse.json(
        { error: `Rider with ID ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(rider);
  } catch (error) {
    console.error("Error fetching rider:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT /api/riders/:id - Update a rider by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = riderUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { id } = params;

    // Deconstructing validation.data
    const {
      fullName,
      email,
      phoneNumber,
      cityRegion,
      postCode,
      bicycleType,
      cyclingDistance,
      bicycleCondition,
      regularRoutes,
      availability,
      interestReason,
      additionalComments,
      consent,
    } = validation.data;

    // Update the rider user in the database
    const updatedRider = await prisma.rider.update({
      where: {
        id,
      },
      data: {
        fullName,
        email,
        phoneNumber,
        cityRegion,
        postCode,
        bicycleType,
        cyclingDistance,
        bicycleCondition,
        regularRoutes,
        availability,
        interestReason,
        additionalComments,
        consent,
      },
    });

    if (!updatedRider) {
      return NextResponse.json(
        { error: `Rider with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedRider);
  } catch (error) {
    console.error("Error updating rider:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE /api/riders/:id - Delete a rider by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await prisma.rider.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ status: 204 });
  } catch (error) {
    console.error("Error deleting rider:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
