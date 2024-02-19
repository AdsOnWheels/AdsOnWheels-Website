import { ChartData, ChartOptions } from "chart.js";

export interface GradientLineDataset {
  label: string;
  data: number[];
  borderColor?: string | CanvasGradient;
  backgroundColor?: string | CanvasGradient;
  tension?: number;
}

export interface GradientLineChartConfig {
  data: ChartData<"line", number[], string>;
  options: ChartOptions<"line">;
}

export const gradientLineChartConfigs = (
  labels: string[],
  datasets: GradientLineDataset[]
): GradientLineChartConfig => {
  return {
    data: {
      labels,
      datasets: [...datasets],
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
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
          },
        },
      },
    } as ChartOptions<"line">,
  };
};
