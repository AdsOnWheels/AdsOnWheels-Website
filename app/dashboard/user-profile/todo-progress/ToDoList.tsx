import React from "react";

const ToDoList = () => {
  return (
    <div className="w-full max-w-full px-3 flex-0 lg:w-8/12">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border">
        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <h6 className="mb-0 dark:text-white">To do list</h6>
            </div>
            <div className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <small>23 - 30 March 2020</small>
            </div>
          </div>
          <hr className="h-px mx-0 my-4 mb-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        </div>
        <div className="flex-auto p-4 pt-0">
          <ul className="flex flex-col pl-0 mb-0 rounded-none">
            <li className="border-black/12.5 rounded-t-inherit relative mb-4 block flex-col items-center border-0 border-solid px-4 py-0 pl-0 text-inherit">
              <div className="before:w-1 before:rounded-lg ml-4 pl-2 before:absolute before:top-0 before:left-0 before:h-full before:bg-fuchsia-500 before:content-['']">
                <div className="flex items-center">
                  <div className="min-h-6 pl-7 mb-0.5 block">
                    <input
                      className="checkbox w-5 h-5 ease-in -ml-7 rounded-md duration-200 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                    />
                  </div>
                  <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700 dark:text-white">
                    Check status
                  </h6>
                  <div className="relative pr-0 ml-auto lg:float-right">
                    <a
                      href="#"
                      className="cursor-pointer"
                      dropdown-trigger=""
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-ellipsis-h text-slate-400 dark:text-white/80"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <p className="hidden transform-dropdown-show"></p>
                    <ul
                      dropdown-menu=""
                      className="dark:shadow-xl z-50 dark:bg-gray-950 text-sm lg:shadow-3xl duration-[250ms] min-w-44 transform-dropdown right-5 pointer-events-none absolute -top-12 left-auto m-0 mt-2 -ml-12 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all sm:-ml-6"
                    >
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center pl-1 mt-4 ml-6">
                  <div>
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Date
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      24 March 2019
                    </span>
                  </div>
                  <div className="ml-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Project
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      2414_VR4sf3#
                    </span>
                  </div>
                  <div className="mx-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Company
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      Creative Tim
                    </span>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-6 mb-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            </li>
            <li className="border-black/12.5 rounded-t-inherit relative mb-4 block flex-col items-center border-0 border-solid px-4 py-0 pl-0 text-inherit">
              <div className="before:w-1 before:rounded-lg ml-4 pl-2 before:absolute before:top-0 before:left-0 before:h-full before:bg-slate-700 before:content-['']">
                <div className="flex items-center">
                  <div className="min-h-6 pl-7 mb-0.5 block">
                    <input
                      className="checkbox w-5 h-5 ease-in -ml-7 rounded-md duration-200 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                    />
                  </div>
                  <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700 dark:text-white">
                    Management discussion
                  </h6>
                  <div className="relative pr-0 ml-auto lg:float-right">
                    <a
                      href="#"
                      className="cursor-pointer"
                      dropdown-trigger=""
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-ellipsis-h text-slate-400 dark:text-white/80"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <p className="hidden transform-dropdown-show"></p>
                    <ul
                      dropdown-menu=""
                      className="dark:shadow-soft-dark-xl z-100 dark:bg-gray-950 text-sm lg:shadow-soft-3xl duration-250 min-w-44 transform-dropdown right-5.5 pointer-events-none absolute -top-12 left-auto m-0 mt-2 -ml-12 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all sm:-ml-6"
                    >
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center pl-1 mt-4 ml-6">
                  <div>
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Date
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      24 March 2019
                    </span>
                  </div>
                  <div className="ml-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Project
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      4411_8sIsdd23
                    </span>
                  </div>
                  <div className="mx-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Company
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      Apple
                    </span>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-6 mb-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            </li>
            <li className="border-black/12.5 rounded-t-inherit relative mb-4 block flex-col items-center border-0 border-solid px-4 py-0 pl-0 text-inherit">
              <div className="before:w-1 before:rounded-lg ml-4 pl-2 before:absolute before:top-0 before:left-0 before:h-full before:bg-yellow-400 before:content-['']">
                <div className="flex items-center">
                  <div className="min-h-6 pl-7 mb-0.5 block">
                    <input
                      className="checkbox w-5 h-5 ease-in -ml-7 rounded-md duration-200 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                    />
                  </div>
                  <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700 dark:text-white">
                    New channel distribution
                  </h6>
                  <div className="relative pr-0 ml-auto lg:float-right">
                    <a
                      href="#"
                      className="cursor-pointer"
                      dropdown-trigger=""
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-ellipsis-h text-slate-400 dark:text-white/80"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <p className="hidden transform-dropdown-show"></p>
                    <ul
                      dropdown-menu=""
                      className="dark:shadow-xl z-50 dark:bg-gray-950 text-sm lg:shadow-soft-3xl duration-250 min-w-44 transform-dropdown right-5.5 pointer-events-none absolute -top-12 left-auto m-0 mt-2 -ml-12 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all sm:-ml-6"
                    >
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center pl-1 mt-4 ml-6">
                  <div>
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Date
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      25 March 2019
                    </span>
                  </div>
                  <div className="ml-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Project
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      827d_kdl33D1s
                    </span>
                  </div>
                  <div className="mx-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Company
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      Slack
                    </span>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-6 mb-0 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            </li>
            <li className="border-black/12.5 rounded-t-inherit relative mb-4 block flex-col items-center border-0 border-solid px-4 py-0 pl-0 text-inherit">
              <div className="before:w-1 before:rounded-lg ml-4 pl-2 before:absolute before:top-0 before:left-0 before:h-full before:bg-lime-500 before:content-['']">
                <div className="flex items-center">
                  <div className="min-h-6 pl-7 mb-0.5 block">
                    <input
                      className="checkbox w-5 h-5 ease-in -ml-7 rounded-md duration-200 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                      type="checkbox"
                    />
                  </div>
                  <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700 dark:text-white">
                    IOS App development
                  </h6>
                  <div className="relative pr-0 ml-auto lg:float-right">
                    <a
                      href="#"
                      className="cursor-pointer"
                      dropdown-trigger=""
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-ellipsis-h text-slate-400 dark:text-white/80"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <p className="hidden transform-dropdown-show"></p>
                    <ul
                      dropdown-menu=""
                      className="dark:shadow-soft-dark-xl z-100 dark:bg-gray-950 text-sm lg:shadow-soft-3xl duration-250 min-w-44 transform-dropdown right-5.5 pointer-events-none absolute -top-12 left-auto m-0 mt-2 -ml-12 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all sm:-ml-6"
                    >
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center pl-1 mt-4 ml-6">
                  <div>
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Date
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      26 March 2019
                    </span>
                  </div>
                  <div className="ml-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Project
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      88s1_349DA2sa
                    </span>
                  </div>
                  <div className="mx-auto">
                    <p className="mb-0 font-semibold leading-tight text-xs text-slate-400 dark:text-white/80">
                      Company
                    </p>
                    <span className="font-bold leading-tight text-xs">
                      Facebook
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
