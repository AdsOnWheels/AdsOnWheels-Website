import { ChartData, ChartOptions, ChartDataset } from "chart.js";

interface DonutDataset {
  label: string;
  data: number[];
  backgroundColor?: string[];
}

export interface DonutChartConfig {
  data: ChartData<"doughnut", number[], string>;
  options: ChartOptions<"doughnut">;
}

export const donutChartConfigs = (
  labels: string[],
  datasets: DonutDataset[]
): DonutChartConfig => {
  const formattedDatasets: ChartDataset<"doughnut", number[]>[] = datasets.map(
    (dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
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
          position: "right",
          labels: {
            padding: 20,
            boxWidth: 10,
          },
        },
      },
    },
  };
};
