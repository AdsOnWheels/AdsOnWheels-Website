import { Campaign } from "@/types/types";

const initialCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Spring Sale",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    budget: 5000,
    status: "Active",
  },
  {
    id: 2,
    name: "Summer Special",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    budget: 7000,
    status: "Paused",
  },
  {
    id: 3,
    name: "Back to School",
    startDate: "2024-08-01",
    endDate: "2024-08-31",
    budget: 6000,
    status: "Completed",
  },
];

export default initialCampaigns;
