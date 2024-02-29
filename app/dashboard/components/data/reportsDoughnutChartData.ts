export const reportDoughnutChartData = {
  labels: ["Basket", "Frame", "In Frame", "Rim Cover"],
  datasets: [
    {
      label: "Sales Distribution",
      data: [55, 25, 20, 15],
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

export default reportDoughnutChartData;
