"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import BgImageContainer from "@/app/components/BgImageContainer";
import BackgroundImage from "../../../assets/Amsterdam-city-scene.png";
import { signUpSchema } from "../../schemas/signUpSchema";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the form data based on the input field name
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Event handler to handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = signUpSchema.safeParse(formData);

      if (!validFormData.success) {
        console.error("Invalid information:", validFormData.error);
        setError("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to sign up the user
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if signup was successful
      if (!res.ok) {
        setPending(false);
        throw new Error("Sign-up failed");
      }

      const user = await res.json();

      // Redirect the user to the MFA setup page, passing the user ID as a query parameter
      router.push(`/auth/mfa/setup/${user.id}`);
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  return (
    <BgImageContainer image={{ src: BackgroundImage }}>
      <div className="w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
        <div className="relative z-10 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
            <h3 className="text-xl font-bold">Admin Portal Sign Up</h3>
            <p className="mb-0">
              Enter your username, email and password to sign up
            </p>
          </div>
          <div className="flex-auto p-6 pt-0 text-center">
            <form className="text-left" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="username"
                  name="username"
                  className="text-sm focus:shadow-blue-500 placeholder:text-gray-500 leading-5 ease-linear block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="username-addon"
                  autoComplete="username"
                  required
                  onChange={(e) => handleFormData(e)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm focus:shadow-blue-500 placeholder:text-gray-500 leading-5 ease-linear block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="email-addon"
                  autoComplete="username"
                  required
                  onChange={(e) => handleFormData(e)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm focus:shadow-blue-500 placeholder:text-gray-500 leading-5 ease-linear block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                  autoComplete="current-password"
                  required
                  onChange={(e) => handleFormData(e)}
                />
              </div>
              {/* NEW CODE BLOCK */}
              <div className="min-h-6 pl-7 block">
                <input
                  id="terms"
                  className="w-5 h-5 ease -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-blue-500 checked:to-violet-500 after:text-xxs after:font-awesome after:duration-250 after:ease-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                  type="checkbox"
                  value=""
                  data-dashlane-rid="02b05974d003726c"
                  data-form-type="consent,terms"
                />
                <label
                  className="text-sm font-normal text-left cursor-pointer select-none -ml-30 text-slate-700"
                  htmlFor="terms"
                >
                  {" "}
                  I agree the{" "}
                  <Link href="#" className="font-bold text-slate-700">
                    Terms and Conditions
                  </Link>{" "}
                </label>
              </div>
              {error && (
                <p className="bg-red-100 text-sm text-red-500 p-2 mt-2 rounded-md">
                  {error}
                </p>
              )}
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-blue-500 active:-translate-y-px active:text-black hover:active:text-white"
                  disabled={pending ? true : false}
                >
                  {pending ? "Signing Up" : "Sign Up"}
                </button>
              </div>
              <div className="p-6 text-center py-0 px-1 sm:px-6">
                <p className="mx-auto mb-4 text-sm font-normal">
                  {`Already have an account? `}
                  <Link
                    href="/auth/signin"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BgImageContainer>
  );
};

export default SignUp;
