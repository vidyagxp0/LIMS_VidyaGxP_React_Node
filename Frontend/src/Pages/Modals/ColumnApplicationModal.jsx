import { CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const ColumnApplicationModal = (props) => {
  return (
    <div>
        <CModal
        size="xl"
        alignment=""
        visible={props.visible}
        onClose={props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Application</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{ fontWeight: "bolder" }}>New Application</p>

          <CFormInput
            type="text"
            label="Name"
            placeholder="Name"
            className="custom-placeholder"
          />
          <CFormInput
            type="text"
            label="Prefix"
            placeholder="Prefix"
            className="custom-placeholder"
          />

          <table className="table table-bordered" style={{ marginTop: "5px" }}>
            <thead>
              <tr>
                <th>
                  Selected Standard Fields Displayed At Columns Qualification
                  And Usage
                </th>
                <th>Qualification</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column Pressure</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Flow Rate (Mobile Phase/Carrier Gas)</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>PH of Mobile Phase</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Wave Length</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Injector</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Detector Type</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Injector Volume</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Mobile Phase / Carrier Gas</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Hydrogen Low Rate</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Air Flow Rate</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Column Temperature</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Injector Temperature</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>No. Of Injection</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Split Ratio</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Mode</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Concentration</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Pharmacopoeia</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Detector Temperature</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>A.R.No.</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Load</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>Batch No.</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CButton color="primary" type="button">
              Add Application
            </CButton>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={props.closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={props.closeModal}>
            Add Application
          </CButton>
        </CModalFooter>
      </CModal>
      
    </div>
  )
}

export default ColumnApplicationModal
