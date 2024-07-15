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

const SolutionPreparationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>New Solution Preparation</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "16px" }}>
          Add information and add new Solution Preparation.
        </p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Volumetric Solution Name"
            placeholder="Volumetric Solution Name "
            className="custom-placeholder mb-3"
            options={
              ({ value: "S1", label: "S1" },
              { value: "Tadalfil", label: "Tadalfil" },
              { value: "xcvn", label: "xcvn" },
              {
                value: "Aspirin (Asetylselic Acid)",
                label: "Aspirin (Asetylselic Acid)",
              })
            }
          />

          <CFormInput
            type="text"
            label="Preparation Method"
            placeholder="Preparation Method"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Solution Quantity"
            placeholder="Enter Solution Quantity "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Batch No"
            placeholder="Batch No"
            className="custom-placeholder mb-3"
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
            label="Documents if Any"
            placeholder="Documents if Any"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Comments"
            placeholder="Comments"
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
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default SolutionPreparationModal;
