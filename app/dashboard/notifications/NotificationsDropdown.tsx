import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { Notification } from "@/types/types";
import useOutsideClick from "@/app/hooks/useOutsideClick";

interface Props {
  notifications: Notification[];
}

const NotificationsDropdown = ({ notifications }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useOutsideClick(dropdownRef, toggleDropdown);

  return (
    <div className="relative">
      {/* Notification bell */}
      <button
        className="p-2 text-gray-400 hover:text-gray-500 text-sm transition-all ease-in"
        onClick={toggleDropdown}
      >
        <span className="sr-only">View notifications</span>
        <FontAwesomeIcon icon={faBell} className="h-5 w-5" aria-hidden="true" />
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
        <ul
          ref={dropdownRef}
          className="text-sm before:font-awesome before:leading-4 before:duration-[350ms] before:ease-linear before:sm:right-[35px] lg:shadow-2xl duration-[250ms] min-w-44 before:right-14 before:text-xl dark:bg-gray-950 absolute right-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-700 transition-all before:absolute before:left-auto before:z-50 before:inline-block before:font-normal before:text-white dark:before:text-gray-950 before:bg-white dark:before:bg-gray-950 before:antialiased before:transition-all before:h-4 before:content-['\f219'] before:rotate-45 sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block before:-top-1.5"
        >
          <div className="flex items-center justify-between ease-in-out py-1.5 clear-both w-full whitespace-nowrap rounded-lg bg-transparent px-4 mb-2 duration-300 lg:transition-colors">
            <p className="text-md leading-normal dark:text-white">
              <span className="text-xl font-bold italic mr-0.5">{`${notifications.length}`}</span>{" "}
              new notifications
            </p>
            <Link
              href="/dashboard/notifications"
              className="text-sm p-1 font-bold text-center transition-all border-0 cursor-pointer ease-in leading-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 hover:scale-105 active:opacity-85"
            >
              View All
            </Link>
          </div>
          {notifications.map((notification) => (
            <li key={notification.id} className="relative mb-2">
              <Link
                href="/dashboard/notifications"
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
  );
};

export default NotificationsDropdown;
