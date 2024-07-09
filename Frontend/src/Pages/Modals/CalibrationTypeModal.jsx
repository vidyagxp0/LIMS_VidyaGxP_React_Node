import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const CalibrationTypeModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
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
          />
          <CFormInput
            label="Calibration Type Prefix"
            className="mb-3"
            type="text"
            placeholder="Calibration Type Prefix"
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

export default CalibrationTypeModal;
