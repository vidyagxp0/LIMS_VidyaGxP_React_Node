import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const ChamberConditionMappingModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Condition mapping</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>
          Update information and add new chamber condition mapping
        </p>
        <CModalBody>
          <p style={{ fontWeight: "800", fontSize: "20px" }}>
            Registration Initiation
          </p>

          <CFormInput
            type="text"
            label="Chamber ID"
            placeholder="Name"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Description"
            placeholder="Unique Code"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Current Storage Condition"
            placeholder="28℃ ± 32℃"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Initiated On"
            placeholder="Select"
            className="custom-placeholder mb-3"
          />

          <CFormSelect
            type="number"
            label="Configurable Storage Conditions"
            placeholder="Grade"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="file"
            label="Reference Document (If Any)"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />

          <div className="d-flex justify-content-end">
            <CButton
              color="secondary"
              className="me-2"
              onClick={_props.closeModal}
            >
              Back
            </CButton>
            <CButton color="primary" onClick={_props.submitForm}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default ChamberConditionMappingModal;
