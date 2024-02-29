import { DataTableHeadCellProps } from "@/types/types";
import React from "react";

const DataTableHeadCell: React.FC<DataTableHeadCellProps> = ({
  key,
  width = "auto",
  children,
  sorted,
  align = "left",
  ...rest
}) => {
  return (
    <th
      key={key}
      className={`text-gray-500 py-1.5 px-6 border-b border-gray-200 ${width}`}
      {...rest}
    >
      <div
        className={`relative text-${align} uppercase font-bold text-xs cursor-${
          sorted ? "pointer" : "default"
        } select-none`}
      >
        {children}
        {sorted && (
          <div
            className={`absolute top-0 ${
              align !== "right" ? "right-5" : "left-0"
            } ${align === "right" ? "-left-5" : "left-unset"}`}
          >
            <div className="text-center text-md">
              <div
                className={`absolute top-[-2px] ${
                  sorted === "asce" ? "text-black" : "text-gray-500"
                } opacity-${sorted === "asc" ? "100" : "50"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  stroke="currentColor"
                  className="w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
              <div
                className={`absolute top-2 ${
                  sorted === "desc" ? "text-black" : "text-gray-500"
                } opacity-${sorted === "desc" ? "100" : "50"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  stroke="currentColor"
                  className="w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </th>
  );
};

export default DataTableHeadCell;
