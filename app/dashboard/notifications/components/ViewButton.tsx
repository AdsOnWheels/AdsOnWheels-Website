"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ViewButton = () => {
  const handleViewClick = () => {
    // Implement logic to handle "View" action (e.g., navigate to relevant page)
    console.log("View button clicked!");
  };

  return (
    <button
      className="inline-block text-xs mr-2 px-3 py-1 font-bold text-center text-white align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-6 tracking-tight bg-gradient-to-tl from-purple-700 to-blue-500 shadow-md hover:scale-105 active:opacity-85"
      onClick={handleViewClick}
    >
      <FontAwesomeIcon icon={faEye} className="mr-1" />
      View
    </button>
  );
};

export default ViewButton;
