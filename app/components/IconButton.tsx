"use client";

import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  color?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "update"
    | "info"
    | "light"
    | "dark"
    | "neutral"
    | "accent"
    | "indigo"
    | "teal"
    | "amber"
    | "emerald"
    | "dutch"
    | "outline";
}

const colorClasses = {
  primary: "text-blue-500 hover:text-blue-700",
  danger: "text-red-500 hover:text-red-700",
  success: "text-green-500 hover:text-green-700",
  warning: "text-yellow-500 hover:text-yellow-700",
  update: "text-indigo-600 hover:text-indigo-900",
  info: "text-blue-300 hover:text-blue-500",
  light: "text-gray-100 hover:text-gray-300",
  dark: "text-gray-500 hover:text-gray-800",
  neutral: "text-gray-500 hover:text-gray-700",
  accent: "text-pink-500 hover:text-pink-700",
  indigo: "text-gray-700 hover:text-indigo-700",
  teal: "text-teal-500 hover:text-teal-700",
  amber: "text-amber-500 hover:text-amber-700",
  emerald: "text-emerald-500 hover:text-emerald-700",
  dutch: "text-[#ff4f00] hover:text-[#ff621a]",
  outline:
    "text-white hover:text-[#ff4f00] text-[#ff4f00] hover: border-2 border-[#ff4f00]",
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  disabled = false,
  color = "primary",
}) => {
  const textColorClass = colorClasses[color] || colorClasses.primary;

  const buttonClasses = `${textColorClass} cursor-pointer ${className || ""}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  );
};

export default IconButton;
