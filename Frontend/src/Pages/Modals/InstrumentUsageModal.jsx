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

const InstrumentUsageModal = ({ visible, closeModal, handleSubmit }) => {
  const [usageData, setUsagedata] = useState({
    InstrumentID: "",
    InstrumentCategory: "",
    UsageCode: "",
    ProductName: "",
    ARNO: "",
    UsedFor: "",
    UsedBy: "",
    UsedFrom: "",
    UsedTo: "",
    comment: "",
    status: "",
  });
  const handleInputChange = (field, value) => {
    const updatedData = { ...usageData, [field]: value };
    setUsagedata(updatedData);
    console.log(updatedData);
  };

  const handleFormSubmit = () => {
    handleSubmit({ ...usageData });
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
          <CModalTitle>Add Instrument usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Instrument Usage</p>

          <CFormSelect
            className="mb-3"
            type="select"
            label="Instrument (Instrument ID)"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "en33/23" },
              { label: "eqi/eng/163" },
              { label: "ARZ001" },
              { label: "Arz003" },
              { label: "qc/bal/011" },
              { label: "hplc" },
            ]}
            value={usageData.InstrumentID}
            onChange={(e) => {
              handleInputChange("InstrumentID", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Instrument Category"
            placeholder="chromatography "
            value={usageData.InstrumentCategory}
            onChange={(e) => {
              handleInputChange("InstrumentCategory", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Usage Code"
            placeholder="Usage Code"
            value={usageData.UsageCode}
            onChange={(e) => {
              handleInputChange("UsageCode", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            value={usageData.ProductName}
            onChange={(e) => {
              handleInputChange("ProductName", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="A.R.No."
            placeholder="A.R.No."
            value={usageData.ARNO}
            onChange={(e) => {
              handleInputChange("ARNO", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used For"
            placeholder="Used For"
            value={usageData.UsedFor}
            onChange={(e) => {
              handleInputChange("UsedFor", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Used By"
            placeholder="Used By"
            value={usageData.UsedBy}
            onChange={(e) => {
              handleInputChange("UsedBy", e.target.value);
            }}
          />

          <CFormInput
            className="mb-3"
            type="date"
            label="Used From"
            placeholder=""
            value={usageData.UsedFrom}
            onChange={(e) => {
              handleInputChange("UsedFrom", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Used To"
            placeholder=""
            value={usageData.UsedTo}
            onChange={(e) => {
              handleInputChange("UsedTo", e.target.value);
            }}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Comment If Any"
            placeholder="Comment"
            value={usageData.comment}
            onChange={(e) => {
              handleInputChange("comment", e.target.value);
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

export default InstrumentUsageModal;
