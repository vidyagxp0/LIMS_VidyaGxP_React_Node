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

const InstrumentModuleModal = (_props) => {
  const [formData, setFormData] = useState({
    instructionCategory: "",
    make: "",
    model: "",
    serialNo: "",
    installedOn: "",
    warrantyExpiresOn: "",
    suppliedBy: "",
    sopNo: "",
  });

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    let randomValues = {};

    switch (selectedValue) {
      case "Weighing Balance 2":
        randomValues = {
          instructionCategory: "Weighing Balance",
          make: "Shimadu",
          model: "WB2",
          serialNo: "WB2345",
          installedOn: "2024-05-10",
          warrantyExpiresOn: "2025-05-10",
          suppliedBy: "VidyaGxP",
          sopNo: "WB6453",
        };
        break;
      case "Pressure Gauge":
        randomValues = {
          instructionCategory: "Pressure Gauge",
          make: "PressureCo",
          model: "PG33",
          serialNo: "PG1234",
          installedOn: "2023-03-12",
          warrantyExpiresOn: "2024-03-12",
          suppliedBy: "PressureSuppliers",
          sopNo: "PG6453",
        };
        break;
      case "ARZ ph Meter":
        randomValues = {
          instructionCategory: "pH Meter",
          make: "ARZ",
          model: "PH202",
          serialNo: "PH2020",
          installedOn: "2022-07-15",
          warrantyExpiresOn: "2023-07-15",
          suppliedBy: "ARZ Suppliers",
          sopNo: "PH6453",
        };
        break;
      case "Ariz Balance":
        randomValues = {
          instructionCategory: "Balance",
          make: "Ariz",
          model: "B100",
          serialNo: "B1001",
          installedOn: "2021-09-01",
          warrantyExpiresOn: "2022-09-01",
          suppliedBy: "Ariz Suppliers",
          sopNo: "B6453",
        };
        break;
      case "Weighing Balance-1":
        randomValues = {
          instructionCategory: "Weighing Balance",
          make: "Shimadu",
          model: "WB1",
          serialNo: "WB1234",
          installedOn: "2020-11-20",
          warrantyExpiresOn: "2021-11-20",
          suppliedBy: "VidyaGxP",
          sopNo: "WB6453",
        };
        break;
      case "Weighing Balance":
        randomValues = {
          instructionCategory: "Weighing Balance",
          make: "Shimadu",
          model: "WB",
          serialNo: "WB0000",
          installedOn: "2019-02-15",
          warrantyExpiresOn: "2020-02-15",
          suppliedBy: "VidyaGxP",
          sopNo: "WB6453",
        };
        break;
      default:
        randomValues = {
          instructionCategory: "",
          make: "",
          model: "",
          serialNo: "",
          installedOn: "",
          warrantyExpiresOn: "",
          suppliedBy: "",
          sopNo: "",
        };
    }
    setFormData(randomValues);
  };

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
            label="Instrument (Instrument ID)"
            placeholder="Select..."
            onChange={handleDropdownChange}
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
            value={formData.instructionCategory}
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
            value={formData.make}
            placeholder="Shimadu"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Model"
            value={formData.model}
            placeholder="Ser33"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Manufacturer's Serial No."
            value={formData.serialNo}
            placeholder="adf3434"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Installed On"
            value={formData.installedOn}
            placeholder="05/10/2024"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Warranty Expires On"
            value={formData.warrantyExpiresOn}
            placeholder="05/05/2023"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supplied By"
            value={formData.suppliedBy}
            placeholder="VidyaGxP"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="SOP No."
            value={formData.sopNo}
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
