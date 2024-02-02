import React from "react";

interface Props {
  text: string;
  size?:
    | "sm"
    | "md"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  margin?: "mt" | "mb" | "my" | "mx" | string;
  color?: "light" | "white" | "dark" | "blue" | "indigo" | "purple";
  align?: "none" | "left" | "center" | "right" | "justify";
  className?: string;
}

const textSizeClasses = {
  sm: "text-sm",
  md: "text-md",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const textWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
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

const responsiveClasses = "md:text-lg lg:text-xl 2xl:text-3xl";

const Heading3 = ({
  text,
  size = "md",
  fontWeight = "semibold",
  margin,
  color = "dark",
  align = "none",
  className = "",
}: Props) => {
  const textSizeClass = textSizeClasses[size];
  const textWeightClass = textWeightClasses[fontWeight];
  const textColorClass = textColorClasses[color] || textColorClasses.dark;
  const textAlignClass = textAlignClasses[align];
  const combinedClasses = `${responsiveClasses} ${textSizeClass} ${textWeightClass} ${textColorClass} ${textAlignClass} ${margin} ${
    className || ""
  }`;

  return <h3 className={combinedClasses}>{text}</h3>;
};

export default Heading3;
