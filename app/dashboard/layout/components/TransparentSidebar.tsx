"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus as solidSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/transparentSidebar";

const TransparentSidebar = () => {
  const isTransparent = useSelector(
    (state: RootState) => state.toggleTransparentSidebar.isTransparent
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <button
      id="transparent-sidebar-toggle"
      className="fixed px-3 py-2 mb-48 text-xl bg-white dark:bg-slate-950 drop-shadow-2xl shadow-lg cursor-pointer bottom-8 right-8 z-[990] rounded-full"
      onClick={handleToggle}
    >
      <span className="toggle-icon">
        <FontAwesomeIcon
          icon={isTransparent ? solidSquareMinus : faSquareMinus}
          className="icon dark:text-gray-100 text-gray-600 w-5 h-5"
        />
      </span>
    </button>
  );
};

export default TransparentSidebar;
