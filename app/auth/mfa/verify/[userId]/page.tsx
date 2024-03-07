"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import BgImageContainer from "@/app/components/BgImageContainer";
import BackgroundImage from "@/assets/Amsterdam-city-scene.png";

interface Props {
  params: { userId: string };
}

const MFAVerification = ({ params: { userId } }: Props) => {
  const [verificationCode, setVerificationCode] = useState<string[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the form data based on the input field name
    setVerificationCode((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setPending(true);
      // Combine the verification code segments into a single string
      const combinedCode = verificationCode.join("");

      // Send a request to your backend API to verify the MFA code
      const response = await fetch("/api/auth/mfa/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          verificationCode: combinedCode,
        }),
      });

      if (response.ok) {
        // MFA code verification successful
        setPending(false);
        router.push("/dashboard");
      } else {
        // MFA code verification failed
        setError("Invalid verification code. Please try again.");
        setPending(false);
      }
    } catch (error) {
      console.error("Error verifying MFA code:", error);
      setError("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  return (
    <BgImageContainer image={{ src: BackgroundImage }}>
      <div className="flex flex-col w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6 text-center lg:px-12 lg:py-12">
            <div>
              <div className="mb-6 text-center text-slate-500">
                <h2 className="text-2xl font-bold mb-2">
                  Multi-Factor Authentication
                </h2>
                <p>Enter generated code to verify</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-nowrap -mx-1 sm:-mx-2">
                  {/* Input fields for the verification code */}
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full max-w-full px-2 flex-1-0"
                    >
                      <div className="mb-4">
                        <input
                          maxLength={1}
                          autoCapitalize="off"
                          autoComplete="off"
                          type="text"
                          value={verificationCode[index] || ""}
                          className="min-h-unset focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder-white-80 dark:text-white-80 text-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                          onChange={(e) => {
                            const newValue = e.target.value;
                            const newVerificationCode = [...verificationCode];
                            newVerificationCode[index] = newValue;
                            setVerificationCode(newVerificationCode);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  {/* Button to verify the code */}
                  <button
                    type="submit"
                    className="inline-block w-full px-5 py-2.5 mb-4 text-sm font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:-translate-y-px hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 tracking-tight-rem bg-150 bg-x-25"
                    disabled={pending ? true : false}
                  >
                    {pending ? "Verifying code" : "Verify code"}
                  </button>
                  {/* Display error message if there's any */}
                  {error && (
                    <p className="bg-red-100 text-sm text-red-500 p-2 mt-2 rounded-md">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BgImageContainer>
  );
};

export default MFAVerification;
