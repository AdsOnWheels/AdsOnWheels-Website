"use client";

import React from "react";
import Heading2 from "../../layout/Heading2";
import Form from "../../components/Form";
import { FormData } from "@/types/types";

const RiderSignUp = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="rider-signUp"
      className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 py-16"
    >
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
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default RiderSignUp;
