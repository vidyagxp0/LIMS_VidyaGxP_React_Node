import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const TrainingConfirmationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Training Confirmations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information about Training Confirmation
          </p>
          <CFormSelect
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Select..."
            options={["Select...", { label: "No Options" }]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee Id"
            placeholder="Employee Id"
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
            disabled
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Test Technique"
            placeholder="Select..."
            options={["Select...", { label: "Description" }]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Training Details"
            placeholder="Training Details"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Training Details"
            placeholder="Training Details"
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Browse"
            placeholder="Choose File"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default TrainingConfirmationModal;
