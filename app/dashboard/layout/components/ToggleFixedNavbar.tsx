"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "@/redux/store";
import Tooltip from "../../components/Tooltip";
import { toggle } from "@/redux/slices/toggleStickyNavbar";

function ToggleFixedNavbar() {
  const [showTooltip, setShowTooltip] = useState(false);
  const isToggled = useSelector(
    (state: RootState) => state.toggleStickyNavbar.isSticky
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <>
      <button
        id="fixed-navbar-toggle"
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
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
      {showTooltip && <Tooltip text="Toggle Sticky Navbar" />}
    </>
  );
}

export default ToggleFixedNavbar;
