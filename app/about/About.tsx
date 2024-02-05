import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faHandshake,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

import Heading1 from "../layout/Heading1";
import Heading2 from "../layout/Heading2";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <Heading1
          text="About Us"
          className="text-4xl md:text-5xl font-bold text-center text-gradient bg-clip-text from-blue-600 to-indigo-600"
        />

        <div className="space-y-8 max-w-4xl mt-16 mx-auto">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heading2
              text="Mission"
              className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center text-gray-800"
            />
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-green-500 text-3xl mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              At OutFront, our mission is to revolutionize the advertising
              landscape by championing sustainable transportation and fostering
              healthy lifestyles. We aspire to create an ecosystem where
              businesses connect with individuals who share a passion for
              sustainability, converting routine rides into impactful
              advertising opportunities. Through our innovative platform, we aim
              to contribute to a greener, healthier world while providing
              businesses with a unique and effective way to showcase their
              brands.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heading2
              text="Vision"
              className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center text-gray-800"
            />
            <FontAwesomeIcon
              icon={faBicycle}
              className="text-blue-500 text-3xl mb-4"
            />
            <p className="text-gray-700 leading-relaxed">
              Our vision extends beyond traditional advertising boundaries,
              envisioning a world where every ride becomes an opportunity for
              meaningful connections. OutFront strives to build a global
              community of conscious consumers and responsible businesses,
              united in the pursuit of innovative and memorable brand
              experiences. By embracing innovative ad placements, we aim to
              create a platform that transcends modes of transportation,
              fostering connections that go beyond the ordinary confines of
              advertising.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heading2
              text="Values"
              className="text-xl md:text-2xl font-semibold mb-4 flex items-center justify-center text-gray-800"
            />
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-yellow-500 text-3xl mb-4"
            />
            <ol className="space-y-2 text-gray-700">
              <li>
                <strong>Innovation:</strong> Innovation is at the heart of
                OutFront. We continuously seek inventive ways to make
                advertising impactful and align with contemporary values.
              </li>
              <li>
                <strong>Community Empowerment:</strong> We believe in empowering
                individuals to contribute to a shared economy, turning their
                daily activities into opportunities for financial gain and
                community building.
              </li>
              <li>
                <strong>Conscious Collaboration:</strong> OutFront is built on
                the principle of conscious collaboration. We selectively partner
                with businesses that share our commitment to delivering unique,
                memorable brand experiences.
              </li>
              <li>
                <strong>Adaptive Growth:</strong> In a dynamic landscape, we
                embrace adaptive growth, constantly evolving to include new
                modes of transportation and innovative advertising strategies.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
