import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const AcknowledgementModal = (_props) => {
  const [scheduleCode, setScheduleCode] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleScheduleCodeChange = (e) => {
    const value = e.target.value;
    setScheduleCode(value);

    if (value !== "select") {
      // Generate random data for demonstration purposes
      setScheduleTime(`Time ${Math.floor(Math.random() * 100)}`);
      setScheduleType(`Type ${Math.floor(Math.random() * 100)}`);
      setShowTable(true);
    } else {
      setScheduleTime("");
      setScheduleType("");
      setShowTable(false);
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
          <CModalTitle>Add Acknowledgement</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <p>Add information and register new Acknowledgement</p>
              <CFormSelect
                label="Schedule Code"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "Sch1", label: "Sch1" },
                ]}
                onChange={handleScheduleCodeChange}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Time"
                disabled
                placeholder=""
                className="custom-placeholder"
                value={scheduleTime}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Type"
                disabled
                placeholder=""
                className="custom-placeholder"
                value={scheduleType}
              />
            </div>
            <div className="mb-3">
              <CFormSelect
                label="Sample Collected By(System Users)"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "user@gmail.com", label: "user@gmail.com" },
                  { value: "Analyst@gmail.com", label: "Analyst@gmail.com" },
                  { value: "Manager@gmail.com", label: "Manager@gmail.com" },
                  { value: "Reviewer@gmail.com", label: "Reviewer@gmail.com" },
                  { value: "Initiator", label: "Initiator" },
                  { value: "Analyst", label: "Analyst" },
                ]}
              />
            </div>
            <div className="mb-3">
              <CFormSelect
                label="Sample Collected By(Other Users)"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "user@gmail.com", label: "user@gmail.com" },
                  { value: "Analyst@gmail.com", label: "Analyst@gmail.com" },
                  { value: "Manager@gmail.com", label: "Manager@gmail.com" },
                  { value: "Reviewer@gmail.com", label: "Reviewer@gmail.com" },
                  { value: "Initiator", label: "Initiator" },
                  { value: "Analyst", label: "Analyst" },
                ]}
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
                  {
                    sno: 1,
                    system: "ps1",
                    area: "Area 1",
                    prefix: "SP1",
                    description: "Description 1",
                  },
                  {
                    sno: 2,
                    system: "ps2",
                    area: "Area 2",
                    prefix: "SP2",
                    description: "Description 2",
                  },
                  {
                    sno: 3,
                    system: "ps3",
                    area: "Area 3",
                    prefix: "SP3",
                    description: "Description 3",
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{row.sno}</td>
                    <td className="border px-4 py-2">{row.system}</td>
                    <td className="border px-4 py-2">{row.area}</td>
                    <td className="border px-4 py-2">{row.prefix}</td>
                    <td className="border px-4 py-2">{row.description}</td>
                    <td className="border px-4 py-2">
                      <input type="checkbox" />
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

export default AcknowledgementModal;
