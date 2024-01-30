"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="w-10 h-10 fixed bottom-4 right-4 bg-transparent border-2 border-gray-300 text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-sm transition duration-300 ease-in-out hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        aria-label="Scroll to Top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-xl animate-bounce" />
      </button>
    )
  );
};

export default ScrollToTop;
