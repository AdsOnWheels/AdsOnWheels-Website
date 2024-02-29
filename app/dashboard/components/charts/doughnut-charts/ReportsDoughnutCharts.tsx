import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { donutChartConfigs } from "./configs/configs";
import colorGradient from "@/app/dashboard/assets/theme/base/colorGradient";

// Register the necessary components for a donut chart
ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string[];
}

interface Props {
  title?: string;
  description?: string | React.ReactNode;
  date?: string;
  chart: {
    labels: string[];
    datasets: DonutChartDataset[];
  };
  color?: keyof typeof colorGradient;
}

const ReportsDonutChart = ({
  title,
  description,
  chart,
  color: colorScheme = "primary",
  date,
}: Props) => {
  const { data, options } = useMemo(
    () => donutChartConfigs(chart.labels || [], chart.datasets || []),
    [chart]
  );

  const gradientBg = colorGradient[colorScheme] || colorGradient.primary;

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="p-4">
        <div
          style={{ background: gradientBg }}
          className="rounded-lg shadow-md py-2 pr-0.5 mt-[-20px] h-[200px]"
        >
          <Doughnut data={data} options={options} />
        </div>

        <div className="pt-3 pb-1 px-1">
          <h6 className="text-lg dark:text-white font-semibold capitalize">
            {title}
          </h6>
          {description && (
            <p className="text-sm dark:text-white font-light">{description}</p>
          )}
          {description && <hr className="my-2" />}

          {date && (
            <div className="flex items-center text-sm dark:text-white">
              <span className="mr-2">🕒</span>
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsDonutChart;
