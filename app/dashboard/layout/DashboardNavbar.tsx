"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/sidebarToggle";
import MobileMenu from "./components/MobileMenu";
import SearchForm from "./components/SearchForm";
import UserProfileBadge from "./components/UserProfileBadge";
import NotificationsDropdown from "../notifications/NotificationsDropdown";
import notifications from "../notifications/components/data/notificationsData";
import Skeleton from "react-loading-skeleton";

const DashboardNavbar = () => {
  const stickyNavbar = useSelector(
    (state: RootState) => state.toggleStickyNavbar.isSticky
  );
  const isSidebarOpen = useSelector(
    (state: RootState) => state.toggleSidebar.isSidebar
  );

  const path = usePathname();

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
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
    <div className="text-xl font-bold capitalize dark:text-white">
      {formattedPage}
    </div>
  );

  const { status, data: session } = useSession();

  return (
    <div
      className={`px-0 py-1.5 mx-6 mt-4 transition-all shadow-none duration-[250ms] ease-in rounded-2xl ${
        stickyNavbar &&
        "sticky top-[1%] dark:border dark:border-gray-500/80 backdrop-saturate-200 backdrop-blur-2xl bg-white/80 drop-shadow-xl z-[110] dark:bg-gray-950/80"
      }`}
    >
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
                  <FontAwesomeIcon
                    icon={faBarsStaggered}
                    className="ease-in h-[21px] w-[21px] mb-0.75 relative block rounded-sm transition-all"
                    aria-hidden="true"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className="ease-in h-[21px] w-[21px] mb-0.75 relative block rounded-sm transition-all"
                    aria-hidden="true"
                  />
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
          <SearchForm defaultValue={null} />
        </div>
        <div className="flex items-center lg:hidden">
          {/* Mobile menu button */}
          <MobileMenu isOpen={isSidebarOpen} />
        </div>
        <div className="hidden lg:flex lg:items-center">
          <NotificationsDropdown notifications={notifications} />
          {/* User Profile */}
          <UserProfileBadge session={session} status={status} />
          {status === "loading" && (
            <div className="animate-pulse">
              <Skeleton width={40} height={25} />
            </div>
          )}

          <li className="flex items-center">
            {status === "authenticated" && (
              <Link
                href="/api/auth/signout"
                className="block px-0 py-2 font-semibold transition-all ease-in text-sm text-slate-500 dark:text-white"
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
