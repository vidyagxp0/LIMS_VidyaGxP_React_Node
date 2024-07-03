import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormTextarea,
} from "@coreui/react";
import React from "react";

const LocationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Location</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and add new Location</p>
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Facility
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Plan
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Location
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Plant Prefix/ Facility Prefix / Prefix"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormTextarea
                type="text"
                label="Description"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <CForm>
              <CFormLabel>Location Type Id</CFormLabel>
              <div>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="System"
                  value="accept"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Undefined"
                  value="reject"
                />
              </div>
              <div className="mb-3 mt-2">
                <CFormInput
                  type="text"
                  label="No. of Sampling Points"
                  placeholder=""
                  className="custom-placeholder "
                />
                <CButton color="info">Add</CButton>
              </div>
            </CForm>
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

export default LocationModal;
