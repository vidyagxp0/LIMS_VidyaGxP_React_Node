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

const ColumnRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Registration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ marginLeft: "2px" }}>
            Add information and Add registration.
          </p>
          <CFormInput
            type="text"
            label="Column Application"
            placeholder="Column Application "
          />
          <CFormSelect
            type="text"
            label="Column Name"
            placeholder=" Column Name "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Column Number"
            placeholder="Column Number"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Brand Name / Manufacturer Name"
            placeholder="Brand Name / Manufacturer Name"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Mfg. Serial No. "
            placeholder="Select"
            className="custom-placeholder"
          />

          <CFormInput
            type="number"
            label="Film Thikness / Particle Size"
            placeholder="Film Thikness / Particle Size"
            className="custom-placeholder"
          />
          <CFormInput type="number" label="UOM" placeholder="UOM" />
          <CFormInput
            type="number"
            label="Packing Material"
            placeholder="Packing Material"
          />
          <CFormInput type="number" label="Length" placeholder="select" />
          <CFormInput type="number" label=" UOM" placeholder="UOM" />
          <CFormInput
            type="number"
            label="Inner Diameter"
            placeholder="select"
          />

          <CFormInput
            type="number"
            label="Outer Diameter"
            placeholder="Outer Diameter"
          />

          <CFormInput type="date" label="Recieved On" placeholder="" />

          <CForm className="mb-3">
            <CFormLabel>Certificate Received</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="YES"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="NO"
                value="reject"
              />
            </div>
          </CForm>

          <CFormInput type="number" label="Certificate" placeholder="Browse" />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <label>Remarks if</label>
            <textarea name="" id=""></textarea>
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

export default ColumnRegistrationModal;
