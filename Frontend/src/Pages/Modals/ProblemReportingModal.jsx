import { CButton, CFormCheck, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const ProblemReportingModal = (_props) => {
  return (
    <div>
          <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader>
          <CModalTitle>Add Problem Reporting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information and Add Problem Reporting</p>
          <CFormSelect
            type="text"
            label="Instrument (Instrument ID)"
            options={[
              "Select...",
              { label: "eqi/eng/163" },
              { label: "arzph001" },
              { label: "arz003" },
              { label: "qc/bal/0011" },
              { label: "hplc" },
              { label: "qc/bal/02" },
            ]}
            placeholder="Select... "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Instrument Category"
            placeholder="weighing balance "
            disabled
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Supplied By"
            placeholder="Supplied By "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem ID"
            placeholder="Problem ID"
          />
          <label>Problem In</label>
          <CFormCheck
            type="radio"
            id="ProblemInInstrument"
            name="ProblemIn"
            label="Instrument"
          />
          <CFormCheck
            type="radio"
            className="mb-3"
            id="ProblemInModule"
            name="ProblemIn"
            label="Module"
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Brief"
            placeholder=" Problem In Brief"
          />
          <CFormInput
            type="file"
            className="mb-3"
            label="Reference Document"
            placeholder=" choose file"
          />
          <CFormInput type="date" label="Occurred On" placeholder=" " />
          <CFormInput
            type="date"
            className="mb-3"
            label="Reported On"
            placeholder=" "
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Problem In Details"
            placeholder=" Problem In Details"
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
  )
}

export default ProblemReportingModal
