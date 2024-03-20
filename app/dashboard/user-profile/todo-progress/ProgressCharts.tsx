import React from "react";

const ProgressCharts = () => {
  return (
    <div className="w-full max-w-full px-3 mt-6 flex-0 lg:mt-0 lg:w-4/12">
      <div className="relative flex flex-col min-w-0 overflow-hidden break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border">
        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
          <div className="flex items-center">
            <div className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg fill-current bg-gradient-to-tl from-blue-600 to-cyan-400 stroke-none shadow-2xl">
              <i
                className="fa fa-calendar text-lg relative top-2.5 text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="ml-4">
              <p className="mb-0 font-semibold leading-normal capitalize text-sm">
                Tasks
              </p>
              <h5 className="mb-0 font-bold dark:text-white">480</h5>
            </div>
            <div className="w-1/4 ml-auto">
              <div>
                <div>
                  <span className="font-semibold leading-tight text-xs">
                    60%
                  </span>
                </div>
              </div>
              <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                <div className="transition-width duration-600 ease-soft rounded-md -mt-0.4 bg-gradient-to-tl from-blue-600 to-cyan-400 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-0 mt-4">
          <div>
            <canvas id="chart-line-projects" height={120} width={492}></canvas>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 mt-6 overflow-hidden break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-5/12">
              <div className="flex">
                <div className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg fill-current bg-gradient-to-tl from-blue-600 to-cyan-400 stroke-none shadow-2xl">
                  <i
                    className="fa fa-truck text-lg relative top-2.5 text-white"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="ml-4">
                  <p className="mb-0 font-semibold leading-normal capitalize text-sm">
                    Projects
                  </p>
                  <h5 className="mb-0 font-bold dark:text-white">115</h5>
                </div>
              </div>
              <span className="py-2 rounded-lg text-sm mt-4 block whitespace-nowrap bg-transparent px-0 pb-0 text-left align-baseline font-normal leading-none text-white">
                <i className="bg-gradient-to-tl from-blue-600 to-cyan-400 rounded-full mr-1.5 inline-block h-1.5 w-1.5 align-middle"></i>
                <span className="font-semibold leading-tight text-xs text-slate-500 dark:text-white">
                  Done
                </span>
              </span>
              <span className="py-2 rounded-lg text-sm block whitespace-nowrap bg-transparent px-0 text-left align-baseline font-normal leading-none text-white">
                <i className="bg-gradient-to-tl from-slate-600 to-slate-300 rounded-full mr-1.5 inline-block h-1.5 w-1.5 align-middle"></i>
                <span className="font-semibold leading-tight text-xs text-slate-500 dark:text-white">
                  In progress
                </span>
              </span>
            </div>
            <div className="w-full max-w-full px-3 my-auto lg:flex-0 shrink-0 lg:w-7/12">
              <div className="ml-auto">
                <canvas
                  id="chart-bar-projects"
                  height={180}
                  width={253}
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCharts;
