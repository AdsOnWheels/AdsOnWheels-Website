"use client";

import React from "react";
import Title from "../../layout/Title";
import Form from "../../components/Form";
import { FormData } from "@/types/types";

const RiderSignUp = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 via-indigo-800 to-indigo-500 py-16">
      <Title
        id="join-now"
        title="BECOME A RIDER"
        className="text-center text-5xl lg:text-6xl font-extrabold text-gray-200 mb-16"
      />
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section - Encouraging Text/Image */}
        <div className="md:flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <Title
              title="Join Our Riding Force!"
              className="text-white text-5xl font-extrabold mb-6"
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
            formClass="mx-auto"
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default RiderSignUp;
