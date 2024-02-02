import React from "react";

interface Props {
  message: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const Tooltip = ({ message, position = "top", children }: Props) => {
  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  return (
    <div className="relative flex items-center justify-center">
      {children}
      <div
        className={`absolute ${positionClasses[position]} hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2`}
      >
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
