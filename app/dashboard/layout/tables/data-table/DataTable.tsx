import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
  TableState,
} from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";

import DataTableHeadCell from "./DataTableHeadCell";
import DataTableBodyCell from "./DataTableBodyCell";
import EntriesPerPageDropdown from "./EntriesPerPageDropdown";
import {
  CustomTableState,
  MyTableInstance,
  TableColumn,
  TableProps,
} from "@/types/types";
import debounceSearch from "@/app/dashboard/assets/theme/functions/debounceSearch";

const DataTable: React.FC<TableProps> = ({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  title,
  description,
  pagination,
  isSorted,
  noEndBorder,
  filter,
  onFilterChange,
}) => {
  const defaultValue = entriesPerPage.defaultValue
    ? entriesPerPage.defaultValue
    : 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : [5, 10, 15, 20, 25];
  const columns: any = useMemo(() => table.columns, [table.columns]);
  const data: any = useMemo(() => table.rows, [table.rows]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    state: { pageIndex, pageSize, globalFilter },
    setPageSize,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: entriesPerPage.defaultValue || 10,
      } as CustomTableState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as MyTableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue, setPageSize]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value: number) => setPageSize(value);

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useMemo(
    () =>
      debounce((value) => {
        setGlobalFilter(value || undefined);
      }, 300),
    [setGlobalFilter] // Dependency array to ensure the function is only created once
  );

  // useEffect to update the global filter when the filter prop changes
  useEffect(() => {
    onSearchChange(filter as string);
  }, [filter, onSearchChange]);

  // A function that sets the sorted value for the table
  const setSortedValue = (column: TableColumn) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // count for total entries
  const count = rows.length;

  // pageCount to hold length of table
  const pageCount = pageOptions.length;

  // Setting the entries starting point
  const entriesStart =
    pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <div className="w-full max-w-full px-3 flex-0">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-gray-950 dark:shadow-xl rounded-2xl">
        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
          <h5 className="mb-0 dark:text-white">{title}</h5>
          <p className="mb-0 text-sm text-gray-500 leading-normal">
            {description}
          </p>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-b-2xl dark:bg-gray-950 dark:shadow-xl bg-clip-border">
          <div className="overflow-x-auto ps">
            {/* Entries per page dropdown */}
            {entriesPerPage || canSearch ? (
              <div className="flex justify-between items-center p-6">
                {entriesPerPage && (
                  <div>
                    <EntriesPerPageDropdown
                      value={pageSize}
                      options={entries}
                      onChange={(newValue) => {
                        setEntriesPerPage(newValue);
                      }}
                    />
                    <span className="ml-2">entries per page</span>
                  </div>
                )}

                {/* Search input */}
                {canSearch && (
                  <div>
                    <input
                      id="globalSearch"
                      type="text"
                      className="px-2 py-1 border border-gray-300 focus:border-blue-400 rounded"
                      placeholder={`Search ${count} records...`}
                      value={search || ""}
                      onChange={(e) => {
                        const { value } = e.target;
                        setSearch(value);
                        onSearchChange(value);
                      }}
                    />
                  </div>
                )}
              </div>
            ) : null}
            <table
              {...getTableProps()}
              className="table-auto min-w-full divide-y divide-gray-200 rounded-none"
            >
              {/* Table Header */}
              <thead>
                {headerGroups.map((headerGroup: any, headerIndex: number) => (
                  <tr
                    key={headerGroup.id || headerIndex}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map(
                      (column: any, columnIndex: number) => (
                        <DataTableHeadCell
                          {...column.getHeaderProps(
                            isSorted && column.getSortByToggleProps()
                          )}
                          key={column.id || columnIndex}
                          width={column.width ? column.width : "auto"}
                          align={column.align ? column.align : "left"}
                          sorted={setSortedValue(column)}
                        >
                          {column.render("Header")}
                        </DataTableHeadCell>
                      )
                    )}
                  </tr>
                ))}
              </thead>

              {/* Table Body */}
              <tbody
                {...getTableBodyProps()}
                className="divide-y divide-gray-200"
              >
                {page.map((row: any, rowIndex: number) => {
                  prepareRow(row);
                  const rowId = row.id || rowIndex;
                  const rowProps = row.getRowProps();
                  return (
                    <tr {...rowProps} key={rowId}>
                      {row.cells.map((cell: any, cellIndex: number) => (
                        <DataTableBodyCell
                          {...cell.getCellProps()}
                          key={cell.id || cellIndex}
                          noBorder={noEndBorder && rows.length - 1 === rowId}
                          align={cell.column.align ? cell.column.align : "left"}
                        >
                          {cell.render("Cell")}
                        </DataTableBodyCell>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            {pagination && (
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
                      Showing {entriesStart} to {entriesEnd} of {rows.length}{" "}
                      entries
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
