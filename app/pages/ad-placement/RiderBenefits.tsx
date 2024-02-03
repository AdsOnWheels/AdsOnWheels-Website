import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faHandsHelping,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Heading2 from "@/app/layout/Heading2";

const RiderBenefits = () => {
  const benefits = [
    {
      title: "Flexible Earnings",
      description:
        "Maximize your earning potential with our flexible and driver-friendly compensation model",
      icon: faDollarSign,
      color: "blue",
    },
    {
      title: "Effortless Setup",
      description:
        "Experience seamless ad setup and management, allowing you more time to focus on what you do best",
      icon: faHandsHelping,
      color: "green",
    },
    {
      title: "Community Connection",
      description:
        "Join a vibrant community of drivers, sharing insights and growing together in the mobile advertising world",
      icon: faUserFriends,
      red: "red",
    },
  ];

  return (
    <section id="rider-benefits" className="bg-white py-16 text-gray-800">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading2
            text="Why Ride with Us?"
            color="dark"
            align="center"
            className="mb-8"
          />

          <p className="text-xl mb-8">
            Discover the unique benefits of our innovative ad placement program,
            designed for driver flexibility and success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-11">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center p-8"
            >
              <FontAwesomeIcon
                icon={benefit.icon}
                className="text-gray-600 text-6xl mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-700 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiderBenefits;
