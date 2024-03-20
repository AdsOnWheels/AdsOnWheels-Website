"use client";

import React, { useState } from "react";
import AWLink from "../../components/AWLink";
import {
  faBell,
  faBiking,
  faChartLine,
  faChartPie,
  faChartSimple,
  faChevronDown,
  faChevronUp,
  faClipboardList,
  faGear,
  faIndustry,
  faPaste,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import useIsSidebarOpen from "@/app/hooks/dashboard/useIsSidebarOpen";
import { usePathname } from "next/navigation";

const DashboardNavigation = () => {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const isOpen = useIsSidebarOpen();

  const path = usePathname();

  const navigationItems = [
    {
      id: 1,
      href: "/dashboard",
      text: "Dashboard",
      icon: faChartPie,
      tooltip: "Dashboard",
    },
    {
      id: 2,
      href: "/dashboard/user-management",
      text: "User Management",
      icon: faUserGroup,
      tooltip: "User Management",
      category: "Management",
      submenu: [
        {
          id: 21,
          href: "/dashboard/user-management/brands",
          text: "Brands",
          icon: faIndustry,
          tooltip: "Brands",
        },
        {
          id: 22,
          href: "/dashboard/user-management/riders",
          text: "Riders",
          icon: faBiking,
          tooltip: "Riders",
        },
      ],
    },
    {
      id: 3,
      href: "/dashboard/content-management/blogs",
      text: "Content Management",
      icon: faPaste,
      tooltip: "Content Management",
      category: "Management",
    },
    {
      id: 4,
      href: "/dashboard/forms",
      text: "Forms",
      icon: faClipboardList,
      tooltip: "Forms",
      category: "Communications",
    },
    {
      id: 5,
      href: "/dashboard/campaigns",
      text: "Campaigns",
      icon: faChartSimple,
      tooltip: "Campaigns",
      category: "Marketing",
    },
    {
      id: 6,
      href: "/dashboard/analytics",
      text: "Analytics",
      icon: faChartLine,
      tooltip: "Analytics",
      category: "Data",
    },
    {
      id: 7,
      href: "/dashboard/settings",
      text: "Settings",
      icon: faGear,
      tooltip: "Settings",
      category: "System",
    },
    {
      id: 8,
      href: "/dashboard/notifications",
      text: "Notifications",
      icon: faBell,
      tooltip: "Notifications",
      category: "Communications",
    },
  ];

  const handleSubMenuToggle = () => {
    setIsUserManagementOpen((prevState) => !prevState);
  };

  return (
    <ul className="flex flex-col pl-0 mb-0 list-none">
      {navigationItems.map((item) => (
        <li key={item.id} className="mt-2 w-full">
          {item.submenu ? (
            <>
              <div
                className={`flex items-center py-3 px-4 active my-0 mx-4 rounded-lg duration-300 dark:hover:bg-gray-700 hover:bg-gray-200/80 ${
                  path === item.href ? "dark:bg-gray-700 bg-gray-200/80" : ""
                }`}
                onClick={handleSubMenuToggle}
              >
                <AWLink
                  href={item.href}
                  text={isOpen ? item.text : ""}
                  icon={item.icon}
                  iconClasses="stroke-none shadow-2xl bg-gradient-to-tl from-purple-700 to-blue-500 h-4 w-4 rounded-lg bg-white bg-center fill-current p-2.5 text-center text-white"
                  tooltip={item.tooltip}
                  className="ease-in-out text-sm flex items-center whitespace-nowrap font-medium text-slate-500 shadow-none transition-colors"
                  color="neutral"
                />
                {isOpen && (
                  <span className="mx-4">
                    <AWLink
                      href={item.href}
                      icon={isUserManagementOpen ? faChevronUp : faChevronDown}
                      color="neutral"
                    />
                  </span>
                )}
              </div>
              {isUserManagementOpen && (
                <ul className="pl-4">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id} className="mb-2">
                      <AWLink
                        href={subItem.href}
                        text={isOpen ? subItem.text : ""}
                        icon={subItem.icon}
                        tooltip={subItem.tooltip}
                        className="ease-in-out py-1.5 ml-5 pl-4 text-sm relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60"
                        color="neutral"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <AWLink
              href={item.href}
              text={isOpen ? item.text : ""}
              icon={item.icon}
              iconClasses="stroke-none shadow-2xl bg-gradient-to-tl from-purple-700 to-blue-500 flex h-4 w-4 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-white"
              tooltip={item.tooltip}
              className={`ease-in-out text-sm py-3 active my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors rounded-lg duration-300 dark:hover:bg-gray-700 hover:bg-gray-200/80 ${
                path === item.href ? "dark:bg-gray-700 bg-gray-200/80" : ""
              }`}
              color="neutral"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavigation;
