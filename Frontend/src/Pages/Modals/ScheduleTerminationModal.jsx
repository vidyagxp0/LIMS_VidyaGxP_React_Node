import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const ScheduleTerminationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Termination</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and register new Termination</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Schedule Code
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schdule Time
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            {/* <CForm>
              <CFormLabel>Types of Frequency</CFormLabel>
              <div>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Daily"
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Set Frequency"
                  value="reject"
                />
              </div>
            </CForm> */}
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schdule Type
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Reasons for Termination

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>
        <CModalFooter className="p-3">
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

export default ScheduleTerminationModal;
