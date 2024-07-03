import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const ClientsModal = (_props) => {
  return (
    <div>
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size='xl'>
         <CModalHeader>
           <CModalTitle>Add Client</CModalTitle>
         </CModalHeader>
         <CModalBody>
           <p className="mb-3 fw-bold">Add information and add new Client</p>
           <CFormInput type="text" className="mb-3" label="Client Name" placeholder="Bussiness Associate Name" />
           <CFormInput type="text" className="mb-3" label="Alternate Name" placeholder="Alternate Name" />
           <CFormInput type="email" className="mb-3" label="Email" placeholder="Email" />
           <CFormInput type="number" className="mb-3" label="Phone" placeholder="Phone" />
           <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
           <CFormInput type="text" className="mb-3" label="Contact Person" placeholder="Contact Person" />
           <CFormInput type="number" className="mb-3" label="Contact Person Number" placeholder="Contact Person Number" />
           <CFormInput type="text" className="mb-3" label="Tax Number" placeholder="Tax Number" />
           <CFormInput type="text" className="mb-3" label="Fax" placeholder="Fax" />
           <CFormInput type="text" className="mb-3" label="Website" placeholder="Website" />
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

export default ClientsModal
