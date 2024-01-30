import React from "react";
import Image from "next/image";
import BicycleFrame from "../../../public/images/rider/advertising-on-bicycle-frames.png";

const BicycleFrameAdPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* ...Your header component */}

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Bicycle Frame Advertising</h1>
          <p className="mb-6">
            Maximize your brand visibility with strategic frame placements.
          </p>
          <Image
            src={BicycleFrame}
            alt="Bicycle Frame Ad"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Frame Ads?
          </h2>
          {/* List features here */}
        </div>
      </section>

      {/* Image Gallery */}
      {/* ... Similar layout with a grid of images */}

      {/* Testimonials or Case Studies */}
      {/* ... Display testimonials or case studies */}

      {/* Call to Action */}
      <section className="bg-gray-200 text-center py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Advertising?
          </h2>
          <p className="mb-6">Contact us to kickstart your campaign today!</p>
          {/* CTA button */}
        </div>
      </section>

      {/* Footer */}
      {/* ...Your footer component */}
    </div>
  );
};

export default BicycleFrameAdPage;
