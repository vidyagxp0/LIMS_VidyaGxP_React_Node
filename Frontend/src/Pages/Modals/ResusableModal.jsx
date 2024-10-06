/* eslint-disable react/prop-types */
import React, { useState } from "react";
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

const ReusableModal = ({ visible, closeModal, data, fields, title,updateStatus }) => {
  const [statusModal, setStatusModal] = useState(false);
  const handleStatusChange = (newStatus) => {
    updateStatus(data.sampleType, newStatus); // Update status in the parent component
    setStatusModal(false); // Close status modal
    closeModal(); // Close view modal
  };
  return (
    <>
      <CModal
        visible={visible}
        onClose={closeModal}
        alignment="center"
        size="lg"
      >
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
            <div className="block">
              <div className="main-head">
                <h4 className="fw-bold mb-4 mt-3">History</h4>
              </div>
              <div className="bg-white px-5 py-3">
                <CTable align="middle" className="mb-0" small bordered>
                  <CTableBody>
                    <CTableRow color="warning">
                      <CTableDataCell>Revision</CTableDataCell>
                      <CTableDataCell>{data?.revision || "N/A"}</CTableDataCell>
                    </CTableRow>
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
          />
        )}
      </CModal>
    </>
  );
};

const StatusModal = ({ visible, closeModal,onUpdateStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUpdate = () => {
    onUpdateStatus(selectedStatus); // Call parent function to update the status
    closeModal(); // Close the modal
  };
  return (
    <CModal alignment="center" visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>Update Status</CModalTitle>
      </CModalHeader>
      <CModalBody>
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
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Cancel
        </CButton>
        <CButton color="dark" onClick={handleUpdate} >Update</CButton>
      </CModalFooter>
    </CModal>
  );
}

export default ReusableModal;
