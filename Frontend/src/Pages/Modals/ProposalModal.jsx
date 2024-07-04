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

const ProposalModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Analyst Proposal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information and add new Analyst Proposal
          </p>
          <CFormSelect
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Training Confirmation ID"
            options={["Select", { label: "No Options" }]}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Analyst"
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Technique"
            placeholder="Test Technique"
            disabled
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Test Plan"
            options={["Select", { label: "No Options" }]}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="AR Number"
            placeholder="AR Number"
          />
          <CFormInput
            type="date"
            className="mb-3"
            label="Due Date"
            placeholder="Due Date"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Comments"
            placeholder="Comments"
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

export default ProposalModal;
