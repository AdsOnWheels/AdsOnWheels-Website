"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Heading2 from "../layout/Heading2";
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

  const whyJoinList = [
    "Earn money effortlessly while cycling",
    "Flexible schedule - ride when it suits you",
    "No special equipment required",
    "Simple sign-up process - get started in minutes",
  ];

  return (
    <section
      id="call-to-action"
      className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 text-white py-24 text-center"
    >
      <Heading2
        text="Join the Ride, Start Earning Today!"
        color="white"
        align="center"
        margin="mb-6"
      />
      <p className="text-xl mb-9">
        {`Don't miss out on this opportunity to earn money while you ride. Join
        our platform now and start monetizing your daily rides!`}
      </p>
      <Button
        text="Join Waiting List"
        color="dutch"
        className="font-bold"
        onClick={() => scrollToTarget("rider-signUp")}
      />
      <div className="max-w-lg mx-auto mt-14">
        <p className="text-2xl font-bold mb-4 text-center">Why Join Us?</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyJoinList.map((item, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-6 w-6 mr-2 text-indigo-400"
              />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">
          <span className="font-semibold text-indigo-400">Hurry up!</span>{" "}
          Limited spots available! Join now and be part of the revolution in
          bike advertising.
        </p>
      </div>
    </section>
  );
};

export default CallToAction2;
