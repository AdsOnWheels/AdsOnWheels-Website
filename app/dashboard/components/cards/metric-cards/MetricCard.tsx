import React from "react";

interface Props {
  key: React.Key | null | undefined;
  title: string;
  value: string;
  percentageIncrease: string;
  icon: JSX.Element;
}

const MetricCard = ({ key, title, value, percentageIncrease, icon }: Props) => {
  return (
    <div
      key={key}
      className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
    >
      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 shadow-xl dark:shadow-xl rounded-2xl bg-clip-border transition-shadow duration-300 ease-in-out">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                  {title}
                </p>
                <h5 className="mb-2 font-bold dark:text-white capitalize">
                  {value}
                </h5>
                <p className="mb-0 dark:text-white dark:opacity-60">
                  <span className="text-sm font-bold leading-normal text-lime-500">
                    +{percentageIncrease}%
                  </span>{" "}
                  since last month
                </p>
              </div>
            </div>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
