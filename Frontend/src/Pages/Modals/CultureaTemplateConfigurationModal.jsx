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

const CultureaTemplateConfigurationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Culture Template Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>
          <CFormInput
            type="text"
            label="Reference Culture Name"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Reference Culture Code"
            placeholder=""
          />
          <CFormInput
            type="file"
            label="Sample Login Template For Culture Lot Acceptance"
            placeholder=""
            className=""
          />
          <label htmlFor="comments" className="mt-3">Comments</label>
          <CFormInput
            type="text"
            placeholder=""
            className="mt-3"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Template Configuration
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default CultureaTemplateConfigurationModal;
