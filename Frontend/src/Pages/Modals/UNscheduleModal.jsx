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

const UNscheduleModal = (_props) => {
  const [processingSystem, setProcessingSystem] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleProcessingSystemChange = (e) => {
    const value = e.target.value;
    setProcessingSystem(value);
    if (value !== "select") {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Unschedule Registration</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new UnSchedule</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
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
            <div className="mb-3">
              <CFormLabel>Types of Frequency</CFormLabel>
              <div>
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
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Frequency"
                placeholder=""
                className="custom-placeholder"
              />
              <CFormSelect label="Select"></CFormSelect>
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
              <CFormInput
                type="date"
                label="Test Plan"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5>Sampling Points Data</h5>
            <div className="mb-3">
              <CFormSelect
                label="Proccesing System"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "ps1", label: "ps1" },
                ]}
                onChange={handleProcessingSystemChange}
              />
            </div>
          </CForm>
          {showTable && (
            <table className="min-w-full bg-white border border-gray-200 mt-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Sno</th>
                  <th className="border px-4 py-2">Processing System</th>
                  <th className="border px-4 py-2">Sample Area</th>
                  <th className="border px-4 py-2">Sample Point Prefix</th>
                  <th className="border px-4 py-2">Sample Point Description</th>
                  <th className="border px-4 py-2">Select</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sno: 1, system: "ps1", area: "Area 1", prefix: "SP1", description: "Description 1" },
                  { sno: 2, system: "ps1", area: "Area 2", prefix: "SP2", description: "Description 2" },
                  { sno: 3, system: "ps1", area: "Area 3", prefix: "SP3", description: "Description 3" },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{row.sno}</td>
                    <td className="border px-4 py-2">{row.system}</td>
                    <td className="border px-4 py-2">{row.area}</td>
                    <td className="border px-4 py-2">{row.prefix}</td>
                    <td className="border px-4 py-2">{row.description}</td>
                    <td className="border px-4 py-2">
                      <CFormCheck />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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

export default UNscheduleModal;
