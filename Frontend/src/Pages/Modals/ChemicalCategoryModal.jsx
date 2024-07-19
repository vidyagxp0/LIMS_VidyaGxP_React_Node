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

const ChemicalCategoryModal = ({ visible, closeModal, handleSubmit }) => {
  const [chemicaldata, setChemicalData] = useState({
    categoryName: "",
  });

  const resetForm = () => {
    setChemicalData({
      categoryName: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  const handleInputChange = (field, value) => {
    const updatedData = { ...chemicaldata, [field]: value };
    setChemicalData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...chemicaldata });
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
          <CModalTitle>Add Chemical Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add a new category.</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={chemicaldata.categoryName}
            onChange={(e) => {
              handleInputChange("categoryName", e.target.value);
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

export default ChemicalCategoryModal;
