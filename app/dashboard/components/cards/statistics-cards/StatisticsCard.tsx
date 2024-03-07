import React from "react";

interface Props {
  icon: "adCount" | "newUsers" | "sales" | "performance";
  value: string | number;
  label: string;
}

const StatisticsCard = ({ icon, value, label }: Props) => {
  return (
    <div className="w-full max-w-full px-3 flex-0 lg:w-6/12">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0 md:w-6/12">
          <div className="dark:bg-gray-950 dark:shadow-xl shadow-xl bg-cover relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white">
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-2xl opacity-80"></span>
          </div>
          <div className="relative flex-auto p-4">
            <div className="flex flex-wrap -mx-3">
              <div className="w-8/12 max-w-full px-3 text-left flex-0">
                <div className="inline-block w-12 h-12 text-center text-black bg-white bg-center rounded-lg shadow-2xl fill-current stroke-none">
                  <div className="ni leading-none ni-circle-08 bg-gradient-to-tl from-zinc-800 to-zinc-700 text-lg relative top-3.5 z-10 bg-clip-text text-transparent">
                    {icon}
                  </div>
                  <h5 className="mt-4 mb-0 font-bold text-white">{value}</h5>
                  <span className="text-sm leading-normal text-white">
                    {label}
                  </span>
                </div>
                <div className="w-4/12 max-w-full px-3 flex-0">
                  <div className="relative mb-16 text-right">
                    <a
                      href="#"
                      className="cursor-pointer"
                      dropdown-trigger=""
                      aria-expanded="false"
                    >
                      <i
                        className="text-white fa fa-ellipsis-h"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <p className="hidden transform-dropdown-show"></p>
                  </div>
                  <p className="mt-auto mb-0 text-sm font-bold leading-normal text-right text-white dark:text-white/60"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
