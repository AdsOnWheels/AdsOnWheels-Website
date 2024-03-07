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

const DashboardNavigation = () => {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const isOpen = useIsSidebarOpen();

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
      href: "/dashboard/content-management",
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
    <ul className="flex flex-col p-4 mb-0 list-none">
      {navigationItems.map((item) => (
        <li key={item.id} className="mb-2">
          {item.submenu ? (
            <>
              <div
                onClick={handleSubMenuToggle}
                className="flex items-center justify-start px-4 py-3 rounded-md transition duration-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              >
                <AWLink
                  href={item.href}
                  text={isOpen ? item.text : ""}
                  icon={item.icon}
                  tooltip={item.tooltip}
                  color="neutral"
                />
                {isOpen && (
                  <span className="ml-auto">
                    <AWLink
                      href={item.href}
                      icon={isUserManagementOpen ? faChevronUp : faChevronDown}
                      className="ml-2"
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
                        className="flex items-center justify-start px-4 py-3 rounded-md transition duration-300 hover:bg-gray-700 hover:text-white"
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
              tooltip={item.tooltip}
              className="flex items-center justify-start px-4 py-3 rounded-md transition duration-300 hover:bg-gray-700 hover:text-white"
              color="neutral"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavigation;
