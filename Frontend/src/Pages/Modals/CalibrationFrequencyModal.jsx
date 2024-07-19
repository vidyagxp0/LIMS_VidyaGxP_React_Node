import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const CalibrationFrequencyModal = ({ visible, closeModal, handleSubmit }) => {
  const [calibrationFrequency , setCalibrationFrequency ] = useState({
    CalibrationType : "",
    CalibrationPrefix:"",
  })

  const handleChange = (field , value) => {
    const updatedData = {...calibrationFrequency, [field]:value }
    setCalibrationFrequency(updatedData)
  };

  const handleFormSubmit = (e) => {
    handleSubmit({...calibrationFrequency});
    closeModal();
  }


  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle> Add Calibration Frequency</CModalTitle>
        </CModalHeader>
        <p className="ms-3 m-2">
          Add information and add new calibration frequency
        </p>
        <CModalBody>
          <CFormInput
            label="Calibration Frequency"
            className="mb-3"
            type="text"
            placeholder="Calibration Frequency"
            value={calibrationFrequency.CalibrationType}
            onChange={(e)=>handleChange("CalibrationType",e.target.value)}
          />
          <CFormInput
            label="Calibration Frequency Prefix"
            className="mb-3"
            type="text"
            placeholder="Type Prefix"
            value={calibrationFrequency.CalibrationPrefix}
            onChange={(e)=>handleChange("CalibrationPrefix",e.target.value)}
          />

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleFormSubmit}>Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationFrequencyModal;
