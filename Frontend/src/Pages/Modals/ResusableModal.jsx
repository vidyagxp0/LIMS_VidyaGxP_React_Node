// Frontend/src/Pages/Modals/ResusableModal.jsx

import React, { useState, useEffect } from "react";
import {
  CButton,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from "@coreui/react";

const ReusableModal = ({
  visible,
  closeModal,
  data,
  fields,
  title,
  updateStatus,
  updateactiveStatus,
  isApprovalPage, // New prop to indicate if the approval page is open
}) => {
  const [statusModal, setStatusModal] = useState(false);
  const openactivestatus = isApprovalPage; // Set openactivestatus based on the new prop

  const handleStatusChange = (newStatus) => {
    updateStatus(newStatus);
    setStatusModal(false);
    closeModal();
  };

  const handleCategoryChange = (newStatus) => {
    updateactiveStatus(newStatus);
    setStatusModal(false);
    closeModal();
  };

  return (
    <>
      <CModal visible={visible} onClose={closeModal} alignment="center" size="lg">
        <div id="modal-page" className="py-3 bg-light h-100">
          <div className="container-fluid">
            <div className="block mb-3">
              <div className="main-head d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-4 mt-3">{title || "Details"}</h4>
                <CButton color="dark" onClick={() => setStatusModal(true)}>
                  Update Status
                </CButton>
              </div>
              <div className="bg-white px-5 py-3">
                <CTable align="middle" className="mb-0" small bordered>
                  <CTableBody>
                    {fields?.map((field, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell color="info">
                          {field.label}
                        </CTableDataCell>
                        <CTableDataCell>
                          {data ? data[field.key] : field.default}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </div>
          </div>
        </div>

        {statusModal && (
          <StatusModal
            visible={statusModal}
            closeModal={() => setStatusModal(false)}
            onUpdateStatus={handleStatusChange}
            onactiveStatus={handleCategoryChange}
            initialStatus={data?.status} // Pass the current status
            initialCategory={data?.category} // Pass the current category
            isCategoryModal={openactivestatus} // Determine which modal to show
          />
        )}
      </CModal>
    </>
  );
};

const StatusModal = ({
  visible,
  closeModal,
  onUpdateStatus,
  onactiveStatus,
  initialStatus,
  initialCategory,
  isCategoryModal,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus || "");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "");

  useEffect(() => {
    setSelectedStatus(initialStatus || "");
    setSelectedCategory(initialCategory || "");
  }, [visible, initialStatus, initialCategory]);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    console.log("Selected status:", newStatus);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    console.log("Selected category:", newCategory);
  };

  const handleactive = () => {
    if (selectedCategory) {
      console.log("Updating status to:", selectedCategory);
      onactiveStatus(selectedCategory);
      closeModal();
    } else {
      console.error("No category selected");
    }
  };

  const handleUpdate = () => {
    if (selectedStatus) {
      console.log("Updating status to:", selectedStatus);
      onUpdateStatus(selectedStatus);
      closeModal();
    } else {
      console.error("No status selected");
    }
  };

  return (
    <>
      <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>{isCategoryModal ? "Update Category" : "Update Status"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {isCategoryModal ? (
            <CFormSelect
              label="Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={[
                { label: "Select Category", value: "" },
                { label: "Active", value: "ACTIVE" },
                { label: "Inactive", value: "INACTIVE" },
              ]}
            />
          ) : (
            <CFormSelect
              label="Status"
              value={selectedStatus}
              onChange={handleStatusChange}
              options={[
                { label: "Select Status", value: "" },
                { label: "Approve", value: "APPROVED" },
                { label: "Drop", value: "DROPPED" },
                { label: "Reject", value: "REJECTED" },
              ]}
            />
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          {isCategoryModal ? (
            <CButton color="dark" onClick={handleactive} disabled={!selectedCategory}>
              Update
            </CButton>
          ) : (
            <CButton color="dark" onClick={handleUpdate} disabled={!selectedStatus}>
              Status Update
            </CButton>
          )}
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ReusableModal;