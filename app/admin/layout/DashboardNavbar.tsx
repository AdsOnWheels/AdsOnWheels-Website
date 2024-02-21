"use client";

import React, { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/sidebarToggle";

interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

const DashboardNavbar = ({
  absolute = false,
  light = false,
  isMini = false,
}: Props) => {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const isSidebarOpen = useSelector(
    (state: RootState) => state.toggleSidebar.isSidebar
  );

  const path = usePathname();

  const dispatch = useDispatch();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Implement the search functionality or redirection here
  };

  const handleToggle = () => {
    dispatch(toggle(!isSidebarOpen));
  };

  const pathSegments = path.split("/").filter((segment) => segment);
  const currentPage =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "Home";

  // Remove hyphens and capitalize each word
  const formattedPage = currentPage
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const breadcrumbItems = (
    <div className="text-xl text-gray-300 font-bold">{formattedPage}</div>
  );

  return (
    <div className="px-0 py-1.5 mx-6 mt-4 transition-all shadow-none duration-200 ease-in rounded-2xl">
      <div className="navbar px-4">
        <div className="navbar-start">
          <div className="flex-1 px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <button
                className="text-gray-500 focus:outline-none mr-6"
                onClick={handleToggle}
              >
                {/* Icon for menu or logo isSidebarOpen */}
                {isSidebarOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <div className="hidden lg:flex lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="breadcrumbs hidden lg:flex lg:items-center">
                    {breadcrumbItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center lg:hidden">
          {/* Mobile menu button */}
          <button
            className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={() => {
              /* handle mobile menu */
            }}
          >
            {/* Icon for mobile menu */}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          {/* Notification bell */}
          <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
            <span className="sr-only">View notifications</span>
            <FontAwesomeIcon
              icon={faBell}
              className="h-6 w-6"
              aria-hidden="true"
            />
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              5
            </span>
          </button>

          {/* Profile dropdown */}
          <div className="ml-4 relative flex-shrink-0">
            <div>
              <button className="bg-white max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
                <span className="sr-only">Open user menu</span>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="h-8 w-8 text-gray-600"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
