import React from "react";

const Riders = () => {
  return (
    <div className="w-full p-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 flex-0 lg:w-6/12">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 flex-0 md:w-6/12">
              <div className="dark:bg-slate-850 dark:shadow-dark-xl shadow-xl bg-cover relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white">
                <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-2xl opacity-80"></span>

                <div className="relative flex-auto p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-8/12 max-w-full px-3 text-left flex-0">
                      <div className="inline-block w-12 h-12 text-center text-black bg-white bg-center rounded-lg shadow-2xl fill-current stroke-none">
                        <div className="leading-none bg-gradient-to-tl from-zinc-800 to-zinc-700 text-lg relative top-3.5 z-10 bg-clip-text text-transparent"></div>
                      </div>
                      <h5 className="mt-4 mb-0 font-bold text-white">2300</h5>
                      <span className="text-sm leading-normal text-white">
                        Purchases
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
                        <ul
                          dropdown-menu=""
                          className="dark:shadow-dark-xl z-100 dark:bg-slate-850 text-sm lg:shadow-3xl duration-250 before:duration-350 before:font-awesome before:ease min-w-44 before:text-5.5 transform-dropdown pointer-events-none absolute right-0 left-auto top-0 m-0 -mr-4 mt-0 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8'] sm:-mr-6"
                        >
                          <li>
                            <a
                              className="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                              href="#"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                              href="#"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <a
                              className="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                              href="#"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="mt-auto mb-0 text-sm font-bold leading-normal text-right text-white dark:text-white/60">
                        +15%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 flex-0 lg:w-6/12">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-6 -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="overflow-x-auto ps"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riders;
