import Button from "../../components/Button";
import React from "react";

const Pricing = () => {
  // Handle the click event for the pricing button
  const handlePricingButtonClick = () => {
    // You can implement the logic to show pricing details or navigate to a pricing page here
    console.log("User clicked on Get Pricing button.");
  };

  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-700 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl text-center font-extrabold mb-8 text-white text-gradient bg-clip-text">
          Our Pricing
        </h2>
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
