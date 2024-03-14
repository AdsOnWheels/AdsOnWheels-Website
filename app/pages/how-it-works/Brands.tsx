import Heading2 from "@/app/layout/Heading2";
import React from "react";

interface Props {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-md group">
      <div className="relative h-full flex flex-col">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[14rem] md:text-[18rem] lg:text-[25rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700 opacity-20 z-10 mb-6">
          {number}
        </div>
        <div className="relative flex flex-col justify-between text-left top-6 transition duration-300 hover:scale-105 z-20 my-8 bg-white bg-opacity-70 rounded-lg p-8 h-full">
          <Heading2
            text={title}
            color="dark"
            size="xl"
            align="left"
            margin="mb-4"
          />
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
    <section id="how-it-works" className="text-center py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Heading2
          text="How It Works"
          color="dark"
          align="center"
          className="mb-16"
        />

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
