import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const AcknowledgeSampleModal = (_props) => {
  return (
    <div>
        <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="xl"
      >
        <CModalHeader className="p-3">
          <CModalTitle>
            Add information and register new Acknowledge Sample
          </CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px" }}>
          Add information and register new Batch Sample
        </p>

        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Batch Sample

                "
                placeholder="Select..."
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "700" }} className="mb-4">
              EM Monitoring Details(Sampling Schedule ,Batch Sample)
            </h5>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Date of Monitoring

+
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Monitored / Sampled By

               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Activity Type

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="time"
                label="Exposure Start Time

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Product Name

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Report No.

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div></div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Membrane Holder Sterilized On

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Gelatine Membrane Lot> No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Use Before

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <h5 style={{ fontWeight: "bolder" }}>EM Monitoring Details</h5>
            <div className="mb-3">
              <CFormInput
                type="time"
                label="Exposure End Time

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Monitoring Comments

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch> No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Charge No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Membrane Holder ID
               ."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Sterilized On
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Media Usage
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
          </CForm>
        </div>

        <CModalFooter className="p-3">
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

export default AcknowledgeSampleModal
