import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const SchedulaModal = (_props) => {
  const [selectedTestPlans, setSelectedTestPlans] = useState([]);

  const handleTestPlanSelect = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption !== "select") {
      setSelectedTestPlans([{ sno: 1, testName: selectedOption }]);
    }
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Schedule Registration</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new Schedule</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Schedule Code"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Description"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <CForm>
              <CFormLabel>Types of Frequency</CFormLabel>
              <div className="flex gap-3">
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Daily"
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Set Frequency"
                  value="reject"
                />
              </div>
            </CForm>
            <label htmlFor="frequency" className="mt-3">
              Frequency
            </label>
            <div className="mb-3 flex gap-3">
              <CFormInput
                type="text"
                placeholder="Frequency  "
                className="custom-placeholder"
              />
              <CFormSelect
                type="text"
                className="custom-placeholder"
                onChange={handleTestPlanSelect}
                options={[
                  { value: "select", label: "select" },
                  { value: "Day(s)", label: "Day(s)" },
                  { value: "Months(s)", label: "Months(s)" },
                ]}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Start Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="End Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormSelect
                type="date"
                label="Test Plan"
                className="custom-placeholder"
                onChange={handleTestPlanSelect}
                options={[
                  { label: "select" },
                  {
                    value: "TP-acc2/ACC-00-QC-01-0000052",
                    label: "TP-acc2/ACC-00-QC-01-0000052",
                  },
                  {
                    value: "TP-undw2/WBLSTP/FG/0493-02-0000051",
                    label: "TP-undw2/WBLSTP/FG/0493-02-0000051",
                  },
                  {
                    value: "TP-01-ep/54321-0000050",
                    label: "TP-01-ep/54321-0000050",
                  },
                  {
                    value: "TP-ae-(a)/SPE/FP/002-0000048",
                    label: "TP-ae-(a)/SPE/FP/002-0000048",
                  },
                  {
                    value: "TP-ae-(a)/SPE/FP/002-0000047",
                    label: "TP-ae-(a)/SPE/FP/002-0000047",
                  },
                  {
                    value: "TP-ae-(a)/SPE/FP/002-0000046",
                    label: "TP-ae-(a)/SPE/FP/002-0000046",
                  },
                  {
                    value: "TP-undw2/WBL/STP/FG/0493-02-0000044",
                    label: "TP-undw2/WBL/STP/FG/0493-02-0000044",
                  },
                  {
                    value: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000043",
                    label: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000043",
                  },
                  {
                    value: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000042",
                    label: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000042",
                  },
                  {
                    value: "TP-dcf/DPE234-000041",
                    label: "TP-dcf/DPE234-000041",
                  },
                  {
                    value: "TP-apb/APB24-0000040",
                    label: "TP-apb/APB24-0000040",
                  },
                  { value: "TP-hyo/HOS-0000039", label: "TP-hyo/HOS-0000039" },
                  {
                    value: "TP-chopoil/CHPOIL001-0000038",
                    label: "TP-chopoil/CHPOIL001-0000038",
                  },
                  {
                    value: "TP-tsv/RPS-TSLV-00-0000037",
                    label: "TP-tsv/RPS-TSLV-00-0000037",
                  },
                  {
                    value: "TP-pm-001/MB-PM-001/00-0000036",
                    label: "TP-pm-001/MB-PM-001/00-0000036",
                  },
                  {
                    value: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000035",
                    label: "TP-fgtab000d2857/WBL/FPS/FG/2893-02-0000035",
                  },
                  {
                    value: "TP-vad/FP 0055-0000034",
                    label: "TP-vad/FP 0055-0000034",
                  },
                  { value: "TP-pc/PC1-0000033", label: "TP-pc/PC1-0000033" },
                  { value: "TP-pc/PC1-0000032", label: "TP-pc/PC1-0000032" },
                ]}
              />
            </div>
            <h5>Sampling Points Data</h5>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Processing System"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>
        <div className="modal-body p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Sno</th>
                <th className="text-left">Test Name</th>
                <th className="text-left">Select</th>
                <th className="text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {selectedTestPlans.map((testPlan, index) => (
                <tr key={index}>
                  <td>{testPlan.sno}</td>
                  <td>{testPlan.testName}</td>
                  <td>
                    <CFormCheck type="checkbox" />
                  </td>
                  <td>
                    <CFormInput type="time" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SchedulaModal;
