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
import React , { useEffect, useState}from "react";

const TrainingConfirmationModal = ({ visible, closeModal, handleSubmit }) => {
  const [trainingConfirmation, setTrainingConfirmation] = useState({
    analyst:"",
    employeeId: "",
    role: "",
    testTechnique:"",
    trainingDetails: "",
    trainingDocuments: "",
    remarks: "",
   });
   const handleInputChange = (field, value) => {
    const updatedData = { ...trainingConfirmation, [field]: value };
    setTrainingConfirmation(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...trainingConfirmation });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setTrainingConfirmation({
      analyst: "",
      employeeId: "",
      role: "",
      testTechnique: "",
      trainingDetails: "",
      trainingDocuments: "",
      remark: "",
    });
  };

  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Training Confirmations</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information about Training Confirmation
          </p>
          <CFormSelect
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Select..."
            options={["Select...", { label: "No Options" }]}
            value={trainingConfirmation.analyst}
            onChange={(e) => handleInputChange("analyst", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee Id"
            placeholder="Employee Id"
            value={trainingConfirmation.employeeId}
            onChange={(e) => handleInputChange("employeeId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Role/Title"
            placeholder="Role/Title"
            value={trainingConfirmation.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Test Technique"
            placeholder="Select..."
            options={["Select...", { label: "Description" }]}
            value={trainingConfirmation.testTechnique}
            onChange={(e) => handleInputChange("testTechnique", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Training Details"
            placeholder="Training Details"
            value={trainingConfirmation.trainingDetails}
            onChange={(e) => handleInputChange("trainingDetails", e.target.value)}
          />
           
           <CFormInput
            type="file"
            className="mb-3"
            label="Training Documents"
            placeholder="Choose File"
            // value={trainingConfirmation.analyst}
            // onChange={(e) => handleInputChange("analyst", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Remark(s)/Reason(s)"
            placeholder="Remark(s)/Reason(s)"
            value={trainingConfirmation.remarks}
            onChange={(e) => handleInputChange("remarks", e.target.value)}
          />
         
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white" onClick={handleFormSubmit}>Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default TrainingConfirmationModal;
