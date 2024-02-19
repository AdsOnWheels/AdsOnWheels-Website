"use client";

import { useState } from "react";
import Link from "next/link";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { AdCampaignManagementProps } from "@/types/types";
import ActionPanel from "../../layout/ActionPanel";
import DataTable from "../../layout/tables/data-table/DataTable";
import generateData from "../components/data/campaignData/dummyData";
import ChartCard2 from "../../components/cards/chart-cards/ChartCard2";
import ChartCard4 from "../../components/cards/chart-cards/ChartCard4";
import ChartCard3 from "../../components/cards/chart-cards/ChartCard3";
import ReportsDoughnutCharts from "../../components/charts/doughnut-charts/ReportsDoughnutCharts";
import campaignDoughnutChartData from "../components/data/doughnutChartData/campaignDoughnutChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for campaign performance
const campaignPerformanceData = {
  labels: ["Spring Sale", "Summer Special", "Back to School"],
  datasets: [
    {
      label: "Engagement",
      data: [3500, 4800, 4200], // Sample engagement data
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Mock data for budget allocation
const budgetAllocationData = {
  labels: ["Spring Sale", "Summer Special", "Back to School"],
  datasets: [
    {
      label: "Budget Allocation",
      data: [5000, 7000, 6000], // Sample budget data
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Sample data for charts (replace with real data)
const doughnutChartData = {
  labels: ["Impressions", "Clicks", "Conversions"],
  datasets: [
    {
      label: "Campaign Metrics",
      data: [10000, 500, 50],
      backgroundColor: ["#4F46E5", "#22C55E", "#F87171"],
    },
  ],
};

const lineChartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [
    {
      label: "Impressions",
      data: [2000, 3000, 4000, 3500, 5000],
      fill: false,
      borderColor: "#4F46E5",
    },
  ],
};

// Mock data for pending campaigns
const pendingCampaigns = [
  { id: 1, name: "Campaign A" },
  { id: 2, name: "Campaign B" },
  { id: 3, name: "Campaign C" },
  // Add more pending campaigns as needed
];

const charts = [
  {
    "Campaign Performance": <Bar data={campaignPerformanceData} />,
  },
  {
    "Budget Allocation": <Line data={budgetAllocationData} />,
  },
];

const AdCampaignManagement: React.FC<AdCampaignManagementProps> = ({}) => {
  const [filter, setFilter] = useState("");

  // Dummy data for barcode scans (replace with real data)
  const [barcodeScans, setBarcodeScans] = useState([
    { id: 1, code: "ABC123", scans: 50, uniqueScans: 20 },
    { id: 2, code: "DEF456", scans: 30, uniqueScans: 15 },
    { id: 3, code: "GHI789", scans: 20, uniqueScans: 10 },
  ]);

  // Dummy data for website visits (replace with real data)
  const [websiteVisits, setWebsiteVisits] = useState([
    { id: 1, source: "Ad Placement", visits: 100, conversions: 10 },
    { id: 2, source: "Search Engine", visits: 50, conversions: 5 },
    { id: 3, source: "Social Media", visits: 80, conversions: 8 },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExportClick = () => {
    // Logic for exporting data
    // This function will be called when the export button is clicked
    console.log("Exporting data...");
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handlePause = (id: number) => {
    // dispatch(pauseCampaign(campaign.id));
    console.log("Pause button clicked");
  };

  const handleResume = (id: number) => {
    // dispatch(resumeCampaign(campaign.id));
    console.log("Resume button clicked");
  };

  const handleDelete = (id: number) => {
    // dispatch(deleteCampaign(campaign.id));
    console.log("Delete button clicked");
  };

  const handleEdit = (id: number) => {
    console.log("Edit button clicked");
  };

  const includeStatusColumn = false; // Set to false to disable the status column
  const includeActionsColumn = false; // Set to false to disable the actions column

  const columns = [
    { id: "campaignId", Header: "Campaign ID", accessor: "campaignId" },
    { id: "campaignName", Header: "Campaign Name", accessor: "campaignName" },
    { id: "startDate", Header: "Start Date", accessor: "startDate" },
    { id: "endDate", Header: "End Date", accessor: "endDate" },
    { id: "budget", Header: "Budget", accessor: "budget" },
  ];

  // Add status column if enabled
  if (includeStatusColumn) {
    columns.push({ id: "status", Header: "Status", accessor: "status" });
  }

  // Add actions column if enabled
  if (includeActionsColumn) {
    columns.push({ id: "actions", Header: "Actions", accessor: "actions" });
  }

  const tableData = {
    columns: columns,
    rows: generateData().map((row) => ({
      ...row,
      actions: (
        <div>
          {/* Render buttons conditionally based on the status */}
          {row.status === "Active" && (
            <button
              className="inline-flex items-center py-1 px-2 mr-2 rounded-lg text-sm font-medium text-center text-gray-200 bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] focus:outline-none focus:ring focus:ring-blue-400 transition-all"
              onClick={() => handleEdit(row.campaignId)}
            >
              <svg
                className="mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Edit
            </button>
          )}
          {row.status === "Active" && (
            <button
              className="inline-flex items-center py-1 px-2 mr-2 rounded-lg text-sm font-medium text-center text-gray-200 bg-yellow-500 hover:bg-yellow-600 hover:scale-[1.02] focus:outline-none focus:ring focus:ring-yellow-400 transition-all"
              onClick={() => handlePause(row.campaignId)}
            >
              <svg
                className="mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 6a1 1 0 011-1h2a1 1 0 110 2H10a1 1 0 01-1-1zm0 4a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm2-7a1 1 0 00-2 0v3a1 1 0 102 0V3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Pause
            </button>
          )}
          {row.status === "Paused" && (
            <button
              className="inline-flex items-center py-1 px-2 mr-2 rounded-lg text-sm font-medium text-center text-gray-200 bg-green-500 hover:bg-green-600 hover:scale-[1.02] focus:outline-none focus:ring focus:ring-green-400 transition-all"
              onClick={() => handleResume(row.campaignId)}
            >
              <svg
                className="mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12zm-1 4a1 1 0 011-1h2a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Resume
            </button>
          )}
          <button
            className="inline-flex items-center py-1 px-2 mr-2 rounded-lg text-sm font-medium text-center text-gray-200 bg-red-500 hover:bg-red-600 hover:scale-[1.02] focus:outline-none focus:ring focus:ring-red-400 transition-all"
            onClick={() => handleDelete(row.campaignId)}
          >
            <svg
              className="mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      ),
    })),
  };

  const entriesPerPage = {
    defaultValue: 10,
    entries: [5, 10, 15, 20, 25],
  };

  const canSearch = false;
  const showTotalEntries = true;
  const pagination = true;
  const isSorted = true;
  const noEndBorder = false;
  const enableActionButtons = false;

  const title = "Ongoing Campaigns";
  const description =
    "Track ongoing campaigns: name, dates, budget, and status updates instantly.";

  return (
    <div className="w-full mx-auto sm:px-6 lg:px-6 lg:py-6 bg-gray-100 min-h-screen">
      {/* Section for setting up new campaigns and searching campaigns */}
      <ActionPanel
        searchBar={
          <form className="lg:pr-3" action="#" method="GET">
            <label htmlFor="users-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1 lg:w-64 xl:w-96">
              <input
                id="search-campaigns"
                type="text"
                name="campaigns"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search campaigns..."
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              />
            </div>
          </form>
        }
        buttons={[
          <Link key="create" href="/admin/dashboard/campaigns/create-campaign">
            <button
              type="button"
              data-modal-toggle="create-campaign"
              className="inline-flex items-center py-2 px-3 text-sm font-bold text-center leading-normal text-white rounded-lg bg-gradient-to-tl from-blue-500 to-violet-500 sm:ml-auto shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            >
              <svg
                className="mr-2 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Create new campaign
            </button>
          </Link>,
          <div key="export" className="relative inline-block">
            <button
              type="button"
              className="inline-flex justify-center items-center py-2 px-3 w-1/2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:scale-[1.02] transition-transform sm:w-auto"
              onClick={toggleDropdown}
            >
              <svg
                className="mr-2 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Export
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 px-0 py-2 mt-2 w-44 bg-white border border-gray-300 rounded-lg border-solid bg-clip-padding text-left text-slate-500 transition-all shadow-lg lg:shadow-3xl duration-[250ms] before:duration-[350ms] before:font-semibold before:ease min-w-[11rem] before:text-xl z-10">
                <button
                  onClick={handleExportClick}
                  className="py-1.5 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                >
                  Campaign Data
                </button>
                <button
                  onClick={handleExportClick}
                  className="py-1.5 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                >
                  Campaign Metrics
                </button>
                <button
                  onClick={handleExportClick}
                  className="py-1.5 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                >
                  Campaign Reports
                </button>
                <button
                  onClick={handleExportClick}
                  className="py-1.5 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                >
                  Export All
                </button>
              </div>
            )}
          </div>,
        ]}
      />

      {/* Section for monitoring ongoing campaigns */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <DataTable
          entriesPerPage={entriesPerPage}
          canSearch={canSearch}
          filter={filter}
          onFilterChange={handleFilterChange}
          showTotalEntries={showTotalEntries}
          table={tableData}
          title={title}
          description={description}
          pagination={pagination}
          isSorted={isSorted}
          noEndBorder={noEndBorder}
          enableActionButtons={enableActionButtons}
        />
      </div>

      {/* Section for reviewing past campaigns' performance */}
      <div className="flex flex-wrap mt-6 -mx-3">
        {charts.slice(0, 2).map((chartObj, index) => (
          <ChartCard2
            key={index}
            isChartDescription={false}
            title={Object.keys(chartObj)[0]}
            percentageIncrease="10%"
          >
            {Object.values(chartObj)[0]}
          </ChartCard2>
        ))}
      </div>

      {/* Campaign Approval Workflow */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <ChartCard3
          isChartDescription={false}
          title="Past Campaigns Performance"
          percentageIncrease="10%"
        >
          <Line data={lineChartData} />
        </ChartCard3>

        <ChartCard4
          isChartDescription={false}
          title="Campaign Approval Workflow"
        >
          <div>
            <p className="mb-4 text-gray-400">
              Review and approve new campaign submissions before launch.
            </p>

            {/* List of pending campaigns */}
            <div className="mb-4">
              <h4 className="text-sm text-gray-200 font-semibold mb-2">
                Pending Campaigns
              </h4>
              <ul>
                {pendingCampaigns.map((campaign) => (
                  <li key={campaign.id} className="text-gray-400">
                    {campaign.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Approval workflow section */}
            <div className="flex items-center">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Approve
              </button>
              <span className="ml-2 text-sm text-gray-400">
                Pending Approval
              </span>
            </div>
          </div>
        </ChartCard4>
      </div>

      <div className="flex flex-wrap mt-6 -mx-3">
        {/* Target Audience Management */}
        <ChartCard4
          isChartDescription={false}
          title="Target Audience Management"
        >
          {/* Demographics Section */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-100">
              Demographics
            </h4>
            <p className="text-sm text-gray-400">Age: 18-35</p>
            <p className="text-sm text-gray-400">Gender: Male</p>
          </div>

          {/* Interests Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100">Interests</h4>
            <p className="text-sm text-gray-400">Outdoor Activities</p>
            <p className="text-sm text-gray-400">Fitness</p>
          </div>
        </ChartCard4>

        <ChartCard3
          isChartDescription={false}
          title="Campaign Metrics"
          percentageIncrease="25%"
        >
          {/* Display campaign metrics and charts */}
          <ReportsDoughnutCharts
            color="dark"
            chart={campaignDoughnutChartData}
          />
        </ChartCard3>
      </div>

      {/* Data Tables */}
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-6/12">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <div className="flex items-center">
                <h6 className="text-slate-700 mb-2">Barcode Scan Data</h6>
                <button
                  type="button"
                  className="active:shadow-sm active:opacity-80 ease-in leading-normal text-xs  rounded-full p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-slate-400 bg-transparent text-center align-middle font-bold text-slate-400 shadow-none transition-all hover:bg-transparent hover:text-slate-400 hover:opacity-75 hover:shadow-none active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none"
                  data-target="tooltip_trigger"
                >
                  <i className="fas fa-info text-3xs" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            {/* Section for displaying barcodes */}
            <div className="flex-auto px-4 pb-2">
              <div className="p-0 overflow-x-auto ps">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Barcode Code</th>
                      <th className="px-4 py-2">Total Scans</th>
                      <th className="px-4 py-2">Unique Scans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {barcodeScans.map((scan) => (
                      <tr key={scan.id}>
                        <td className="px-4 py-2">{scan.code}</td>
                        <td className="px-4 py-2">{scan.scans}</td>
                        <td className="px-4 py-2">{scan.uniqueScans}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-6/12">
          <div className="relative flex flex-col h-full min-w-0 mt-6 break-words bg-white border-0 shadow-xl md:mt-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <div className="flex items-center">
                <h6 className="text-slate-700 mb-2">Website Visit Data</h6>
                <button
                  type="button"
                  className="active:shadow-sm active:opacity-80 ease-in leading-normal text-xs rounded-full p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-emerald-500 bg-transparent text-center align-middle font-bold text-emerald-500 shadow-none transition-all hover:bg-transparent hover:text-emerald-500 hover:opacity-75 hover:shadow-none active:bg-emerald-500 active:text-black hover:active:bg-transparent hover:active:text-emerald-500 hover:active:opacity-75 hover:active:shadow-none"
                  data-target="tooltip_trigger"
                >
                  <i className="fas fa-check text-3xs" aria-hidden="true"></i>
                </button>
                <div
                  className="z-50 px-2 py-1 text-sm text-center text-white bg-black rounded-lg max-w-46 hidden absolute inset-0 right-auto bottom-auto m-0 transform translate-x-[-895.833px] translate-y-[348.333px]"
                  id="tooltip"
                  role="tooltip"
                  data-popper-placement="bottom"
                >
                  See how much traffic gotten from scanned barcode
                  <div
                    id="arrow"
                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-[''] left-0 transform translate-x-0 translate-y-0"
                    data-popper-arrow=""
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 pb-2">
              <div className="p-0 overflow-x-auto ps">
                {/* Section for displaying website visit data */}
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Traffic Source</th>
                      <th className="px-4 py-2">Visits</th>
                      <th className="px-4 py-2">Conversions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {websiteVisits.map((visit) => (
                      <tr key={visit.id}>
                        <td className="px-4 py-2">{visit.source}</td>
                        <td className="px-4 py-2">{visit.visits}</td>
                        <td className="px-4 py-2">{visit.conversions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCampaignManagement;
