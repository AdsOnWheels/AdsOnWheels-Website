import React from "react";
import Image from "next/image";

import Heading1 from "../layout/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faBicycle } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import BackgroundImage from "../../public/images/rider/bike-ad-placement.png";

const HeroSection = () => {
  return (
    <section className="relative pt-16 min-h-screen-90 m-0 overflow-hidden">
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
      <div className="relative mt-8">
        <div className="max-w-5xl text-center mx-auto p-8 z-10">
          <Heading1
            text="Ride, Advertise, Earn."
            color="white"
            className="mb-8"
          />
          <p className="text-lg md:text-xl text-white leading-7 max-w-3xl mx-auto">
            Join AdsOnWheels and turn your daily rides into earnings with
            bicycle ads. Be part of our innovative outdoor advertising solution.
          </p>

          <Button text="Become a Rider" color="dutch" className=" my-10" />
        </div>

        {/* Triple arrow down animation */}
        <div className="absolute w-12 h-12 left-[38rem] transform -translate-x-1/2 animate-bounce">
          <FontAwesomeIcon
            size="4x"
            icon={faAnglesDown}
            className="text-white"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
