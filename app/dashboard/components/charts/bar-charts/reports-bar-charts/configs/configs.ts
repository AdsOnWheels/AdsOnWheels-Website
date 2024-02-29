import { ChartData, ChartOptions, ChartDataset } from "chart.js";

interface Dataset {
  label: string;
  data: number[];
  backgroundColor?: string;
}

export interface ChartConfig {
  data: ChartData<"bar", number[], string>;
  options: ChartOptions<"bar">;
}

export const configs = (labels: string[], datasets: Dataset[]): ChartConfig => {
  // Explicitly type the datasets array to match the expected ChartDataset<"bar", number[]> type
  const formattedDatasets: ChartDataset<"bar", number[]>[] = datasets.map(
    (dataset) => ({
      label: dataset.label,
      data: dataset.data, // TypeScript should infer this as number[] without issue
      backgroundColor: dataset.backgroundColor || "rgba(255, 255, 255, 0.8)",
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      maxBarThickness: 8,
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
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            // font: {
            //   size: 14,
            //   weight: 300,
            //   family: "Roboto",
            //   style: "normal",
            //   lineHeight: 2,
            // },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            // font: {
            //   size: 14,
            //   weight: 300,
            //   family: "Roboto",
            //   style: "normal",
            //   lineHeight: 2,
            // },
          },
        },
      },
    } as ChartOptions<"bar">,
  };
};
