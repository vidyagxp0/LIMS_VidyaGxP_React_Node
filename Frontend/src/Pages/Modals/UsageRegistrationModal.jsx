import { CButton, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const UsageRegistrationModal = (_props) => {
  return (
    <div>
          <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader>
          <CModalTitle>Reference Standard Lot Usage</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and add new standard usage registration..
          </p>
          <CFormInput
            type="text"
            label="Ref. Std. Lot. No.
            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Reference Standard Name
            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Reference Standard Code
            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Delivery Receipt Date
"
            placeholder=""
          />
          <CFormInput
            type="text"
            label="Delivery Receipt Number

            "
            placeholder=""
          />
          <CFormInput
            type="date"
            label="Recieved On

            "
            placeholder=""
          />

          <CFormSelect
            type="date"
            label="Valid Upto
"
            placeholder=""
          />

          <h6>Collection Type</h6>
          <div style={{ marginBottom: "10px" }}>
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Manual"
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="Auto Binding"
            />
          </div>

          <CFormSelect
            type="text"
            label="Quantity Used Now
"
            placeholder=""
          />

          <CFormInput
            type="date"
            label="Used On
            "
            name="batchNumber"
            placeholder=""
          />

          <CFormInput
            type="text"
            name="receiptNumber"
            label="Used By
            "
            placeholder=""
          />

          <h6>Usage For</h6>
          <div style={{ marginBottom: "10px" }}>
            <CFormCheck
              type="radio"
              name="option"
              id="optionYes"
              value="yes"
              label="Sample Analysis
              "
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionNo"
              value="no"
              label="Instrument Calibration
              "
            />
            <CFormCheck
              type="radio"
              name="option"
              id="optionMiscellaneous"
              value="Miscellaneous"
              label="Miscellaneous
              "
            />
          </div>

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
  )
}

export default UsageRegistrationModal
