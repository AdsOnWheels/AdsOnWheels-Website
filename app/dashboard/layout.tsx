"use client";

import React from "react";
import Provider from "@/redux/provider";

import Sidebar from "./layout/Sidebar";
import DashboardNavbar from "./layout/DashboardNavbar";
import useIsSidebarOpen from "../hooks/dashboard/useIsSidebarOpen";
import Breadcrumb from "../components/Breadcrumbs";
import DashboardFooter from "./layout/DashboardFooter";
import ToggleTheme from "@/assets/theme/ToggleTheme";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  const isSidebarOpen = useIsSidebarOpen();

  return (
    <Provider>
      <div
        className={`fixed inset-0 flex dark:bg-gray-900 bg-gray-100 text-slate-500 dark:text-white`}
      >
        <Sidebar isOpen={isSidebarOpen} />
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
            className={`w-full mx-auto sm:px-6 lg:px-6 lg:py-6 bg-gray-100 dark:bg-gray-900 font-sans min-h-screen`}
          >
            {children}
          </div>
          <div
            fixed-plugin-button=""
            className="fixed px-3 py-2 text-xl bg-white dark:bg-slate-700 shadow-2xl cursor-pointer bottom-8 right-8 z-[990] rounded-full"
          >
            <ToggleTheme />
          </div>

          <DashboardFooter />
        </div>
      </div>
    </Provider>
  );
};

export default AdminLayout;
