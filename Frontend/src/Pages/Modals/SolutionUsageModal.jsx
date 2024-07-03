import { CButton, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const SolutionUsageModal = (_props) => {
  return (
    <div>
         <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader>
          <CModalTitle>Add Solution</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "13px" }}>Add information and Add new usage.</p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Standardization No."
            placeholder=" "
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Volumetric Solution Name"
            placeholder="Volumetric Solution Name"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="text"
            label="Preparation No."
            placeholder="Preparation No."
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Used On"
            placeholder="Solution Expiry Period"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Preparation Date"
            placeholder="Solution Quantity"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="date"
            label="Standardization Date"
            placeholder="Standardization Schedule"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Used By"
            placeholder="Batch No"
            className="mb-3"
          />
          <CForm className="mb-3">
            <CFormLabel>Mode of Usage</CFormLabel>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
                label="Miscellaneous"
                value="reject"
              />
            </div>
          </CForm>
          <CFormSelect
            type="number"
            label="Product / Material"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="A.R. No's"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Test Name"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <CFormInput
            type="number"
            label="Comments If Any"
            placeholder="select"
            className="custom-placeholder mb-3"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: "1rem"
            }}
          >
            <label>Comments</label>
            <textarea name="" id="" className="form-control"></textarea>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Solution
          </CButton>
        </CModalFooter>
      </CModal>

    </div>
  )
}

export default SolutionUsageModal
