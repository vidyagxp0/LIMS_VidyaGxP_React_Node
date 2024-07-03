import { CButton, CForm, CFormCheck, CFormInput, CFormLabel, CModal, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const MediaLotUsageModal = (_props) => {
  return (
    <div>
          <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size='xl'
      >
        <CModalHeader className="p-3">
          <CModalTitle>Add Media Lot Usage</CModalTitle>
        </CModalHeader>
        <div className="modal-body p-4">
          <p>Add information and add new Media Lot Usage</p>
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Media Lot No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Media Name"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Batch No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Usage Type"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Container No."
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Mfg. Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Container Expiry Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Lot Expiry Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Collection Type</CFormLabel>
              <div>
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="acceptRadio"
                  label="Manual"
                  value="accept"
                  className="me-3"
                />
                <CFormCheck
                  type="radio"
                  name="sampleRadio"
                  id="rejectRadio"
                  label="Auto Binding"
                  value="reject"
                />
              </div>
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Quantity Used"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="date"
                label="Used On"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Used By"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Used For"
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <h6>Comments if Any</h6>
              <textarea className="form-control" rows="3"></textarea>
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

export default MediaLotUsageModal
