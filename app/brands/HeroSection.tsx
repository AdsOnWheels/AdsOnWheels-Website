import React from "react";
import Image from "next/image";

import Heading1 from "../layout/Heading1";
import BackgroundImage from "../../public/Bike-in-front-of-canals.png";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-16 min-h-screen-90 m-0 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
        />
        <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm bg-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center mx-auto p-8">
        {/* Brief explanation */}
        <Heading1
          text="Bicycle Advertising that pedals your brand forward"
          className="text-6xl md:text-7xl text-white font-extrabold mb-8"
        />
        <p className="text-lg text-white leading-7">
          {`Unleash the power of our dynamic advertising solutions. Connect with your audience in a sustainable way while promoting your brand's identity. Let us pedal your message to new heights!`}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
