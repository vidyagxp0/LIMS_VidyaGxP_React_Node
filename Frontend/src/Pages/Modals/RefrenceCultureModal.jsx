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
import React from "react";

const RefrenceCultureModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add information and Add Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h3>Registration Initiation</h3>
          <CFormSelect
            type="text"
            label="Template Name

            "
            placeholder=""
          />

          <CFormSelect
            type="text"
            label="Reference Culture Name

            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Culture Code/Strain No.

            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Media
"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Analysis Required
"
            placeholder=""
          />
          <h6>Passage For Sub Culture 1 (Passage 0)</h6>
          {/* <CButton color="info">Add</CButton> */}
          <CFormInput type="text" label="Validity Period" placeholder="" />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput type="text" label="Storage Conditions" placeholder="" />

          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 2 (Passage 1)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 3 (Passage 2)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 4 (Passage 3)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />
          <p>Passage For Sub Culture 5 (Passage 4)</p>
          <CFormInput
            type="text"
            label="Validity Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Validity After SubCulturing
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Period
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Incubation Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Conditions
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Logic Template
"
            placeholder=""
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          ></div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Refrence Culture
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default RefrenceCultureModal;
