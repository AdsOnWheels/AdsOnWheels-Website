import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBicycle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../layout/Heading2";

const BrandBenefits = () => {
  const benefits = [
    {
      title: "Cost-Effective",
      description:
        "Bike ads offer a budget-friendly alternative to traditional advertising.",
      icon: faDollarSign,
    },
    {
      title: "Extensive Reach",
      description:
        "Reach a wider audience as bikes navigate through various locations.",
      icon: faBicycle,
    },
    {
      title: "High Engagement",
      description:
        "Bike ads are unique and eye-catching, sparking curiosity and engagement.",
      icon: faUsers,
    },
  ];

  return (
    <section id="brand-benefits" className="bg-gray-100 py-24">
      <div className="container mx-auto px-8">
        <Heading2
          text="Why Bike Advertising?"
          color="dark"
          align="center"
          margin="mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-8"
            >
              <FontAwesomeIcon
                icon={benefit.icon}
                className="w-16 h-16 text-gray-600 text-6xl mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
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

export default BrandBenefits;
