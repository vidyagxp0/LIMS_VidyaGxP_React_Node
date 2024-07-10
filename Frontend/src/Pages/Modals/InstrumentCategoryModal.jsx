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

const InstrumentCategoryModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Instrument Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Instrument Category</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Category Name"
            placeholder="Category Name"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InstrumentCategoryModal;
