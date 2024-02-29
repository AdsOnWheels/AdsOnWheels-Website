import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const RegularCard = ({ title, children }: Props) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
        <h6 className="mb-0 dark:text-white">{title}</h6>
      </div>
      <div className="flex-auto p-4">{children}</div>
    </div>
  );
};

export default RegularCard;
