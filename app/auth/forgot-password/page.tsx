import React from "react";

import BgImageContainer from "@/app/components/BgImageContainer";
import BackgroundImage from "../../../assets/Amsterdam-city-scene.png";

const ResetPassword = () => {
  return (
    <BgImageContainer image={{ src: BackgroundImage }}>
      <div className="w-full max-w-full px-6 mt-12 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl md:mb-32 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
            <div className="flex">
              <div className="inline-block w-12 h-12 text-center bg-blue-500 rounded-lg shadow-sm">
                <i className="ni ni-circle-08 text-white text-lg leading-none relative top-3.5"></i>
              </div>
              <div className="ml-4">
                <h5 className="mb-0">{`Can't log in?`}</h5>
                <p className="mb-0 text-sm leading-normal">
                  Restore access to your account
                </p>
              </div>
            </div>
          </div>
          <div className="flex-auto p-6 text-center">
            <form role="form" className="text-left">
              <div>
                <label className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700">
                  We will send a recovery link to
                </label>
                <input
                  type="email"
                  className="text-sm focus:shadow-primary-outline placeholder:text-gray-500 ading-5 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Your e-mail"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="inline-block w-full px-5 py-2.5 mt-6 mb-4 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight bg-blue-500 active:-translate-y-px active:text-black hover:active:text-white"
                >
                  Reset password
                </button>
                <p className="mb-0 text-sm font-normal leading-normal cursor-pointer text-slate-500">{`I don't have access to my Email`}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BgImageContainer>
  );
};

export default ResetPassword;
