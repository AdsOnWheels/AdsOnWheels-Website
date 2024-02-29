import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";

import prisma from "@/prisma/client";
import { generateQRCode } from "@/utils/generateQRCode";
import { saveMFASetupData } from "@/utils/mfa";

export async function POST(req: NextRequest) {
  try {
    // Get user ID from request body
    const { userId } = await req.json();

    // Check if userId exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: `User with the provided ID ${userId} does not exist` },
        { status: 400 }
      );
    }

    // Generate MFA secret
    const secret = speakeasy.generateSecret({ length: 20 });

    // Constructing the otpauth URL for Google Authenticator
    const otpAuthUrl = speakeasy.otpauthURL({
      secret: secret.base32, // MFA secret
      label: `OUTFRONT:${userId}`, // Label for the account (can be your app name + user ID)
    });

    // Generate QR code image from OTPAuth URL
    const qrCodeImage = await generateQRCode(otpAuthUrl);

    const updatedUserInfo = {
      mfaSecret: secret.base32,
      mfaQrCodeUrl: qrCodeImage,
    };

    // Save MFA setup data to MongoDB
    await saveMFASetupData(userId, updatedUserInfo);

    // Return MFA setup data including QR code image
    return NextResponse.json(
      { secret: secret.base32, qrCodeUrl: qrCodeImage }, // Return QR code image URL
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during MFA setup:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
