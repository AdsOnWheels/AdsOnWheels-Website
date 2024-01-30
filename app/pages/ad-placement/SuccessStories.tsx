import React from "react";

const SuccessStories = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Success Stories
        </h2>

        {/* Success Story 1 */}
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Riding Business Growth
          </h3>
          <p className="text-gray-700">
            Discover how a local startup experienced significant growth by
            leveraging AdsOnWheels. Our platform provided them with innovative
            advertising solutions, reaching a broader audience and increasing
            brand visibility.
          </p>
        </div>

        {/* Success Story 2 */}
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-green-500">
            Sustainable Branding
          </h3>
          <p className="text-gray-700">
            Learn how a well-established brand embraced sustainability and
            enhanced its image through bicycle ad placements. AdsOnWheels not
            only provided visibility but also contributed to their eco-friendly
            brand narrative.
          </p>
        </div>

        {/* Success Story 3 */}
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-500">
            Empowering Local Businesses
          </h3>
          <p className="text-gray-700">
            Our vision includes empowering local businesses to thrive. Read how
            AdsOnWheels became a catalyst for a neighborhood business, helping
            them connect with the community and achieve remarkable success.
          </p>
        </div>

        <p className="mt-8 text-gray-700">
          {`These success stories exemplify our vision for AdsOnWheels. We believe in fostering positive impacts on businesses of all sizes. Join us in transforming the way brands connect with their audiences and achieve lasting success.`}
        </p>
      </div>
    </section>
  );
};

export default SuccessStories;
