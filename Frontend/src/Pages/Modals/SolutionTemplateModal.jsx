import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const SolutionTemplateModal = (_props) => {
  return (
    <div>
         <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Solution Name" placeholder="Select " />
          <CFormInput
            type="text"
            label="Prefix"
            placeholder="Prefix "
            className="custom-placeholder"
          />

          <CFormInput
            type="text"
            label="Template Configuration No."
            placeholder="Template Configuration No."
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Solution Quantity"
            placeholder="Enter Solution Quantity "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="UOM"
            
            placeholder="Select UOM"
            className="custom-placeholder"
          />
         
          <CFormInput
            type="number"
            label="Template for New Prepration"
            placeholder="Template for New Prepration"
            className="custom-placeholder"
          />
          <CFormInput
            type="number"
            label="Preparation Through Dilution"
            placeholder="Preparation Through Dilution"
          />
          <CFormInput type="number" label="Template For Standardization" placeholder="Template For Standardization" />

          <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
          <label >Comments</label>
          <textarea name="" id=""></textarea>
          </div>

         
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add Template
          </CButton>
        </CModalFooter>
      </CModal>

      
    </div>
  )
}

export default SolutionTemplateModal
