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

const SolutionStandardizationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Standardization</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Preparation No."
            placeholder="Preparation No."
            className="custom-placeholder mb-3"
            options={[
              { value: "prep001", label: "Preparation 001" },
              { value: "prep002", label: "Preparation 002" },
              { value: "prep003", label: "Preparation 003" },
              { value: "prep004", label: "Preparation 004" },
            ]}
          />
          <CFormInput
            type="text"
            label="Solution Name"
            placeholder="Solution Name"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Volumetric Solution Name"
            placeholder="Volumetric Solution Name"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Solution Expiry Period"
            placeholder="Solution Expiry Period"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Solution Quantity"
            placeholder="Solution Quantity"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Standardization Schedule"
            placeholder="Standardization Schedule"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Batch No"
            placeholder="Batch No"
            className="mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Type</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="New"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Dilution"
                value="reject"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Ready Made"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Documents if any"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Average Value"
            placeholder="select"
            className="custom-placeholder mb-3"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label>Comments</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Standardization
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SolutionStandardizationModal;
