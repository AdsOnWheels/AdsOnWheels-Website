import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import { TablePaginationProps } from "@/types/types";

const TablePagination = ({
  pagination,
  showTotalEntries,
  entriesStart,
  entriesEnd,
  rows,
  gotoPage,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  pageIndex,
  pageCount,
  pageOptions,
}: TablePaginationProps) => {
  return (
    pagination && (
      <div
        className={`flex ${
          showTotalEntries ? "flex-col sm:flex-row" : "flex-col"
        } justify-between items-${
          showTotalEntries ? "center" : "start"
        } pt-1 pb-6 px-6`}
      >
        {showTotalEntries && (
          <div className={`mb-${showTotalEntries ? "3" : "0"}`}>
            <p className="text-secondary font-normal text-sm">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="mr-2">
            <button
              className="border border-gray-300 rounded-full px-2 py-0.5 mr-1"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className="w-3.5 h-4 text-bold text-gray-500"
              />
            </button>
            <button
              className="border border-gray-300 rounded-full px-2 py-0.5 mr-1"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="w-3.5 h-4 text-bold text-gray-500"
              />
            </button>
            {[...Array(pageOptions.length)].map((_, index) => (
              <button
                key={index}
                className={`border border-gray-300 rounded-full px-2.5 py-0.5 mr-1 ${
                  index === pageIndex
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 dark:bg-gray-950"
                }`}
                onClick={() => gotoPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="border border-gray-300 rounded-full px-2 py-0.5 mr-1"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className="w-3.5 h-4 text-bold text-gray-500"
              />
            </button>
            <button
              className="border border-gray-300 rounded-full px-2 py-0.5"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="w-3.5 h-4 text-bold text-gray-500"
              />
            </button>
          </div>
          <div>
            <span>
              | Go to page:{" "}
              <input
                type="number"
                value={pageIndex + 1}
                onChange={(e) => {
                  const inputPage = parseInt(e.target.value);
                  if (
                    !isNaN(inputPage) &&
                    inputPage > 0 &&
                    inputPage <= pageCount
                  ) {
                    gotoPage(inputPage - 1);
                  } else if (inputPage <= 0) {
                    gotoPage(0);
                  } else {
                    gotoPage(pageCount - 1);
                  }
                }}
                className="w-[50px] dark:bg-gray-950 border border-gray-300 px-2 py-0.5 rounded"
              />
            </span>{" "}
          </div>
        </div>
      </div>
    )
  );
};

export default TablePagination;
