import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const SolutionPreparationModal = ({ visible, closeModal, handleSubmit }) => {
  const [solutionData, setSolutionData] = useState({
    volumetricSolutionName: [],
    methodNo: "",
    solutionQuantity: "",
    batchNo: "",
    type: "",
    documents: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...solutionData, [field]: value };
    setSolutionData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...solutionData });
    closeModal();
  };

  const resetForm = () => {
    setSolutionData({
      volumetricSolutionName: [],
      methodNo: "",
      solutionQuantity: "",
      batchNo: "",
      type: "",
      documents: "",
      comments: "",
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
          <CModalTitle>New Solution Preparation</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "16px" }}>
          Add information and add new Solution Preparation.
        </p>
        <CModalBody>
          <CFormSelect
            label="Volumetric Solution Name"
            className="custom-placeholder mb-3"
            value={solutionData.volumetricSolutionName}
            onChange={(e) =>
              handleInputChange("volumetricSolutionName", e.target.value)
            }
          >
            <option value="">Select Solution Name</option>
            <option value="S1">S1</option>
            <option value="Tadalfil">Tadalfil</option>
            <option value="xcvn">xcvn</option>
            <option value="Aspirin (Asetylselic Acid)">
              Aspirin (Asetylselic Acid)
            </option>
          </CFormSelect>

          <CFormInput
            type="text"
            label="Preparation Method"
            placeholder="Preparation Method"
            className="custom-placeholder mb-3"
            value={solutionData.methodNo}
            onChange={(e) => handleInputChange("methodNo", e.target.value)}
          />

          <CFormInput
            type="text"
            label="Solution Quantity"
            placeholder="Enter Solution Quantity"
            className="custom-placeholder mb-3"
            value={solutionData.solutionQuantity}
            onChange={(e) =>
              handleInputChange("solutionQuantity", e.target.value)
            }
          />

          <CFormInput
            type="text"
            label="Batch No"
            placeholder="Batch No"
            className="custom-placeholder mb-3"
            value={solutionData.batchNo}
            onChange={(e) => handleInputChange("batchNo", e.target.value)}
          />

          <CForm className="mb-3">
            <CFormLabel>Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="newRadio"
                label="New"
                value="New"
                checked={solutionData.type === "New"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="dilutionRadio"
                label="Dilution"
                value="Dilution"
                checked={solutionData.type === "Dilution"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="readyMadeRadio"
                label="Ready Made"
                value="Ready Made"
                checked={solutionData.type === "Ready Made"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
            </div>
          </CForm>

          <CFormInput
            type="text"
            label="Documents if Any"
            placeholder="Documents if Any"
            className="custom-placeholder mb-3"
            value={solutionData.documents}
            onChange={(e) => handleInputChange("documents", e.target.value)}
          />

          <CFormInput
            type="text"
            label="Comments"
            placeholder="Comments"
            className="custom-placeholder mb-3"
            value={solutionData.comments}
            onChange={(e) => handleInputChange("comments", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            onClick={handleFormSubmit}
            style={{ background: "#0F93C3", color: "white" }}
          >
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SolutionPreparationModal;
