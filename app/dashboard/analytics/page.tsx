"use client";

import React from "react";
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
  return (
    <>
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
