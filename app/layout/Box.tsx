import React from "react";

interface Props {
  children: React.ReactNode;
  maxWidth?: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  rounded?: string;
  shadow?: string;
  className?: string;
}

const Box = ({
  children,
  maxWidth = "max-w-3xl",
  bgColor = "bg-white",
  padding = "px-4 py-6",
  margin = "mx-auto",
  border = "",
  rounded = "rounded",
  shadow = "shadow-md",
  className = "",
}: Props) => {
  return (
    <div
      className={`sm:px-6 lg:px-8 ${maxWidth} ${bgColor} ${padding} ${margin} ${border} ${rounded} ${shadow} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
