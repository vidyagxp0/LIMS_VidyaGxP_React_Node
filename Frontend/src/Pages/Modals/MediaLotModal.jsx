import {
  CButton,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const MediaLotModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Media Lot</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and add new mediaLot</p>
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
            label="Storage Condition

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
            label="Manufacturer(Code)

            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Batch No.
            "
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Mfg. Date

            "
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Exp. Date

            "
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Received On

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Certificate

            "
            placeholder="Choose file"
          />

          <CFormInput
            type="text"
            label="Quantity Received

            "
            placeholder="in gm."
          />

          <CFormInput
            type="text"
            label="Usage Type

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Container Validity Period

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Container Starting Number

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="No. of Containers Prepared

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Minimum No. Of Containers for Alert

            "
            placeholder=""
          />

          {/* <CForm>
            <CFormLabel>Prepared Media Usage</CFormLabel>
            <div>
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
          </CForm> */}
          <CFormTextarea
            type="text"
            id="Description"
            label="Comments"
            placeholder=""
          ></CFormTextarea>
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

export default MediaLotModal;
