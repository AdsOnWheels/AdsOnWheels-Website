import React from "react";

interface EntriesPerPageDropdownProps {
  value: number;
  options: string[] | number[];
  onChange: (value: number) => void;
}

const EntriesPerPageDropdown: React.FC<EntriesPerPageDropdownProps> = ({
  value,
  options,
  onChange,
}) => {
  return (
    <select
      className="border border-gray-300 rounded px-2 py-1"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default EntriesPerPageDropdown;
