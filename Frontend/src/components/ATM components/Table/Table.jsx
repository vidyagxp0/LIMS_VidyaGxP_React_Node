import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmationModal from "../../../Pages/Modals/DeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";

const Table = ({
  columns,
  data,
  onCheckboxChange,
  onViewDetails,
  onDelete,
  openEditModal,
  onPdfGenerate,
  loading
}) => {
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const totalPageCount = Math?.ceil(data?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data?.slice(startIndex, startIndex + pageSize);
  const attachmentInput = useRef([]);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState({});

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
      case "calibrated":
        return "bg-green-500 text-white  p-1 ";
      case "nonCalibrated":
        return "bg-orange-500 text-white  p-1 ";
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
          {currentData?.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                left: "44%",
                position: "absolute",
                fontSize: "1.2rem",
                fontWeight: "500",
                lineHeight: "1.5",
                marginTop: "5rem",
                columnGap: "0px",
                border: "none",
                color: "gray",
              }}
            >
              No Data Available!
            </div>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns?.map((column) => (
                    <td
                      key={column.accessor}
                      className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${
                        column.accessor === "analystId" ||
                        column.accessor === "sampleId"
                          ? "hover:bg-zinc-200 cursor-pointer"
                          : ""
                      }`}
                      onClick={() => {
                        if (column.accessor === "analystId") {
                          navigate(`/analyst-qualification-edit/${row.id}`);
                        } else if (column.accessor === "sampleId") {
                          navigate(`/control-Sample-edit/${row.id}`);
                        }
                      }}
                    >
                      {column.accessor === "checkbox" ? (
                        <input
                          type="checkbox"
                          checked={row.checkbox}
                          onChange={() =>
                            onCheckboxChange(rowIndex + startIndex)
                          }
                        />
                      ) : column.accessor === "status" ? (
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            row.status
                          )}`}
                        >
                          {row.status}
                        </span>
                      ) : column.accessor === "action" || column.accessor === "actionAnalyst" || column.accessor === "actionControl" ? (
                        <div className="flex space-x-2">
                          <FontAwesomeIcon
                            icon={faEye}
                            className="mr-2 cursor-pointer"
                            onClick={
                              column.accessor === "actionAnalyst"
                                ? () => navigate(`/analyst-qualification-edit/${row.id}`)
                                : column.accessor === "actionControl"
                                ? () => navigate(`/control-Sample-edit/${row.id}`)
                                : () =>  onViewDetails(row)
                            }
                          />
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="mr-2 cursor-pointer"
                            onClick={
                              column.accessor === "actionAnalyst"
                                ? () => navigate(`/analyst-qualification-edit/${row.id}`)
                                : column.accessor === "actionControl"
                                ? () => navigate(`/control-Sample-edit/${row.id}`)
                                : () => openEditModal(row)
                            }
                            
                          />
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="cursor-pointer"
                            onClick={() => openDeleteModal(row)}
                          />
                        </div>
                      ) : column.accessor === "report" ? (
                        <div className="flex space-x-2">
                          <FaFilePdf
                            size={20}
                            className="text-black cursor-pointer transition duration-200 ease-in-out hover:text-gray-800 focus:outline-none"
                            onClick={() => onPdfGenerate(row.id)}
                          />
                          {loading[data.id] && (
                            <div className="h-4 w-4 border-t-2 border-b-2 border-gray-800 animate-spin rounded-full ml-2"></div>
                          )}
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
                            ref={(el) =>
                              (attachmentInput.current[rowIndex] = el)
                            }
                            onChange={(e) => console.log(e.target.files[0])} // Handle file upload logic here
                          />
                        </div>
                      ) : (
                        row[column.accessor]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {currentData.length > 0 && totalPageCount > 1 && ( // Check if there's more than one page
  <div className="mt-2 flex justify-end fixed right-10">
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      {totalPageCount > 1 && (
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          className={`relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}

      {/* Render Pages Based on totalPageCount */}
      {totalPageCount > 3 && (
        <>
          {/* First Two Pages */}
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                currentPage === page
                  ? "bg-blue-50 border-blue-500 text-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Ellipsis Before Current Range */}
          {currentPage > 3 && <span className="px-2 py-2 text-gray-500">...</span>}

          {/* Current Page and Surrounding Pages */}
          {Array.from(
            { length: Math.min(3, totalPageCount - 2) },
            (_, index) => currentPage - 1 + index
          ).filter(
            (page) => page > 2 && page < totalPageCount - 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                currentPage === page
                  ? "bg-blue-50 border-blue-500 text-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Ellipsis After Current Range */}
          {currentPage < totalPageCount - 2 && (
            <span className="px-2 py-2 text-gray-500">...</span>
          )}

          {/* Last Two Pages */}
          {[totalPageCount - 1, totalPageCount].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                currentPage === page
                  ? "bg-blue-50 border-blue-500 text-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              }`}
            >
              {page}
            </button>
          ))}
        </>
      )}

      {/* Show Pages if totalPageCount is 3 or less */}
      {totalPageCount <= 3 && (
        Array.from({ length: totalPageCount }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
              currentPage === index + 1
                ? "bg-blue-50 border-blue-500 text-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-500"
            }`}
          >
            {index + 1}
          </button>
        ))
      )}

      {/* Next Button */}
      {totalPageCount > 1 && (
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPageCount))
          }
          className={`relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
            currentPage === totalPageCount
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          disabled={currentPage === totalPageCount}
        >
          Next
        </button>
      )}
    </nav>
  </div>
)}
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
