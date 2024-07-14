/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  CButton,
  CCol,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import "react-quill/dist/quill.snow.css";

const InstrumentMasterModal = ({ visible , closeModal , handleSubmit }) => {

 
  const [instrumentCategoryData, setInstrumentCategoryData] = useState({
    CategoryName: " ",
    Description: " ",
    AddedOn: " ",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...instrumentCategoryData, [field]: value };
    setInstrumentCategoryData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...instrumentCategoryData });
    closeModal();
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and register new Instrument</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Category Name"
            placeholder="categoryName"
            value={instrumentCategoryData.CategoryName}
            onChange={(e) => handleInputChange("CategoryName", e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            value={instrumentCategoryData.Description}
            onChange={(e) => handleInputChange("Description", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InstrumentMasterModal;
