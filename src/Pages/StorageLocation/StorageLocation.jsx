import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function StorageLocation() {
  const [addModal, setAddModal] = useState(false)
  const [delModal, setDelModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [storageLocations, setStorageLocations] = useState([
    { code: 'na-001', name: 'Product Material 1', status: 'ACTIVE', id: 1 },
    { code: 'na-002', name: 'Product Material 2', status: 'ACTIVE', id: 2 },
    { code: 'na-003', name: 'test Material 3', status: 'INACTIVE', id: 3 },
    { code: 'na-004', name: 'test Material 4', status: 'ACTIVE', id: 4 },
    { code: 'na-005', name: 'Product Material 5', status: 'INACTIVE', id: 5 },
    { code: 'na-006', name: 'Product Material 6', status: 'ACTIVE', id: 6 },
    { code: 'na-007', name: 'Product Material 7', status: 'INACTIVE', id: 7 },
    { code: 'na-008', name: 'test Material 8', status: 'ACTIVE', id: 8 },
    { code: 'na-009', name: 'Product Material 9', status: 'INACTIVE', id: 9 },
    { code: 'na-010', name: 'Product Material 10', status: 'ACTIVE', id: 10 },
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterStatus(event.target.value)
  }

  const handleDelete = (id) => {
    setStorageLocations(storageLocations.filter(item => item.id !== id))
  }

  const filteredLocations = storageLocations.filter(item => {
    return (
      (item.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
       item.name.toLowerCase().includes(searchQuery.toLowerCase())) && 
      (filterStatus === "" || 
       (filterStatus === "1" && item.status === "ACTIVE") || 
       (filterStatus === "0" && item.status === "INACTIVE"))
    )
  });

  const badgeStyle = { background: "#cdffca" }

  return (
    <>
      <div className="m-4 p-4">
        <div className="container-fluid">
          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Storage Location</h4>
          </div>
          <div>
            <CRow className="my-5">
              <CCol sm={4}>
                <CFormInput
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  value={filterStatus}
                  onChange={handleFilter}
                  options={[
                    { label: 'Select Status', value: "" },
                    { label: 'Active', value: '1' },
                    { label: 'Inactive', value: '0' }
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" onClick={() => setAddModal(true)}>Add Storage Location</CButton>
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
                {filteredLocations.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="text-center">
                      <input type="checkbox" />
                    </CTableHeaderCell>
                    <CTableDataCell>{item.code}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell className="d-flex">
                      <div className="py-2 px-3 small rounded fw-bold" style={item.status === 'ACTIVE' ? { background: "green", color: "white", width: "110px" } : { background: "red", color: "white", width: "110px" }}>{item.status}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex gap-3">
                        <Link to={`/approval/1321`}><FontAwesomeIcon icon={faEye} /></Link>
                        <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div className="cursor-pointer" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></div>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
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
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>New Storage Location</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          type="text"
          label="Name"
          placeholder="Location Name"
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
        <CButton color="primary">Add</CButton>
      </CModalFooter>
    </CModal>
  )
}

const RemoveModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>Delete Storage Location</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Do you want to delete this Storage Location <code>Wooden Box</code>?
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default StorageLocation
