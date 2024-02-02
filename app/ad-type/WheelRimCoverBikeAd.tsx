import React from "react";
import Image from "next/image";
import WheelRimCover from "../../public/images/rider/advertising-on-bicycle-wheel-rim-cover-II.png";
import PlaceholderImage from "../../public/images/brand/dummy_600x400.png";
import Button from "../components/Button";

const WheelRimCoverBikeAd = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-12">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-70 absolute inset-0"></div>
        <Image
          src={WheelRimCover}
          alt="Bicycle Frame Ad"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4 shadow-md">
            Bicycle Wheel Rim Cover Advertising
          </h1>
          <p className="mb-6">
            Maximize your brand visibility with strategic frame placements.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Wheel Rim Cover Ads?
          </h2>
          {/* List features here */}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Ad Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholder images with lightbox effect */}
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={PlaceholderImage}
                  alt={`Placeholder ${i + 1}`}
                  layout="responsive"
                  width={350}
                  height={200}
                  className="transform transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="flex overflow-x-auto gap-4">
            {/* Testimonial carousel */}
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg min-w-[300px]"
              >
                <p className="text-gray-600 italic">
                  `
                  {
                    "Cargo bicycle ads have significantly boosted our local visibility. Highly recommend AdsOnWheels!"
                  }
                  `
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={PlaceholderImage}
                      alt={`Client ${i + 1}`}
                      layout="responsive"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold">Client Name</p>
                    <p className="text-sm text-gray-500">Company Name</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white text-center py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Advertising?
          </h2>
          <p className="mb-6">Contact us to launch your campaign today</p>
          <Button text="Get in Touch" color="dutch" />
        </div>
      </section>
    </>
  );
};

export default WheelRimCoverBikeAd;
