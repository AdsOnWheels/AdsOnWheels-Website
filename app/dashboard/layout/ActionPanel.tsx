"use client";

import React, { Fragment, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { setTab } from "@/redux/slices/tab";
import { RootState } from "@/redux/store";
import useIsSidebarOpen from "@/app/hooks/dashboard/useIsSidebarOpen";
import UserProfile from "./components/UserProfile";

interface Tab {
  id: number;
  tab: string;
  icon: string;
}

interface Props {
  userProfile?: boolean;
  searchBar?: ReactNode;
  tabs?: Tab[];
  buttons?: ReactNode[];
  onTabClick?: (tab: string) => void;
}

const ActionPanel = ({
  userProfile,
  searchBar,
  tabs,
  buttons,
  onTabClick,
}: Props) => {
  const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);
  const isSidebarOpen = useIsSidebarOpen();

  const dispatch = useDispatch();

  const router = useRouter();

  // Function to calculate the width of the moving tab based on the selected tab
  const calculateMovingTabWidth = () => {
    if (!tabs) return "w-[111px]"; // Default width if tabs array is empty or undefined

    const tabWidthMap = {
      // Define the width for each tab
      [tabs[0].tab]: isSidebarOpen ? "w-[94px]" : "w-[111px]",
      [tabs[1].tab]: isSidebarOpen ? "w-[91px]" : "w-[106px]",
      [tabs[2].tab]: isSidebarOpen ? "w-[145px]" : "w-[161px]",
    };

    // Get the width based on the selected tab
    return tabWidthMap[selectedTab] || "w-[111px]"; // Default width if selectedTab does not match any tab
  };

  // Define the tab widths based on the sidebar state
  const tabWidths = isSidebarOpen ? [0, 95, 186] : [0, 113, 220]; // Translation values for each tab

  // Function to calculate the position of the moving tab based on the selected tab
  const movingTabStyle = {
    transform: `translateX(${
      tabs ? tabWidths[tabs?.findIndex((tab) => tab.tab === selectedTab)] : 0
    }px)`,
  };

  const handleTabClick = (tab: string) => {
    dispatch(setTab(tab));
    if (onTabClick) {
      onTabClick(tab);
    }
    router.push(`/dashboard/content-management/${getTabRoute(tab)}`);
  };

  const getTabRoute = (tab: string): string => {
    switch (tab) {
      case "Help Articles":
        return "articles";
      case "FAQs":
        return "faqs";
      case "Blogs":
      default:
        return "blogs";
    }
  };

  return (
    <div className="relative flex flex-col flex-auto min-w-0 p-4 mb-6 overflow-hidden break-words bg-white border-0 shadow-xl dark:bg-gray-950 rounded-2xl bg-clip-border">
      <div className="flex flex-wrap -mx-3">
        {userProfile && <UserProfile />}
        {searchBar && (
          <div className="w-full max-w-full px-3 mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
            <div className="relative left-0">{searchBar}</div>
          </div>
        )}
        {tabs && tabs.length > 0 && (
          <div className="w-full max-w-full px-3 mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
            <div className="relative left-0">
              <ul
                className="relative flex flex-wrap p-1 list-none dark:bg-[#141728] bg-gray-200 rounded-xl"
                nav-pills=""
                role="tablist"
              >
                {tabs.map((tab) => (
                  <li key={tab.id} className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit dark:text-white/80 text-slate-700 ${
                        selectedTab === tab.tab
                          ? "text-blue-500"
                          : "text-gray-500"
                      }`}
                      role="tab"
                      aria-selected={selectedTab === tab.tab ? "true" : "false"}
                      onClick={() => handleTabClick(tab.tab)}
                    >
                      <i className={`fa-solid ${tab.icon} w-4 h-4`}></i>
                      <span className="ml-2">{tab.tab}</span>
                    </button>
                  </li>
                ))}
                <div
                  className={`z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block p-0 transition-all duration-500 ease-in transform translate-x-0 translate-y-0 ${calculateMovingTabWidth()}`}
                  moving-tab=""
                  nav-link=""
                  style={movingTabStyle}
                >
                  <a
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg dark:text-gray-950 text-white dark:bg-gray-950 bg-white dark:shadow-white shadow-sm animate-none duration-200"
                    nav-link=""
                    role="tab"
                    aria-selected="true"
                  >
                    -
                  </a>
                </div>
              </ul>
            </div>
          </div>
        )}
        {buttons && (
          <div className="flex items-center w-auto max-w-full px-3 ml-auto mt-4 space-x-2 sm:space-x-3 sm:my-auto sm:mr-0 md:flex-none">
            {buttons?.map((button, index) => (
              <div className="relative right-0" key={index}>
                {button}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionPanel;
