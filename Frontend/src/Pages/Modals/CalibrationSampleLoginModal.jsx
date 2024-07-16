import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";

const CalibrationSampleLoginModal = ({ visible, closeModal, handleSubmit }) => {
  const [calibrationSchedule, setCalibrationSchedule] = useState({
    setCalibrationScheduleampleType: "",
    testPlan: "",
    productMaterial: "",
    productMaterialCode: "",
    genericName: "",
    specificationCode: "",
    sampleType: "",
    autoSampleAllotted: "",
  });

  const handleChange = (field, value) => {
    const updatedData = { ...calibrationSchedule, [field]: value };
    setCalibrationSchedule(updatedData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit({ ...calibrationSchedule });
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
          <CModalTitle>Add Sample Login</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CFormInput
            label="Sample Login Template/ Revision No."
            className="mb-3"
            type="text"
            placeholder=""
            value={calibrationSchedule.setCalibrationScheduleampleType}
            onChange={(e) =>
              handleChange("setCalibrationScheduleampleType", e.target.value)
            }
          />
          <CFormInput
            label="Test Plan / Revision No."
            className="mb-3"
            type="text"
            placeholder=" Prefix"
            value={calibrationSchedule.testPlan}
            onChange={(e) => handleChange("testPlan", e.target.value)}
          />
          <CFormInput
            label="Product / Material"
            className="mb-3"
            type="text"
            placeholder=" Prefix"
            value={calibrationSchedule.productMaterial}
            onChange={(e) => handleChange("productMaterial", e.target.value)}
          />
          <CFormInput
            label="Product / Material Code"
            className="mb-3"
            type="text"
            placeholder=" "
            value={calibrationSchedule.productMaterialCode}
            onChange={(e) =>
              handleChange("productMaterialCode", e.target.value)
            }
          />
          <CFormInput
            label="Generic Name"
            className="mb-3"
            type="text"
            placeholder=" "
            value={calibrationSchedule.genericName}
            onChange={(e) => handleChange("genericName", e.target.value)}
          />
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=" "
            value={calibrationSchedule.specificationCode}
            onChange={(e) => handleChange("specificationCode", e.target.value)}
          />
          <CFormInput
            label="Sample Type"
            className="mb-3"
            type="text"
            placeholder=" "
            value={calibrationSchedule.sampleType}
            onChange={(e) => handleChange("sampleType", e.target.value)}
          />
          <FormLabel
            style={{ margin: "15px 20px" }}
            id="demo-row-radio-buttons-group-label"
          >
            Auto Sample Allotted
          </FormLabel>
          <RadioGroup
            style={{ margin: "15px 20px" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={calibrationSchedule.autoSampleAllotted}
            onChange={(e) => handleChange("autoSampleAllotted", e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationSampleLoginModal;
