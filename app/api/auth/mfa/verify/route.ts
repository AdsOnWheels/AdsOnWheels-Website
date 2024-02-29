import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";

import prisma from "@/prisma/client";
import { getUserMFASecret, isCodeValidForCurrentTime } from "@/utils/mfa";

export async function POST(req: NextRequest) {
  try {
    // Get verification code from request body
    const { userId, verificationCode } = await req.json();

    if (!userId || !verificationCode) {
      // Handle the case where credentials are missing or incomplete
      return NextResponse.json(
        { error: "User ID and verification code are required" },
        { status: 400 }
      );
    }

    // Retrieve the user's MFA secret from MongoDB
    const userSecret = await getUserMFASecret(userId);

    // Verify the provided verification code against the user's MFA secret
    const verified = speakeasy.totp.verify({
      secret: userSecret,
      encoding: "base32",
      token: verificationCode,
      window: 1, // Allow a time window of +/- 1 interval
    });

    // Check if the code is verified and not expired
    if (verified && isCodeValidForCurrentTime()) {
      // MFA code verification successful
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      // MFA code verification failed
      return NextResponse.json(
        { error: "Invalid verification code or code has expired" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error during MFA verification:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
