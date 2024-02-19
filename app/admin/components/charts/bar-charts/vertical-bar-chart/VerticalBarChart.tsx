import React, { FC, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { configs } from "./configs/configs";
import colorGradient from "@/app/admin/assets/theme/base/colorGradient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataset {
  label: string;
  data: number[];
}

interface Props {
  title: string;
  description?: string | React.ReactNode;
  date: string;
  chart: {
    labels: string[];
    datasets: ChartDataset[];
  };
  color?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "update"
    | "info"
    | "light"
    | "dark"
    | "neutral"
    | "accent"
    | "indigo"
    | "teal"
    | "amber"
    | "emerald"
    | "dutch"
    | "outline";
}

const VerticalBarChart = ({
  color = "primary",
  title,
  description,
  date,
  chart,
}: Props) => {
  const { data, options } = useMemo(
    () => configs(chart.labels || [], chart.datasets || {}),
    [chart]
  );

  const gradientBg = colorGradient[color] || colorGradient.primary;

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="p-4">
        <div
          style={{ background: gradientBg }}
          className="rounded-lg shadow-md py-2 pr-0.5 mt-[-20px] h-[200px]"
        >
          <Bar data={data} options={options} redraw />
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

export default VerticalBarChart;
