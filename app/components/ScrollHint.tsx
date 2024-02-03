"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  sections: string[];
}

/**
 * ScrollHint Component
 * Displays a hint to the user indicating that they can scroll down to the next section in a cyclic manner.
 * The hint will disappear when the user starts scrolling and reappear after a brief delay. When clicked,
 * it scrolls to the next section based on the current index, cycling back to the first section after reaching the last one.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string[]} props.sections - An array of section IDs to scroll through
 */
const ScrollHint = ({ sections }: Props) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  /**
   * Scrolls to the next section based on the current section index, updating the index accordingly.
   * Wraps around to the first section after the last one.
   */
  const scrollToNextSection = () => {
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
    const nextSectionId = sections[nextSectionIndex];
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSectionIndex(nextSectionIndex);
    }
  };

  useEffect(() => {
    /**
     * Handles scroll events by hiding the hint on scroll and setting it to reappear after a delay.
     */
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout((window as any).scrollTimeout);
      (window as any).scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`scroll-hint-button text-gray-200 relative w-14 flex justify-center items-center h-20 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={scrollToNextSection}
    >
      <div className="arrow">
        <FontAwesomeIcon size="3x" icon={faAngleDown} />
      </div>
      <div className="arrow arrow-2">
        <FontAwesomeIcon size="3x" icon={faAngleDown} />
      </div>
    </div>
  );
};

export default ScrollHint;
