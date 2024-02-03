"use client";

import React from "react";
import Form from "../../components/Form";
import { FormData } from "@/types/types";
import Heading2 from "@/app/layout/Heading2";

const BrandSignUp = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="brand-signUp"
      className="container mx-auto py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
    >
      <div className="flex flex-wrap justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-indigo-700">
          <div className="p-6 md:p-10 text-center">
            <Heading2
              text="Partner With Us"
              color="dark"
              align="center"
              className="p-2 mb-4"
            />

            <p className="text-gray-600 mb-8">
              Elevate your brand with our unique bicycle ad platform. Innovative
              and impactful advertising awaits.
            </p>
            <Form
              formType="brand"
              formClass="mx-auto"
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSignUp;
