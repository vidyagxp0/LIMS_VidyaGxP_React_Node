import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const ChemicalUsageModal = (props) => {
  const [usageFor, setUsageFor] = useState("");
  const [collectionType, setCollectionType] = useState("");

  const handleUsageForChange = (e) => {
    setUsageFor(e.target.value);
  };

  const handleCollectionTypeChange = (e) => {
    setCollectionType(e.target.value);
  };

  return (
    <div>
      <CModal
        alignment="center"
        visible={props.visible}
        onClose={props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Chemicals</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information and Add Chemical</p>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>Registration Initiation</p>
          <CFormSelect
            type="text"
            label="Chemical / Reagent Name"
            placeholder="Select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="Chemical / Reagent Issue No."
            placeholder="Select"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Batch No."
            placeholder="Batch No."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Issued On"
            placeholder="Issued On"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Quantity Issued"
            placeholder="Quantity Issued"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Available Qty. In This Issue"
            placeholder="Available Qty. In This Issue"
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Collection Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="collectionType"
                id="manualRadio"
                label="Manual"
                value="manual"
                onChange={handleCollectionTypeChange}
              />
              <CFormCheck
                type="radio"
                name="collectionType"
                id="autoBindingRadio"
                label="Auto Binding"
                value="autoBinding"
                onChange={handleCollectionTypeChange}
              />
            </div>
          </CForm>
          {collectionType === "autoBinding" && (
            <div>
              <CFormSelect
                type="Instrument Category"
                label="Received From"
                placeholder="Received From"
                className="mb-3"
                options={[{ value: "select", label: "select" }]}
              />
              <div className="flex gap-5">
                <CFormSelect
                  type="Instrument ID"
                  label="Instrument ID"
                  placeholder=""
                  className="mb-3"
                  options={[{ value: "select", label: "select" }]}
                />
                <CFormInput
                  type="date"
                  label="Usage Start-Date & Time:"
                  placeholder="Select"
                  className="mb-3"
                />
              </div>
              <CForm className="mb-3">
                <CFormLabel>Data Transfer Mode</CFormLabel>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <CFormCheck
                    type="radio"
                    name="dataTransferMode"
                    id="instConnRadio"
                    label="Inst Conn."
                    value="Inst Conn."
                  />
                  <CFormCheck
                    type="radio"
                    name="dataTransferMode"
                    id="bypassInstConnRadio"
                    label="By Pass Inst. Conn."
                    value="By Pass Inst. Conn."
                  />
                </div>
              </CForm>
            </div>
          )}
          <CFormInput
            type="number"
            label="Consumed"
            placeholder=""
            className="mb-3"
          />
          <CFormInput
            type="date"
            label="Used On"
            placeholder="Select"
            className="mb-3"
          />
          <CFormSelect
            type="text"
            label="Used by"
            placeholder="Select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Valid Upto"
            placeholder="Select"
            className="mb-3"
          />

          <CForm className="mb-3">
            <CFormLabel>Usage For</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="usageFor"
                id="sampleAnalysisRadio"
                label="Sample Analysis"
                value="sampleAnalysis"
                onChange={handleUsageForChange}
              />
              <CFormCheck
                type="radio"
                name="usageFor"
                id="miscellaneousRadio"
                label="Miscellaneous"
                value="miscellaneous"
                onChange={handleUsageForChange}
              />
            </div>
          </CForm>

          {usageFor === "sampleAnalysis" && (
            <div>
              <CFormInput
                type="text"
                label="Consumption Details"
                placeholder=""
                className="mb-3"
              />
              <CFormInput
                type="file"
                label="Product/Material"
                placeholder=""
                className="mb-3"
              />
              <CFormInput
                type="text"
                label="Test Name"
                placeholder=""
                className="mb-3"
              />
              <CFormInput
                type="file"
                label="AR NOS."
                placeholder="File 2"
                className="mb-3"
              />
            </div>
          )}

          {usageFor === "miscellaneous" && (
            <div className="mb-3">
              <label>Consumption Details</label>
              <textarea name="" id="" className="form-control"></textarea>
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ChemicalUsageModal;
