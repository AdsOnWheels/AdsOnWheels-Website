import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faHandshake,
  faMoneyBillWave,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Heading2 from "@/app/layout/Heading2";

interface StepType {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
}

const stepsData: StepType[] = [
  {
    id: 1,
    icon: faUserPlus,
    title: "Rider Application",
    description:
      "Sign up as a driver, provide necessary details about yourself and bike",
    color: "blue",
  },
  {
    id: 2,
    icon: faHandshake,
    title: "Match with Advertisers",
    description:
      "Matched with compatible advertisers for mutually beneficial advertising partnerships.",
    color: "green",
  },
  {
    id: 3,
    icon: faMoneyBillWave,
    title: "Apply Wraps to Bicycle",
    description: "Selected wraps applied to your bicycle and start earning.",
    color: "yellow",
  },
];

const Step = ({ icon, color, title, description, id }: StepType) => (
  <div
    key={id}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-8 text-center">
      <div
        className={`text-${color}-500 text-6xl mx-auto mb-4 transform hover:scale-110 transition-transform duration-300`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-2xl text-black font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const HowItWorksRiders = () => (
  <section
    id="how-it-works"
    className="py-16 bg-gradient-to-br from-purple-200 via-indigo-100 to-indigo-400"
  >
    <div className="container mx-auto px-6 text-center">
      <Heading2 text="How It Works" color="dark" className="mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {stepsData.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksRiders;
