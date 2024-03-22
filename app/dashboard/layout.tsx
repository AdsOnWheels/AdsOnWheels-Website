"use client";

import React from "react";
import Provider from "@/redux/provider";

import Sidebar from "./layout/Sidebar";
import FloatButton from "./components/FloatButton";
import DashboardNavbar from "./layout/DashboardNavbar";
import useIsSidebarOpen from "../hooks/dashboard/useIsSidebarOpen";
import Breadcrumb from "../components/Breadcrumbs";
import DashboardFooter from "./layout/DashboardFooter";
import ToggleTheme from "@/assets/theme/ToggleTheme";
import ToggleFixedNavbar from "./layout/components/ToggleFixedNavbar";
import TransparentSidebar from "./layout/components/TransparentSidebar";

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
          {/* Main content goes here */}
          <div
            className={`w-full mx-auto mb sm:px-6 lg:px-6 lg:py-6 dark:bg-[#141728] bg-gray-50 text-slate-500 dark:text-white/80 font-sans min-h-screen`}
          >
            {children}
          </div>
          <FloatButton margin="mb-32">
            <TransparentSidebar />
          </FloatButton>
          <FloatButton margin="mb-16">
            <ToggleFixedNavbar />
          </FloatButton>
          <FloatButton>
            <ToggleTheme />
          </FloatButton>

          <DashboardFooter />
        </div>
      </div>
    </Provider>
  );
};

export default DashboardLayout;
