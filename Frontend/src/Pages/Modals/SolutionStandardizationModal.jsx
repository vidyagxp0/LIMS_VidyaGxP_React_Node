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

const SolutionStandardizationModal = ({visible,closeModal,handleSubmit,
}) => {
  const [standardizationData, setStandardizationData] = useState({
    preparationNo: "",
    solutionName: "",
    volumentricSolutionName: "",
    solutionExpiryPeriod: "",
    solutionQuantity: "",
    standardizationSchedule: "",
    batchNo: "",
    type: "",
    averageValue: "",
    comments: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...standardizationData, [field]: value };
    setStandardizationData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...standardizationData });
    closeModal();
  };

  const resetForm = () => {
    setStandardizationData({
      preparationNo: "",
      solutionName: "",
      volumentricSolutionName: "",
      solutionExpiryPeriod: "",
      solutionQuantity: "",
      standardizationSchedule: "",
      batchNo: "",
      type: "",
      averageValue: "",
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
      <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Add Standardization</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            label="Preparation No."
            className="custom-placeholder mb-3"
            options={[
              { value: "prep001", label: "Preparation 001" },
              { value: "prep002", label: "Preparation 002" },
              { value: "prep003", label: "Preparation 003" },
              { value: "prep004", label: "Preparation 004" },
            ]}
            value={standardizationData.preparationNo}
            onChange={(e) => handleInputChange("preparationNo", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Solution Name"
            placeholder="Solution Name"
            className="custom-placeholder mb-3"
            value={standardizationData.solutionName}
            onChange={(e) => handleInputChange("solutionName", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Volumetric Solution Name"
            placeholder="Volumetric Solution Name"
            className="custom-placeholder mb-3"
            value={standardizationData.volumentricSolutionName}
            onChange={(e) => handleInputChange("volumentricSolutionName", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Solution Expiry Period"
            placeholder="Solution Expiry Period"
            className="custom-placeholder mb-3"
            value={standardizationData.solutionExpiryPeriod}
            onChange={(e) => handleInputChange("solutionExpiryPeriod", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Solution Quantity"
            placeholder="Solution Quantity"
            className="custom-placeholder mb-3"
            value={standardizationData.solutionQuantity}
            onChange={(e) => handleInputChange("solutionQuantity", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Standardization Schedule"
            placeholder="Standardization Schedule"
            className="custom-placeholder mb-3"
            value={standardizationData.standardizationSchedule}
            onChange={(e) => handleInputChange("standardizationSchedule", e.target.value)}
          />
          <CFormInput
            type="number"
            label="Batch No"
            placeholder="Batch No"
            className="mb-3"
            value={standardizationData.batchNo}
            onChange={(e) => handleInputChange("batchNo", e.target.value)}
          />
          <CForm className="mb-3">
            <CFormLabel>Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="type"
                id="new"
                label="New"
                value="New"
                checked={standardizationData.type === "New"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
              <CFormCheck
                type="radio"
                name="type"
                id="dilution"
                label="Dilution"
                value="Dilution"
                checked={standardizationData.type === "Dilution"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
              <CFormCheck
                type="radio"
                name="type"
                id="readyMade"
                label="Ready Made"
                value="Ready Made"
                checked={standardizationData.type === "Ready Made"}
                onChange={(e) => handleInputChange("type", e.target.value)}
              />
            </div>
          </CForm>
          <CFormInput
            type="file"
            label="Documents if any"
            placeholder="Documents if any"
            className="custom-placeholder mb-3"
            value={standardizationData.documents}
            onChange={(e) => handleInputChange("documents", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Average Value"
            placeholder="Average Value"
            className="custom-placeholder mb-3"
            value={standardizationData.averageValue}
            onChange={(e) => handleInputChange("averageValue", e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", marginBottom: "1rem" }}>
            <label>Comments</label>
            <textarea
              className="form-control"
              value={standardizationData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
            ></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton onClick={handleFormSubmit} style={{ background: "#0F93C3", color: "white" }}>
            Add Standardization
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SolutionStandardizationModal;
