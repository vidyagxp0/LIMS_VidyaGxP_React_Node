import React, { useEffect, useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CButton,
  CModalFooter,
  CFormCheck,
} from "@coreui/react";

const TestTechniqueModal = ({ visible, closeModal, handleSubmit }) => {
  const [techniqueData, setTechniqueData] = useState({
    techniqueName: "",
    techniqueType: "",
    techniqueDescription: "",
    addedOn: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...techniqueData, [field]: value };
    setTechniqueData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...techniqueData });
    closeModal();
  };
  const resetForm = () => {
    setTechniqueData({
      techniqueName: "",
      techniqueType: "",
      techniqueDescription: "",
      addedOn: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Add Test Technique</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p className="my-3">Add information and add new Test Technique.</p>

        <CFormInput
          type="text"
          className="mb-3"
          label="Technique Name"
          placeholder="Technique Name"
          value={techniqueData.techniqueName}
          onChange={(e) => {
            handleInputChange("techniqueName", e.target.value);
          }}
        />
        <label htmlFor="">Type of Technique</label>
        <div className="flex gap-3">
          <CFormCheck
            type="radio"
            className="mt-3"
            label="Complex"
            name="techniqueType"
            checked={techniqueData.techniqueType === "Complex"}
            onChange={() => {
              handleInputChange("techniqueType", "Complex");
            }}
          />
          <CFormCheck
            type="radio"
            className="mt-3"
            label="Non-Complex"
            name="techniqueType"
            checked={techniqueData.techniqueType === "Non-Complex"}
            onChange={() => {
              handleInputChange("techniqueType", "Non-Complex");
            }}
          />
        </div>

        <CFormInput
          type="text"
          className="mb-3"
          label="Technique Description"
          placeholder="Technique Description"
          value={techniqueData.techniqueDescription}
          onChange={(e) => {
            handleInputChange("techniqueDescription", e.target.value);
          }}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Back
        </CButton>
        <CButton className="bg-info text-white" onClick={handleFormSubmit}>
          Submit
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default TestTechniqueModal;
