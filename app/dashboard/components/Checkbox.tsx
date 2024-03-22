"use client";

import React, { useState } from "react";

interface Props {
  label: string;
}

const Checkbox = ({ label }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm leading-normal">{label}</span>
      <div className="min-h-6 mb-0.5 block pl-12">
        <input
          checked={isChecked}
          onChange={handleToggle}
          className="rounded-full duration-[250ms] ease-in-out after:rounded-full after:shadow-2xl after:duration-[250ms] checked:after:translate-x-full h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-[19px] after:translate-x-px after:bg-white after:content-[''] dark:checked:border-slate-800/95 dark:checked:bg-slate-800/95 checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default Checkbox;
