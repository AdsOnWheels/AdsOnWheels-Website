import React from "react";

interface Props {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
  margin?: string;
  className?: string;
}

const Container = ({
  children,
  maxWidth = "max-w-6xl",
  padding = "px-4",
  margin = "mx-auto",
  className = "",
}: Props) => {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${padding} ${margin} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
