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

const ResourcesModal = ({ visible, closeModal, handleSubmit }) => {
  const [resourceData, setResourceData] = useState({
    resourceName: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...resourceData, [field]: value };
    setResourceData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...resourceData });
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
          <CModalTitle>Add Worksheet Resource</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-6 fw-bold">
            Add information and add new worksheet resource.
          </p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Resource Name"
            placeholder="Resource Name"
            value={resourceData.resourceName}
            onChange={(e) => {
              handleInputChange("resourceName", e.target.value);
            }}
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

export default ResourcesModal;
