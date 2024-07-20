import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useEffect, useState } from "react";

const WorkingStandardUsageModal = ({ visible, closeModal, handleSubmit }) => {
  const [workingData, setWorkingData] = useState({
    refStdlotNo: [],
    productMaterial: "",
    lotCreatedDate: "",
    lotExpDate: "",
    usageType: "",
    noOfContainersPrepared: "",
    containerIssuedOn: "",
    containerValidUpto: "",
    totalQuantityInContainers: "",
    availabeQuantityInContainers: "",
    manual: "",
    autoBinding: "",
    setAsDefault: "",
    quantityUsedNow: "",
    usedOn: "",
    usedBy: "",
    sampleAnalysis: "",
    instrumentCalibration: "",
    miscellaneous: "",
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...workingData, [field]: value };
    setWorkingData(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...workingData });
    closeModal();
  };

  const resetForm = () => {
    setWorkingData({
      refStdlotNo: [],
      productMaterial: "",
      lotCreatedDate: "",
      lotExpDate: "",
      usageType: "",
      noOfContainersPrepared: "",
      containerIssuedOn: "",
      containerValidUpto: "",
      totalQuantityInContainers: "",
      availabeQuantityInContainers: "",
      manual: "",
      autoBinding: "",
      setAsDefault: "",
      quantityUsedNow: "",
      usedOn: "",
      usedBy: "",
      sampleAnalysis: "",
      instrumentCalibration: "",
      miscellaneous: "",
    });
  };

  useEffect(() => {
    if (visible) {
      resetForm();
    }
  }, [visible]);

  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="W.S Lot No."
            placeholder="Select.. "
            className="custom-placeholder mb-3"
            name="refStdlotNo"
            value={workingData.refStdlotNo}
            onChange={(e) => {
              handleInputChange("refStdlotNo", e.target.value);
            }}
            options={[
              { value: "WSI-102023-000006/1", label: "WSI-102023-000006/1" },
              { value: "WSI-102023-000006/2", label: "WSI-102023-000006/2" },
              { value: "WSI-102023-000006/3", label: "WSI-102023-000006/3" },
              { value: "WSI-102023-000006/4", label: "WSI-102023-000006/4" },
              { value: "WSI-102023-000006/5", label: "WSI-102023-000006/5" },
              { value: "WSI-102023-000006/6", label: "WSI-102023-000006/6" },
              { value: "WSI-102023-000006/7", label: "WSI-102023-000006/7" },
              { value: "WSI-102023-000006/8", label: "WSI-102023-000006/8" },
              { value: "WSI-102023-000006/9", label: "WSI-102023-000006/9" },
              { value: "WSI-102023-000006/10", label: "WSI-102023-000006/10" },
            ]}
          />
          <CFormInput
            type="text"
            label="Product/Material"
            placeholder="Product/Material"
            className="custom-placeholder mb-3"
            name="refStdlotNo"
            value={workingData.refStdlotNo}
            onChange={(e) => {
              handleInputChange("refStdlotNo", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Lot Created Date"
            placeholder="Lot Created Date "
            className="custom-placeholder mb-3"
            name="lotCreatedDate"
            value={workingData.lotCreatedDate}
            onChange={(e) => {
              handleInputChange("lotCreatedDate", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Lot Exp. Date"
            placeholder=" "
            className="custom-placeholder mb-3"
            name="lotExpDate"
            value={workingData.lotExpDate}
            onChange={(e) => {
              handleInputChange("lotExpDate", e.target.value);
            }}
          />
          <CFormTextarea
            type="text"
            label="Usage Type"
            placeholder="Usage Type"
            className="custom-placeholder mb-3"
            name="usageType"
            value={workingData.usageType}
            onChange={(e) => {
              handleInputChange("usageType", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="No. of Containers Prepared"
            placeholder="No. of Containers Prepared"
            className="custom-placeholder mb-3"
            name="noOfContainersPrepared"
            value={workingData.noOfContainersPrepared}
            onChange={(e) => {
              handleInputChange("noOfContainersPrepared", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Container Issued On"
            placeholder=" "
            className="custom-placeholder mb-3"
            name="containerIssuedOn"
            value={workingData.containerIssuedOn}
            onChange={(e) => {
              handleInputChange("containerIssuedOn", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Container Valid Upto"
            placeholder=""
            className="custom-placeholder mb-3"
            name="containerValidUpto"
            value={workingData.containerValidUpto}
            onChange={(e) => {
              handleInputChange("containerValidUpto", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            label="Total Quantity in containers"
            placeholder=""
            className="custom-placeholder mb-3"
            name="totalQuantityInContainers"
            value={workingData.totalQuantityInContainers}
            onChange={(e) => {
              handleInputChange("totalQuantityInContainers", e.target.value);
            }}
          />
          <CFormInput
            type="text"
            label="Available Quantity In Container"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
            name="availabeQuantityInContainers"
            value={workingData.availabeQuantityInContainers}
            onChange={(e) => {
              handleInputChange("availabeQuantityInContainers", e.target.value);
            }}
          />
          <CForm className="mb-3">
            <CFormLabel>Collection Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Manual"
                value="accept"
                checked={workingData.manual}
                onChange={(e) => {
                  handleInputChange("manual", e.target.value);
                }}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Auto Binding"
                value="reject"
                checked={workingData.autoBinding}
                onChange={(e) => {
                  handleInputChange("autoBinding", e.target.value);
                }}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Set as default"
                value="reject"
                checked={workingData.setAsDefault}
                onChange={(e) => {
                  handleInputChange("setAsDefault", e.target.value);
                }}
              />
            </div>
          </CForm>
          <CFormInput
            type="number"
            label="Quantity Used Now"
            placeholder="Select..."
            className="custom-placeholder mb-3"
            name="quantityUsedNow"
            value={workingData.quantityUsedNow}
            onChange={(e) => {
              handleInputChange("quantityUsedNow", e.target.value);
            }}
          />
          <CFormInput
            type="date"
            label="Used On"
            placeholder="Select..."
            className="custom-placeholder mb-3"
            name="usedOn"
            value={workingData.usedOn}
            onChange={(e) => {
              handleInputChange("usedOn", e.target.value);
            }}
          />
          <CFormInput
            type="number"
            label="Used By"
            placeholder="Select..."
            className="custom-placeholder mb-3"
            name="usedBy"
            value={workingData.usedBy}
            onChange={(e) => {
              handleInputChange("usedBy", e.target.value);
            }}
          />
          <CForm className="mb-3">
            <CFormLabel>Usage for</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Sample Analysis"
                value="accept"
                checked={workingData.sampleAnalysis}
                onChange={(e) => {
                  handleInputChange("sampleAnalysis", e.target.value);
                }}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Instrument Calibration"
                value="reject"
                checked={workingData.instrumentCalibration}
                onChange={(e) => {
                  handleInputChange("instrumentCalibration", e.target.value);
                }}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Miscellaneous"
                value="reject"
                checked={workingData.miscellaneous}
                onChange={(e) => {
                  handleInputChange("miscellaneous", e.target.value);
                }}
              />
            </div>
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            style={{ background: "#0F93C3", color: "white" }}
            onClick={handleFormSubmit}
          >
            Add Standard Lot Usage
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkingStandardUsageModal;
