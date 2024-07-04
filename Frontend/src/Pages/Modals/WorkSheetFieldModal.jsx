import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const WorkSheetFieldModal = (_props) => {
  return (
    <div>
         <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Worksheet Fields</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="WorkSheet Field Name "
          />

          <CFormSelect
            type="text"
            label="Binds To"
            placeholder="Select..."
            options={[
              "Select...",
              { label: "HCL" },
              { label: "Hydrochrolic Acid" },
              { label: "Petrochemical" },
              { label: "Initial Product" },
            ]}
          />

          <CFormInput
            type="text"
            label="Description"
            placeholder="Description"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add Field</CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default WorkSheetFieldModal
