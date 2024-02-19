import React from "react";
import { DataTableBodyCellProps } from "@/types/types";

const DataTableBodyCell: React.FC<DataTableBodyCellProps> = ({
  key,
  noBorder = false,
  align = "left",
  children,
  ...rest
}) => {
  return (
    <td
      key={key}
      className={`text-sm font-normal leading-normal py-2 px-6  ${
        align === "right"
          ? "text-right"
          : align === "center"
          ? "text-center"
          : "text-left"
      } ${noBorder ? "" : "border-[1px]"}`}
      {...rest}
    >
      {children}
    </td>
  );
};

export default DataTableBodyCell;
