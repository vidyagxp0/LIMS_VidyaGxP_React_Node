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

const TemplateModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Analyst Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information and add new Analyst Template
          </p>
          <CFormInput
            className="mb-3"
            type="text"
            label={<>Analyst Template</>}
            placeholder="Analyst Template"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label={<>Unique Code</>}
            placeholder="Unique Code"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="No. of Check Items"
            placeholder="No. of Check Items"
            required
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

export default TemplateModal;
