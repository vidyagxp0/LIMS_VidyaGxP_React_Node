import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Table = ({ columns, data, onCheckboxChange, handleSelectAll }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-500 text-white';
            case 'Inactive':
                return 'bg-red-500 text-white';
            case 'DROPPED':
                return 'bg-pink-500 text-white';
            case 'REJECTED':
                return 'bg-red-500 text-white';
            case 'INITIATED':
                return 'bg-blue-500 text-white';
            case 'REINITIATED':
                return 'bg-yellow-500 text-white';
            case 'APPROVED':
                return 'bg-green-500 text-white';
            default:
                return ''; // Default case for any other status
        }
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.accessor}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td
                                key={column.accessor}
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                                {column.accessor === 'checkbox' ? (
                                    <input
                                        type="checkbox"
                                        checked={row.checkbox}
                                        onChange={() => onCheckboxChange(rowIndex)}
                                    />
                                ) : column.accessor === 'status' ? (
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.status)}`}>
                                        {row.status}
                                    </span>
                                ) : column.accessor === 'action' ? (
                                    <div className="flex space-x-2">
                                        {row.action}
                                    </div>
                                ) : (
                                    row[column.accessor]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
