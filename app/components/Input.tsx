"use client";

import React from "react";

type Props = {
  type?: "text" | "number" | "email";
  label?: string;
  name?: string;
  value?: string | number;
  required?: boolean;
  readOnly?: boolean;
  placeHolder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

/**
 * Input component for displaying a styled input field.
 *
 * @param {object} props - The component's props.
 * @param {string} props.label - The label for the input field.
 * @param {string|number} props.value - The current value of the input field.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - The change event handler for the input field.
 * @param {string} [props.className] - Custom CSS classes to apply to the input field.
 * @returns {JSX.Element} The rendered Input component.
 */

const Input = ({
  type = "text",
  label,
  name,
  value,
  required,
  readOnly,
  placeHolder,
  onChange,
  className,
}: Props): JSX.Element => {
  const inputClasses = `w-full px-5 py-3 mt-6 bg-opacity-80 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 appearance-none ${
    className || ""
  }`;

  return (
    <div>
      {label && (
        <label className="block text-gray-700 text-sm text-left font-bold capitalize my-2">
          {label}
        </label>
      )}
      <input
        key={name}
        name={name}
        type={type}
        value={value}
        required={required}
        readOnly={readOnly}
        placeholder={placeHolder}
        onChange={onChange}
        className={inputClasses}
      />
    </div>
  );
};

export default Input;
