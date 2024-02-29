import React from "react";
import Image from "next/image";
import Link from "next/link";

import DashboardNavigation from "./DashboardNavigation";
import BrandIcon from "../assets/images/Brand-icon.png";

interface Props {
  isOpen: boolean | undefined;
}

const Sidebar = ({ isOpen }: Props) => {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 transition-all duration-200 -translate-x-full bg-white border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-in-out z-40 rounded-2xl xl:translate-x-0 ps-0 ${
          isOpen ? "max-w-64" : "max-w-24"
        }`}
      >
        <div className="h-20">
          {isOpen && (
            <i
              className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden"
              aria-hidden="true"
              sidenav-close-btn=""
            ></i>
          )}
          <Link
            className="block px-4 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
            href="/"
          >
            <Image
              src={BrandIcon}
              className="hidden h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:inline-block"
              alt="main_logo"
              width={100}
              height={100}
            />
            <Image
              src={BrandIcon}
              className="inline-block h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:hidden"
              alt="main_logo"
              width={100}
              height={100}
            />
            <span className="ml-1 text-xl font-bold transition-all duration-200 ease-in-out opacity-100">
              {isOpen ? "OUTFRONT" : ""}
            </span>
          </Link>
        </div>
        {/* Admin Navigation */}
        <DashboardNavigation />
      </aside>
    </>
  );
};

export default Sidebar;
