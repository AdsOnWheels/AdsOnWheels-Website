import qrcode from "qrcode";

// Function to generate QR code image from OTPAuth URL
export async function generateQRCode(otpAuthUrl: string): Promise<string> {
  try {
    const qrCodeImage = await qrcode.toDataURL(otpAuthUrl);
    return qrCodeImage;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Error generating QR code");
  }
}
