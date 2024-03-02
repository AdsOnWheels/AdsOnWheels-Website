"use client";

import React, { ReactNode } from "react";

type Props = {
  name?: string;
  label?: string | ReactNode;
  checked: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  color?: "primary" | "dark" | "dutch";
};

const colorClasses = {
  primary: "checked:bg-blue-500 checked:focus:ring-indigo-blue-700",
  dark: "checkbox",
  dutch: "checked:bg-gray-900 required:border-red-500 appearance-none",
};

const Checkbox = ({
  name,
  label,
  checked,
  required,
  onChange,
  color = "dutch",
  className,
}: Props) => {
  const checkedColorClass = colorClasses[color] || colorClasses.primary;

  const inputClasses = `h-4 w-4 ${checkedColorClass} mt-3 border border-gray-400 rounded ${
    className || ""
  }`;

  return (
    <div className="flex items-center ml-4">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={inputClasses}
        required={required}
      />
      {label && (
        <label className="ml-2 mt-3 block text-sm text-gray-900">{label}</label>
      )}
    </div>
  );
};

export default Checkbox;
