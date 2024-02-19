import { TailwindColorMap } from "@/types/types";
import { ChartData, ChartOptions, ChartDataset } from "chart.js";

// Example Tailwind CSS colors for charts
const tailwindColors: TailwindColorMap = {
  blue: "#60A5FA",
  green: "#34D399",
  red: "#F87171",
  yellow: "#FBBF24",
  purple: "#A78BFA",
  gray: "#9CA3AF",
};

interface PieChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string[];
}

export interface PieChartConfig {
  data: ChartData<"pie", number[], string>;
  options: ChartOptions<"pie">;
}

export const configs = (
  labels: string[],
  datasets: PieChartDataset[]
): PieChartConfig => {
  const formattedDatasets: ChartDataset<"pie", number[]>[] = datasets.map(
    (dataset) => ({
      label: dataset.label,
      data: dataset.data,
      weight: 9,
      cutout: 0,
      tension: 0.9,
      pointRadius: 2,
      borderWidth: 2,
      backgroundColor: dataset.backgroundColor || [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      fill: false,
    })
  );

  // function configs(labels: string[], datasets: PieChartDataset[]): ChartDataset<"pie", number[]>[]{
  //   const backgroundColors: string[] = [];

  //   if (datasets.colors) {
  //     datasets.colors.forEach((color) => {
  //       const chartColor = tailwindColors[color]
  //         ? tailwindColors[color]
  //         : tailwindColors.gray;
  //       backgroundColors.push(chartColor);
  //     });
  //   } else {
  //     backgroundColors.push(tailwindColors.gray);
  //   }

  return {
    data: {
      labels,
      datasets: formattedDatasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  };
};

export default configs;
