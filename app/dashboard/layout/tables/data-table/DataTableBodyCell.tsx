import React from "react";
import { DataTableBodyCellProps } from "@/types/types";

const DataTableBodyCell: React.FC<DataTableBodyCellProps> = ({
  children,
  noBorder = false,
  align = "left",
}) => {
  return (
    <td
      className={`dark:text-white/80 text-sm font-normal leading-normal py-2 px-6  ${
        align === "right"
          ? "text-right"
          : align === "center"
          ? "text-center"
          : "text-left"
      } ${noBorder ? "" : "border-[1px] border-x-0"}`}
    >
      <div className="inline-block w-max align-middle">{children}</div>
    </td>
  );
};

export default DataTableBodyCell;
