import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const VendorModal = (_props) => {
  return (
    <div>
        <CModal
         alignment="center"
         visible={_props.visible}
         onClose={_props.closeModal}
         size='xl'
       >
         <CModalHeader>
           <CModalTitle>Add Approved Vendor</CModalTitle>
         </CModalHeader>
         <CModalBody
         >
           <p className="mb-3 fw-bold">
             Add information and add new approved vendor
           </p>
           <CFormSelect
             className="mb-3"
             label="Product/Material Name"
             placeholder="Select product"
             options={[
               { value: "Tadalafil", label: "Tadalafil" },
               { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
               {
                 value: "Diclofenac Sodium (BromineFree)",
                 label: "Diclofenac Sodium (BromineFree)",
               },
             ]}
           />
           <CFormInput
             type="text"
             className="mb-3"
             label="Unique Code"
             placeholder="Product Code"
           />
           <CFormSelect
             className="mb-3"
             label="Vendor Name"
             placeholder="Select vender"
             options={[
               {
                 value: "Aavis Pharmaceuticals",
                 label: "Aavis Pharmaceuticals",
               },
               { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
               {
                 value: "Diclofenac Sodium (BromineFree)",
                 label: "Diclofenac Sodium (BromineFree)",
               },
             ]}
           />
           <CFormInput
             type="text"
             className="mb-3"
             label="Qualification Criteria"
             placeholder="Qualification Criteria"
           />
           <CFormInput
             type="text"
             className="mb-3"
             label="Comments If Any"
             placeholder="Comments If Any"
           />
         </CModalBody>
         <CModalFooter>
           <CButton color="light" onClick={_props.closeModal}>
             Back
           </CButton>
           <CButton color="primary">Add</CButton>
         </CModalFooter>
       </CModal>
      
    </div>
  )
}

export default VendorModal
