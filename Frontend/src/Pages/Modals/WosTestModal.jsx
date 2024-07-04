import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import React from "react";

const WosTestModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add WOS Tests</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information about WOS test
        </p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Specification ID
"
            placeholder="Select "
          />
          <CFormInput
            type="text"
            label="Product/Material Name
            "
            placeholder="Select.. "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Name
            "
            placeholder="Product/Material"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Code
            "
            placeholder="Lot Created Date "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Method No.
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Copy Test From
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Test Category
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Test Technique
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Test Type
            "
            placeholder=""
            className="custom-placeholder"
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WosTestModal;
