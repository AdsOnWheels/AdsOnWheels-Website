"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import Form from "../../components/Form";
import Heading2 from "@/app/layout/Heading2";
import { brandSchema } from "@/app/schemas/brandSchema";
import {
  setCompany,
  setIndustry,
  setWebsite,
  setPostCode,
  setTitle,
  setFirstName,
  setLastName,
  setBusinessEmail,
  setPhone,
  setAdType,
  setBudget,
  setTargetAudience,
  setConsent,
  selectBrandFormData,
} from "@/redux/slices/brandForm";
import { Brand } from "@/types/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const BrandSignUp = () => {
  const brandFormData = useSelector(selectBrandFormData);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();

  const {
    company,
    industry,
    website,
    postCode,
    title,
    firstName,
    lastName,
    businessEmail,
    phone,
    adType,
    budget,
    targetAudience,
    consent,
  } = brandFormData;

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof Brand;
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
      !company ||
      !industry ||
      !website ||
      !postCode ||
      !title ||
      !firstName ||
      !lastName ||
      !businessEmail ||
      !phone ||
      !adType ||
      !budget ||
      !targetAudience ||
      !consent
    ) {
      toast.error("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = brandSchema.safeParse(brandFormData);

      if (!validFormData.success) {
        console.error("Invalid information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to sign up the brand user
      const res = await fetch("/api/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if signup was successful
      if (!res.ok) {
        setPending(false);
        throw new Error("Failed to create brand user");
      }

      const newBrand = await res.json();

      toast.success(
        `Thank you, ${newBrand?.firstName}! Your application has been submitted successfully.`
      );
      setPending(false);
    } catch (error) {
      console.error("Error creating brand user:", error);
      toast.error("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  // Dynamically get the action creator based on the input field name
  const getAction = (name: keyof Brand) => {
    const actionMap: Record<keyof Brand, ActionCreatorWithPayload<any, any>> = {
      company: setCompany,
      industry: setIndustry,
      website: setWebsite,
      postCode: setPostCode,
      title: setTitle,
      firstName: setFirstName,
      lastName: setLastName,
      businessEmail: setBusinessEmail,
      phone: setPhone,
      adType: setAdType,
      budget: setBudget,
      targetAudience: setTargetAudience,
      consent: setConsent,
    };
    return actionMap[name];
  };

  return (
    <section
      id="brand-signUp"
      className="container mx-auto py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
    >
      <Toaster />
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
              maxWidth="max-w-9/12"
              margin="mx-auto"
              padding="p-6"
              pending={pending}
              formData={brandFormData}
              onSubmit={handleSubmit}
              handleFormData={handleFormData}
              isConsentGiven={isConsentGiven}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSignUp;
