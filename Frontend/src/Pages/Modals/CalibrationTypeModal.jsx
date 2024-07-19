import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const CalibrationTypeModal = ({ visible, closeModal, handleSubmit }) => {
  const [calibrationType , setCalibrationType ] = useState({
    CalibrationType : "",
    CalibrationPrefix:"",
  })

  const handleChange = (field , value) => {
    const updatedData = {...calibrationType, [field]:value }
    setCalibrationType(updatedData)
  };

  const handleFormSubmit = (e) => {
    handleSubmit({...calibrationType});
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
          <CModalTitle> Add Calibration Type</CModalTitle>
        </CModalHeader>
        <p className="ms-3 m-2">Add information and add new calibration type</p>
        <CModalBody>
          <CFormInput
            label="Calibration Type"
            className="mb-3"
            type="text"
            placeholder="Calibration Type"
            value={calibrationType.CalibrationType}
            onChange={(e)=>handleChange("CalibrationType",e.target.value)}
          />
          <CFormInput
            label="Calibration Type Prefix"
            className="mb-3"
            type="text"
            placeholder="Calibration Type Prefix"
            value={calibrationType.CalibrationPrefix}
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

export default CalibrationTypeModal;
