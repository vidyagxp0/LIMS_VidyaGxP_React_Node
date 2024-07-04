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

const RequalificationModalModal = (_props) => {
  return (
    <div>
      {" "}
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle> Add Re-Qualification Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            {" "}
            Add information about Re-Qualification Request.
          </p>
          <CFormSelect
            className="mb-3"
            label="Name"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
          />
          <CFormSelect
            label="Test Technique"
            className="mb-3"
            options={[{ value: "Description", label: "Description" }]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification For Requalification"
            placeholder="Training Details"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default RequalificationModalModal;
