"use client";

import React, { FormEvent } from "react";

interface Props {
  onForgotPassword: () => void;
  onAuthenticationSuccess: () => void;
}

const SignIn = ({ onForgotPassword, onAuthenticationSuccess }: Props) => {
  const handleForgotPasswordClick = () => {
    // Call the onForgotPassword callback passed from the parent component
    onForgotPassword();
  };

  const handleSignIn = () => {
    // Perform sign-in logic
    // Call the onAuthenticationSuccess callback upon successful authentication
    onAuthenticationSuccess();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform sign-in logic here, then redirect to MFA verification
    console.log("MFA verification required. Routing...");
  };

  return (
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
                required
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
                className="text-sm focus:shadow-blue-500 placeholder:text-gray-500 leading-5 ease-linear block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="password-addon"
                required
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
            <div className="mb-4 text-center">
              <button
                type="submit"
                className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-blue-500 active:-translate-y-px active:text-black hover:active:text-white"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <div className="p-6 text-center py-0 px-1 sm:px-6">
              <p className="mx-auto mb-4 text-sm font-normal">
                {`Forgot password? `}
                <button
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                  onClick={handleForgotPasswordClick}
                >
                  Click here
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
