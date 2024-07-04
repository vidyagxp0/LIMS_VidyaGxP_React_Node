import { CButton, CFormCheck, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const BUsinessAssociateModal = (_props) => {
  return (
    <div>
         <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle>Add Business Associate</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Business Associate Name <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Business Associate Name"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Unique Code <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Unique Code"
          required
        />

        <label className="mb-2">
          Category Of Business Associate <span style={{ color: "red" }}>*</span>
        </label>

        <CFormCheck
          className="mb-3"
          type="checkbox"
          id="checkbox1"
          label="Customer"
        />
        <CFormCheck
          className="mb-3"
          type="checkbox"
          id="checkbox2"
          label="Supplier"
        />
        <CFormCheck
          className="mb-3"
          type="checkbox"
          id="checkbox3"
          label="Manufacturer"
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Contact Person <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Contact Person"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Location <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Location"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Address : Line 1 <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Address : Line 1"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 2</>}
          placeholder="Address : Line 2"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={<>Address : Line 3</>}
          placeholder="Address : Line 3"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              City <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="City"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              State <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="State"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Country <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Country"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              ZIP / PIN <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="ZIP / PIN"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Phone <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Phone"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Fax <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Fax"
          required
        />

        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Email <span style={{ color: "red" }}>*</span>
            </>
          }
          placeholder="Email"
          required
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

export default BUsinessAssociateModal
