import React from "react";

const MultiFactorAuth = () => {
  return (
    <div className="w-full max-w-full px-3 xl:w-4/12">
      <div
        className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border"
        id="2FA"
      >
        <div className="flex p-6 rounded-t-2xl">
          <h5 className="mb-0 dark:text-white">Two-factor authentication</h5>
          <span className="py-1.5 px-2.5 text-xs rounded-lg ml-auto inline-block whitespace-nowrap bg-emerald-200 text-center align-baseline font-bold uppercase leading-none text-emerald-600">
            Enabled
          </span>
        </div>
        <div className="flex-auto p-6">
          <div className="flex">
            <p className="my-auto dark:text-white/60">Security keys</p>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              No Security Keys
            </p>
            <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
              Add
            </button>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex">
            <p className="my-auto dark:text-white/60">SMS number</p>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              +4012374423
            </p>
            <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
              Edit
            </button>
          </div>
          <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          <div className="flex">
            <p className="my-auto dark:text-white/60">Authenticator app</p>
            <p className="my-auto ml-auto mr-4 text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
              Not Configured
            </p>
            <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center align-middle transition-all ease-in bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
              Set up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiFactorAuth;
