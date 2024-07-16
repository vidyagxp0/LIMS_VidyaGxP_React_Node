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

const ScheduleTerminationModal = (_props) => {
  const [scheduleCode, setScheduleCode] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [showRow, setShowRow] = useState(false);

  const handleScheduleCodeChange = (e) => {
    const value = e.target.value;
    setScheduleCode(value);

    if (value !== "select") {
      // Generate random data for demonstration purposes
      setScheduleTime(`Time ${Math.floor(Math.random() * 100)}`);
      setScheduleType(`Type ${Math.floor(Math.random() * 100)}`);
      setShowRow(true);
    } else {
      setScheduleTime("");
      setScheduleType("");
      setShowRow(false);
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
          <CModalTitle>Add Termination</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new Termination</p>
          <CForm>
            <div className="mb-3">
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
                placeholder=""
                className="custom-placeholder"
                value={scheduleTime}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Type"
                placeholder=""
                className="custom-placeholder"
                value={scheduleType}
                disabled
              />
            </div>
          </CForm>
          {showRow && (
            <table className="min-w-full bg-white border border-gray-200 mt-4">
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">ps1</td>
                  <td className="border px-4 py-2">sp1</td>
                  <td className="border px-4 py-2">p1</td>
                  <td className="border px-4 py-2">pdes</td>
                  <td className="border px-4 py-2">
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="mb-3">
            <CFormInput
              type="text"
              label="Reasons for Termination"
              placeholder=""
              className="custom-placeholder mt-2"
            />
          </div>
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

export default ScheduleTerminationModal;
