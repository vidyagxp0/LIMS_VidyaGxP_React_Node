import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const PlantsModal = (_props) => {
  return (
    <div>

<CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size='xl'>
       <CModalHeader>
         <CModalTitle>Add Plant</CModalTitle>
       </CModalHeader>
       <CModalBody>
         <CFormInput type="text" className="mb-3" label="Name" placeholder="Name" />
         <CFormInput type="text" className="mb-3" label="Plant Code" placeholder="Plant Code" />
         <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
       </CModalBody>
       <CModalFooter>
         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
         <CButton color="primary">Add</CButton>
       </CModalFooter>
     </CModal>
      
    </div>
  )
}

export default PlantsModal
