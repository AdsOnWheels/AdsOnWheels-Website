export const campaignData = {
  impressions: { value: "1200", percentageIncrease: "10" },
  clicks: { value: "3000", percentageIncrease: "5" },
  conversions: { value: "150", percentageIncrease: "12" },
};

export const campaignDoughnutChartData = {
  labels: ["Impressions", "Clicks", "Conversions"],
  datasets: [
    {
      label: "Campaign Overview",
      data: [1200, 3000, 150],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
};

export default campaignDoughnutChartData;
