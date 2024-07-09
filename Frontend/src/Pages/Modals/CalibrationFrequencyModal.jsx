import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const CalibrationFrequencyModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
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
          />
          <CFormInput
            label="Calibration Frequency Prefix"
            className="mb-3"
            type="text"
            placeholder="Type Prefix"
          />

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CalibrationFrequencyModal;
