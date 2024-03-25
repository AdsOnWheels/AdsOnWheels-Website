"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAdjust, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Clock from "./components/Clock";
import ControlPanel from "./components/map/ControlPanel";
import MapVisualization from "./components/map/MapVisualization";
import ReportsBarChart from "./components/charts/bar-charts/reports-bar-charts/ReportsBarChart";
import reportsBarChartData from "./components/data/reportsBarChartData";
import reportsLineChartData from "./components/data/reportsLineChartData";
import ReportsLineChart from "./components/charts/line-charts/reports-line-chart/ReportsLineChart";
import ReportsDoughnutCharts from "./components/charts/doughnut-charts/ReportsDoughnutCharts";
import reportsDoughnutChartData from "./components/data/reportsDoughnutChartData";
import GradientLineChart from "./components/charts/line-charts/gradient-line-chart/GradientLineChart";
import gradientLineChartData from "./components/data/gradientLineChartData";
import HorizontalBarChart from "./components/charts/bar-charts/horizontal-bar-chart/HorizontalBarChart";
import horizontalBarChartData from "./components/data/horizontalBarChartData";
import PieChart from "./components/charts/pieChart/PieChart";

type IconKey = "adCount" | "newUsers" | "sales" | "performance";

const Dashboard = () => {
  // Example metrics, replace with actual data fetching logic
  const metrics = {
    adCount: { value: "350,897", percentageIncrease: "10" },
    newUsers: { value: "B: 30 | R: 45", percentageIncrease: "5" },
    sales: { value: "924", percentageIncrease: "12" },
    performance: { value: "49.65%", percentageIncrease: "3" },
  };

  // Icons mapping based on key
  const iconMapping: Record<IconKey, JSX.Element> = {
    adCount: (
      <div className="px-3 text-right basis-1/3">
        <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
          <FontAwesomeIcon
            icon={faChartBar}
            className="h-4 w-4 leading-none text-lg relative top-2 text-white"
          />
        </div>
      </div>
    ),
    newUsers: (
      <div className="px-3 text-right basis-1/3">
        <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-red-600 to-orange-600">
          <FontAwesomeIcon
            icon={faUser}
            className="h-4 w-4 leading-none text-lg relative top-2 text-white"
          />
        </div>
      </div>
    ),
    sales: (
      <div className="px-3 text-right basis-1/3">
        <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-emerald-500 to-teal-400">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-4 w-4 leading-none text-lg relative top-2 text-white"
          />
        </div>
      </div>
    ),
    performance: (
      <div className="px-3 text-right basis-1/3">
        <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-orange-500 to-yellow-500">
          <FontAwesomeIcon
            icon={faAdjust}
            className="h-4 w-4 leading-none text-lg relative top-2 text-white"
          />
        </div>
      </div>
    ),
  };

  const charts = [
    {
      pieChart: (
        <PieChart
          color="dark"
          title="Sales Distribution"
          description="Last Campaign Performance"
          date="campaign sent 2 days ago"
          chart={reportsDoughnutChartData}
        />
      ),
    },
    {
      xbarChart: (
        <ReportsBarChart
          color="primary"
          title="website views"
          description="Last Campaign Performance"
          date="campaign sent 2 days ago"
          chart={reportsBarChartData}
        />
      ),
    },
    {
      yBarChart: (
        <HorizontalBarChart
          color="teal"
          title="website views"
          description="Last Campaign Performance"
          date="campaign sent 2 days ago"
          chart={horizontalBarChartData}
        />
      ),
    },
    {
      gradientLineChart: (
        <GradientLineChart
          colors={[
            ["rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 0.5)"],
            ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.5)"],
            ["rgba(255, 206, 86, 1)", "rgba(255, 206, 86, 0.5)"],
            ["rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 0.5)"],
          ]}
          title="website views"
          description="Last Campaign Performance"
          date="campaign sent 2 days ago"
          chart={gradientLineChartData.bikeAds}
        />
      ),
    },
    {
      gLineChart: (
        <GradientLineChart
          colors={[
            ["rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 0.5)"],
            ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.5)"],
            ["rgba(255, 206, 86, 1)", "rgba(255, 206, 86, 0.5)"],
            ["rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 0.5)"],
          ]}
          title="website views"
          description="Last Campaign Performance"
          date="campaign sent 2 days ago"
          chart={gradientLineChartData.bikeAds}
        />
      ),
    },
  ];

  const { sales } = reportsLineChartData;

  return (
    <>
      {/* Metrics Cards */}
      <div className="flex flex-wrap -mx-3">
        {Object.entries(metrics).map(([key, { value, percentageIncrease }]) => (
          <div
            key={key}
            className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
          >
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 shadow-xl dark:shadow-xl rounded-2xl bg-clip-border transition-shadow duration-300 ease-in-out">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <h5 className="mb-2 font-bold dark:text-white capitalize">
                        {value}
                      </h5>
                      <p className="mb-0 dark:text-white dark:opacity-60">
                        <span className="text-sm font-bold leading-normal text-lime-500">
                          +{percentageIncrease}%
                        </span>{" "}
                        since last month
                      </p>
                    </div>
                  </div>
                  {iconMapping[key as IconKey]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-wrap mt-6 -mx-3">
        {/* Line Chart */}
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div className="border-black/12.5 dark:bg-gray-950 dark:shadow-xl shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="capitalize dark:text-white">Sales overview</h6>
              <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
                <i
                  className="fa fa-arrow-up text-lime-500"
                  aria-hidden="true"
                ></i>
                <span className="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div className="flex-auto">
              <ReportsLineChart
                color="dark"
                title="daily sales"
                description={
                  <>
                    (<strong>+15%</strong>) increase in today sales.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </div>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div className="relative w-full h-full overflow-hidden dark:bg-gray-950 dark:shadow-xl shadow-xl break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              <h6 className="capitalize dark:text-white">Total Orders</h6>
              <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
                <i
                  className="fa fa-arrow-up text-lime-500"
                  aria-hidden="true"
                ></i>
                <span className="font-semibold">10% more</span> in 2021
              </p>
            </div>
            <div className="flex-auto">
              <ReportsDoughnutCharts
                color="dark"
                title="Sales Distribution"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsDoughnutChartData}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bar Chart */}
      <div className="flex flex-wrap mt-6 -mx-3">
        {charts.slice(0, 3).map((chartObj, index) => (
          <div
            key={index}
            className="w-full max-w-full px-3 mb-6 shrink-0 lg:w-4/12 md:flex-0 md:w-6/12 lg:mb-0"
          >
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                <h6 className="capitalize dark:text-white">Total Orders</h6>
                <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
                  <i
                    className="fa fa-arrow-up text-lime-500"
                    aria-hidden="true"
                  ></i>
                  <span className="font-semibold">10% more</span> in 2021
                </p>
              </div>
              <div className="flex-auto">{Object.values(chartObj)[0]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        {charts.slice(-2).map((chartObj, index) => (
          <div
            key={index}
            className="w-full max-w-full px-3 shrink-0 md:flex-0 md:w-6/12"
          >
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                <h6 className="capitalize dark:text-white">Total Orders</h6>
                <div className="flex items-center my-2">
                  <span className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-full mr-1.5 inline-block h-2 w-2 align-middle bg-yellow-300"></i>
                    <span className="leading-tight dark:text-white text-slate-700">
                      In Frame
                    </span>
                  </span>
                  <span className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-full mr-1.5 inline-block h-2 w-2 align-middle bg-blue-400"></i>
                    <span className="dark:text-white text-slate-700">
                      Frame
                    </span>
                  </span>
                  <span className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-full mr-1.5 inline-block h-2 w-2 align-middle bg-pink-500"></i>
                    <span className="dark:text-white text-slate-700">
                      Basket
                    </span>
                  </span>
                  <span className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-full mr-1.5 inline-block h-2 w-2 align-middle bg-cyan-400"></i>
                    <span className="dark:text-white text-slate-700">Rim</span>
                  </span>
                </div>
                <p className="mb-2 text-sm leading-normal dark:text-white dark:opacity-60">
                  <i
                    className="fa fa-arrow-up text-lime-500"
                    aria-hidden="true"
                  ></i>
                  <span className="font-semibold">10% more</span> in 2021
                </p>
              </div>
              <div className="flex-auto">
                <div>{Object.values(chartObj)[0]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 flex-0">
          <div className="border-black/12.5 dark:bg-gray-950 bg-white relative flex min-w-0 flex-col break-words shadow-xl dark:shadow-xl rounded-2xl border-0 border-solid bg-clip-border dark:bg-none">
            <div className="border-b-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-transparent p-6">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 flex-0 md:w-6/12 lg:w-4/12">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                    <span className="leading-5 z-[100] text-sm absolute -ml-px flex h-full items-center whitespace-nowrap rounded-l-lg border-0 bg-transparent p-3 text-center font-normal text-slate-500">
                      <i className="text-lg leading-none fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Search city..."
                      className="leading-5 ease-in text-sm pl-9 focus:border-blue-500 border-transparent border border-solid focus:shadow-blue-500 dark:bg-slate-950 dark:placeholder:text-white/80 dark:text-white/80 relative block min-w-0 flex-auto appearance-none rounded-full bg-transparent bg-clip-padding p-3 font-normal text-slate-500 focus:transition-shadow placeholder:text-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="w-full max-w-full px-3 my-auto ml-auto flex-0 md:w-6/12 lg:w-6/12">
                  <div className="flex items-center">
                    <p className="mb-1 ml-auto mr-4 text-slate-500 opacity-80 dark:text-white">
                      Current time:
                    </p>
                    <Clock />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto">
              <MapVisualization />
            </div>
            <div className="border-t-black/12.5 mt-0 rounded-b-2xl border-t-0 border-solid bg-transparent p-6">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 flex-0 md:w-6/12 lg:w-4/12">
                  <div className="flex items-center">
                    <ControlPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
