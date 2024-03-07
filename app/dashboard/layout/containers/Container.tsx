import React, { ReactNode } from "react";

interface Props {
  title: string;
  percentageIncrease: string;
  children: React.ReactNode;
}

const Container = ({ title, percentageIncrease, children }: Props) => {
  return (
    <div className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-9/12">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">{title}</h6>
          <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
            <i className="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
            <span className="font-semibold">{percentageIncrease}% more</span> in
            2021
          </p>
        </div>
        <div className="flex-auto">{children}</div>
      </div>
    </div>
  );
};

export default Container;
