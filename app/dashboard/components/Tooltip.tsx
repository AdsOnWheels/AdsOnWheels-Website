import React from "react";

interface Props {
  text: string;
  className?: string;
}

const Tooltip = ({ text, className = "" }: Props) => {
  return (
    <div
      id="tooltip"
      role="tooltip"
      className={`absolute inset-0 mx-auto mt-auto right-0 -translate-x-16 -translate-y-14 z-50 px-2 py-1.5 text-center text-white bg-black rounded-lg w-28 min-h-[3.2rem] max-w-48 ${className}`}
    >
      <p className="text-sm">{text}</p>
      <div
        id="arrow"
        className="invisible absolute left-20 h-2 w-2 bg-inherit transform translate-x-0 translate-y-0 before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
      ></div>
    </div>
  );
};

export default Tooltip;
