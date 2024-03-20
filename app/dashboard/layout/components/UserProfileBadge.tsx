"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faComment,
  faUserCircle,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import useOutsideClick from "@/app/hooks/useOutsideClick";
import placeholderImage from "../../assets/images/Brand-icon.png";

interface Props {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

const UserProfileBadge = ({ session, status }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div className="ml-3.5 sm:mr-1.5 relative flex-shrink-0">
      <div className="bg-white max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
        <span className="sr-only">Open user menu</span>

        {status === "authenticated" ? (
          <button onClick={toggleDropdown}>
            <Image
              title={session!.user!.name as string}
              src={placeholderImage}
              alt="image"
              width={100}
              height={100}
              className="h-8 w-8 rounded-full"
              aria-hidden="true"
            />
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faUserCircle}
            className="h-8 w-8 text-gray-600"
            aria-hidden="true"
          />
        )}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 px-2 py-4 min-w-48 bg-white border-gray-200 shadow-lg z-50 text-sm lg:shadow-2xl duration-[250ms] dark:bg-gray-950 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-clip-padding text-slate-700 transition-all dark:before:text-gray-950 sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block"
        >
          <div className="py-1">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center">
                <Image
                  title={session?.user?.name as string}
                  src={placeholderImage}
                  alt="image"
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-full"
                  aria-hidden="true"
                />
              </div>
              <div className="px-4 py-2">
                <h6 className="text-lg dark:text-white font-bold mb-1">
                  {session?.user?.name}
                </h6>
                <p className="text-sm dark:text-white dark:opacity-60">
                  {session?.user?.email}
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/user-profile"
              className="ease-in-out py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 dark:text-white dark:opacity-60 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-600/80 lg:transition-colors"
              onClick={closeDropdown}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="h-3.5 w-3.5 mr-2 text-gray-600 dark:text-white dark:opacity-60"
                aria-hidden="true"
              />
              Profile
            </Link>
            <Link
              href="/dashboard/feedback"
              className="ease-in-out py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 dark:text-white dark:opacity-60 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-600/80 lg:transition-colors"
              onClick={closeDropdown}
            >
              <FontAwesomeIcon
                icon={faComment}
                className="h-3.5 w-3.5 mr-2 text-gray-600 dark:text-white dark:opacity-60"
                aria-hidden="true"
              />
              Feedback
            </Link>
            <Link
              href="/dashboard/notifications"
              className="ease-in-out py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 dark:text-white dark:opacity-60 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-600/80 lg:transition-colors"
              onClick={closeDropdown}
            >
              <FontAwesomeIcon
                icon={faBell}
                className="h-3.5 w-3.5 mr-2 text-gray-600 dark:text-white dark:opacity-60"
                aria-hidden="true"
              />
              Notifications
            </Link>
            <Link
              href="/api/auth/signout"
              className="ease-in-out py-1.5 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 dark:text-white dark:opacity-60 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-600/80 lg:transition-colors"
              onClick={closeDropdown}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="h-3.5 w-3.5 mr-2 text-gray-600 dark:text-white dark:opacity-60"
                aria-hidden="true"
              />
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileBadge;
