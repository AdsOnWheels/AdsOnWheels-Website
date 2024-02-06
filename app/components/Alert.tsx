"use client";

import React from "react";

interface Props {
  type: "success" | "warning" | "info" | "error";
  message: string;
  onClose: () => void;
}

const Alert = ({ type, message, onClose }: Props) => {
  const typeClasses = {
    success: "bg-green-100 border-green-500 text-green-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
    error: "bg-red-100 border-red-500 text-red-700",
  };

  return (
    <div className={`${typeClasses[type]} border-l-4 p-4`} role="alert">
      <p className="font-bold">{message}</p>
      <button
        onClick={onClose}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <span className="text-2xl">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
