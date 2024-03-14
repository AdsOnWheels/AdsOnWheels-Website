"use client";

import React from "react";

const DismissButton = () => {
  const handleDismissClick = () => {
    // Implement logic to handle "Dismiss" action
    console.log("Notification dismissed!");
  };

  return (
    <button
      type="button"
      className="box-content absolute top-0 right-0 w-4 h-4 p-4 text-sm text-white bg-transparent border-0 rounded z-2"
      onClick={handleDismissClick}
    >
      <span aria-hidden="true" className="text-center cursor-pointer">
        ✕
      </span>
    </button>
  );
};

export default DismissButton;
