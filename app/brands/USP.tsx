import React from "react";

interface Props {
  id?: string;
  title: string;
  description: string;
}

const USP = () => {
  const USPData = [
    {
      id: 1,
      title: "Innovative Strategy",
      description:
        "Pushing boundaries with creative and unique advertising tactics that resonate with audiences",
    },
    {
      id: 2,
      title: "Tailored Solutions",
      description:
        "Customized approaches designed to meet specific brand goals and audience engagement",
    },
    {
      id: 3,
      title: "Impactful Reach",
      description:
        "Expanding brand visibility through strategic, high-impact advertising placements",
    },
  ];

  const USPCard = ({ id, title, description }: Props) => {
    return (
      <div
        key={id}
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
      >
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    );
  };

  return (
    <section id="usp" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-300 mb-12">
          Elevate Your Brand with Our Unique Approach
        </h2>
        <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          We redefine the norms with our innovative solutions, capturing
          attention and setting your brand apart. Discover the distinct reasons
          our clients trust us with their marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {USPData.map((usp) => (
            <USPCard
              key={usp.id}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
