import React from "react";

interface Props {
  label: string;
  variant: "update" | "enable" | "cancel" | "default" | "save";
}

const Button = ({ label, variant }: Props) => {
  return (
    <button
      className={`inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center ${
        variant === "cancel"
          ? "text-blue-500 border-blue-500 hover:text-blue-500 hover:border-blue-500 hover:bg-transparent"
          : "text-white bg-gradient-to-tl from-blue-500 to-violet-500 hover:-translate-y-px hover:bg-blue-500"
      } align-middle transition-all ease-in bg-transparent border rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs hover:text-blue-500 hover:opacity-75 hover:shadow-none active:scale-100 active:border-blue-500 active:bg-blue-500 active:text-white hover:active:border-blue-500 active:hover:bg-transparent hover:active:text-blue-500 hover:active:opacity-75`}
    >
      {label}
    </button>
  );
};

export default Button;
