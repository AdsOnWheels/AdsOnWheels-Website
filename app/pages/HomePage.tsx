"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Heading1 from "../layout/Heading1";
import Heading3 from "../layout/Heading3";
import Button from "../components/Button";
import BackgroundImage from "../../assets/Bike-in-front-of-canals.png";

const HomePage = () => {
  const router = useRouter();

  const goToPage = (path: string) => {
    router.push(path);
  };

  return (
    <section id="homepage" className="relative min-h-screen-90 overflow-hidden">
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

      {/* Overlay for Text and Buttons */}
      <div className="relative z-10 flex flex-col justify-between h-full mt-16 lg:mt-20">
        {/* Title and Subtitle */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
          <Heading1
            text="Elevate Your Brand, Advertise with Every Turn!"
            color="white"
          />
          <Heading3
            text="Transform your company's message into a captivating journey for your audience."
            color="white"
          />

          {/* Bottom Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 justify-center items-center mt-6 md:mt-8 lg:mt-10 2xl:mt-16">
            <Button
              text="Brands"
              color="dutch"
              onClick={() => goToPage("/brands")}
            />
            <Button
              text="Riders"
              color="dutch"
              onClick={() => goToPage("/riders")}
            />
          </div>
        </div>
      </div>
      {/* Next section scroll hint */}
      {/* <ScrollHint nextSectionId="call-to-action" /> */}
    </section>
  );
};

export default HomePage;
