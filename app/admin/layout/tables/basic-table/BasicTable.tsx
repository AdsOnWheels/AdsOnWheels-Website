import React from "react";

interface Props {
  headers: string[];
  rows: any[];
  button?: boolean;
  searchQuery?: string;
}

const BasicTable = ({ headers, rows, button, searchQuery }: Props) => {
  const filteredRows = rows.filter((row) =>
    row.some((cell: any) =>
      cell.toString().toLowerCase().includes(searchQuery?.toLowerCase())
    )
  );

  return (
    <table className="w-full whitespace-nowrap">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, i: number) => (
            <th
              key={i}
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredRows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-t border-gray-200">
            {row.map((cell: any, cellIndex: number) => (
              <td key={cellIndex} className="px-4 py-3 text-sm text-gray-800">
                {cell}
              </td>
            ))}
            {button && (
              <td className="px-4 py-3 text-right">
                <button className="text-blue-500 hover:text-blue-700">
                  View
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BasicTable;
