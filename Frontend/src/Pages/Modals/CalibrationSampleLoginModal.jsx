import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { FormLabel } from "react-bootstrap";

const CalibrationSampleLoginModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
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
          />
          <CFormInput
            label="Test Plan / Revision No."
            className="mb-3"
            type="text"
            placeholder=" Prefix"
          />
          <CFormInput
            label="Product / Material"
            className="mb-3"
            type="text"
            placeholder=" Prefix"
          />
          <CFormInput
            label="Product / Material Code"
            className="mb-3"
            type="text"
            placeholder=" "
          />
          <CFormInput
            label="Generic Name"
            className="mb-3"
            type="text"
            placeholder=" "
          />
          <CFormInput
            label="Specification ID"
            className="mb-3"
            type="text"
            placeholder=" "
          />
          <CFormInput
            label="Sample Type"
            className="mb-3"
            type="text"
            placeholder=" "
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
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

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

export default CalibrationSampleLoginModal;
