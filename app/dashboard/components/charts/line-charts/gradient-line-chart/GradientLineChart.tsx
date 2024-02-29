import React, { FC, useRef, useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  GradientLineChartConfig,
  GradientLineDataset,
  gradientLineChartConfigs,
} from "./configs/configs";
import gradientChartLine from "@/app/dashboard/assets/theme/functions/gradientChartLine";
import { defaultChartData } from "./configs/chart-configs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  title: string;
  description?: string | React.ReactNode;
  date: string;
  chart: {
    labels: string[];
    datasets: GradientLineDataset[];
  };
  colors: string[][];
}

const GradientLineChart = ({
  title,
  description,
  date,
  chart,
  colors,
}: Props) => {
  const chartRef = useRef<any>(null);
  const [chartData, setChartData] =
    useState<GradientLineChartConfig>(defaultChartData);

  useEffect(() => {
    const chartElement = chartRef.current;

    if (!chartElement) return;

    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset, index) => ({
          ...dataset,
          tension: 0,
          pointRadius: 0,
          borderWidth: 4,
          borderColor: colors[index][0], // Assuming each dataset.color is an index, and we select the first color
          fill: true,
          maxBarThickness: 6,
          backgroundColor: gradientChartLine(
            chartElement.ctx,
            colors[index][1] || "rgba(255, 99, 132, 0.2)"
            // Adjust according to how you're organizing colors
          ),
        }))
      : [];

    setChartData(gradientLineChartConfigs(chart.labels || [], chartDatasets));
  }, [chart, colors]);

  const { data, options } = useMemo(() => chartData, [chartData]);

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="rounded-lg py-2 pr-0.5 mt-[-20px] h-[200px]">
          <Line ref={chartRef} data={data} options={options} redraw />
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

export default GradientLineChart;
