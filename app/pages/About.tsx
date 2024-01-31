import React from "react";
import Title from "../layout/Title";

const About = () => {
  return (
    <section className="text-center">
      <Title title="About AdsOnWheels" />

      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Title title="Mission" className="text-2xl font-semibold mb-3" />
          <p className="text-gray-700">
            At AdsOnWheels, our mission is to revolutionize the advertising
            landscape by championing sustainable transportation and fostering
            healthy lifestyles. We aspire to create an ecosystem where
            businesses connect with individuals who share a passion for
            sustainability, converting routine rides into impactful advertising
            opportunities. Through our innovative platform, we aim to contribute
            to a greener, healthier world while providing businesses with a
            unique and effective way to showcase their brands.
          </p>
        </div>

        <div className="mb-10">
          <Title title="Vision" className="text-2xl font-semibold mb-3" />
          <p className="text-gray-700">
            Our vision extends beyond traditional advertising boundaries,
            envisioning a world where every ride becomes an opportunity for
            meaningful connections. AdsOnWheels strives to build a global
            community of conscious consumers and responsible businesses, united
            in the pursuit of innovative and memorable brand experiences. By
            embracing innovative ad placements, we aim to create a platform that
            transcends modes of transportation, fostering connections that go
            beyond the ordinary confines of advertising.
          </p>
        </div>

        <div>
          <Title title="Values" className="text-2xl font-semibold mb-3" />
          <ol className="list-decimal pl-6 text-gray-700">
            <li className="mb-4">
              <strong>Innovation:</strong> Innovation is at the heart of
              AdsOnWheels. We continuously seek inventive ways to make
              advertising impactful and align with contemporary values.
            </li>
            <li className="mb-4">
              <strong>Community Empowerment:</strong> We believe in empowering
              individuals to contribute to a shared economy, turning their daily
              activities into opportunities for financial gain and community
              building.
            </li>
            <li className="mb-4">
              <strong>Conscious Collaboration:</strong> AdsOnWheels is built on
              the principle of conscious collaboration. We selectively partner
              with businesses that share our commitment to delivering unique,
              memorable brand experiences.
            </li>
            <li>
              <strong>Adaptive Growth:</strong> In a dynamic landscape, we
              embrace adaptive growth, constantly evolving to include new modes
              of transportation and innovative advertising strategies.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;