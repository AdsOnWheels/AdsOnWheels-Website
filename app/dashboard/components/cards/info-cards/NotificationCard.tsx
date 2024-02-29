import React from "react";

// Define a type alias for heading types
type HeadingType = "default" | "warning" | "error";

interface Props {
  title?: string;
  message: string;
  backgroundColor: string;
  headingType: HeadingType | string;
}

const NotificationCard = ({
  title,
  message,
  backgroundColor,
  headingType,
}: Props) => {
  // Determine the class for the heading based on the headingType prop
  const headingClassName = {
    default: "dark:text-white",
    warning: "text-yellow-500",
    error: "text-red-500",
  }[headingType || "default"]; // Default to "default" if headingType is not provided

  return (
    <div
      className={`relative p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg ${backgroundColor}`}
    >
      <h5 className={`mb-2 font-semibold ${headingClassName}`}>{title}</h5>
      <p className="mb-2">{message}</p>
      <button
        alert-close=""
        type="button"
        className="box-content absolute top-0 right-0 w-4 h-4 p-4 text-sm text-white bg-transparent border-0 rounded z-2"
      >
        <span aria-hidden="true" className="text-center cursor-pointer">
          ✕
        </span>
      </button>
    </div>
  );
};

export default NotificationCard;
