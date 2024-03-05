import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { riderSchema } from "../../schemas/riderSchema";
import isValidEmail from "@/utils/emailValidator";

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
      imageUrl,
      regularRoutes,
      availability,
      interestReason,
      additionalComments,
      consent,
    } = validation.data;

    // Check if the provided email is a work email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid data", details: "Email must be a valid email" },
        { status: 400 }
      );
    }

    // Create the rider user in the database
    const newRider = await prisma.rider.create({
      data: {
        fullName,
        email,
        phoneNumber,
        cityRegion,
        postCode,
        bicycleType,
        cyclingDistance,
        bicycleCondition,
        imageUrl,
        regularRoutes,
        availability,
        interestReason,
        additionalComments,
        consent,
      },
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
