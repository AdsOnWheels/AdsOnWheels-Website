import React from "react";

type Props = {
  name?: string;
  label?: string;
  checked: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  color?: "primary" | "dutch";
};

const colorClasses = {
  primary: "checked:bg-blue-500 checked:focus:ring-indigo-blue-700",
  dutch:
    "checked:bg-[#ff4f00] focus:ring-indigo-[#ff621a] required:border-red-500",
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
