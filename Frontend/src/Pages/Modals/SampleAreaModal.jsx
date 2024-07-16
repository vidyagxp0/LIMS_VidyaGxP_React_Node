import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const SampleAreaModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Sample Area</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new Sample Area</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Category"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Sample Area
              "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Unique Code
              "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Description"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>
        <CModalFooter className="p-3">
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

export default SampleAreaModal;
