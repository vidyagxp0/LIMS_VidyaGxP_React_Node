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

const ReusableModal = ({ visible, closeModal, data, fields, title }) => {
  const [statusModal, setStatusModal] = useState(false);

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
          />
        )}
      </CModal>
    </>
  );
};

const StatusModal = ({ visible, closeModal }) => (
  <CModal alignment="center" visible={visible} onClose={closeModal}>
    <CModalHeader>
      <CModalTitle>Update Status</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CFormSelect
        label="Status"
        options={[
          { label: "Update Status", value: "" },
          { label: "Approve", value: "approve" },
          { label: "Drop", value: "drop" },
          { label: "Reject", value: "reject" },
        ]}
      />
    </CModalBody>
    <CModalFooter>
      <CButton color="light" onClick={closeModal}>
        Cancel
      </CButton>
      <CButton color="dark">Update</CButton>
    </CModalFooter>
  </CModal>
);

export default ReusableModal;
