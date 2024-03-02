"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Heading2 from "../../layout/Heading2";
import Form from "../../components/Form";
import { riderSchema } from "@/app/schemas/riderSchema";
import toast, { Toaster } from "react-hot-toast";

const RiderSignUp = () => {
  const [pending, setPending] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    cityRegion: "",
    postCode: "",
    bicycleType: "",
    cyclingDistance: "",
    bicycleCondition: "",
    imageUrl: "",
    regularRoutes: "",
    availability: "",
    interestReason: "",
    additionalComments: "",
  });

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Your logic to handle form data changes
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsConsentGiven(isChecked);

    // Update the consent field in the form data
    setFormData((prev) => ({
      ...prev,
      consent: isChecked,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.cityRegion ||
      !formData.postCode ||
      formData.bicycleType ||
      formData.cyclingDistance ||
      formData.bicycleCondition ||
      formData.imageUrl ||
      !formData.regularRoutes ||
      formData.availability ||
      !formData.interestReason
    ) {
      toast.error("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = riderSchema.safeParse(formData);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to sign up the rider user
      const res = await fetch("/api/rider", {
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

      const user = await res.json();

      console.log(`Hey! ${user.name}. Form successfully submitted.`);
    } catch (error) {
      console.error("Error creating rider user:", error);
      toast.error("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  return (
    <section
      id="rider-signUp"
      className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 py-16"
    >
      <Toaster />
      <Heading2
        text="BECOME A RIDER"
        color="light"
        align="center"
        className="mb-16"
      />
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section - Encouraging Text/Image */}
        <div className="md:flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <Heading2
              text="Join Our Riding Force!"
              color="white"
              className="mb-6"
            />
            <p className="text-white text-xl mb-4">
              Become a part of the revolution in mobile advertising.
            </p>
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
            formData={formData}
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
