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

const GroupNameModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Group Name</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Group Name</p>
          <CFormInput
            className="mb-3"
            type="text"
            label="Group Name"
            placeholder="Group Name"
            required
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder="Description"
            required
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default GroupNameModal;
