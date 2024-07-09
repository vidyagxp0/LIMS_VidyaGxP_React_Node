/* eslint-disable react/prop-types */
import React from "react";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormControl, FormLabel } from "react-bootstrap";

const CalibrationScheduleModal = (props) => {
  const htmlContent = "<div>This is <strong>bold</strong> text.</div>";
  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
    >
      <CModalHeader>
        <CModalTitle> Add Calibration Schedule</CModalTitle>
      </CModalHeader>

      <CModalBody>
        <CFormSelect
          className="mb-3"
          label="Instrument Category"
          options={[
            { label: "Select Instrument Category", value: "" },
            { label: "chromatography", value: "chromatography" },
            { label: "weighing balance", value: "weighing-balance" },
          ]}
        />
        <CFormSelect
          className="mb-3"
          label="Calibration Type"
          options={[
            { label: "Select Calibration Type", value: "" },
            { label: "yearly", value: "yearly" },
            { label: "monthly", value: "monthly" },
            { label: "daily", value: "daily" },
          ]}
        />
        <CFormSelect
          className="mb-3"
          label="Instrument (Instrument ID)"
          options={["Select Instrument ID"]}
        />
        <CFormSelect
          className="mb-3"
          label="Module (Module ID)"
          options={["Select Module ID"]}
        />

        <FormControl style={{ margin: "20px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Calibration Work Flow
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Calibration Data Sheet"
              control={<Radio />}
              label="Calibration Data Sheet"
            />
            <FormControlLabel
              value="Sample Login Template"
              control={<Radio />}
              label="Sample Login Template"
            />
          </RadioGroup>
        </FormControl>

        <CFormSelect
          className="mb-3"
          label="Calibration Datasheet"
          options={[
            { label: "Select Calibration Datasheet", value: "" },
            { label: "Cal data sheet", value: "cal-data-sheet" },
            { label: "Data sheet1", value: "data-sheet1" },
          ]}
        />

        <CFormInput
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          label="Schedule Description"
          className="mb-3"
          type="text"
          placeholder="Schedule Description"
        />

        <CFormInput
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          label="Start Date"
          className="mb-3"
          type="date"
          placeholder=""
        />

        <CFormSelect
          className="mb-3"
          label="Frequency"
          options={[
            { label: "Select Frequency", value: "" },
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
        />

        <CFormInput
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          label="Tolerance Period"
          className="mb-3"
          type="text"
          placeholder="Tolerance Period"
          z
        />

        <span>Day(s)</span>

        <div className="d-flex gap-3 mt-4">
          <CButton color="light w-50" onClick={props.closeModal}>
            &lt; Back
          </CButton>
          <CButton color="primary w-50">Submit</CButton>
        </div>
      </CModalBody>
    </CModal>
  );
};

export default CalibrationScheduleModal;
