import React from "react";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "xl";
  color?: "light" | "white" | "dark" | "blue" | "indigo" | "purple";
  align?: "none" | "left" | "center" | "right" | "justify";
  margin?: "mt" | "mb" | "my" | "mx" | string;
  className?: string;
}

const textSizeClasses = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const textColorClasses = {
  light: "text-gray-200",
  white: "text-white",
  black: "text-black",
  dark: "text-gray-800",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  purple: "text-purple-500",
};

const textAlignClasses = {
  none: "",
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const defaultClasses = "";

const Paragraph = ({
  children,
  size = "lg",
  align = "none",
  color = "dark",
  margin,
  className = "",
}: Props) => {
  const textSizeClass = textSizeClasses[size];
  const textColorClass = textColorClasses[color];
  const textAlignClass = textAlignClasses[align];
  const combinedClasses = `${defaultClasses} ${textSizeClass} ${textAlignClass} ${textColorClass} ${margin} ${
    className || ""
  }`;

  return <p className={combinedClasses}>{children}</p>;
};

export default Paragraph;
