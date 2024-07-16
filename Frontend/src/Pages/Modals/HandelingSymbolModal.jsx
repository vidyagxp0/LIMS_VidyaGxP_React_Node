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

const HandelingSymbolModal = ({ visible, closeModal, handleSubmit }) => {
  const [symbolData, setSymbolData] = useState({
    name: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...symbolData, [field]: value };
    setSymbolData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...symbolData });
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
          <CModalTitle>Add Symbols</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add a new Grade.</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={symbolData.name}
            onChange={(e) => {
              handleInputChange("name", e.target.value);
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

export default HandelingSymbolModal;
