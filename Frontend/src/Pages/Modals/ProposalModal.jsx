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
import React, { useEffect, useState } from "react";

const ProposalModal = ({ visible, closeModal, handleSubmit }) => {
  const [proposal, setProposal] = useState({
    trainingConfirmationId: "",
    employeeId: "",
    analyst: "",
    testTechnique: "",
    testOfTechnique: "",
    testPlan: "",
    arNo: "",
    comments: "",
    dueDate: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...proposal, [field]: value };
    setProposal(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...proposal });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setProposal({
      trainingConfirmationId: "",
      employeeId: "",
      analyst: "",
      testTechnique: "",
      testOfTechnique: "",
      testPlan: "",
      arNo: "",
      comments: "",
      dueDate: "",
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
          <CModalTitle>Add Analyst Proposal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="my-3 fs-5">
            Add information and add new Analyst Proposal
          </p>
          <CFormSelect
            type="text"
            className="mb-3"
            label="Training Confirmation ID"
            placeholder="Training Confirmation ID"
            options={["Select", { label: "No Options" }]}
            value={proposal.trainingConfirmationId}
            onChange={(e) =>
              handleInputChange("trainingConfirmationId", e.target.value)
            }
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Analyst"
            placeholder="Analyst"
            value={proposal.analyst}
            onChange={(e) => handleInputChange("analyst", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Employee ID"
            placeholder="Employee ID"
            value={proposal.employeeId}
            onChange={(e) => handleInputChange("employeeId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Technique"
            placeholder="Test Technique"
            value={proposal.testTechnique}
            onChange={(e) => handleInputChange("testTechnique", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Of Technique"
            placeholder="Test Of Technique"
            value={proposal.testOfTechnique}
            onChange={(e) =>
              handleInputChange("testOfTechnique", e.target.value)
            }
          />
          <CFormSelect
            type="text"
            className="mb-3"
            label="Test Plan"
            placeholder="Test Plan"
            options={["Select", { label: "No Options" }]}
            value={proposal.testPlan}
            onChange={(e) => handleInputChange("testPlan", e.target.value)}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="AR Number"
            placeholder="AR Number"
            value={proposal.arNo}
            onChange={(e) => handleInputChange("arNo", e.target.value)}
          />
          <CFormInput
            type="date"
            onFocus={(e) => e.target.showPicker()}
            className="mb-3"
            label="Due Date"
            placeholder="Due Date"
            value={proposal.dueDate}
            onChange={(e) => handleInputChange("dueDate", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Comments"
            placeholder="Comments"
            value={proposal.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
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

export default ProposalModal;
