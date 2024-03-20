"use client";

import React, { Fragment, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { setTab } from "@/redux/slices/tab";
import { RootState } from "@/redux/store";
import useIsSidebarOpen from "@/app/hooks/dashboard/useIsSidebarOpen";
import UserProfile from "./components/UserProfile";

interface Props {
  userProfile?: boolean;
  searchBar?: ReactNode;
  tabs?: string[];
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
  const tab1 = tabs ? tabs[0] : "";
  const tab2 = tabs ? tabs[1] : "";
  const tab3 = tabs ? tabs[2] : "";

  const calculateMovingTabWidth = () => {
    if (selectedTab === tab1) {
      if (isSidebarOpen) {
        return "w-[81px]";
      }
      return "w-[98px]";
    } else if (selectedTab === tab2) {
      if (isSidebarOpen) {
        return "w-[78px]";
      }
      return "w-[96px]";
    } else if (selectedTab === tab3) {
      if (isSidebarOpen) {
        return "w-[132px]";
      }
      return "w-[149px]";
    }

    return "w-[98px]";
  };

  // Define the tab widths based on the sidebar state
  const tabWidths = isSidebarOpen ? [0, 83, 161] : [0, 99, 195]; // Translation values for each tab

  // Function to calculate the position of the moving tab based on the selected tab
  const movingTabStyle = {
    transform: `translateX(${
      tabs ? tabWidths[tabs.indexOf(selectedTab)] : 0
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
    <div className="block justify-between items-center p-4 mb-6 dark:bg-gray-950 bg-white rounded-2xl shadow-xl lg:p-5 sm:flex">
      <div className="mb-1 w-full">
        <div className="sm:flex">
          {userProfile && <UserProfile />}
          {searchBar && (
            <div className="hidden items-center mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0">
              {searchBar}
            </div>
          )}
          {tabs && tabs.length > 0 && (
            <div className="w-full max-w-full mx-auto mt-4 sm:my-auto sm:ml-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative left-0">
                <ul
                  className="relative flex flex-wrap p-1 list-none dark:bg-[#141728] bg-gray-200 rounded-xl"
                  nav-pills=""
                  role="tablist"
                >
                  {tabs.map((tab, index) => (
                    <li key={index} className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit dark:text-white/80 text-slate-700 ${
                          selectedTab === tab
                            ? "text-blue-500"
                            : "text-gray-500"
                        }`}
                        role="tab"
                        aria-selected={selectedTab === tab ? "true" : "false"}
                        onClick={() => handleTabClick(tab)}
                      >
                        <span className="ml-2">{tab}</span>
                      </button>
                    </li>
                  ))}
                  <div
                    className={`z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block p-0 transition-all duration-500 ease transform translate-x-0 translate-y-0 ${calculateMovingTabWidth()}`}
                    moving-tab=""
                    nav-link=""
                    style={movingTabStyle}
                  >
                    <a
                      className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg dark:text-gray-950 text-white dark:bg-gray-950 bg-white shadow-sm animate-none duration-200"
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
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              {buttons?.map((button, index) => (
                <Fragment key={index}>{button}</Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
