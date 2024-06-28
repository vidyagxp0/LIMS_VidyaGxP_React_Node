import React from 'react';

const ReusableTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead style={{#0F93C3}}>
          <tr className="w-full bg-gray-100">
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
