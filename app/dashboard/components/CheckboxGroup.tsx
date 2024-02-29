import React from "react";
import Checkbox from "./Checkbox";

interface Props {
  title: string;
  items: string[];
}

const CheckboxGroup = ({ title, items }: Props) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-800 dark:shadow-2xl rounded-2xl bg-clip-border">
      <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
        <h6 className="mb-0 dark:text-white">{title}</h6>
      </div>
      <div className="flex-auto p-4">
        {items.map((item, index) => (
          <Checkbox key={index} label={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
