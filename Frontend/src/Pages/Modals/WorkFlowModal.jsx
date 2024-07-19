import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";

const WorkFlowModal = ({ visible, closeModal }) => {
  const [workFlowData, setWorkFloData] = useState({
    Name: "",
    UniqueCode: "",
    GenericName: "",
    ReTestingPeriod: "",
  });
  return (
    <div>
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>New Plant</CModalTitle>
          <hr />
        </CModalHeader>
        <p className="ml-4">Add information and add new plant.</p>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-4"
            label="Name"
            placeholder=" Name"
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Unique Code"
            placeholder="Unique Code"
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Generic Name"
            placeholder="Generic Name "
          />
          <CFormInput
            type="text"
            className="mb-4"
            label="Re-testing Period(Days)"
            placeholder="Re-testing Period(Days)"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary">Add New</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default WorkFlowModal;
