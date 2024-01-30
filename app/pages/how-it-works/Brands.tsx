import React from "react";

interface Props {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-md group">
      <div className="p-6 lg:p-8 relative h-full flex flex-col">
        <div className="absolute top-44 left-1/2 flex items-center justify-center text-8xl md:text-5xl lg:text-[25rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-10 mb-6">
          {number}
        </div>
        <div className="relative top-6 transform transition duration-300 hover:scale-105 z-20 my-8">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-lg flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorksBrands = () => {
  const steps = [
    {
      number: 1,
      title: "Choose target Audience",
      description:
        "Identify and select your target markets, focusing on demographics and locations that align with your brand's audience.",
    },
    {
      number: 2,
      title: "Choose your Events",
      description:
        "Select key events that resonate with your brand's values and where your target audience is likely to be engaged.",
    },
    {
      number: 3,
      title: "Data Analytics",
      description:
        "Utilize data analytics to gain insights into customer behavior and market trends, helping to refine your marketing strategy.",
    },
    {
      number: 4,
      title: "Campaign Launch",
      description:
        "Launch your campaign, monitor its initial performance, and make adjustments as needed to maximize impact and engagement.",
    },
  ];

  return (
    <section className="text-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-extrabold mb-16 text-gray-800 text-gradient bg-clip-texttext">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBrands;
