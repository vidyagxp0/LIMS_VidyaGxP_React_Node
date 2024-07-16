import React, { useState } from "react";
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

const InstrumentModuleModal = ({ visible, closeModal, handleSubmit }) => {
  const [moduleData, setModuleData] = useState({
    sno: "",
    InstrumentId: "",
    Category: "",
    Module: "",
    ModuleId: "",
    Make: "",
    Model: "",
    ManufacturerNo: "",
    InstallOn: "",
    ExpiresOn: "",
    SuppliedBy: "",
    SopNo: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...moduleData, [field]: value };
    setModuleData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...moduleData });
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
          <CModalTitle>Add Instrument Module</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Module</p>
          <CFormSelect
            className="mb-3"
            label="Instrument (Instrument ID)"
            placeholder="Select..."
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
            value={moduleData.Category}
            onChange={(e) => {
              handleInputChange("Category", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module"
            placeholder="Module"
            value={moduleData.Module}
            onChange={(e) => {
              handleInputChange("Module", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Module ID"
            placeholder="Module ID"
            value={moduleData.ModuleId}
            onChange={(e) => {
              handleInputChange("ModuleId", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Make"
            placeholder="Make"
            value={moduleData.Make}
            onChange={(e) => {
              handleInputChange("Make", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Model"
            placeholder="Ser33"
            value={moduleData.Model}
            onChange={(e) => {
              handleInputChange("Model", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            placeholder="adf3434"
            value={moduleData.ManufacturerNo}
            onChange={(e) => {
              handleInputChange("ManufacturerNo", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Installed On"
            placeholder="05/10/2024"
            value={moduleData.InstallOn}
            onChange={(e) => {
              handleInputChange("InstalledOn", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            placeholder="05/05/2023"
            value={moduleData.ExpiresOn}
            onChange={(e) => {
              handleInputChange("ExpiresOn", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            placeholder="VidyaGxP"
            value={moduleData.SuppliedBy}
            onChange={(e) => {
              handleInputChange("SuppliedBy", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            placeholder="ASTM6453"
            value={moduleData.SopNo}
            onChange={(e) => {
              handleInputChange("SopNo", e.target.value);
            }}
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

export default InstrumentModuleModal;
