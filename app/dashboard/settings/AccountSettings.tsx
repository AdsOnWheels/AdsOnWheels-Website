import React from "react";
import Checkbox from "../components/Checkbox";

// Array of labels
const labels = [
  "Notify me via email when logging in",
  "Send SMS confirmation for all online payments",
  "Check which devices accessed your account",
  "Find My Device, make sure your device can be found if it gets lost",
  "Lock your device with a PIN, pattern, or password",
  "Manage what apps have access to app-usage data on your device",
];

const AccountSettings = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <h6 className="mb-0 dark:text-white">Security Settings</h6>
            </div>
            <div className="flex-auto p-4">
              {labels.map((label, index) => (
                <Checkbox key={index} label={label} />
              ))}
              <div className="flex flex-wrap mt-12 -mx-3">
                <div className="w-full max-w-full px-3 ml-auto text-right flex-0 lg:w-8/12">
                  <button className="inline-block px-8 py-2 mr-1 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs hover:text-blue-500 hover:opacity-75 hover:shadow-none active:scale-100 active:border-blue-500 active:bg-blue-500 active:text-white hover:active:border-blue-500 active:hover:bg-transparent hover:active:text-blue-500 hover:active:opacity-75">
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-blue-500 to-violet-500 hover:-translate-y-px active:opacity-85"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:w-6/12 md:mt-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <div className="flex items-center">
                <h6 className="mb-0 dark:text-white">
                  Two factor authentication
                </h6>
                <button
                  type="button"
                  className="inline-block px-8 py-2 mb-0 ml-auto text-xs font-bold text-right text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25"
                >
                  Enable
                </button>
              </div>
            </div>
            <div className="flex-auto p-4">
              <p className="mt-4 mb-6 text-sm leading-normal text-slate-500 sm:mt-12">
                Two-factor authentication adds an additional layer of security
                to your account by requiring more than just a password to log
                in.
              </p>
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                  <h6 className="mb-0 dark:text-white">
                    Questions about security?
                  </h6>
                  <p className="mb-6 text-sm leading-normal text-white dark:text-white/60">
                    Have a question, concern, or comment about security? Please
                    contact us.
                  </p>
                  <button
                    type="button"
                    className="inline-block px-5 py-2.5 mb-0 text-sm font-bold leading-normal text-right align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-gray-400 to-gray-100 tracking-tight-rem bg-150 bg-x-25 text-slate-800"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <h6 className="mb-1 dark:text-white">Change password</h6>
              <p className="mb-0 text-sm leading-normal text-slate-700">
                We will send you an email with the verification code.
              </p>
            </div>
            <div className="flex-auto p-4">
              <label
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                htmlFor="Current password"
              >
                Current password
              </label>
              <div className="mb-4">
                <input
                  type="password"
                  name="Current password"
                  placeholder="Current password"
                  className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <label
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                htmlFor="New password"
              >
                New password
              </label>
              <div className="mb-4">
                <input
                  type="password"
                  name="New password"
                  placeholder="New password"
                  className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <label
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
                htmlFor="Confirm password"
              >
                Confirm new password
              </label>
              <div className="mb-4">
                <input
                  type="password"
                  name="Confirm password"
                  placeholder="Confirm password"
                  className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="inline-block w-full px-5 py-2.5 mb-0 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-normal tracking-tight-rem bg-150 bg-x-25"
              >
                Update password
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-6/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <h6 className="mb-1 dark:text-white">Password requirements</h6>
              <p className="mb-0 text-sm leading-normal text-slate-700">
                Please follow this guide for a strong password:
              </p>
            </div>
            <div className="flex-auto p-4">
              <ul className="float-left pl-6 mb-0 list-disc text-slate-500">
                <li>
                  <span className="text-sm leading-normal">
                    One special characters
                  </span>
                </li>
                <li>
                  <span className="text-sm leading-normal">
                    Min 6 characters
                  </span>
                </li>
                <li>
                  <span className="text-sm leading-normal">
                    One number (2 are recommended)
                  </span>
                </li>
                <li>
                  <span className="text-sm leading-normal">
                    Change it often
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
