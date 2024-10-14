import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const CalibrationSampleLoginTemplateModal = ({
  visible,
  closeModal,
  handleSubmit,
}) => {
  // Updated to reflect test plans
  const testPlans = [
    { title: "TP-2024-01" },
    { title: "TP-2024-02" },
    { title: "TP-2024-03" },
    { title: "TP-2024-04" },
    { title: "TP-2024-05" },
  ];

  const [calibrationSampleLogInTemplate, setCalibrationSampleLogInTemplate] =
    useState({
      sampleLogintemplate: "",
      testPlan: "",
      productMaterial: "",
      productMaterialCode: "",
      genericName: "",
      specificationId: "",
    });

  const handleChange = (field, value) => {
    const updatedData = { ...calibrationSampleLogInTemplate, [field]: value };
    setCalibrationSampleLogInTemplate(updatedData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit({ ...calibrationSampleLogInTemplate });
    setCalibrationSampleLogInTemplate({
      sampleLogintemplate: "",
      testPlan: "",
      productMaterial: "",
      productMaterialCode: "",
      genericName: "",
      specificationId: "",
    });
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
          <CModalTitle>Add Sample Login Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Sample Login Template"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.sampleLogintemplate}
            onChange={(e) =>
              handleChange("sampleLogintemplate", e.target.value)
            }
          />
          <div>
            <label htmlFor="testPlan-select">Test Plan / Revision No.</label>
            <select
              name="testPlan-select"
              id="testPlan-select"
              className="mb-3 form-select"
              value={calibrationSampleLogInTemplate.testPlan}
              onChange={(e) => handleChange("testPlan", e.target.value)}
            >
              <option value="">Select a test plan</option>
              {testPlans.map((plan, index) => (
                <option key={index} value={plan.title}>
                  {plan.title}
                </option>
              ))}
            </select>
          </div>

          <CFormInput
            label="Product / Material"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.productMaterial}
            onChange={(e) => handleChange("productMaterial", e.target.value)}
          />
          <CFormInput
            label="Product / Material Code"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.productMaterialCode}
            onChange={(e) =>
              handleChange("productMaterialCode", e.target.value)
            }
          />
          <CFormInput
            label="Generic Name"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.genericName}
            onChange={(e) => handleChange("genericName", e.target.value)}
          />
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSampleLogInTemplate.specificationId}
            onChange={(e) => handleChange("specificationId", e.target.value)}
          />
          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>
              Add
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationSampleLoginTemplateModal;
