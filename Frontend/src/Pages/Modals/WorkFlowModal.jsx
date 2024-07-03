import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const WorkFlowModal = ({ visible, closeModal }) => {
  return (
    <div>
      <CModal alignment="center" visible={visible} onClose={closeModal} size="xl">
        <CModalHeader>
          <CModalTitle>New Plant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            placeholder=" Name"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Unique Code"
            placeholder="Unique Code"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            placeholder="Generic Name "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Re-testing Period(Days)"
            placeholder="Re-testing Period(Days)"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary">Add New</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkFlowModal;
