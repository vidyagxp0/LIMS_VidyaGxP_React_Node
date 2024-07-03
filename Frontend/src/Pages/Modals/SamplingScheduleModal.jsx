import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const SamplingScheduleModal = (_props) => {
  return (
    <div>
         <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader className="p-3">
          <CModalTitle>Update Sampling Schedule Registration</CModalTitle>
        </CModalHeader>

        <p>Update information and register new Sampling Schedule</p>
        <div className="modal-body p-4">
          <CForm>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Schedule Code

                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Description
+
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormSelect
                type="text"
                label="Frequency
               "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                label="Tolerance
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Start Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="End Date"
                placeholder=""
                className="custom-placeholder"
              />
            </div>

            <div className="mb-3">
              <CFormInput
                type="text"
                label="Select User Group To Alert
                "
                placeholder=""
                className="custom-placeholder"
              />
            </div>
            <div>
              <table
                className="table table-bordered"
                style={{
                  background: "white",
                  padding: "5px",
                  border: "1px solid black",
                }}
              >
                <thead
                  className="table table-bordered"
                  style={{
                    background: "lightblue",
                    padding: "5px",
                    border: "1px solid black",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      S NO.
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Plant
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Facility
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Location
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Location ID
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Location Description
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Grade/Class
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        background: "lightblue",
                      }}
                    >
                      Monitoring/Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                    <td style={{ border: "1px solid black" }}>86565d</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-3">
              <CFormInput
                type="date"
                label="Date of Monitoring
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
          </CForm>
        </div>

        <CModalFooter className="p-3">
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton style={{ background: "#0F93C3", color: "white" }}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default SamplingScheduleModal
