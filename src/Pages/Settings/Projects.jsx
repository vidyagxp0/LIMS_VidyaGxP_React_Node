import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Projects() {
  const [addModal, setAddModal] = useState(false)
  const badgeStyle = { background: "#cdffca" }
  return (
    <>

      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">

          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Project List</h4>
          </div>

          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">2</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">1</div>
                  </div>

                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#dc3545, #9ec5fe)' }}>
                    <div className="text-light fs-5">REJECTED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                </div>
              </div>


            </div>

          </div>


          <div>
            <CRow className="mb-3">
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
                    { label: 'All' },
                    { label: 'Initiated' },
                    { label: 'Approved' },
                    { label: 'Rejected' },
                    { label: 'Reinitiated' },
                    { label: 'Droped' }
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Project</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
            <CTable align="middle" responsive className=" shadow">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell scope="col">S No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Project Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>1</CTableDataCell>
                  <CTableDataCell>Sample</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>May 22nd 24 15:00</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>Sample</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>testing</CTableDataCell>
                  <CTableDataCell>May 22nd 24 14:58</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>INITIATED</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>

              </CTableBody>
            </CTable>
          </div>

          <div className="pagination">

            <div className="pagination">
              <div className='mr-5'>
                <button className="btn  mr-2" >&lt;&lt;</button>
              </div>
              <div className="current-page-number mr-2 bg-dark-subtle page-item">
                <button className='btn rounded-circle'> 1 </button>
              </div>
              <div>
                <button className="btn mr-2" >&gt;&gt;</button>

              </div>

            </div>
            <button className="btn btn-next" > Next <FaArrowRight /></button>
          </div>


        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

    </>
  )
}

const StatusModal = (_props) => {
  return (
    <>

      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Project List</CModalTitle>
        </CModalHeader>
        <CModalBody>

          <CFormInput
            type="text"
            label="Project Name"
            placeholder="Specification Type Name"
          />
          <CFormInput
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
          />
          <CFormInput
            type="text"
            label="Description"
            placeholder="Description"
          />

        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Back</CButton>
          <CButton className="bg-info text-white">Submit</CButton>
        </CModalFooter>
      </CModal>

    </>
  )
}


export default Projects
