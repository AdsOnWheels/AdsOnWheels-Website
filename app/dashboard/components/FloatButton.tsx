import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  margin?: "mt" | "mb" | "my" | "mx" | string;
}

const FloatButton = ({ children, margin = "" }: Props) => {
  return (
    <div
      className={`fixed px-3 py-2 text-xl bg-white dark:bg-slate-950 drop-shadow-2xl shadow-lg cursor-pointer bottom-8 right-8 z-[990] rounded-full ${margin}`}
    >
      {children}
    </div>
  );
};

export default FloatButton;
