import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

const InvRegistrationModal = (_props) => {
  return (
    <div>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and add new standard lot usage.
          </p>
          <CFormInput
            type="text"
            label="Reference Standard Name"
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Reference Standard Code
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Cas / Cat No.
            "
            placeholder=""
          />
          <CFormInput type="text" label="Source" placeholder="" />
          <CFormInput
            type="text"
            label="Quantity Recieved
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Supplied By
            "
            placeholder=""
          />

          <CFormSelect type="text" label="Certificate" placeholder="" />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <h6>Certificate Received</h6>
          <div style={{ marginBottom: "10px" }}>
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Yes"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="No"
            />
          </div>

          <CFormSelect type="text" label="Certificate" placeholder="" />

          <CFormInput
            type="text"
            label="Batch No. / Lot No."
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Delivery Receipt Number"
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Delivery Receipt Date"
            placeholder=""
          />
          <CFormSelect
            type="text"
            label="Recieved By
            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Recieved On
            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Valid Upto
            "
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Storage Location
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Potency
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="UOM
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Water Content

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="UOM
            "
            placeholder=""
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
            Add Standard Lot Usage
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default InvRegistrationModal;
