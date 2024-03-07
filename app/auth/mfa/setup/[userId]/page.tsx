"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import BgImageContainer from "@/app/components/BgImageContainer";
import BackgroundImage from "@/assets/Amsterdam-city-scene.png";

interface MFASetupResponse {
  secret: string;
  qrCodeUrl: string;
}

interface Props {
  params: { userId: string };
}

const MFASetup = ({ params: { userId } }: Props) => {
  const [setupData, setSetupData] = useState<MFASetupResponse>();
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSetupMFA = async () => {
    console.log("userId", userId);
    try {
      // Send a request to your backend API to setup MFA
      const res = await fetch("/api/auth/mfa/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      });

      if (res.ok) {
        // MFA setup successful
        // Parse the response as MFASetupResponse
        const data: MFASetupResponse = await res.json();
        setSetupData(data);
        console.log("MFA setup successful");
      } else {
        // MFA setup failed
        setError("Failed to set up MFA. Please try again.");
      }
    } catch (error) {
      console.error("Error setting up MFA:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleFinishSetup = () => {
    // Redirect the user to the signin page after setup
    router.push("/auth/signin");
  };

  return (
    <BgImageContainer image={{ src: BackgroundImage }}>
      <div className="flex flex-col w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-6/12 lg:w-5/12 xl:w-4/12 overflow-hidden">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6 text-center lg:px-12 lg:py-12">
            <div>
              <div className="mb-6 text-center text-slate-500">
                <h2 className="text-2xl font-bold mb-2">
                  Setup Authentication App
                </h2>
                {!setupData && (
                  <p>
                    Setting up MFA is required as part of the signup process.
                  </p>
                )}
              </div>
              {error && (
                <p className="bg-red-100 text-sm text-red-500 p-2 mb-2 rounded-md">
                  {error}
                </p>
              )}
              {!setupData && (
                <button
                  type="button"
                  className="inline-block w-full px-5 py-2.5 mb-4 text-sm font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:-translate-y-px hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 tracking-tight-rem bg-150 bg-x-25"
                  onClick={handleSetupMFA}
                >
                  Start Setup
                </button>
              )}
              {setupData && (
                <div className="flex flex-col items-center justify-center space-y-3">
                  <p>
                    Scan the QR code below using Google Authenticator or enter
                    the key manually.
                  </p>
                  <Image
                    src={setupData.qrCodeUrl}
                    alt="QR Code"
                    width={100}
                    height={100}
                  />
                  <p>Key: {setupData.secret}</p>
                  <button
                    type="button"
                    className="inline-block w-full px-5 py-2.5 mb-4 text-sm font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:-translate-y-px hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 tracking-tight-rem bg-150 bg-x-25"
                    onClick={handleFinishSetup}
                  >
                    Finish Setup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BgImageContainer>
  );
};

export default MFASetup;
