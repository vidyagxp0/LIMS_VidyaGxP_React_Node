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
import React from "react";

const ChemicalUsageModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
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
                name="sampleRadio"
                id="acceptRadio"
                label="Manual"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Auto Binding"
                value="reject"
              />
            </div>
          </CForm>
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
            type="date"
            label="Used by"
            placeholder="Select"
            className="mb-3"
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
                name="sampleRadio"
                id="acceptRadio"
                label="Sample Analysis"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Miscellaneous"
                value="reject"
              />
            </div>
          </CForm>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label>Consumption Details</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
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
