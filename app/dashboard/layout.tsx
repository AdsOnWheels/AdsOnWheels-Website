"use client";

import React from "react";
import Provider from "@/redux/provider";

import Sidebar from "./layout/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import DashboardNavbar from "./layout/DashboardNavbar";
import DashboardFooter from "./layout/DashboardFooter";
import useIsSidebarOpen from "../hooks/dashboard/useIsSidebarOpen";
import ConfigurationButton from "./components/ConfigurationButton";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const isSidebarOpen = useIsSidebarOpen();

  return (
    <Provider>
      <div
        className={`m-0 font-sans antialiased font-normal text-left leading-default text-base dark:bg-[#141728] bg-gray-50 text-slate-500 dark:text-white/80`}
      >
        <Sidebar />
        <div
          className={`relative flex-1 h-full max-h-screen transition-all duration-200 ease-in-out rounded-xl ps-0 ${
            isSidebarOpen ? "xl:ml-[17rem]" : "xl:ml-[7.5rem]"
          } overflow-y-auto`}
        >
          <DashboardNavbar />
          {/* Breadcrumbs */}
          <Breadcrumb />
          {/* Main content */}
          <div
            className={`w-full mx-auto mb sm:px-6 lg:px-6 lg:py-6 dark:bg-[#141728] bg-gray-50 text-slate-500 dark:text-white/80 font-sans min-h-screen`}
          >
            {children}
          </div>
          <ConfigurationButton />
          <DashboardFooter />
        </div>
      </div>
    </Provider>
  );
};

export default DashboardLayout;
