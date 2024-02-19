import React from "react";
import Image from "next/image";

import Image1 from "../../assets/images/company/dummy_600x400.png";

const IndustriesWeServe = () => {
  const industries = [
    {
      id: 1,
      name: "Local Businesses",
      icon: Image1,
    },
    {
      id: 2,
      name: "Technology",
      icon: Image1,
    },
    {
      id: 3,
      name: "Entertainment",
      icon: Image1,
    },
    {
      id: 4,
      name: "Retail",
      icon: Image1,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Industries We Serve</h2>

        <div className="flex flex-wrap justify-around items-center">
          {industries.map((industry) => (
            <div key={industry.id} className="flex flex-col items-center p-4">
              <Image
                src={industry.icon}
                alt={industry.name}
                className="w-20 h-20 mb-4"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-full focus:outline-none hover:bg-red-600 transition duration-300">
                {industry.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
