import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const MaterialModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Material</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Material Name"
            className="mb-3"
            type="text"
            placeholder="Material Name"
          />
          <CFormInput
            label="Description"
            className="mb-3"
            type="text"
            placeholder="Description"
          />

          <div className="d-flex gap-3 mt-">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Add Material</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default MaterialModal;
