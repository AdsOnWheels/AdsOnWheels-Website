"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../redux/store";
import { toggle } from "@/redux/slices/themeMode";

function ToggleTheme() {
  const darkMode = useSelector((state: RootState) => state.toggleTheme.isTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    // update the class and local storage when the darkMode state changes
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      dispatch(toggle(localStorage.getItem("darkMode") === "true"));
    }
  }, [darkMode, dispatch]);

  const handleToggleMode = () => {
    dispatch(toggle(!darkMode));
  };

  return (
    <button
      id="theme-toggle"
      onClick={handleToggleMode}
      aria-label={`Toggle ${darkMode ? "Dark" : "Light"} Mode`}
    >
      <span className="toggle-icon">
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className={`icon ${
            darkMode ? "text-gray-100" : "text-gray-600"
          } w-5 h-5`}
        />
      </span>
    </button>
  );
}

export default ToggleTheme;
