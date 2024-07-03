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

const ChemicalRegistrationModal = (_props) => {
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
          <p style={{ fontWeight: "800", fontSize: "20px" }}>
            Registration Initiation
          </p>

          <CFormInput
            type="text"
            label="Name"
            placeholder="Name"
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="CAS / CAT no."
            placeholder="Enter CAS"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="text"
            label="Category"
            placeholder="Select"
            className="custom-placeholder mb-3"
          />

          <CFormSelect
            type="number"
            label="Grade"
            placeholder="Grade"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Handling Symbol"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Storage Conditions"
            placeholder="Select"
            className="custom-placeholder mb-3"
          />
          <CFormSelect
            type="number"
            label="Lot UOM"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Usage UOM"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Issues Display Order For Usage</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="FIFO"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="FEFO"
                value="reject"
              />
            </div>
          </CForm>
          <p style={{ fontWeight: "bolder" }}>Inventory Control</p>

          <CFormInput
            type="number"
            label="Minimum Qty."
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
            Add Chemical
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ChemicalRegistrationModal;
