"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Title from "../layout/Title";
import Subtitle from "../layout/Subtitle";
import Button from "../components/Button";
import BackgroundImage from "../../public/Bike-in-front-of-canals.png";

const HomePage = () => {
  const router = useRouter();

  const goToPage = (path: string) => {
    router.push(path);
  };

  const scrollToTarget = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen-90 overflow-hidden">
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
      <div className="relative z-10 flex flex-col justify-between h-full mt-20">
        {/* Title and Subtitle */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
          <Title
            title="Elevate Your Brand, Advertise with Every Turn!"
            className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl 2xl:text-[9rem]"
          />
          <Subtitle
            subTitle="Transform your company's message into a captivating journey for your audience."
            className="text-white text-md md:text-lg lg:text-xl 2xl:text-4xl"
          />

          {/* Bottom Buttons */}
          <div className="flex justify-center mt-6 md:mt-8 lg:mt-10 2xl:mt-16">
            <Button
              text="Brands"
              color="dutch"
              className="mr-12"
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
      {/* Triple arrow down animation */}
      <a
        onClick={() => scrollToTarget("go-down-target")}
        className="cursor-pointer"
      >
        <div className="w-8 h-6 md:w-12 md:h-10 lg:w-10 lg:h-8 2xl:w-20 2xl:h-18 text-white relative top-2 sm:top-3 mx-auto">
          <FontAwesomeIcon
            size="3x"
            icon={faAnglesDown}
            className="animate-bounce"
          />
        </div>
      </a>
    </section>
  );
};

export default HomePage;
