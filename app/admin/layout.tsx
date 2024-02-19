"use client";

import React from "react";
import Provider from "@/redux/provider";

import Sidebar from "./layout/Sidebar";
import DashboardNavbar from "./layout/DashboardNavbar";
import useCurrentPathname from "../hooks/useCurrentPathname";
import useIsSidebarOpen from "../hooks/admin/useIsSidebarOpen";
import Breadcrumb from "../components/Breadcrumbs";
import DashboardFooter from "./layout/DashboardFooter";
import ToggleTheme from "@/assets/theme/ToggleTheme";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  const isSidebarOpen = useIsSidebarOpen();

  const path = useCurrentPathname();

  return (
    <Provider>
      <div className={`flex h-screen bg-gray-100 dark:bg-gray-900`}>
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`relative flex-1 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          } transition-all ease-in-out duration-300`}
        >
          <DashboardNavbar />
          {/* Main content goes here */}
          <div
            className={`bg-gray-100 ${
              path === "admin" ? "min-h-screen" : ""
            }  font-sans`}
          >
            {/* Breadcrumbs */}
            <Breadcrumb />
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
