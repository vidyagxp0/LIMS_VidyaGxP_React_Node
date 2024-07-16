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

const FacilityModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Facility</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Plant"
                placeholder=""
                className="custom-placeholder"
                options={[
                  { value: "select", label: "select" },
                  { value: "Master", label: "Master" },
                  { value: "win_master", label: "win_master" },
                  { value: "PLant3", label: "Plant3" },
                  { value: "Plantdemo4", label: "Plantdemo4" },
                ]}
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Facility
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
                label="Prefix
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
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default FacilityModal;
