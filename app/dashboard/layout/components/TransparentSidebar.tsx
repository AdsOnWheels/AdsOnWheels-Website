"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus as solidSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";

import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/transparentSidebar";
import Tooltip from "../../components/Tooltip";

const TransparentSidebar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isTransparent = useSelector(
    (state: RootState) => state.toggleTransparentSidebar.isTransparent
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <>
      <button
        id="transparent-sidebar-toggle"
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="toggle-icon">
          <FontAwesomeIcon
            icon={isTransparent ? solidSquareMinus : faSquareMinus}
            className="icon dark:text-gray-100 text-gray-600 w-5 h-5"
          />
        </span>
      </button>
      {showTooltip && <Tooltip text="Transparent Sidebar" />}
    </>
  );
};

export default TransparentSidebar;
