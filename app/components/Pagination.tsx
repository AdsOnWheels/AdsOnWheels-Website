import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  itemCount: number;
  currentPage: number;
  pageSize: number;
  showTotalEntries?: boolean;
  entriesStart?: number;
  entriesEnd?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  itemCount,
  currentPage,
  pageSize,
  showTotalEntries,
  entriesStart,
  entriesEnd,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);

  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const gotoPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pageCount) {
      setCurrentPageIndex(pageIndex);
      const params = new URLSearchParams(searchParams);
      params.set("page", (pageIndex + 1).toString()); // Increment pageIndex by 1 to match page numbers
      router.push("?" + params.toString());
    }
  };

  const previousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      const params = new URLSearchParams(searchParams);
      params.set("page", currentPageIndex.toString());
      router.push("?" + params.toString());
    }
  };

  const nextPage = () => {
    if (currentPageIndex < pageCount - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      const params = new URLSearchParams(searchParams);
      params.set("page", (currentPageIndex + 2).toString()); // Increment currentPageIndex by 2 to match page numbers
      router.push("?" + params.toString());
    }
  };

  const canPreviousPage: boolean = currentPageIndex > 0;
  const canNextPage: boolean = currentPageIndex < pageCount - 1;

  const pageOptions: number[] = Array.from({ length: pageCount }, (_, i) => i); // Fixed: Generate pageOptions based on pageCount

  return (
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
            Showing {entriesStart} to {entriesEnd} of {itemCount} entries
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
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="w-3.5 h-4 text-bold text-gray-500"
            />
          </button>
          {pageOptions.map((index) => (
            <button
              key={index}
              className={`border border-gray-300 rounded-full px-2.5 py-0.5 mr-1 ${
                index === currentPageIndex
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
            onClick={nextPage}
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
              value={currentPageIndex + 1} // Fixed: Use currentPageIndex instead of pageIndex
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
  );
};

// { searchParams }: { searchParams: { page: string } }

{
  /* <Pagination
            itemCount={500}
            pageSize={40}
            currentPage={parseInt(searchParams.page)}
          /> */
}

export default Pagination;
