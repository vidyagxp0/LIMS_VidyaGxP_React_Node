/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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

const InstrumentMasterModal = ({ visible, closeModal, handleSubmit }) => {

  const [instrumentCategoryData, setInstrumentCategoryData] = useState({
    CategoryName: "",
    Description: "",
    AddedOn: "", // Initialize as empty string
    Status: "",  // Add Status field
  });
  const [fields, setFields] = useState([]);

  const resetForm = () => {
    setInstrumentCategoryData({
      CategoryName: "",
      Description: "",
      AddedOn: "",
      Status: "", // Reset Status
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...instrumentCategoryData, [field]: value };
    setInstrumentCategoryData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    const instrumentDetails = { 
      ...instrumentCategoryData, 
      AddedOn: new Date().toISOString(),
      fields 
    };

    const existingInstruments = JSON.parse(localStorage.getItem("instruments")) || [];
    const updatedInstruments = [...existingInstruments, instrumentDetails];
    localStorage.setItem("instruments", JSON.stringify(updatedInstruments));
  
    handleSubmit(instrumentDetails);
    
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
          {/* <CFormInput
            className="mb-3"
            type="text"
            label="Status" // Add a field for Status
            placeholder="Status"
            value={instrumentCategoryData.Status}
            onChange={(e) => handleInputChange("Status", e.target.value)}
          /> */}
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
