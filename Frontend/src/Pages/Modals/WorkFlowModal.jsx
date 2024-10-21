import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState, useEffect } from "react";

const WorkFlowModal = ({ visible, closeModal, handleSubmit }) => {
  const [workFlowData, setWorkFloData] = useState({
    PlantCode: "",
    PlantName: "",
    Address: "",
    Comments: "",
    Workflow: "",
    status: "",
  });
    const resetForm = () => {
      setWorkFloData({
        PlantCode: "",
        PlantName: "",
        Address: "",
        Comments: "",
        Workflow: "",
        status: "",
      });
    };

    useEffect(() => {
      if (visible) {
        resetForm();
      }
    }, [visible]);

    const handleInputChange = (field, value) => {
      const updatedData = { ...workFlowData, [field]: value };
      setWorkFloData(updatedData);
      console.log(updatedData,"updateee");
    };

    const handleFormSubmit = () => {
      handleSubmit({ ...workFlowData });
      console.log(workFlowData,"woooo");
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
          <CModalTitle>New Plant</CModalTitle>
          <hr />
        </CModalHeader>
        <p className="ml-4">Add information and add new plant.</p>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-4"
            label="Plant Code"
            placeholder=" Plant Code"
            value={workFlowData.PlantCode}
            onChange={(e) => {
              handleInputChange("PlantCode", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Plant Name"
            placeholder="Plant Name"
            value={workFlowData.PlantName}
            onChange={(e) => {
              handleInputChange("PlantName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Generic Name"
            placeholder="Generic Name "
            value={workFlowData.GenericName}
            onChange={(e) => {
              handleInputChange("GenericName", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Address"
            placeholder="Address"
            value={workFlowData.Address}
            onChange={(e) => {
              handleInputChange("Address", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Comments"
            placeholder="Comments "
            value={workFlowData.Comments}
            onChange={(e) => {
              handleInputChange("Comments", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Workflow"
            placeholder="Workflow"
            value={workFlowData.Workflow}
            onChange={(e) => {
              handleInputChange("Workflow", e.target.value);
            }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Add New
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkFlowModal;
