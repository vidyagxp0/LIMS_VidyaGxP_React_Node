import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const PlantsModal = ({ visible, closeModal, handleSubmit }) => {
  const [plantData, setPlantData] = useState({
    PlantName: "",
    PlantCode: "",
    Address: "",
  });
  const resetForm = () => {
    setPlantData({
      PlantName: "",
      PlantCode: "",
      Address: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...plantData, [field]: value };
    setPlantData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...plantData });
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
          <CModalTitle>Add Plant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            placeholder="Name"
            value={plantData.PlantName}
            onChange={(e) => {
              handleInputChange("PlantName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Plant Code"
            placeholder="Plant Code"
            value={plantData.PlantCode}
            onChange={(e) => {
              handleInputChange("PlantCode", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Address"
            placeholder="Address"
            value={plantData.Address}
            onChange={(e) => {
              handleInputChange("Address", e.target.value);
            }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default PlantsModal;
