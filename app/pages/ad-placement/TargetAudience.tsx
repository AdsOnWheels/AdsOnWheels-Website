import React from "react";

const TargetAudience = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Target Audience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderDemographic(
            "Urban Commuters",
            `
            Reach urban commuters who rely on bicycles for their daily
            transportation needs. This group values sustainability and
            actively seeks eco-friendly alternatives in their city journeys.
            Strategically place ads in high-traffic urban areas, such as busy
            streets, public transport stops, and popular bike paths. Highlight
            the convenience and environmental benefits of incorporating
            bicycles into daily commuting routines.
          `,
            "Strategically place ads in high-traffic urban areas, such as busy streets, public transport stops, and popular bike paths. Highlight the convenience and environmental benefits of incorporating bicycles into daily commuting routines."
          )}

          {renderDemographic(
            "Fitness Enthusiasts",
            `
            Connect with fitness enthusiasts who view bicycles as not only a
            mode of transport but also a fitness choice. This audience
            embraces an active lifestyle and values the health benefits of
            cycling. Tailor ad campaigns to showcase the fitness advantages of
            cycling. Consider sponsoring or advertising during local biking
            events, fitness classes, or in areas with high recreational bike
            usage.
          `,
            "Tailor ad campaigns to showcase the fitness advantages of cycling. Consider sponsoring or advertising during local biking events, fitness classes, or in areas with high recreational bike usage."
          )}

          {renderDemographic(
            "Businesses of All Sizes",
            `
            Target businesses seeking innovative advertising solutions.
            AdsOnWheels caters to both small startups and large enterprises
            looking for sustainable and creative ways to showcase their brand.
            Emphasize the innovation and sustainability aspects of bicycle ad
            placements. Highlight the unique visibility and brand awareness
            that can be achieved, especially in urban areas with a diverse
            audience.
          `,
            "Emphasize the innovation and sustainability aspects of bicycle ad placements. Highlight the unique visibility and brand awareness that can be achieved, especially in urban areas with a diverse audience."
          )}

          {renderDemographic(
            "Individual Drivers Seeking Passive Income",
            `
            Attract individual drivers interested in transforming their daily
            rides into a source of passive income. AdsOnWheels provides an
            opportunity for drivers to earn while commuting. Develop campaigns
            targeting drivers who wish to monetize their daily commutes.
            Promote the ease of participation, emphasizing the additional
            income potential for individuals with regular and varied routes.
          `,
            "Develop campaigns targeting drivers who wish to monetize their daily commutes. Promote the ease of participation, emphasizing the additional income potential for individuals with regular and varied routes."
          )}
        </div>

        <p className="mt-8 text-gray-700">
          {`With AdsOnWheels, you have the opportunity to tailor your campaigns to resonate with specific demographics. Whether it's targeting urban commuters, fitness enthusiasts, businesses of all sizes, or individual drivers seeking passive income, our platform ensures your message reaches the right audience at the right time.`}
        </p>
      </div>
    </section>
  );
};

const renderDemographic = (
  title: string,
  description: string,
  insights: string
) => (
  <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
    {insights && (
      <p className="text-gray-500 mt-2">
        <span className="font-semibold">Insights:</span> {insights}
      </p>
    )}
  </div>
);

export default TargetAudience;
