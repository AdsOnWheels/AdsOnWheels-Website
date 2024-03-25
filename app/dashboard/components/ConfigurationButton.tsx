"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import TransparentSidebar from "../layout/components/TransparentSidebar";
import ToggleFixedNavbar from "../layout/components/ToggleFixedNavbar";
import ToggleTheme from "@/assets/theme/ToggleTheme";

const ConfigurationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="group fixed px-3 py-2 text-xl bg-white dark:bg-slate-950 drop-shadow-2xl shadow-lg cursor-pointer bottom-8 right-8 z-[990] rounded-full focus:outline-none"
      >
        <span>
          <FontAwesomeIcon
            icon={faCog}
            className={`w-5 h-5 dark:text-gray-100 text-gray-600 transition-transform ${
              isOpen && "rotate-180"
            }`}
          />
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 bottom-full mt-6">
          <TransparentSidebar />
          <ToggleFixedNavbar />
          <ToggleTheme />
        </div>
      )}
    </div>
  );
};

export default ConfigurationButton;
