import React from "react";

interface Props {
  title: string;
  percentageIncrease?: string;
  children: React.ReactNode;
  isChartDescription?: boolean;
}

const ChartCard3 = ({
  title,
  percentageIncrease,
  children,
  isChartDescription,
}: Props) => {
  return (
    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
      <div className="border-black/12.5 dark:bg-gray-800 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">{title}</h6>
          {percentageIncrease && (
            <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
              <i
                className="fa fa-arrow-up text-emerald-500"
                aria-hidden="true"
              ></i>
              <span className="font-semibold">{percentageIncrease}% more</span>{" "}
              in 2021
            </p>
          )}
        </div>
        <div className={`flex-auto ${isChartDescription ? "" : "p-6"}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChartCard3;
