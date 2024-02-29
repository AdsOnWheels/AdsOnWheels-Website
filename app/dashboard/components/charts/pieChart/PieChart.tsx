import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import colorGradient from "@/app/dashboard/assets/theme/base/colorGradient";
import configs from "./config/configs";

interface PieChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string[];
}

interface Props {
  title: string;
  description?: string | React.ReactNode;
  date: string;
  chart: {
    labels: string[];
    datasets: PieChartDataset[];
  };
  color?: keyof typeof colorGradient;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  title,
  description,
  chart,
  color: colorScheme = "primary",
  date,
}: Props) => {
  const { data, options } = useMemo(
    () => configs(chart.labels || [], chart.datasets || []),
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
          <Pie data={data} options={options} redraw />
        </div>

        <div className="pt-3 pb-1 px-1">
          <h6 className="text-lg dark:text-white font-semibold capitalize">
            {title}
          </h6>
          {description && (
            <p className="text-sm dark:text-white font-light">{description}</p>
          )}
          <hr className="my-2" />
          <div className="flex items-center text-sm dark:text-white">
            <span className="mr-2">🕒</span>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
