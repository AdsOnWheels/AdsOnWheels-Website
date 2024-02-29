import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: Props) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        className="dark:bg-slate-800 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5 ease-linear block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
