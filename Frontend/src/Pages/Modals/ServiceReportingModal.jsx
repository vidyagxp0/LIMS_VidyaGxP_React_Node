import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const ServiceReportingModal = ({ visible, closeModal, handleSubmit }) => {
  const [serviceReporting, setServiceReporting] = useState({
    problemId: "",
    instrumentID: "",
    moduleId: "",
    problemInBrief: "",
    problemInDetail: "",
    jobDetails: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...serviceReporting, [field]: value };
    setServiceReporting(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...serviceReporting });
    closeModal();
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Service Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Service Reporting</p>
          <CFormSelect
            type="text"
            label="Problem ID"
            className="mb-3"
            options={["Select...", { label: "SHMDZ" }]}
            placeholder="Select..."
            value={serviceReporting.problemId}
            onChange={(e) => handleInputChange("problemId", e.target.value)}
          />
          <CFormInput
            type="text"
            label="Instrument (Instrument ID)"
            placeholder="hplc"
            value={serviceReporting.instrumentID}
            onChange={(e) => handleInputChange("instrumentID", e.target.value)}
          />
          <CFormSelect
            type="text"
            label="Module ID"
            className="mb-3"
            options={["Select...", { label: "wl/wb/m/001" }]}
            placeholder="Select..."
            value={serviceReporting.moduleId}
            onChange={(e) => handleInputChange("moduleId", e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Brief"
            placeholder="Problem In Brief "
            value={serviceReporting.problemInBrief}
            onChange={(e) =>
              handleInputChange("problemInBrief", e.target.value)
            }
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder="Problem In Details"
            value={serviceReporting.problemInDetail}
            onChange={(e) =>
              handleInputChange("problemInDetail", e.target.value)
            }
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder=" choose file"
          />
          <CFormInput
            type="date"
            className="mb-3"
            label="Occurred On"
            placeholder=" "
          />
          <CFormInput
            type="date"
            className="mb-3"
            label="Reported On"
            placeholder=" "
          />
          <CFormInput
            type="date"
            className="mb-3"
            label="Attended On"
            placeholder=" "
          />
          <CFormInput
            type="date"
            className="mb-3"
            label="Expected Closure Date"
            placeholder=" "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Job Details"
            placeholder=" Job Details"
            value={serviceReporting.jobDetails}
            onChange={(e) => handleInputChange("jobDetails", e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleFormSubmit}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ServiceReportingModal;
