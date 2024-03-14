"use client";

import React from "react";
import Heading2 from "@/app/layout/Heading2";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faRoute,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const pricingPlans = [
  {
    name: "Frame Ad",
    description: "Ad placement on the frame of bicycles.",
    features: [
      { icon: faBicycle, text: "Suitable for all bikes" },
      { icon: faRoute, text: "High visibility in urban areas" },
      { icon: faTachometerAlt, text: "Monthly analytics report" },
    ],
  },
  {
    name: "Wheel Rim Ad",
    description: "Ad placement on the wheel rims of bicycles.",
    features: [
      { icon: faBicycle, text: "Ideal for sport bikes" },
      { icon: faRoute, text: "Eye-catching motion effect" },
      { icon: faTachometerAlt, text: "Real-time tracking" },
    ],
  },
  {
    name: "Basket Ad",
    description: "Ad placement on the basket of bicycles.",
    features: [
      { icon: faBicycle, text: "Perfect for city bikes" },
      { icon: faRoute, text: "Prominent display in crowded areas" },
      { icon: faTachometerAlt, text: "Campaign performance analysis" },
    ],
  },
];

const Pricing = () => {
  const handlePricingButtonClick = () => {
    console.log("User clicked on Get Pricing button.");
  };

  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-indigo-900 via-gray-800 to-black py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <Heading2
          text="Our Pricing Plans"
          color="white"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Heading2
                text={plan.name}
                color="gray"
                size="xl"
                align="left"
                margin="mb-4"
              />
              <p className="text-base text-gray-700 mb-6">{plan.description}</p>
              <ul className="text-sm text-gray-600 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className={`${
                        feature.icon === faBicycle ? "w-5 h-5" : "w-4 h-4"
                      } mr-2 text-indigo-500`}
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <div className="flex justify-start">
                <Button
                  text="Get Started"
                  color="dutch"
                  onClick={handlePricingButtonClick}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
