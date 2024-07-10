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

const InstrumentModuleModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Instrument Module</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Module</p>
          <CFormSelect
            className="mb-3"
            type="text"
            label="Instrument (Instrument ID)"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Weighing Balance 2" },
              { label: "Pressure Gauge" },
              { label: "ARZ ph Meter" },
              { label: "Ariz Balance" },
              { label: "Weighing Balance-1" },
              { label: "Weighing Balance" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Instruction Category"
            placeholder="Weighing Balance"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module"
            placeholder="Module"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module ID"
            placeholder="Module ID"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            placeholder="Shimadu"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Model"
            placeholder="Ser33"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            placeholder="adf3434"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Installed On"
            placeholder="05/10/2024"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder="05/05/2023"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="VidyaGxP"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            placeholder="ASTM6453"
            disabled
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

export default InstrumentModuleModal;
