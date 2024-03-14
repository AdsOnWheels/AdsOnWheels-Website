import React from "react";
import Link from "next/link";
import Image from "next/image";

import DynamicDisplayRoutes from "../../assets/images/brand/ad-features/dynamic-display-routes.png";
import WebTrafficInsights from "../../assets/images/brand/ad-features/web-traffic-insights.png";
import RealTimeAdAnalytics from "../../assets/images/brand/ad-features/real-time-ad-analytics.png";
import Heading2 from "../layout/Heading2";

const FeatureAddOns = () => {
  const features = [
    {
      id: 1,
      title: "Dynamic Display Routes",
      description:
        "Select high-traffic routes to optimize ad visibility and effectively engage your audience",
      imageUrl: DynamicDisplayRoutes,
      learnMoreLink: "#",
    },
    {
      id: 2,
      title: "Site Visit Insights",
      description:
        "Track the boost in website traffic that's directly linked to visibility from our targeted bike ads",
      imageUrl: WebTrafficInsights,
      learnMoreLink: "#",
    },
    {
      id: 3,
      title: "Real-Time Ad Analytics",
      description:
        "Get real-time analytics for insights on your campaign's performance, reach, and engagement",
      imageUrl: RealTimeAdAnalytics,
      learnMoreLink: "#",
    },
  ];

  return (
    <section id="add-ons" className="bg-gray-200 py-12 lg:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <Heading2
          text="Bicycle Ad Features"
          color="dark"
          align="center"
          className="mb-8 lg:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="relative h-52">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-center">
                  <Link
                    href={feature.learnMoreLink}
                    className="inline-block text-white font-semibold bg-[#ff4f00] hover:bg-[#ff621a] px-8 py-3 focus:outline-none focus:shadow-outline rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureAddOns;
