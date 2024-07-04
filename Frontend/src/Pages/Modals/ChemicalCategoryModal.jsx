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

const ChemicalCategoryModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Chemical Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add a new category.</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
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

export default ChemicalCategoryModal;
