"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import BicycleAdsAmsterdam from "../../public/images/brand/Linearly-parked-bicycles-of-five.png";
import BobCycling from "../../public/images/rider/Bob-cycling-euros.png";
import Button from "../components/Button";
import Heading2 from "../layout/Heading2";

const CallToAction = () => {
  const router = useRouter();

  const goToPage = (path: string) => {
    router.push(path);
  };

  return (
    <section className="bg-white py-24">
      <div
        id="call-to-action"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12"
      >
        {/* For Brands */}
        <div className="p-8">
          <Heading2
            text="Brands"
            align="left"
            size="3xl"
            fontWeight="bold"
            margin="mb-4"
          />
          <div className="text-left text-black">
            <p className="text-lg mb-8">
              Discover the future of advertising with OutFront, the pioneering
              platform that transforms everyday bicycle rides into powerful
              channels for brands to effectively communicate their messages.
            </p>
            <Button
              text="Learn More"
              color="dutch"
              onClick={() => goToPage("/brands")}
            />
          </div>
        </div>
        <div className="h-80 overflow-hidden rounded-xl shadow-lg flex items-center justify-center order-first md:order-none">
          <Image
            src={BicycleAdsAmsterdam}
            alt="Company"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        {/* For Riders */}
        <div className="h-80 overflow-hidden rounded-xl shadow-lg flex items-center justify-center">
          <Image
            src={BobCycling}
            alt="Cyclist"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="p-8">
          <Heading2
            text="Riders"
            align="left"
            size="3xl"
            fontWeight="bold"
            margin="mb-4"
          />
          <div className="text-left text-black">
            <p className="text-lg mb-8">
              Turn your daily bicycle rides into a source of passive income by
              becoming a bicycle advertiser with OutFront. Join our community of
              drivers and start earning while you ride.
            </p>
            <Button
              text="Get Started"
              color="dutch"
              onClick={() => goToPage("/riders")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
