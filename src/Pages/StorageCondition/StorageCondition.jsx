import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./StorageCondition.css";
import { Link } from "react-router-dom"

function StorageLocation() {
  const [addModal, setAddModal] = useState(false)
  const [delModal, setDelModal] = useState(false)
  const badgeStyle = { background: "#cdffca" }
  return (
    <>
      <div className="m-4 p-4">
        <div className="container-fluid">
          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Storage Conditions</h4>
          </div>
          <div>
            <CRow className="my-5">
              <CCol sm={4}>
                <CFormInput
                  type="email"
                  placeholder="Search..."
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  options={[
                    'Select Status',
                    { label: 'Active', value: '1' },
                    { label: 'Inactive', value: '0' }
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>Add Storage Condition</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="p-4 shadow rounded">
            <CTable align="middle" responsive className="mb-0">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell scope="col">Storage Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Storage Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>na-001</CTableDataCell>
                  <CTableDataCell>Product Material</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                      <div className="cursor-pointer" onClick={() => setDelModal(true)}><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>na-002</CTableDataCell>
                  <CTableDataCell>Product Material</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                      <div className="cursor-pointer" onClick={() => setDelModal(true)}><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {delModal && <RemoveModal visible={delModal} closeModal={() => setDelModal(false)} />}

    </>
  )
}

const StatusModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="Storage Name"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
          <CButton color="primary">Add</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}

const RemoveModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Delete Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete this Storage Condition <code>below 25°c (77°f) in a flammable cabinet</code>?
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}

export default StorageLocation
