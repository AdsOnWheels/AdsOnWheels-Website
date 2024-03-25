"use client";

import React, { useState } from "react";
import {
  faAdjust,
  faGlobe,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MetricCard2 from "../components/cards/metric-cards/MetricCard2";
import ChartCard2 from "../components/cards/chart-cards/ChartCard2";
import campaignDoughnutChartData, {
  campaignData,
} from "../components/data/doughnutChartData/campaignDoughnutChartData";
import ReportsDoughnutCharts from "../components/charts/doughnut-charts/ReportsDoughnutCharts";
import VerticalBarChart from "../components/charts/bar-charts/vertical-bar-chart/VerticalBarChart";
import campaignBarChartData from "../components/data/barChartData/campaignBarChartData";
import PieChart from "../components/charts/pieChart/PieChart";
import reportsLineChartData from "../components/data/reportsLineChartData";
import ChartCard3 from "../components/cards/chart-cards/ChartCard3";
import ReportsLineChart from "../components/charts/line-charts/reports-line-chart/ReportsLineChart";
import ChartCard4 from "../components/cards/chart-cards/ChartCard4";
import reportsDoughnutChartData from "../components/data/reportsDoughnutChartData";
import Link from "next/link";

type IconKey = "impressions" | "clicks" | "conversions";

// Icons mapping based on key
const iconMapping: Record<IconKey, JSX.Element> = {
  impressions: (
    <div className="px-3 text-right basis-1/3">
      <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-red-600 to-orange-600">
        <FontAwesomeIcon
          icon={faWindowMaximize}
          className="h-4 w-4 leading-none text-lg relative top-2 text-white"
        />
      </div>
    </div>
  ),
  clicks: (
    <div className="px-3 text-right basis-1/3">
      <div className="inline-block w-10 h-10 text-center rounded-full bg-gradient-to-tl from-emerald-500 to-teal-400">
        <FontAwesomeIcon
          icon={faGlobe}
          className="h-4 w-4 leading-none text-lg relative top-2 text-white"
        />
      </div>
    </div>
  ),
  conversions: (
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
    "Campaign Overview": (
      <ReportsDoughnutCharts
        color="dark"
        title="Campaign Overview"
        description="Last Campaign Performance"
        date="campaign sent 2 days ago"
        chart={campaignDoughnutChartData}
      />
    ),
  },
  {
    "Detailed Metrics": (
      <VerticalBarChart
        color="dark"
        title="Detailed Metrics"
        description="Last Campaign Performance"
        date="campaign sent 2 days ago"
        chart={campaignBarChartData}
      />
    ),
  },
];

const { sales } = reportsLineChartData;

const CampaignAnalytics = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="flex w-full max-w-full px-3 ml-auto flex-0 lg:w-6/12">
          <Link
            href="#"
            className="inline-block px-3 py-2 mb-4 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer text-slate-400 hover:scale-102 leading-5 text-xs ease-in tracking-tight active:opacity-85 active:shadow-sm border-slate-400 hover:border-slate-400 hover:bg-transparent hover:opacity-75 active:border-slate-400 active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:shadow-none"
          >
            <span className="mr-2 ">
              <i className="leading-none fa-solid fa-folder"></i>
            </span>
            <span>Export</span>
          </Link>
          <div className="relative ml-4">
            <button
              type="button"
              className="after:inline-block after:ml-1 after:content-[''] after:align-[.255em] after:border-4 after:border-t-white after:border-solid after:border-b-0 after:border-transparent after:text-white inline-block px-3 py-2 mb-4 font-bold text-center text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-sm dark:bg-gradient-to-tl dark:from-slate-800 dark:to-gray-800 bg-gradient-to-tl from-gray-900 to-slate-800 leading-normal text-sm ease-in tracking-tight shadow-md"
              onClick={toggleDropdown}
            >
              Today
            </button>
            {isDropdownOpen && (
              <ul className="z-50 dark:bg-gray-950 text-sm top-1 shadow-2xl duration-[250ms] before:duration-[350ms] before:ease-in w-48 min-w-44 before:text-lg pointer-events-none absolute right-0 left-auto m-0 -mr-4 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['']">
                <li>
                  <Link
                    className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                    href="#"
                  >
                    Yesterday
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                    href="#"
                  >
                    Last 7 days
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1.5 lg:ease-in clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                    href="#"
                  >
                    Last 30 days
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        {/* Campaign Metrics */}
        {Object.entries(campaignData).map(
          ([key, { value, percentageIncrease }]) => (
            <MetricCard2
              key={key}
              icon={iconMapping[key as IconKey]}
              title={key.replace(/([A-Z])/g, " $1")}
              value={value}
              percentageIncrease={percentageIncrease}
            />
          )
        )}
      </div>
      {/* Charts */}
      <div className="flex flex-wrap mt-6 -mx-3">
        {charts.slice(0, 2).map((chartObj, index) => (
          <ChartCard2
            key={index}
            isChartDescription={true}
            title={Object.keys(chartObj)[0]}
            percentageIncrease="10%"
          >
            {Object.values(chartObj)[0]}
          </ChartCard2>
        ))}
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <ChartCard3
          isChartDescription={true}
          title="Website Traffic"
          percentageIncrease="15%"
        >
          <ReportsLineChart
            color="dark"
            title="Daily Sales"
            description={
              <>
                <strong>+15%</strong> increase in today&apos;s traffic.
              </>
            }
            date="updated 4 min ago"
            chart={sales}
          />
        </ChartCard3>

        <ChartCard4
          isChartDescription={true}
          title="Total Orders"
          percentageIncrease="5%"
        >
          <PieChart
            color="dark"
            title="Sales Distribution"
            description="Last Campaign Performance"
            date="campaign sent 2 days ago"
            chart={reportsDoughnutChartData}
          />
        </ChartCard4>
      </div>
    </>
  );
};

export default CampaignAnalytics;
