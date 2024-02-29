"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import { FormData } from "@/types/types";

interface Field {
  name: string;
  placeHolder: string;
  type: string;
  options?: { value: string; text: string }[];
  required?: boolean;
}

interface Step {
  placeHolder: string;
  fields: Field[];
}

interface Props {
  onSubmit: (formData: FormData) => void;
  formType: "rider" | "contact" | "brand" | "waitingList";
  maxWidth?: string;
  margin?: string;
  padding?: string;
}

const Form = ({ onSubmit, formType, maxWidth, margin, padding }: Props) => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+31",
    phoneNumber: "",
    "type of bicycle": "",
    make: "",
    model: "",
    year: new Date().getFullYear(),
    color: "",
    condition: "",
    foundUs: "",
    drivingRoutine: "",
    address: "",
    city: "",
    "state/province": "",
    postcode: "",
    averageMilesPerWeek: "",
    averageMilesPerWeekend: "",
    rideShareDriver: false,
  });

  const countryCodeOptions = [
    { value: "+31", text: "+31 (Netherlands)" },
    { value: "+32", text: "+32 (Belgium)" },
    { value: "+352", text: "+352 (Luxembourg)" },
    { value: "+33", text: "+33 (France)" },
    { value: "+49", text: "+49 (Germany)" },
    { value: "+44", text: "+44 (United Kingdom)" },
    { value: "+34", text: "+34 (Spain)" },
    { value: "+39", text: "+39 (Italy)" },
    { value: "+41", text: "+41 (Switzerland)" },
    { value: "+43", text: "+43 (Austria)" },
    { value: "+420", text: "+420 (Czech Republic)" },
    { value: "+45", text: "+45 (Denmark)" },
    { value: "+46", text: "+46 (Sweden)" },
  ];

  const formConfig = {
    rider: {
      title: "Rider Sign Up",
      steps: [
        {
          placeHolder: "Personal Info",
          fields: [
            {
              name: "firstName",
              placeHolder: "First Name*",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              placeHolder: "Last Name*",
              type: "text",
              required: true,
            },
            {
              name: "email",
              placeHolder: "Email*",
              type: "email",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Contact Info",
          fields: [
            {
              name: "phone",
              placeHolder: "Phone*",
              type: "text",
              required: true,
            },
            {
              name: "preferredCommunicationMethod",
              placeHolder: "Preferred Communication Method*",
              type: "select",
              required: true,
              options: [
                { value: "email", text: "Email" },
                { value: "phone", text: "Phone" },
              ],
            },
            {
              name: "city",
              placeHolder: "City*",
              type: "text",
              required: true,
            },
            {
              name: "stateProvince",
              placeHolder: "State/Province*",
              type: "text",
              required: true,
            },
            {
              name: "postcode",
              placeHolder: "Postcode*",
              type: "text",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Bicycle Details",
          fields: [
            {
              name: "bicycleType",
              placeHolder: "Type of Bicycle*",
              type: "select",
              required: true,
              options: [
                { value: "Race Bike", text: "Race Bike" },
                { value: "Mountain Bike", text: "Mountain Bike" },
                { value: "City Bike", text: "City Bike" },
                { value: "Cargo Bike", text: "Cargo Bike" },
                { value: "Single-Speed Bike", text: "Single-Speed Bike" },
                { value: "Commuter Bike", text: "Commuter Bike" },
                { value: "BMX Bike", text: "BMX Bike" },
                { value: "Touring Bike", text: "Touring Bike" },
                { value: "Electric Bike", text: "Electric Bike" },
                { value: "Hybrid Bike", text: "Hybrid Bike" },
                { value: "Other", text: "Other" },
              ],
            },
            {
              name: "bicycleMake",
              placeHolder: "Bicycle Make (Brand)*",
              type: "select",
              required: true,
              options: [
                { value: "trek", text: "Trek" },
                { value: "specialized", text: "Specialized" },
                { value: "giant", text: "Giant" },
                { value: "cannondale", text: "Cannondale" },
                { value: "schwinn", text: "Schwinn" },
                { value: "cervelo", text: "Cervelo" },
                { value: "bianchi", text: "Bianchi" },
                { value: "santa_cruz", text: "Santa Cruz" },
                { value: "kona", text: "Kona" },
                { value: "scott", text: "Scott" },
                { value: "other_bicycle_make", text: "Other" },
              ],
            },
            {
              name: "color",
              placeHolder: "Color*",
              type: "select",
              required: true,
              options: [
                { value: "red", text: "Red" },
                { value: "blue", text: "Blue" },
                { value: "green", text: "Green" },
                { value: "yellow", text: "Yellow" },
                { value: "black", text: "Black" },
                { value: "white", text: "White" },
                { value: "silver", text: "Silver" },
                { value: "orange", text: "Orange" },
                { value: "purple", text: "Purple" },
                { value: "pink", text: "Pink" },
                { value: "other_color", text: "Other" },
              ],
            },
            // {
            //   name: "adPlacementPreferences",
            //   placeHolder: "Ad Placement Preferences*",
            //   type: "select",
            //   required: false,
            //   options: [
            //     { value: "front_basket", text: "Front Basket" },
            //     { value: "rear_basket", text: "Rear Basket" },
            //     { value: "frame", text: "Frame" },
            //     { value: "in_between_frames", text: "In Between Frames" },
            //     { value: "other_placement", text: "Other" },
            //   ],
            // },
            // Ad Placement Preferences: This might be better as a discussion after signup, as riders may need more information to make this choice.
            {
              name: "cyclingDistance",
              placeHolder: "Average Daily/Weekly Cycling Distance*",
              type: "select",
              required: true,
              options: [
                { value: "less_than_5_miles", text: "Less than 5 miles" },
                { value: "5_10_miles", text: "5-10 miles" },
                { value: "10_20_miles", text: "10-20 miles" },
                { value: "20_30_miles", text: "20-30 miles" },
                { value: "more_than_30_miles", text: "More than 30 miles" },
              ],
            },
            {
              name: "bicycleCondition",
              placeHolder: "Bicycle Condition*",
              type: "select",
              required: true,
              options: [
                { value: "excellent", text: "Excellent" },
                { value: "good", text: "Good" },
                { value: "average", text: "Average" },
                { value: "Damaged", text: "Damaged" },
              ],
            },
            {
              name: "regularRoutes",
              placeHolder: "Regular Cycling Routes or Areas*",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },

    contact: {
      title: "Contact Us",
      steps: [
        {
          placeHolder: "Your Details",
          fields: [
            {
              name: "firstName",
              placeHolder: "First Name*",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              placeHolder: "Last Name*",
              type: "text",
              required: true,
            },
            {
              name: "email",
              placeHolder: "Email*",
              type: "email",
              required: true,
            },
            {
              name: "message",
              placeHolder: "Message*",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },
    brand: {
      title: "Brand Sign Up",
      steps: [
        {
          placeHolder: "Company Info",
          fields: [
            {
              name: "company",
              placeHolder: "Company*",
              type: "text",
              required: true,
            },

            {
              name: "industry",
              placeHolder: "Industry*",
              type: "select",
              required: true,
              options: [
                { value: "government", text: "Government" },
                { value: "entertainment", text: "Entertainment" },
                { value: "healthcare", text: "Healthcare" },
                { value: "education", text: "Education" },
                {
                  value: "technology_software",
                  text: "Technology and Software",
                },
                { value: "restaurants", text: "Restaurants" },
                { value: "retail_stores", text: "Retail Stores" },
                { value: "fitness_centers", text: "Fitness Centers" },
                { value: "event_venues", text: "Event Venues" },
                { value: "local_services", text: "Local Services" },
                { value: "hotels", text: "Hotels" },
                { value: "coffee_shops", text: "Coffee Shops" },
                { value: "art_galleries", text: "Art Galleries" },
                { value: "other", text: "Other" },
              ],
            },
            {
              name: "website",
              placeHolder: "Website",
              type: "text",
              required: false,
            },
            {
              name: "postCode",
              placeHolder: "Post Code*",
              type: "text",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Contact Person",
          fields: [
            {
              name: "title",
              placeHolder: "Title*",
              type: "text",
              required: true,
            },
            {
              name: "firstName",
              placeHolder: "First Name*",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              placeHolder: "Last Name*",
              type: "text",
              required: true,
            },
            {
              name: "businessEmail",
              placeHolder: "Business Email*",
              type: "email",
              required: true,
            },
            {
              name: "phone",
              placeHolder: "Phone*",
              type: "text",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Ad Details",
          fields: [
            {
              name: "adType",
              placeHolder: "Ad Type*",
              type: "select",
              required: true,
              options: [
                { value: "frame-ads", text: "Bicycle Frame Ads" },
                { value: "between-frames-ads", text: "Between Frames Ads" },
                { value: "basket-ads", text: "Bicycle Basket Ads" },
                { value: "wheel-rim-ads", text: "Wheel Rim Cover Ads" },
              ],
            },
            {
              name: "budget",
              placeHolder: "What is your estimated budget*",
              type: "select",
              required: true,
              options: [
                { value: "€5K-€10K", text: "€5K - €10K" },
                { value: "€10K-€20K", text: "€10K - €20K" },
                { value: "€20K-€50K", text: "€20K - €50K" },
                { value: "more_than_€50K", text: "More than €50K" },
              ],
            },
            {
              name: "targetAudience",
              placeHolder:
                "Are you interested in targeting a specific audience at locations such as train stations, city centers, or events like sporting events, music concerts, or festivals?",
              type: "textarea",
              required: false,
            },
          ],
        },
      ],
    },
    waitingList: {
      steps: [
        {
          placeHolder: "Personal Info",
          fields: [
            {
              name: "fullName",
              placeHolder: "Full Name*",
              type: "text",
              required: true,
            },
            {
              name: "email",
              placeHolder: "Email Address*",
              type: "email",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Contact Info",
          fields: [
            {
              name: "phoneNumber",
              placeHolder: "Phone Number*",
              type: "text",
              required: true,
            },
            {
              name: "cityRegion",
              placeHolder: "City/Region*",
              type: "text",
              required: true,
            },
            {
              name: "postCode",
              placeHolder: "Post Code*",
              type: "text",
              required: true,
            },
          ],
        },
        {
          placeHolder: "Bicycle Details",
          fields: [
            {
              name: "bicycleType",
              placeHolder: "Type of Bicycle*",
              type: "select",
              required: true,
              options: [
                { value: "Race Bike", text: "Race Bike" },
                { value: "Mountain Bike", text: "Mountain Bike" },
                { value: "City Bike", text: "City Bike" },
                { value: "Cargo Bike", text: "Cargo Bike" },
                { value: "Single-Speed Bike", text: "Single-Speed Bike" },
                { value: "Commuter Bike", text: "Commuter Bike" },
                { value: "BMX Bike", text: "BMX Bike" },
                { value: "Touring Bike", text: "Touring Bike" },
                { value: "Electric Bike", text: "Electric Bike" },
                { value: "Hybrid Bike", text: "Hybrid Bike" },
                { value: "Other", text: "Other" },
              ],
            },
            {
              name: "cyclingDistance",
              placeHolder: "Average Daily/Weekly Cycling Distance*",
              type: "select",
              required: true,
              options: [
                { value: "less_than_5_miles", text: "Less than 5 miles" },
                { value: "5_10_miles", text: "5-10 miles" },
                { value: "10_20_miles", text: "10-20 miles" },
                { value: "20_30_miles", text: "20-30 miles" },
                { value: "more_than_30_miles", text: "More than 30 miles" },
              ],
            },
            {
              name: "bicycleCondition",
              placeHolder: "Bicycle Condition*",
              type: "select",
              required: true,
              options: [
                { value: "excellent", text: "Excellent" },
                { value: "good", text: "Good" },
                { value: "average", text: "Average" },
                { value: "Damaged", text: "Damaged" },
              ],
            },
            {
              name: "regularRoutes",
              placeHolder: "Regular Cycling Routes or Areas*",
              type: "textarea",
              required: true,
            },
            {
              name: "availability",
              placeHolder: "Availability for Ads",
              type: "select",
              required: true,
              options: [
                { value: "weekdays_mornings", text: "Weekday Mornings" },
                { value: "weekdays_afternoons", text: "Weekday Afternoons" },
                { value: "weekdays_evenings", text: "Weekday Evenings" },
                { value: "weekends_mornings", text: "Weekend Mornings" },
                { value: "weekends_afternoons", text: "Weekend Afternoons" },
                { value: "weekends_evenings", text: "Weekend Evenings" },
                { value: "anytime", text: "Anytime" },
                // { value: "custom", text: "Custom (Specify in Comments)" },
              ],
            },

            {
              name: "interestReason",
              placeHolder: "Why Are You Interested in OutFront?*",
              type: "textarea",
              required: true,
            },
            {
              name: "additionalComments",
              placeHolder: "Comments/Questions",
              type: "textarea",
              required: false,
            },
          ],
        },
      ],
    },
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (field: Field) => {
    const fieldValue = formData[field.name];

    switch (field.type) {
      case "text":
      case "email":
        return (
          <Input
            key={field.name}
            placeHolder={field.placeHolder}
            name={field.name}
            type={field.type}
            value={fieldValue ? fieldValue.toString() : ""}
            onChange={handleChange}
            required={field.required}
          />
        );
      case "textarea":
        return (
          <Textarea
            key={field.name}
            name={field.name}
            value={fieldValue ? fieldValue.toString() : ""}
            placeHolder={field.placeHolder}
            onChange={handleChange}
            rows={5}
            required={field.required}
          />
        );
      case "select":
        return (
          <Select
            key={field.name}
            name={field.name}
            placeHolder={field.placeHolder}
            value={fieldValue ? fieldValue.toString() : ""}
            onChange={handleChange}
            options={field.options || []}
            required={field.required}
          />
        );
      default:
        return null;
    }
  };

  const renderSelectFields = (fields: Field[]) => {
    // Filter out select fields and map them to an array of field pairs
    const selectFields = fields.filter((field) => field.type === "select");
    const fieldPairs = [];

    for (let i = 0; i < selectFields.length; i += 2) {
      fieldPairs.push(
        <div
          className="grid grid-cols-2 md:grid-cols-2 gap-x-4"
          key={`pair-${i}`}
        >
          {renderField(selectFields[i])}
          {selectFields[i + 1] ? (
            renderField(selectFields[i + 1])
          ) : (
            // Maintains the grid structure when there's an odd number of select fields
            <div></div>
          )}
        </div>
      );
    }

    return fieldPairs;
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsConsentGiven(e.target.checked);
  };

  const totalSteps = formConfig[formType].steps.length;

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentStep === formConfig[formType].steps.length) {
      onSubmit(formData);
    } else {
      handleNext();
    }
  };

  //  rounded-3xl shadow-md

  return (
    <div
      className={`flex flex-col justify-center ${maxWidth} ${margin} ${padding}`}
    >
      {/* Display steps only if form type is not 'contact' */}
      {formType !== "contact" && (
        <ul className="steps steps-vertical lg:steps-horizontal mb-6">
          {formConfig[formType].steps.map((step, index) => (
            <li
              key={index}
              className={`step ${
                index + 1 <= currentStep ? "step-primary" : "text-gray-500"
              }`}
            >
              {step.placeHolder}
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit}>
        {/* Render grouped select fields */}
        {renderSelectFields(formConfig[formType].steps[currentStep - 1].fields)}

        {/* Render other fields that are not selects */}
        {formConfig[formType].steps[currentStep - 1].fields
          .filter((field) => field.type !== "select")
          .map((field) => renderField(field))}

        {/* Render the checkbox only on the last step */}
        {currentStep === totalSteps && (
          <Checkbox
            name="consentCheckbox"
            label="I agree to the Terms and Conditions and Privacy Policy.*"
            checked={isConsentGiven}
            color="dutch"
            onChange={handleCheckboxChange}
            required={true}
          />
        )}

        {/* Navigation buttons */}
        <div
          className={`mt-6 ${
            currentStep === 1 ? "flex justify-center" : "flex justify-between"
          }`}
        >
          {currentStep > 1 && (
            <Button
              type="button"
              text="Back"
              color="neutral"
              onClick={handleBack}
              className="mt-8"
            />
          )}
          {currentStep < formConfig[formType].steps.length && (
            <Button
              type="button"
              text="Next"
              color="outline"
              onClick={handleNext}
              className="mt-8"
            />
          )}
          {currentStep === formConfig[formType].steps.length && (
            <Button
              type="submit"
              text={`${
                formType === "waitingList" ? "Join Waiting List" : "Submit"
              }`}
              color="dutch"
              className="mt-8"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
