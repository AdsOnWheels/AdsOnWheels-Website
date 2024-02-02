"use client";

import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  disabled?: boolean | undefined;
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

/**
 * Button component for displaying a styled button.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.type="button"] - The type of the button ("button", "submit", or "reset").
 * @param {string} props.text - The text to display on the button.
 * @param {() => void} props.onClick - The click event handler for the button.
 * @param {string} [props.className] - Custom CSS classes to apply to the button.
 * @returns {JSX.Element} The rendered Button component.
 */

const colorClasses = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
  success: "bg-green-500 hover:bg-green-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-white",
  update: "bg-indigo-600 hover:bg-indigo-900 text-white",
  info: "bg-blue-300 hover:bg-blue-500 text-white",
  light: "bg-gray-100 hover:bg-gray-300 text-white",
  dark: "bg-gray-800 hover:bg-gray-900 text-white",
  neutral: "bg-gray-500 hover:bg-gray-700 text-white",
  accent: "bg-pink-500 hover:bg-pink-700 text-white",
  indigo: "bg-indigo-500 hover:bg-indigo-700 text-white",
  teal: "bg-teal-500 hover:bg-teal-700 text-white",
  amber: "bg-amber-500 hover:bg-amber-700 text-white",
  emerald: "bg-emerald-500 hover:bg-emerald-700 text-white",
  dutch: "bg-[#ff4f00] hover:bg-[#ff621a] text-white",
  outline:
    "bg-white hover:bg-[#ff4f00] text-[#ff4f00] hover:text-white border-2 border-[#ff4f00]",
};

const Button = ({
  type = "button",
  text,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  disabled = undefined,
  color = "primary",
}: Props): JSX.Element => {
  // Set the background color class based on the 'color' prop
  const bgColorClass = colorClasses[color] || colorClasses.primary;

  // Responsive classes for padding, font size, etc.
  const responsiveClasses = `px-4 md:px-6 lg:px-9 py-2 md:py-3 lg:py-3`;

  const buttonClasses = `font-bold ${responsiveClasses} ${bgColorClass} focus:outline-none focus:shadow-outline rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out ${
    className || ""
  }`;

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={buttonClasses}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
