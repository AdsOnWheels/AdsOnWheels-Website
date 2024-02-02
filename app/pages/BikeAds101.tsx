import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faEye,
  faBullhorn,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Heading2 from "../layout/Heading2";

const bikeAdsData = [
  {
    icon: faBicycle,
    title: "Innovative Advertising",
    color: "blue",
    description:
      "Dive into the world of bike advertising – a fresh, dynamic way to promote your brand.",
  },
  {
    icon: faEye,
    title: "Captivating Exposure",
    color: "green",
    description:
      "Learn how bike ads capture attention in high-traffic areas, offering captivating brand exposure.",
  },
  {
    icon: faBullhorn,
    title: "Maximizing Visibility",
    color: "yellow",
    description:
      "Explore strategies for maximizing ad visibility and audience engagement through bike ads.",
  },
  {
    icon: faChartLine,
    title: "Effectiveness and ROI",
    color: "red",
    description:
      "Understand the effectiveness and return on investment that bike ads offer compared to traditional advertising mediums.",
  },
];

const BikeAds101 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 via-indigo-500 to-[#ff4f00]">
      <div className="container mx-auto px-4">
        <Heading2
          text="Bike Ads 101: Unlock the Potential"
          color="white"
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards Wrapper */}
          {bikeAdsData.map(({ icon, title, color, description }, index) => (
            <>
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`text-${color}-500 text-6xl mb-4`}
                />
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-lg text-gray-700 flex-grow">{description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeAds101;
