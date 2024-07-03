import { CButton, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const WorkingStandardUsageModal = (_props) => {
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
          
          <CFormSelect
            type="text"
            label="W.S Lot No."
            placeholder="Select.. "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Product/Material"
            placeholder="Product/Material"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Created Date"
            placeholder="Lot Created Date "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Lot Exp. Date"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormTextarea
            type="text"
            label="Usage Type"
            placeholder="Usage Type"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="No. of Containers Prepared"
            placeholder="No. of Containers Prepared"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Container Issued On"
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Container Valid Upto"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Total Quantity in containers"
            placeholder=""
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Available Quantity In Container"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Collection Type</CFormLabel>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Manual"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Auto Binding"
                value="reject"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Set as default"
                value="reject"
              />
            </div>
          </CForm>
          <CFormInput
            type="number"
            label="Quantity Used Now"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Used On"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Used By"
            placeholder="Select..."
            className="custom-placeholder mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Usage for</CFormLabel>
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="acceptRadio"
                label="Sample Analysis"
                value="accept"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Instrument Calibration"
                value="reject"
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="rejectRadio"
                label="Miscellaneous"
                value="reject"
              />
            </div>
          </CForm>
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

export default WorkingStandardUsageModal
