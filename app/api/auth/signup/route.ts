import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import prisma from "@/prisma/client";
import { signUpSchema } from "@/app/schemas/signUpSchema";

export async function POST(req: NextRequest) {
  try {
    const signUpData = await req.json();
    const validateSignUpData = signUpSchema.safeParse(signUpData);

    if (!validateSignUpData.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validateSignUpData.error.errors },
        { status: 400 }
      );
    }

    const { username, email, password } = validateSignUpData.data;

    // Check if required fields are provided
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Username, email, and password are required fields." },
        { status: 400 }
      );
    }

    // Check if user with the same email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username or email already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email: email.toLowerCase(),
        hashedPassword,
      },
    });

    // Return the newly created user ID in the response
    return NextResponse.json(
      {
        id: newUser.id,
        email: newUser.email,
        message: "User successfully created.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while signing up:", error);
    return NextResponse.json(
      {
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
