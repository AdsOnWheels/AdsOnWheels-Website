import prisma from "@/prisma/client";

// Function to retrieve user's MFA secret from MongoDB
export async function getUserMFASecret(userId: string): Promise<string> {
  try {
    // Find the user by user ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user && user.mfaSecret) {
      // Return the user's MFA secret if found
      return user.mfaSecret;
    } else {
      // Throw an error if user or MFA secret not found
      throw new Error("User or MFA secret not found");
    }
  } catch (error) {
    throw new Error("Error retrieving user's MFA secret");
  }
}

// Function to save MFA setup data to MongoDB
export async function saveMFASetupData(
  userId: string,
  updatedUserInfo: { mfaSecret: string; mfaQrCodeUrl: string }
) {
  try {
    // Update the user document with MFA setup data
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatedUserInfo,
    });

    if (!updatedUser) {
      throw new Error(`User with ID ${userId} does not exist`);
    }
    return updatedUser;
  } catch (error) {
    console.error("Error saving MFA setup data:", error);
    throw new Error("Error saving MFA setup data");
  }
}

// Function to check if the code is still valid for the current time
export const isCodeValidForCurrentTime = () => {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const timeInterval = 30; // TOTP time interval in seconds (default is 30 seconds)

  // Calculate the time window around the current time
  const startTime = currentTime - timeInterval;
  const endTime = currentTime + timeInterval;

  // Check if the current time falls within the time window
  return startTime <= currentTime && currentTime <= endTime;
};
