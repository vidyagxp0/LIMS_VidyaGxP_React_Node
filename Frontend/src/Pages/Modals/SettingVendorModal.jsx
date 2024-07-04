import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const SettingVendorModal = (_props) => {
  return (
    <div>
         <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle>Add Vendor</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h5 className="mb-4">Add information and add new Vendor</h5>
        <CFormInput
          type="text"
          className="mb-3"
          label="Material Name"
          placeholder="Material Name"
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Supplier Name"
          placeholder="Supplier Name"
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Email"
          placeholder="email@xyz.com"
        />
        <CFormInput
          type="number"
          className="mb-3"
          label="Phone"
          placeholder="Phone"
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Address"
          placeholder="Address"
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Comments"
          placeholder="Comments"
        />
        <CFormInput
          type="number"
          className="mb-3"
          label="Contact person number"
          placeholder="Contact person"
        />
        <CFormInput
          type="text"
          className="mb-3"
          label="Website"
          placeholder="https://yourweb.com"
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Cancel
        </CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
      
    </div>
  )
}

export default SettingVendorModal
