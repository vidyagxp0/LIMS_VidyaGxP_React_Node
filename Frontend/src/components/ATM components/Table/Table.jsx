import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmationModal from "../../../Pages/Modals/DeleteConfirmationModal";

const Table = ({
  columns,
  data,
  onCheckboxChange,
  onViewDetails,
  onDelete,
  openEditModal,
}) => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const totalPageCount = Math?.ceil(data?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data?.slice(startIndex, startIndex + pageSize);
  const attachmentInput = useRef([]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500 text-white  p-1";
      case "Inactive":
        return "bg-red-500 text-white  p-1 ";
      case "DROPPED":
        return "bg-pink-500 text-white  p-1 ";
      case "REJECTED":
        return "bg-red-500 text-white  p-1 ";
      case "INITIATED":
        return "bg-blue-500 text-white  p-1 ";
      case "REINITIATED":
        return "bg-yellow-500 text-white  p-1 ";
      case "APPROVED":
        return "bg-green-500 text-white  p-1 ";
      default:
        return "";
    }
  };

  const handleAttachmentClick = (rowIndex) => {
    attachmentInput.current[rowIndex].click();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setItemToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = (item) => {
    onDelete(item);
    closeDeleteModal();
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#6187d4] text-white">
            <tr>
              {columns?.map((column) => (
                <th
                  key={column.accessor}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentData?.map((row, rowIndex) => (
  <tr key={rowIndex}>
    {columns?.map((column) => (
      <td
        key={column.accessor}
        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
      >
        {column.accessor === "checkbox" ? (
          <input
            type="checkbox"
            checked={Boolean(row.checkbox)} // Ensure it is always a boolean
            onChange={() => onCheckboxChange(rowIndex + startIndex)}
          />
        ) : column.accessor === "status" ? (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
              row.status
            )}`}
          >
            {row.status}
          </span>
        ) : column.accessor === "action" ? (
          <div className="flex space-x-2">
            <FontAwesomeIcon
              icon={faEye}
              className="mr-2 cursor-pointer"
              onClick={() => onViewDetails(row)}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="mr-2 cursor-pointer"
              onClick={() => openEditModal(row)}
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="cursor-pointer"
              onClick={() => openDeleteModal(row)}
            />
          </div>
        ) : column.accessor === "attachment" ? (
          <div>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => handleAttachmentClick(rowIndex)}
            >
              Add Attachment
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={(el) => (attachmentInput.current[rowIndex] = el)}
              onChange={(e) => console.log(e.target.files[0])} 
            />
          </div>
        ) : (
          row[column.accessor] // Directly displaying the value from the data
        )}
      </td>
    ))}
  </tr>
))}

          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  currentPage === index + 1
                    ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                handlePageChange(
                  currentPage < totalPageCount
                    ? currentPage + 1
                    : totalPageCount
                )
              }
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === totalPageCount
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={currentPage === totalPageCount}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
        item={itemToDelete}
      />
    </>
  );
};

export default Table;
