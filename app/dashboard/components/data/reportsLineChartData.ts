const reportsLineChartData = {
  sales: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Mobile apps",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        borderColor: "rgba(75, 192, 192, 1)", // Example color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Example color
        tension: 0.4, // Example line tension
      },
    ],
  },
  tasks: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Desktop apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        borderColor: "rgba(54, 162, 235, 1)", // Example color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Example color
        tension: 0.4, // Example line tension
      },
    ],
  },
};

export default reportsLineChartData;
