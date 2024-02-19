const gradientLineChartData = {
  bikeAds: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Basket",
        data: [65, 75, 70, 80, 60, 55, 65, 75, 70, 80, 60, 55],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Frame",
        data: [40, 60, 55, 65, 75, 65, 75, 85, 80, 70, 60, 55],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "In Frame",
        data: [20, 40, 30, 50, 60, 55, 65, 75, 70, 80, 90, 95],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
      },
      {
        label: "Rim Cover",
        data: [85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  },
};

export default gradientLineChartData;
