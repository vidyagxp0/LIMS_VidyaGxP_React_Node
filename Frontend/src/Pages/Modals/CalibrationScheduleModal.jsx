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
import { FormControl, FormLabel } from "react-bootstrap";

const CalibrationScheduleModal = (props) => {
  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
      size="xl"
    >
      <CModalHeader>
        <CModalTitle className="font-bold">
          Add Calibration Schedule
        </CModalTitle>
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

        <FormLabel className="mt-3">
          Calibration Work Flow
        </FormLabel>
        <div className="d-flex gap-4 mb-3">
          <div>
            <input
              type="radio"
              id="calibrationDataSheet"
              name="calibrationWorkFlow"
              value="Calibration Data Sheet"
            />
            <label htmlFor="calibrationDataSheet" className="ms-2">
              Calibration Data Sheet
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="sampleLoginTemplate"
              name="calibrationWorkFlow"
              value="Sample Login Template"
            />
            <label htmlFor="sampleLoginTemplate" className="ms-2">
              Sample Login Template
            </label>
          </div>
        </div>

        <CFormSelect
          className="mb-3"
          label="Calibration Datasheet"
          options={[
            { label: "Select Calibration Datasheet", value: "" },
            { label: "Cal data sheet", value: "cal-data-sheet" },
            { label: "Data sheet1", value: "data-sheet1" },
          ]}
        />

        <div className="mb-3">
          <label htmlFor="scheduleDescription" className="form-label">
            Schedule Description
          </label>
          <CFormInput
            id="scheduleDescription"
            type="text"
            placeholder="Schedule Description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <CFormInput id="startDate" type="date" placeholder="" />
        </div>

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

        <div className="mb-3">
          <label htmlFor="tolerancePeriod" className="form-label">
            Tolerance Period
          </label>
          <CFormInput
            id="tolerancePeriod"
            type="text"
            placeholder="Tolerance Period"
          />
          <span className="ms-2">Day(s)</span>
        </div>

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
