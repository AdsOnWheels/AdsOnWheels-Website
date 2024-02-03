"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import BicycleAdsAmsterdam from "../../public/images/brand/Linearly-parked-bicycles-of-five.png";
import BobCycling from "../../public/images/rider/Bob-cycling-euros.png";
import Button from "../components/Button";

const CallToAction = () => {
  const router = useRouter();

  const goToPage = (path: string) => {
    router.push(path);
  };

  return (
    <section className="bg-white py-20">
      <div
        id="call-to-action"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12"
      >
        {/* For Companies */}
        <div className="p-8">
          <div className="text-center text-black">
            <p className="text-lg mb-8">
              Discover the future of advertising with AdsOnWheels, the
              pioneering platform that transforms everyday bicycle rides into
              powerful channels for brands to effectively communicate their
              messages. We specialize in strategic ad placements on a variety of
              bicycles, catering to businesses across industries.
            </p>
            <Button
              text="Learn More"
              color="dutch"
              onClick={() => goToPage("/driver")}
            />
          </div>
        </div>
        <div className="h-80 overflow-hidden rounded-xl shadow-lg flex items-center justify-center order-first md:order-none">
          <Image
            src={BicycleAdsAmsterdam}
            alt="Company"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* For Bicycle Advertisers (Drivers) */}
        <div className="h-80 overflow-hidden rounded-xl shadow-lg flex items-center justify-center">
          <Image
            src={BobCycling}
            alt="Cyclist"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="p-8">
          <div className="text-center text-black">
            <p className="text-lg mb-8">
              Turn your daily bicycle rides into a source of passive income by
              becoming a bicycle advertiser with AdsOnWheels. Join our community
              of drivers and start earning while you ride.
            </p>
            <Button
              text="Get Started"
              color="dutch"
              onClick={() => goToPage("/driver")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
