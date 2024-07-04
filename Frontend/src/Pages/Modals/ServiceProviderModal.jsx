import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const ServiceProviderModal = (_props) => {
  return (
    <div>
           <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Service Provider</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information and add new service provider
        </p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Name
"
            placeholder=" "
          />
          <CFormInput
            type="text"
            label="Unique Code

            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Refrence Documents
            "
            placeholder="Product/Material"
            className="custom-placeholder"
          />
          <CFormInput
            type="date"
            label="Valid Upto            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Service Type
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Contact Person

            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormSelect
            type="text"
            label="Address : Line 1

            "
            placeholder=""
            className="custom-placeholder"
          />{" "}
          <CFormSelect
            type="text"
            label="Address : Line 2

            "
            placeholder=""
            className="custom-placeholder"
          />{" "}
          <CFormSelect
            type="text"
            label="Address : Line 3

            "
            placeholder=""
            className="custom-placeholder"
          />{" "}
          <CFormSelect
            type="text"
            label="City
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="State
            "
            placeholder=" "
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Country
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="ZIP / PIN

            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Phone
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Fax
            "
            placeholder=""
            className="custom-placeholder"
          />
          <CFormInput
            type="text  "
            label="Email
            "
            placeholder=""
            className="custom-placeholder"
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default ServiceProviderModal
