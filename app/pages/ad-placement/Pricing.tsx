import Heading2 from "@/app/layout/Heading2";
import Button from "../../components/Button";
import React from "react";

const Pricing = () => {
  // Handle the click event for the pricing button
  const handlePricingButtonClick = () => {
    // You can implement the logic to show pricing details or navigate to a pricing page here
    console.log("User clicked on Get Pricing button.");
  };

  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-gray-800 to-gray-700 py-12"
    >
      <div className="max-w-6xl mx-auto">
        <Heading2
          text="Our Pricing"
          color="white"
          align="center"
          className="mb-8"
        />

        <p className="text-lg text-center text-gray-200 mb-8">
          Discover the perfect pricing plan for your needs. Click the button
          below to get detailed pricing information.
        </p>

        <div className="flex justify-center">
          <Button text="Get Pricing" color="dutch" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
