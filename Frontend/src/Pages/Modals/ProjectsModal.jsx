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

const ProjectsModal = ({ visible, closeModal, handleSubmit }) => {
  const [projectData, setProjectData] = useState({
    projectsName: "",
    uniqueCode: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...projectData, [field]: value };
    setProjectData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...projectData });
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
          <CModalTitle>Add Project List</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h6 className="my-3 fs-5">Add information and add new project</h6>
          <CFormInput
            className="mb-3"
            type="text"
            label="Projects Name"
            placeholder="Specification Type Name"
            value={projectData.projectsName}
            onChange={(e) => {
              handleInputChange("projectsName", e.target.value);
            }}
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            value={projectData.uniqueCode}
            onChange={(e) => {
              handleInputChange("uniqueCode", e.target.value);
            }}
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            value={projectData.description}
            onChange={(e) => {
              handleInputChange("description", e.target.value);
            }}
            required
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
    </div>
  );
};

export default ProjectsModal;
