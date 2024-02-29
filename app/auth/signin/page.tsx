"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import BgImageContainer from "@/app/components/BgImageContainer";
import BackgroundImage from "../../../assets/Amsterdam-city-scene.png";
import Link from "next/link";
import { signInSchema } from "./signInSchema";

interface Props {
  onForgotPassword: () => void;
}

const SignIn = ({ onForgotPassword }: Props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  // // Retrieve session after successful signin
  // const { data: session } = useSession();

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the form data based on the input field name
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForgotPasswordClick = () => {
    // Call the onForgotPassword callback passed from the parent component
    onForgotPassword();
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = signInSchema.safeParse(formData);

      if (!validFormData.success) {
        console.error("Invalid signin credentials:", validFormData.error);
        setError("Invalid signin credentials");
        return null;
      }

      const { email, password } = validFormData.data;

      setPending(true);

      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setPending(false);
        return;
      }

      // if (session?.user?.id) {
      //   const userId = session.user.id;
      //   // Redirect the user to the MFA verification page
      //   router.push(`/auth/mfa/verify/${userId}`);
      // } else {
      //   console.error("User ID not found in the session");
      //   setError("An unexpected error occurred. Please try again later.");
      //   setPending(false);
      // }
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  }

  return (
    <BgImageContainer image={{ src: BackgroundImage }}>
      <div className="w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
        <div className="relative z-10 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
            <h3 className="text-xl font-bold">Admin Portal Sign In</h3>
            <p className="mb-0">Enter your email and password to sign in</p>
          </div>
          <div className="flex-auto p-6 pt-0 text-center">
            <form className="text-left" onSubmit={handleSubmit}>
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
              <div className="min-h-6 mb-0.5 flex items-center pl-12 text-left">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="mt-0.5 rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-5 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm font-normal cursor-pointer select-none text-slate-700"
                >
                  Remember me
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
                  {pending ? "Signing In" : "Sign In"}
                </button>
              </div>
              <div className="p-6 text-center py-0 px-1 sm:px-6">
                <p className="mx-auto mb-4 text-sm font-normal">
                  {`Forgot password? `}
                  <Link
                    href="/auth/forgot-password"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                    onClick={handleForgotPasswordClick}
                  >
                    Click here
                  </Link>
                </p>
                <p className="mx-auto text-sm font-normal">
                  {`Don't have an account? `}
                  <Link
                    href="/auth/signup"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                  >
                    Sign Up here
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

export default SignIn;
