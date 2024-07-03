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
import React from "react";

const ServiceReportingModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
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
            placeholder="Select... "
          />
          <CFormInput
            type="text"
            label="Instrument (Instrument ID)"
            placeholder="hplc "
            disabled
          />
          <CFormSelect
            type="text"
            label="Module ID"
            className="mb-3"
            options={["Select...", { label: "wl/wb/m/001" }]}
            placeholder="Select... "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Brief"
            placeholder="Problem In Brief "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder="Problem In Details"
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
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ServiceReportingModal;
