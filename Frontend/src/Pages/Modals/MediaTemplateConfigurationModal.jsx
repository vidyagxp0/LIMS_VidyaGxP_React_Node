import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const MediaTemplateConfigurationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Media Template Configuration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Media Configuration Type</p>
          {/* <h3>Registration Initiation</h3> */}
          <CFormSelect
            type="text"
            label="Media Name
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Media Prefix
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Mode Of Preparation
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Sample Login Tempalate for Media Lot Acceptance
"
            placeholder=""
          />
          <div className="flex gap-3">
            <CFormInput
              type="text"
              label="Prepared Media Validity Period"
              placeholder=""
            />
            <span className="mt-3">Day(s)/</span>
          </div>
          <CFormInput
            type="text"
            label="Sample Login Tempalate for Media Preparation"
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Prepared Media Container Types"
            placeholder=""
            options={[
              { value: "Plate", label: "Plate" },
              { value: "SLANT", label: "SLANT" },
              { value: "BROTH", label: "BROTH" },
              { value: "Molten Agar", label: "Molten Agar" },
              { value: "100ml BROTH(VIAl)", label: "100ml BROTH(VIAl)" },
              { value: "200ml brox", label: "200ml brox" },
            ]}
          />
          <CForm>
            <CFormLabel>Prepared Media Usage</CFormLabel>
            <div className="flex gap-3 mb-3">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Before Acceptance"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="After Acceptance"
                value="reject"
              />
            </div>
          </CForm>
          <CFormTextarea
            type="text"
            label="Comments"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default MediaTemplateConfigurationModal;
