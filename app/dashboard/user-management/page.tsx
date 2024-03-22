"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import DataTable from "../layout/tables/data-table/DataTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Example data for the Bar chart
const chartData = {
  labels: ["Riders", "Brands"],
  datasets: [
    {
      label: "New Sign-Ups",
      data: [120, 80], // Replace with stats.riders.newSignUps, stats.brands.newSignUps
      backgroundColor: ["#4B8B3B", "#D22B2B"],
    },
    {
      label: "Total Active",
      data: [950, 150], // Replace with stats.riders.totalActive, stats.brands.totalActive
      backgroundColor: ["#76C043", "#FF6347"],
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const UserManagement = () => {
  // Example data for react-table - replace with actual data fetching logic
  const generateData = () => {
    const data: {
      category: string;
      newSignUps: number;
      pending: number;
      totalActive: number;
    }[] = [];

    // Define the categories and generate random data for each category
    const categories = ["Riders", "Brands"]; // Add more categories as needed

    categories.forEach((category, index) => {
      const newSignUps = Math.floor(Math.random() * 1000); // Generate a random value for newSignUps
      const pending = Math.floor(Math.random() * 100); // Generate a random value for pending
      const totalActive = Math.floor(Math.random() * 2000); // Generate a random value for totalActive

      data.push({
        category: category,
        newSignUps: newSignUps,
        pending: pending,
        totalActive: totalActive,
      });
    });

    return data;
  };

  const columns = [
    {
      id: "category",
      Header: "Category",
      accessor: "category",
    },
    {
      id: "newSignUps",
      Header: "New Sign-Ups",
      accessor: "newSignUps",
    },
    {
      id: "pending",
      Header: "Pending",
      accessor: "pending",
    },
    {
      id: "totalActive",
      Header: "Total Active",
      accessor: "totalActive",
    },
  ];

  const tableData = {
    columns: columns,
    rows: generateData(),
  };

  // Define other props like entriesPerPage, canSearch, showTotalEntries, etc.
  const entriesPerPage = {};

  const canSearch = false;
  const showTotalEntries = false;
  const pagination = false;
  const isSorted = false;
  const noEndBorder = false;
  const enableActionButtons = false;

  const title = "Datatable Search";
  const description =
    "A lightweight, extendable, dependency-free javascript HTML table plugin.";

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        {/* User Management Metrics */}
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-7/12 xl:w-8/12">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12">
              <div className="border-black/12.5 shadow-xl dark:shadow-xl dark:bg-gray-950 relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="p-4 pb-0 rounded-t-2xl">
                  <p className="mb-0 text-sm font-semibold leading-normal capitalize dark:text-white dark:opacity-60">
                    Visitors
                  </p>
                  <h5 className="mb-0 font-bold dark:text-white">
                    5,927
                    <span className="text-sm font-bold leading-normal text-lime-500">
                      +55%
                    </span>
                  </h5>
                </div>
                <div className="flex-auto p-0">
                  <div>{/* Metrics */}</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-4/12">
              <div className="border-black/12.5 shadow-xl dark:shadow-xl dark:bg-gray-950 relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="p-4 pb-0 rounded-t-2xl">
                  <p className="mb-0 text-sm font-semibold leading-normal capitalize dark:text-white dark:opacity-60">
                    Income
                  </p>
                  <h5 className="mb-0 font-bold dark:text-white">
                    $130,832
                    <span className="text-sm font-bold leading-normal text-lime-500">
                      +90%
                    </span>
                  </h5>
                </div>
                <div className="flex-auto p-0">
                  <div>{/* Metrics */}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Bar Chart */}
          <div className="flex flex-wrap mt-6 -mx-3">
            <div className="w-full max-w-full px-3 flex-0">
              <div className="border-black/12.5 shadow-xl dark:shadow-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid dark:bg-gray-950 bg-white bg-clip-border">
                <div className="p-4 pb-0 rounded-t-2xl">
                  <h6 className="mb-0 dark:text-white">Calendar</h6>
                  <div className="flex">
                    <div className="mb-0 text-sm font-semibold leading-normal">
                      Monday
                    </div>
                    <span>,&nbsp;</span>
                    <div className="mb-1 text-sm font-semibold leading-normal">
                      2024
                    </div>
                  </div>
                </div>
                <div className="flex-auto p-4">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Charts */}
        <div className="w-full max-w-full px-3 mt-6 lg:flex-0 shrink-0 lg:mt-0 lg:w-5/12 xl:w-4/12">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 lg:w-full">
              <div className="border-black/12.5 shadow-xl dark:shadow-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                <div className="relative h-full overflow-hidden rounded-xl">
                  <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-gray-950 dark:to-gray-800 opacity-80"></span>
                  <div className="relative z-10 flex-auto h-full p-4">
                    <h6 className="mb-4 font-bold text-white">Hey John!</h6>
                    <p className="mb-4 text-white dark:opacity-60">
                      Wealth creation is an evolutionarily recent positive-sum
                      game. It is all about who take the opportunity first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-full">
              <div className="border-black/12.5 shadow-xl dark:shadow-xl dark:bg-gray-950 relative mt-6 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div className="p-4 pb-0 rounded-t-4">
                  <h6 className="mb-0 dark:text-white">Categories</h6>
                </div>
                <div className="flex-auto p-4">{}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <DataTable
          entriesPerPage={entriesPerPage}
          canSearch={canSearch}
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
    </>
  );
};

export default UserManagement;
