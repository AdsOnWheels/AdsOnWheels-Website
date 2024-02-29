"use client";

import React, { ChangeEvent } from "react";

type Option = {
  value: string | number;
  text: string;
};

type Props = {
  name?: string;
  label?: string;
  options: Option[];
  value: string;
  placeHolder?: string;
  className?: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
};

const Select: React.FC<Props> = ({
  name,
  label,
  options,
  value,
  placeHolder,
  className,
  onChange,
  required,
}) => {
  const selectClasses = `w-full text-gray-500 px-5 py-3 mt-6 bg-opacity-80 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 appearance-none ${
    className || ""
  }`;

  return (
    <div>
      {label && (
        <label className="block text-gray-700 text-sm text-left font-bold capitalize my-2">
          {label}
        </label>
      )}
      <select
        id={name}
        key={name}
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        title={placeHolder}
        defaultValue=""
        required={required}
      >
        {placeHolder && (
          <option value="" disabled>
            {placeHolder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
