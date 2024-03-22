import React from "react";
import Image from "next/image";
import Link from "next/link";

import DashboardNavigation from "./DashboardNavigation";
import BrandIcon from "../assets/images/Brand-icon.png";
import useIsSidebarOpen from "@/app/hooks/dashboard/useIsSidebarOpen";
import useTransparentSidebar from "@/app/hooks/dashboard/useTransparentSidebar";

const Sidebar = () => {
  const isOpen = useIsSidebarOpen();
  const isTransparent = useTransparentSidebar();

  return (
    <aside
      className={`fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 -translate-x-full border-0 xl:ml-4 dark:bg-gray-950 bg-white ease-in-out z-40 rounded-2xl xl:translate-x-0 ps-0 ps--active-y ${
        isTransparent
          ? "lg:bg-transparent shadow-none"
          : "bg-white lg:shadow-xl"
      } ${isOpen ? "max-w-64" : "max-w-24"}`}
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
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
          href="/"
        >
          <Image
            src={BrandIcon}
            className="inline-block h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:hidden"
            alt="main_logo"
            width={100}
            height={100}
          />
          <Image
            src={BrandIcon}
            className="hidden h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:inline-block"
            alt="main_logo"
            width={100}
            height={100}
          />
          <span className="ml-1 text-xl font-bold transition-all duration-200 ease-in-out opacity-100">
            {isOpen ? "OUTFRONT" : ""}
          </span>
        </Link>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      {/* Admin Navigation */}
      <div className="items-center block w-full h-auto grow basis-full">
        <DashboardNavigation />
      </div>
    </aside>
  );
};

export default Sidebar;
