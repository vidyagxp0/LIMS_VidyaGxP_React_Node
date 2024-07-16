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

const GradeModal = ({ visible, closeModal, handleSubmit }) => {
  const [gradeData, setGradeData] = useState({
    gradeName: "",
    gradeValue: "",
    gradeDescription: "",
    gradeColor: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...gradeData, [field]: value };
    setGradeData(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...gradeData });
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
          <CModalTitle>Add Grades</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add a new Grade.</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Name"
            value={gradeData.gradeName}
            onChange={(e)=>{handleInputChange("gradeName", e.target.value)}}
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

export default GradeModal;
