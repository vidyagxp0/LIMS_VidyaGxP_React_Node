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

const GroupNameModal = ({ visible, closeModal, handleSubmit }) => {
  const [groupData, setGroupData] = useState({
    sampleTypeName: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...groupData, [field]: value };
    setGroupData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...groupData });
    closeModal();
  };

  const resetForm = () => {
    setGroupData({
      sampleTypeName: "",
      description: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Group Name</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Group Name</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Group Name"
            placeholder="Group Name"
            value={groupData.sampleTypeName}
            onChange={(e) => {
              handleInputChange("sampleTypeName", e.target.value);
            }}
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="description"
            placeholder="description"
            value={groupData.description}
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

export default GroupNameModal;
