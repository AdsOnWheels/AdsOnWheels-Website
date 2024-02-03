import Heading2 from "@/app/layout/Heading2";
import React from "react";

const CompensationAndRewards = () => {
  const rewardsData = [
    {
      title: "Attractive Pay Structure",
      description:
        "Maximize your earnings with a pay structure based on distance, campaign type, and duration",
    },
    {
      title: "Bonus Incentives",
      description:
        "Regular bonus incentives keep you motivated. Achieve milestones and earn more",
    },
    {
      title: "Exclusive Offers",
      description:
        "Enjoy exclusive offers and special promotions from our brand partners",
    },
    {
      title: "Personalized Support",
      description:
        "Our team is dedicated to providing you with tailored support, ensuring a smooth experience",
    },
  ];

  return (
    <section
      id="compensation-rewards"
      className="py-16 bg-gradient-to-r from-indigo-200 to-indigo-100 text-gray-800"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Heading2
          text="Compensation and Rewards"
          color="dark"
          className="mb-8"
        />

        <p className="text-xl mb-8">
          Discover the competitive compensation structure and exclusive rewards
          that set AdsOnWheels apart.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 px-6">
        {rewardsData.map((reward, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 transition duration-300 ease-in-out hover:shadow-2xl"
          >
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">
              {reward.title}
            </h3>
            <p className="text-lg">{reward.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompensationAndRewards;
