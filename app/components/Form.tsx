"use client";

import React, { useState, ChangeEvent, FormEventHandler } from "react";
import Link from "next/link";

import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import ImageUploadInput from "./ImageUploadInput";
import formConfig from "@/app/config/formConfig";
import { RiderFormData, BrandFormData, ContactFormData } from "@/types/types";

interface Field {
  name: string;
  placeHolder: string;
  type: string;
  options?: { value: string; text: string }[];
  required?: boolean;
}

interface Props {
  formData: RiderFormData | BrandFormData | ContactFormData;
  formType: "rider" | "contact" | "brand" | "waitingList";
  maxWidth?: string;
  margin?: string;
  padding?: string;
  pending: boolean;
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleFormData: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  isConsentGiven: boolean;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({
  formData,
  formType,
  maxWidth,
  margin,
  padding,
  pending,
  onSubmit,
  handleFormData,
  isConsentGiven,
  handleCheckboxChange,
}: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderField = (field: Field) => {
    // Check if the field is ImageUploadInput
    if (field.name === "bikePhoto") {
      return (
        <ImageUploadInput
          key={field.name}
          name={field.name}
          required={field.required}
        />
      );
    }

    const fieldValue = formData
      ? (formData as unknown as { [key: string]: string })[field.name]
      : undefined;

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
            onChange={handleFormData}
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
            onChange={handleFormData}
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
            onChange={handleFormData}
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
      // Check if there's an odd number of select fields and if the current field is the last one
      const isOddNumberOfFields = selectFields.length % 2 !== 0;
      const isLastField = i === selectFields.length - 1;

      // Determine the number of columns based on whether it's an odd number of fields and the position of the current field
      const gridColumnClass =
        isOddNumberOfFields && isLastField ? "col-span-full" : "col-span-2";

      fieldPairs.push(
        <div
          className={`grid ${
            isOddNumberOfFields ? "md:grid-cols-1" : "md:grid-cols-2"
          } gap-x-4`}
          key={`pair-${i}`}
        >
          {renderField(selectFields[i])}
          {selectFields[i + 1] ? (
            renderField(selectFields[i + 1])
          ) : (
            // Render an empty div to maintain the grid structure
            <div></div>
          )}
        </div>
      );
    }

    return fieldPairs;
  };

  const totalSteps = formConfig[formType].steps.length;

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

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

      <form onSubmit={onSubmit}>
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
            label={
              <>
                I agree to the{" "}
                <Link href="/legal/terms-of-use" className="underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/legal/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
                .
              </>
            }
            checked={isConsentGiven}
            color="dark"
            onChange={(e) => handleCheckboxChange(e)}
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
                formType === "waitingList"
                  ? pending
                    ? "Joining"
                    : "Join"
                  : pending
                  ? "Submitting"
                  : "Submit"
              }`}
              color="dutch"
              className="mt-8"
              disabled={pending ? true : false}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
