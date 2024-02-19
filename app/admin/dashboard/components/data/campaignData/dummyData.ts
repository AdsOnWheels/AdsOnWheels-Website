// Define your table data, columns, and other props
const generateData = () => {
  const data = [];
  const statuses = ["Active", "Paused", "Completed"]; // Define possible statuses
  for (let i = 1; i <= 40; i++) {
    const startDate = new Date(2024, 0, 1); // January 1, 2024
    const endDate = new Date(2024, 11, 31); // December 31, 2024
    const budget = `€${Math.floor(Math.random() * 50000)}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)]; // Randomly choose a status

    data.push({
      campaignId: i,
      campaignName: `Campaign ${i}`,
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      budget: budget,
      status: status, // Include status in the row data
    });
  }

  return data;
};

export default generateData;
