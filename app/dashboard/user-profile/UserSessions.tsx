import React from "react";

const UserSessions = () => {
  return (
    <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
      <div
        className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border"
        id="sessions"
      >
        <div className="p-6 pb-4 rounded-t-2xl">
          <h5 className="dark:text-white">Sessions</h5>
          <p className="text-sm leading-normal dark:text-white/60">
            This is a list of devices that have logged into your account. Remove
            those that you do not recognize.
          </p>
        </div>
        <div className="flex-auto p-6 pt-0">
          <div className="flex items-center">
            <div className="text-center w-5/100">
              <i
                className="text-lg fas fa-desktop opacity-60"
                aria-hidden="true"
              ></i>
            </div>
            <div className="my-auto ml-4">
              <div className="h-full">
                <p className="mb-1 text-sm leading-normal dark:text-white/60">
                  Bucharest 68.133.163.201
                </p>
                <p className="mb-0 text-xs leading-tight dark:text-white/60">
                  Your current session
                </p>
              </div>
            </div>
            <span className="py-1.5 text-xs px-2 rounded-lg my-auto ml-auto mr-4 inline-block whitespace-nowrap bg-emerald-200 text-center align-baseline font-bold uppercase leading-none text-emerald-600">
              Active
            </span>
            <p className="my-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              EU
            </p>
            <a
              href="#"
              className="my-auto text-sm leading-normal text-blue-500 group"
            >
              See more
              <i
                className="group-hover:translate-x-5 fas fa-arrow-right text-xs ease-in-out ml-1 leading-tight transition-all duration-200"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex items-center">
            <div className="text-center w-5/100">
              <i
                className="text-lg fas fa-desktop opacity-60"
                aria-hidden="true"
              ></i>
            </div>
            <p className="my-auto ml-4 dark:text-white/60">Chrome on macOS</p>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              US
            </p>
            <a
              href="#"
              className="my-auto text-sm leading-normal text-blue-500 group"
            >
              See more
              <i
                className="group-hover:translate-x-5 fas fa-arrow-right text-xs ease-bounce ml-1 leading-tight transition-all duration-200"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex items-center">
            <div className="text-center w-5/100">
              <i
                className="text-lg fas fa-mobile opacity-60"
                aria-hidden="true"
              ></i>
            </div>
            <p className="my-auto ml-4 dark:text-white/60">Safari on iPhone</p>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              US
            </p>
            <a
              href="#"
              className="my-auto text-sm leading-normal text-blue-500 group"
            >
              See more
              <i
                className="group-hover:translate-x-5 fas fa-arrow-right text-xs ease-bounce ml-1 leading-tight transition-all duration-200"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSessions;
