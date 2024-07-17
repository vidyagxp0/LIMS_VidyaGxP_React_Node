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
import React, { useEffect, useState } from "react";

const WorkSheetFieldModal = ({ visible, closeModal, handleSubmit }) => {
  const [worksheetFieldData, setWorksheetFieldsData] = useState({
    sampleTypeName: "",
    bindsTo: [],
    description: "",
  });

  const resetForm = () => {
    setWorksheetFieldsData({
      sampleTypeName: "",
      bindsTo: [],
      description: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);


  const handleInputChange = (field, value) => {
    const updatedData = { ...worksheetFieldData, [field]: value };
    setWorksheetFieldsData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...worksheetFieldData });
    closeModal();
  };

  return (
    <div>
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Worksheet Fields</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="WorkSheet Field Name "
            value={worksheetFieldData.sampleTypeName}
            onChange={(e) => {
              handleInputChange("sampleTypeName", e.target.value);
            }}
          />

          <CFormSelect
            type="text"
            label="Binds To"
            placeholder="Select..."
            options={[
              "Select...",
              { label: "HCL" },
              { label: "Hydrochrolic Acid" },
              { label: "Petrochemical" },
              { label: "Initial Product" },
            ]}
            value={worksheetFieldData.bindsTo}
            onChange={(e) => {
              handleInputChange("bindsTo", e.target.value);
            }}
          />

          <CFormInput
            type="text"
            label="Description"
            placeholder="Description"
            value={worksheetFieldData.description}
            onChange={(e) => {
              handleInputChange("description", e.target.value);
            }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>
            Add Field
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkSheetFieldModal;
