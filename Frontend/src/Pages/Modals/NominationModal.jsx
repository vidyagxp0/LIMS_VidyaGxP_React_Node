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
import React, { useState} from "react";

const NominationModal = ({ visible, closeModal, handleSubmit }) => {

  const [nomination, setNomination] = useState({
    analyst:"",
    employeeId: "",
    role: "",
    testTechnique:"",
    totalExperience: "",
    pastExperience: "",
    justification: "",
   });
   const handleInputChange = (field, value) => {
    const updatedData = { ...nomination, [field]: value };
    setNomination(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...nomination });
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
          <CModalTitle> Add Nominations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            {" "}
            Add information about Nominations.
          </p>
          <CFormSelect
            className="mb-3"
            label="Analyst"
            options={[
              { value: "Analyst", label: "Analyst" },
              { value: "Analyst Two", label: "Analyst Two" },
            ]}
            value={nomination.analyst}
            onChange={(e) => handleInputChange("analyst", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
            value={nomination.employeeId}
            onChange={(e) => handleInputChange("employeeId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
            value={nomination.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
          />
          <CFormSelect
            label="Test Technique"
            placeholder="Select"
            className="mb-3"
            options={[
              { value: "select", label: "Analyst" },
              { value: "Description", label: "Description" }]}
            value={nomination.testTechnique}
            onChange={(e) => handleInputChange("testTechnique", e.target.value)}
         
          />
          <CFormInput type="file" id="formFile" label="Training Documents" />
          <CFormInput
            type="text"
            className="mb-3"
            label="Total Experience / Work Area"
            placeholder="Total Experience / Work Area"
            value={nomination.totalExperience}
            onChange={(e) => handleInputChange("totalExperience", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Past Experience / Work Area"
            placeholder="Past Experience / Work Area"
            value={nomination.pastExperience}
            onChange={(e) => handleInputChange("pastExperience", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Justification for Direct Nomination"
            placeholder="Justification for Direct Nomination"
            value={nomination.justification}
            onChange={(e) => handleInputChange("justification", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>Add</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default NominationModal;
