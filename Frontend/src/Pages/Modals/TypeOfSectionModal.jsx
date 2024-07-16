import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const TypeOfSectionModal = ({ visible, closeModal, handleSubmit }) => {
  const [sectionData, setSectionData] = useState({
    typeOfSection: "",
    prefix: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...sectionData, [field]: value };
    setSectionData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...sectionData });
    closeModal();
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Type Of Section</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            Add information and add new Type Of Section
          </p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Type Of Section"
            placeholder="Type Of Section"
            value={sectionData.typeOfSection}
            onChange={(e) => {
              handleInputChange("typeOfSection", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Prefix"
            placeholder="Prefix"
            value={sectionData.prefix}
            onChange={(e) => {
              handleInputChange("prefix", e.target.value);
            }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton onClick={handleFormSubmit} className="bg-info text-white">
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default TypeOfSectionModal;
