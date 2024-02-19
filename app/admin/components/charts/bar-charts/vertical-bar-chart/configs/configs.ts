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
      weight: 5,
      borderWidth: 0,
      borderRadius: 0,
      borderSkipped: false,
      maxBarThickness: 100,
      fill: false,
      tension: 0.4,
    })
  );

  return {
    data: {
      labels,
      datasets: formattedDatasets,
    },
    options: {
      indexAxis: "x",
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
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            color: "#fff",
            // font: {
            //  size: 11,
            //  style: "normal",
            //  lineHeight: 2,
            //   },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: false,
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            // font: {
            //   size: 11,
            //   style: "normal",
            //   lineHeight: 2,
            // },
          },
        },
      },
    } as ChartOptions<"bar">,
  };
};
