import React, { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MFAVerification = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform sign-in logic here, then redirect to /admin/dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex flex-col w-full max-w-full px-6 mt-16 mx-auto shrink-0 md:flex-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 rounded-2xl bg-clip-border">
        <div className="flex-auto p-6 text-center lg:px-12 lg:py-12">
          <div>
            <div className="mb-6 text-center text-slate-500">
              <h2>2-Step Verification</h2>
            </div>
            <div className="flex flex-nowrap -mx-1 sm:-mx-2">
              <div className="w-full max-w-full px-2 flex-1-0">
                <div className="mb-4">
                  <input
                    maxLength={1}
                    autoCapitalize="off"
                    autoComplete="off"
                    type="text"
                    className="min-h-unset focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder-white-80 dark:text-white-80 text-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full max-w-full px-2 flex-1-0">
                <div className="mb-4">
                  <input
                    maxLength={1}
                    autoCapitalize="off"
                    autoComplete="off"
                    type="text"
                    className="min-h-unset focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder-white-80 dark:text-white-80 text-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full max-w-full px-2 flex-1-0">
                <div className="mb-4">
                  <input
                    maxLength={1}
                    autoCapitalize="off"
                    autoComplete="off"
                    type="text"
                    className="min-h-unset focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder-white-80 dark:text-white-80 text-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full max-w-full px-2 flex-1-0">
                <div className="mb-4">
                  <input
                    maxLength={1}
                    autoCapitalize="off"
                    autoComplete="off"
                    type="text"
                    className="min-h-unset focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder-white-80 dark:text-white-80 text-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="inline-block w-full px-5 py-2.5 mb-4 text-sm font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:-translate-y-px hover:shadow-xs bg-gradient-to-tl from-orange-500 to-yellow-500 tracking-tight-rem bg-150 bg-x-25"
                onClick={handleSubmit}
              >
                Send code
              </button>
              <span className="text-sm leading-normal text-slate-500">
                {`Haven't received it?`} <Link href="#">Resend a new code</Link>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFAVerification;
