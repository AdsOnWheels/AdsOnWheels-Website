"use client";

import React from "react";
import Heading1 from "../layout/Heading1";
import Button from "./Button";

const CallToAction2 = () => {
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
    <section
      id="call-to-action"
      className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 text-white py-16 text-center"
    >
      <Heading1
        text="Ready to Monetize Your Ride?"
        className="text-white text-5xl font-extrabold"
      />
      <p className="text-xl mt-4 mb-6">
        Join our platform and start earning money while you ride.
      </p>
      <Button
        text="Join Waiting List"
        color="dutch"
        className="font-bold"
        onClick={() => scrollToTarget("join-now")}
      />
    </section>
  );
};

export default CallToAction2;
