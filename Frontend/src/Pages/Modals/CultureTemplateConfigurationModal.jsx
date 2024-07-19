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

const CultureTemplateConfigurationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Culture Template Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Template</p>
          <h3>Registration Initiation</h3>

          <CFormSelect
            type="text"
            label="Reference Culture Name

            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Culture Code

            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Login Template For Culture Lot Acceptance

"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Comments
"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Template Culture
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default CultureTemplateConfigurationModal;
