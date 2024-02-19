import React from "react";
import DashboardNavigation from "./DashboardNavigation";

interface Props {
  isOpen: boolean | undefined;
}

// fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 transition-all duration-200 ease-in-out border-0 shadow-none xl:ml-6 bg-gray-800 xl:translate-x-0 max-w-64 overflow-y-auto
// isOpen ? "w-64 translate-x-0" : "w-20 translate-x-12"

const Sidebar = ({ isOpen }: Props) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-40`}
    >
      <div className="h-full">
        <div className="bg-gray-800 text-white text-xl md:text-2xl lg:text-3xl font-bold p-4">
          OutFront
        </div>
        {/* Admin Navigation */}
        <DashboardNavigation />
      </div>
    </aside>
  );
};

export default Sidebar;
