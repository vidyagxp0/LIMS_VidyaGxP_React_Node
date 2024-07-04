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

const TypeOfSectionModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Type Of Section</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            {" "}
            Add information and add new Type Of Section
          </p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Type Of Section"
            placeholder="Type Of Section"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Prefix"
            placeholder="Prefix"
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

export default TypeOfSectionModal;
