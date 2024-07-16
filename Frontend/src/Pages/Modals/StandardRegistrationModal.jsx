import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const StandardRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Standard</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and add new standard.
          </p>
          <CFormInput
            type="text"
            label="Standard Name"
            placeholder="Standard Name "
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
            Add Standard
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default StandardRegistrationModal;
