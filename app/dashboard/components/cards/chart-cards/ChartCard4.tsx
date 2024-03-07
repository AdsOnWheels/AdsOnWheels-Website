import React from "react";

interface Props {
  title: string;
  percentageIncrease?: string;
  children: React.ReactNode;
  isChartDescription?: boolean;
}

const ChartCard4 = ({
  title,
  percentageIncrease,
  children,
  isChartDescription,
}: Props) => {
  return (
    <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
      <div className="relative w-full h-full overflow-hidden dark:bg-gray-950 dark:shadow-xl shadow-xl break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
          <h6 className="capitalize dark:text-white">{title}</h6>
          {percentageIncrease && (
            <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
              <i
                className="fa fa-arrow-up text-lime-500"
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

export default ChartCard4;
