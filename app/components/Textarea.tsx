"use client";

import React, { ChangeEvent } from "react";

type TextareaProps = {
  name?: string;
  value: string;
  placeHolder?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  placeHolder,
  className,
  onChange,
  required,
  rows = 4,
}) => {
  const textareaClasses = `w-full text-black px-5 py-3 mt-6 bg-opacity-80 bg-white border border-gray-400 rounded-3xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 appearance-none ${
    className || ""
  }`;

  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      className={textareaClasses}
      rows={rows}
      required={required}
    ></textarea>
  );
};

export default Textarea;
