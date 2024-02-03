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
      title: "Cost-Effective Advertising",
      description:
        "Bike advertising offers a budget-friendly alternative to traditional advertising mediums. With lower overhead costs, it's an efficient way to get your message out there without breaking the bank.",
      icon: faDollarSign,
    },
    {
      title: "Extensive Reach",
      description:
        "Reach a wider audience as bicycles navigate through busy streets, parks, and neighborhoods. This mobility allows your brand to penetrate areas that other advertising mediums can't, maximizing your visibility.",
      icon: faBicycle,
    },
    {
      title: "High Engagement",
      description:
        "Bike ads are unique and eye-catching, sparking curiosity and engagement. They provide a moving billboard that captures attention in a non-intrusive way, making a memorable impression on potential customers.",
      icon: faUsers,
    },
  ];

  return (
    <section id="brand-benefits" className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <Heading2
          text="Why Bike Advertising?"
          color="dark"
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-8"
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

export default BrandBenefits;
