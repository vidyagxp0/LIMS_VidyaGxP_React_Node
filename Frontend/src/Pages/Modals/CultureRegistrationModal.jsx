import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const CultureRegistrationModal = (_props) => {
  return (
    <div>
        <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader>
          <CModalTitle>Add Sub Culture Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>
            Add information and Add Template
          </p>
          <h3>Registration Initiation</h3>
          <CFormInput
            type="text"
            label="Template Name

            "
            placeholder=""
          />

          <CFormInput
            type="text"
            label="Template Description

            "
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Unique Code

            "
            placeholder=""
          />
          <CFormInput type="text" label="No Of Passage's" placeholder="" />
          <CButton color="info">Add</CButton>

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
            Add Culture Template
          </CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default CultureRegistrationModal
