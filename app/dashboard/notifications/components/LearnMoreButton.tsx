"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const LearnMoreButton = () => {
  const handleLearnMoreClick = () => {
    // Implement logic to handle "Learn More" action (e.g., redirect to relevant FAQ section)
    console.log("Learn More button clicked!");
  };

  return (
    <button
      className="inline-block text-xs mr-2 px-3 py-1 font-bold text-center align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-6 tracking-tight bg-gray-300 text-gray-800 hover:bg-gray-400 shadow-md hover:scale-105 active:opacity-85"
      onClick={handleLearnMoreClick}
    >
      <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
      Learn More
    </button>
  );
};

export default LearnMoreButton;
