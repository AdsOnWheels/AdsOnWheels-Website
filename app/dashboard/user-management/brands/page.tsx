"use client";

import React from "react";
import {
  faAdjust,
  faGlobe,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MetricCard2 from "../../components/cards/metric-cards/MetricCard2";
import { campaignData } from "../../components/data/doughnutChartData/campaignDoughnutChartData";
import PieChart from "../../components/charts/pieChart/PieChart";
import reportsLineChartData from "../../components/data/reportsLineChartData";
import ChartCard3 from "../../components/cards/chart-cards/ChartCard3";
import ReportsLineChart from "../../components/charts/line-charts/reports-line-chart/ReportsLineChart";
import ChartCard4 from "../../components/cards/chart-cards/ChartCard4";
import reportsDoughnutChartData from "../../components/data/reportsDoughnutChartData";
import HorizontalBarChart from "../../components/charts/bar-charts/horizontal-bar-chart/HorizontalBarChart";
import horizontalBarChartData from "../../components/data/horizontalBarChartData";
import Container from "../../layout/containers/Container";
import GradientLineChart from "../../components/charts/line-charts/gradient-line-chart/GradientLineChart";
import gradientLineChartData from "../../components/data/gradientLineChartData";
import SmallInfoCard from "../../components/cards/info-cards/SmallInfoCard";
import CampaignReminderCard from "../../components/cards/info-cards/CampaignReminderCard";

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

const smallInfoCardsData = [
  {
    id: 1,
    brand: "Brand A",
    bikeAdPlacement: "Cyber Week",
    date: "21 March 2024, at 12:30 PM",
  },
  {
    id: 2,
    brand: "Brand B",
    bikeAdPlacement: "Complete Report",
    date: "23 March 2024, at 3:00 PM",
  },
  {
    id: 3,
    brand: "Brand C",
    bikeAdPlacement: "Intro Week",
    date: "23 September 2024, at 8:00 AM",
  },
  {
    id: 4,
    brand: "Brand D",
    bikeAdPlacement: "Client Meeting",
    date: "22 March 2024, at 11:00 AM",
  },
];

const { sales } = reportsLineChartData;

const Brands = () => {
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
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <ChartCard3
          isChartDescription={true}
          title="Website Traffic"
          percentageIncrease="15%"
        >
          <HorizontalBarChart
            color="teal"
            title="website views"
            description="Last Campaign Performance"
            date="campaign sent 2 days ago"
            chart={horizontalBarChartData}
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
      <div className="flex flex-wrap mt-6 -mx-3">
        <Container title="Website Traffic" percentageIncrease="5%">
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
        </Container>

        <SmallInfoCard heading="Next Campaigns">
          {smallInfoCardsData.map((data, index) => (
            <CampaignReminderCard
              key={data.id || index}
              title={`${data.bikeAdPlacement} | ${data.brand}`}
              date={data.date}
            />
          ))}
        </SmallInfoCard>
      </div>
    </>
  );
};

export default Brands;
