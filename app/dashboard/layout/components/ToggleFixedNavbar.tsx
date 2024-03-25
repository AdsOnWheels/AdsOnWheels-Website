"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/toggleStickyNavbar";

function ToggleFixedNavbar() {
  const isToggled = useSelector(
    (state: RootState) => state.toggleStickyNavbar.isSticky
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <button
      id="fixed-navbar-toggle"
      className="fixed px-3 py-2 mb-32 text-xl bg-white dark:bg-slate-950 drop-shadow-2xl shadow-lg cursor-pointer bottom-8 right-8 z-[990] rounded-full"
      onClick={handleToggle}
    >
      <span className="toggle-icon">
        <FontAwesomeIcon
          icon={faThumbtack}
          className={`icon dark:text-gray-100 text-gray-600 ${
            isToggled ? "rotate-45" : ""
          } w-5 h-5`}
        />
      </span>
    </button>
  );
}

export default ToggleFixedNavbar;
