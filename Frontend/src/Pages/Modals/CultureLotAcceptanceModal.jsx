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

const CultureLotAcceptanceModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Culture Lot Acceptance</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h4>Registration Initiation</h4>
          <p>Add information and Add Template</p>
          <CFormSelect
            type="text"
            label="Reference Culture Name"
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Culture Lot Code"
            placeholder=""
          />
          <CForm>
            <CFormLabel>Sample</CFormLabel>
            <div className="flex items-center justify-between w-1/4">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Accept"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Reject"
                value="reject"
              />
            </div>
          </CForm>

          <CFormInput type="text" label="Comments" placeholder="" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Lot Acceptance
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default CultureLotAcceptanceModal;
