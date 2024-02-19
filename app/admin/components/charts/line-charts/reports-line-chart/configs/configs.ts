import { ChartData, ChartOptions, ChartDataset } from "chart.js";

export interface LineDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
}

export interface LineChartConfig {
  data: ChartData<"line", number[], string>;
  options: ChartOptions<"line">;
}

export const lineChartConfigs = (
  labels: string[],
  datasets: LineDataset[]
): LineChartConfig => {
  const formattedDatasets: ChartDataset<"line", number[]>[] = datasets.map(
    (dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.borderColor || "rgba(75, 192, 192, 1)",
      backgroundColor: dataset.backgroundColor || "rgba(75, 192, 192, 0.2)",
      tension: dataset.tension || 0.4,
      fill: true,
    })
  );

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
          position: "top",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
};
