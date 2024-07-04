import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const LabelManagemantModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Label</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new Label</p>
          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                Label <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Enter Label"
          />
          <CFormTextarea
            className="mb-3"
            type="text"
            label={
              <>
                Address <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="  "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label={
              <>
                logo <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="logo"
          />
          <label className="mb-2">
            UM <span style={{ color: "red" }}>*</span>
          </label>
          <CFormCheck
            className="mb-3"
            type="radio"
            id="UMCM"
            name="UM"
            label="CM"
          />
          <CFormCheck
            className="mb-3"
            type="radio"
            id="UMMM"
            name="UM"
            label="MM"
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

export default LabelManagemantModal;
