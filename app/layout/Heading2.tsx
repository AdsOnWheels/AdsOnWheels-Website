import React from "react";

type Props = {
  id?: string;
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
};

const textSizeClasses = {
  sm: "text-sm lg:text-base",
  md: "text-md lg:text-lg",
  base: "text-base lg:text-xl",
  lg: "text-lg lg:text-2xl",
  xl: "text-xl lg:text-3xl",
  "2xl": "text-2xl lg:text-4xl",
  "3xl": "text-3xl lg:text-4xl",
  "4xl": "text-4xl lg:text-6xl",
  "5xl": "text-5xl lg:text-6xl",
  "6xl": "text-6xl lg:text-8xl",
  "7xl": "text-7xl lg:text-9xl",
  "8xl": "text-8xl lg:text-10xl",
  "9xl": "text-9xl lg:text-11xl",
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

const Heading2 = ({
  id,
  text,
  size = "5xl",
  fontWeight = "extrabold",
  margin,
  color = "dark",
  align = "center",
  className = "",
}: Props) => {
  const textSizeClass = textSizeClasses[size];
  const textWeightClass = textWeightClasses[fontWeight];
  const textColorClass = textColorClasses[color] || textColorClasses.dark;
  const textAlignClass = textAlignClasses[align];
  const combinedClasses = `${textSizeClass} ${textWeightClass} ${textColorClass} ${textAlignClass} ${margin} ${
    className || ""
  }`;

  return (
    <h2 id={id} className={combinedClasses}>
      {text}
    </h2>
  );
};

export default Heading2;
