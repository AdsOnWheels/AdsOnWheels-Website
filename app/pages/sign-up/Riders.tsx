"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import Form from "../../components/Form";
import Heading2 from "../../layout/Heading2";
import { riderSchema } from "@/app/schemas/riderSchema";
import {
  setFullName,
  setEmail,
  setPhoneNumber,
  setCityRegion,
  setPostCode,
  setBicycleType,
  setCyclingDistance,
  setBicycleCondition,
  setImageUrl,
  setRegularRoutes,
  setAvailability,
  setInterestReason,
  setAdditionalComments,
  setConsent,
  selectRiderFormData,
} from "@/redux/slices/riderForm";
import { Rider } from "@/types/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const RiderSignUp = () => {
  const riderFormData = useSelector(selectRiderFormData);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();

  const {
    fullName,
    email,
    phoneNumber,
    cityRegion,
    postCode,
    bicycleType,
    cyclingDistance,
    bicycleCondition,
    imageUrl,
    regularRoutes,
    availability,
    interestReason,
    additionalComments,
    consent,
  } = riderFormData;

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof Rider;
    dispatch(getAction(fieldName)(value));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsConsentGiven(isChecked);
    dispatch(setConsent(isChecked));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !cityRegion ||
      !postCode ||
      !bicycleType ||
      !cyclingDistance ||
      !bicycleCondition ||
      !imageUrl ||
      !regularRoutes ||
      !availability ||
      !interestReason ||
      !additionalComments ||
      !consent
    ) {
      toast.error("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = riderSchema.safeParse(riderFormData);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to sign up the rider user
      const res = await fetch("/api/riders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if signup was successful
      if (!res.ok) {
        setPending(false);
        throw new Error("Failed to create rider user");
      }

      const newRider = await res.json();

      toast.success(
        `Thank you, ${newRider?.fullName}! You've successfully signed up as a rider.`
      );
      setPending(false);
    } catch (error) {
      console.error("Error creating rider user:", error);
      toast.error("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  // Dynamically get the action creator based on the input field name
  const getAction = (name: keyof Rider) => {
    const actionMap: Record<keyof Rider, ActionCreatorWithPayload<any, any>> = {
      fullName: setFullName,
      email: setEmail,
      phoneNumber: setPhoneNumber,
      cityRegion: setCityRegion,
      postCode: setPostCode,
      bicycleType: setBicycleType,
      cyclingDistance: setCyclingDistance,
      bicycleCondition: setBicycleCondition,
      imageUrl: setImageUrl,
      regularRoutes: setRegularRoutes,
      availability: setAvailability,
      interestReason: setInterestReason,
      additionalComments: setAdditionalComments,
      consent: setConsent,
    };
    return actionMap[name];
  };

  return (
    <section
      id="rider-signUp"
      className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 py-24"
    >
      <Toaster />
      <div className="text-center mb-16">
        <Heading2
          text="Join Our Riding Force!"
          color="light"
          className="mb-6"
        />
        <p className="text-white text-xl mb-4">
          Become a part of the revolution in mobile advertising.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section - Encouraging Text/Image */}
        <div className="md:flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            {/* Add an image if needed */}
            {/* <img src="path-to-your-image.jpg" alt="Encouraging Drivers" className="mt-4 max-w-full h-auto" /> */}
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="md:flex-1 bg-white p-8 mr-8 rounded-3xl">
          <Form
            formType="waitingList"
            maxWidth="max-w-lg"
            margin="mx-auto"
            padding="p-6"
            pending={pending}
            formData={riderFormData}
            onSubmit={handleSubmit}
            handleFormData={handleFormData}
            isConsentGiven={isConsentGiven}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </section>
  );
};

export default RiderSignUp;
