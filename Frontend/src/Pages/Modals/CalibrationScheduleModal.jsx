import React, { useState } from "react";
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

const CalibrationScheduleModal = ({ visible, closeModal, handleSubmit }) => {
  const [calibrationSchedule, setCalibrationSchedule] = useState({
    instrumentCategory: "",
    calibrationType: "",
    instrumentId: "",
    moduleId: "",
    calibrationWorkFlow: "",
    calibrationDataSheet: "",
    scheduleDescription: "",
    startDate: "",
    frequency: "",
    tolerancePeriod: "",
    uniqueCode: "",
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
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle className="font-bold">
          Add Calibration Schedule
        </CModalTitle>
      </CModalHeader>

      <CModalBody>
        <div className="mb-3">
          <label htmlFor="uniqueCode" className="form-label">
            Unique Code
          </label>
          <CFormInput
            id="uniqueCode"
            type="text"
            placeholder="Enter Unique Code"
            value={calibrationSchedule.uniqueCode}
            onChange={(e) => handleChange("uniqueCode", e.target.value)}
          />
        </div>
        <CFormSelect
          className="mb-3"
          label="Instrument Category"
          options={[
            { label: "Select Instrument Category", value: "" },
            { label: "chromatography", value: "chromatography" },
            { label: "weighing balance", value: "weighing-balance" },
          ]}
          value={calibrationSchedule.instrumentCategory}
          onChange={(e) => handleChange("instrumentCategory", e.target.value)}
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
          value={calibrationSchedule.calibrationType}
          onChange={(e) => handleChange("calibrationType", e.target.value)}
        />
        <CFormSelect
          className="mb-3"
          label="Instrument (Instrument ID)"
          options={["Select Instrument ID"]}
          value={calibrationSchedule.instrumentId}
          onChange={(e) => handleChange("instrumentId", e.target.value)}
        />
        <CFormSelect
          className="mb-3"
          label="Module (Module ID)"
          options={["Select Module ID"]}
          value={calibrationSchedule.moduleId}
          onChange={(e) => handleChange("moduleId", e.target.value)}
        />

        <FormLabel className="mt-3">Calibration Work Flow</FormLabel>
        <div className="d-flex gap-4 mb-3">
          <div>
            <input
              type="radio"
              id="calibrationDataSheet"
              name="calibrationWorkFlow"
              value="calibrationDataSheet"
              checked={
                calibrationSchedule.calibrationWorkFlow ===
                "calibrationDataSheet"
              }
              onChange={(e) =>
                handleChange("calibrationWorkFlow", e.target.value)
              }
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
              value="sampleLoginTemplate"
              checked={
                calibrationSchedule.calibrationWorkFlow ===
                "sampleLoginTemplate"
              }
              onChange={(e) =>
                handleChange("calibrationWorkFlow", e.target.value)
              }
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
          value={calibrationSchedule.calibrationDataSheet}
          onChange={(e) => handleChange("calibrationDataSheet", e.target.value)}
        />

        <div className="mb-3">
          <label htmlFor="scheduleDescription" className="form-label">
            Schedule Description
          </label>
          <CFormInput
            id="scheduleDescription"
            type="text"
            placeholder="Schedule Description"
            value={calibrationSchedule.scheduleDescription}
            onChange={(e) =>
              handleChange("scheduleDescription", e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <CFormInput
            id="startDate"
            type="date"
            onFocus={(e) => e.target.showPicker()}
            placeholder=""
            value={calibrationSchedule.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
          />
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
          value={calibrationSchedule.frequency}
          onChange={(e) => handleChange("frequency", e.target.value)}
        />

        <div className="mb-3">
          <label htmlFor="tolerancePeriod" className="form-label">
            Tolerance Period
          </label>
          <CFormInput
            id="tolerancePeriod"
            type="text"
            placeholder="Tolerance Period"
            value={calibrationSchedule.tolerancePeriod}
            onChange={(e) => handleChange("tolerancePeriod", e.target.value)}
          />
          <span className="ms-2">Day(s)</span>
        </div>

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
  );
};

export default CalibrationScheduleModal;
