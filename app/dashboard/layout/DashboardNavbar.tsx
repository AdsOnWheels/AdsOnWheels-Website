"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/sidebarToggle";
import { useSession } from "next-auth/react";
import placeholderImage from "../assets/images/Brand-icon.png";

interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

// Assuming notifications is an array of notification objects
const notifications = [
  {
    id: 1,
    title: "New message from Laur",
    time: "13 minutes ago",
    imageUrl: placeholderImage,
  },
  {
    id: 2,
    title: "New album by Travis Scott",
    time: "1 day ago",
    imageUrl: placeholderImage,
  },
  {
    id: 3,
    title: "Payment successfully completed",
    time: "2 days ago",
    imageUrl: placeholderImage,
  },
];

const DashboardNavbar = ({
  absolute = false,
  light = false,
  isMini = false,
}: Props) => {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isSidebarOpen = useSelector(
    (state: RootState) => state.toggleSidebar.isSidebar
  );

  const path = usePathname();

  const dispatch = useDispatch();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Implement the search functionality or redirection here
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  const { status, data: session } = useSession();

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
                  className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          <div className="relative">
            {/* Notification bell */}
            <button
              className="p-2 text-gray-400 hover:text-gray-500 text-sm transition-all ease-in"
              onClick={toggleDropdown}
            >
              <span className="sr-only">View notifications</span>
              <FontAwesomeIcon
                icon={faBell}
                className="h-5 w-5"
                aria-hidden="true"
              />
              {/* Animated pulse dot */}
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-0.5 translate-y-4">
                  <span className="block w-3 h-3 bg-red-500  text-white text-xs px-1.5 py-0.5 rounded-full animate-ping"></span>
                  <span className="block w-2 h-2 bg-red-500 rounded-full absolute top-0.5 left-0.5 animate-pulse"></span>
                </span>
              )}
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul className="text-sm before:font-awesome before:leading-4 before:duration-[350ms] before:ease-linear before:sm:right-[35px] lg:shadow-2xl duration-[250ms] min-w-44 before:right-14 before:text-xl dark:bg-gray-800 absolute right-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-700 transition-all before:absolute before:left-auto before:z-50 before:inline-block before:font-normal before:text-white dark:before:text-gray-800 before:bg-white dark:before:bg-gray-800 before:antialiased before:transition-all before:h-4 before:content-['\f219'] before:rotate-45 sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer before:-top-1.5">
                {notifications.map((notification) => (
                  <li key={notification.id} className="relative mb-2">
                    <Link
                      href="#"
                      className="ease-in-out py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {/* Assuming notification image is available */}
                          <div className="my-auto">
                            <Image
                              src={notification.imageUrl}
                              alt="image"
                              width={100}
                              height={100}
                              className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"
                            />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                            {notification.title}
                          </h6>
                          <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                            <span className="mr-2">🕒</span>
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* User Profile */}
          <div className="ml-3.5 sm:mr-1.5 relative flex-shrink-0">
            <div className="bg-white max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
              <span className="sr-only">Open user menu</span>
              {status === "authenticated" ? (
                <Image
                  title={session.user!.name as string}
                  src={placeholderImage}
                  alt="image"
                  width={100}
                  height={100}
                  className="h-6 w-6 rounded-full"
                  aria-hidden="true"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          {status === "loading" && <div>Loading...</div>}

          <li className="flex items-center">
            {status === "authenticated" && (
              <Link
                href="/api/auth/signout"
                className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-in"
              >
                <span className="hidden sm:inline">Sign Out</span>
              </Link>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
