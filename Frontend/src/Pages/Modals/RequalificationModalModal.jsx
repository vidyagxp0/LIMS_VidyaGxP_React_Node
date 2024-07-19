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
import React, { useState, useEffect } from "react";

const RequalificationModalModal = ({ visible, closeModal, handleSubmit }) => {
  const [requalification, setRequalification] = useState({
    analyst: "",
    employeeId: "",
    role: "",
    testTechnique: "",
    justification: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...requalification, [field]: value };
    setRequalification(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...requalification });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setRequalification({
      analyst: "",
      employeeId: "",
      role: "",
      testTechnique: "",
      justification: "",
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div>
      {" "}
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle> Add Re-Qualification Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            {" "}
            Add information about Re-Qualification Request.
          </p>
          <CFormSelect
            className="mb-3"
            label="Name"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
            value={requalification.analyst}
            onChange={(e) => handleInputChange("analyst", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
            value={requalification.employeeId}
            onChange={(e) => handleInputChange("employeeId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
            value={requalification.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
          />
          <CFormSelect
            label="Test Technique"
            className="mb-3"
            options={[
              { value: "Select", label: "Select" },
              { value: "Description", label: "Description" },
            ]}
            value={requalification.testTechnique}
            onChange={(e) => handleInputChange("testTechnique", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification For Requalification"
            placeholder="Training Details"
            value={requalification.justification}
            onChange={(e) => handleInputChange("justification", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default RequalificationModalModal;
