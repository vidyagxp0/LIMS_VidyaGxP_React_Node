import { CButton, CCol, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function BussinessAssociate() {
  const [addModal, setAddModal] = useState(false)
  const badgeStyle = { background: "#cdffca" }
  return (
    <>

      <div id="approval-page" className="h-100 mx-5">
        <div className="container-fluid my-5">

          <div className="main-head">
            <div className="title fw-bold fs-5">Business Associate</div>


          </div>
          <div className="d-flex gap-4">
            <div className="chart-widgets w-100">
              <div className="">
                <div className="row">
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                    <div className="text-light fs-5">INITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#d63384, #9ec5fe)' }}>
                    <div className="text-light fs-5">REINITIATED</div>
                    <div className="count fs-1 text-light fw-bolder">0</div>
                  </div>
                  <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#ffc107, #9ec5fe)' }}>
                    <div className="text-light fs-5">APPROVED</div>
                    <div className="count fs-1 text-light fw-bolder">4</div>
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

              <CCol sm={3}>
                <CFormSelect
                  options={[
                    'Select Status',
                    { label: 'All' },
                    { label: 'Initiated' },
                    { label: 'Approved' },
                    { label: 'Rejected' },
                    { label: 'Reinitiated' },
                    { label: 'Dropped' }
                  ]}
                />
              </CCol>
              <CCol sm={6}></CCol>
              <CCol sm={3}>
                <div className="d-flex justify-content-end">
                  <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Associate</CButton>
                </div>
              </CCol>
            </CRow>
          </div>
          <div className="bg-white mt-5">
            <CTable align="middle" responsive className=" shadow">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                  <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Business Associate Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">City</CTableHeaderCell>
                  <CTableHeaderCell scope="col">State</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ZIP code</CTableHeaderCell>
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
                  <CTableDataCell>stmp1</CTableDataCell>
                  <CTableDataCell>stm</CTableDataCell>
                  <CTableDataCell>ahmedabad</CTableDataCell>
                  <CTableDataCell>gujarat</CTableDataCell>
                  <CTableDataCell>India</CTableDataCell>
                  <CTableDataCell>54255455</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>2</CTableDataCell>
                  <CTableDataCell>ARZ ENT</CTableDataCell>
                  <CTableDataCell>ARE</CTableDataCell>
                  <CTableDataCell>Hyderabad</CTableDataCell>
                  <CTableDataCell>Telangana</CTableDataCell>
                  <CTableDataCell>India</CTableDataCell>
                  <CTableDataCell>5253654</CTableDataCell>
                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                      <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                  </CTableDataCell>
                </CTableRow>


                <CTableRow>
                  <CTableHeaderCell scope="row" className="text-center">
                    <input type="checkbox" />
                  </CTableHeaderCell>
                  <CTableDataCell>3</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>NA</CTableDataCell>
                  <CTableDataCell>testing525</CTableDataCell>
                  <CTableDataCell>Lab1</CTableDataCell>
                  <CTableDataCell>test</CTableDataCell>
                  <CTableDataCell>25255488</CTableDataCell>


                  <CTableDataCell className="d-flex">
                    <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-3">
                      <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
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
          <CModalTitle>Add Business Associate</CModalTitle>
        </CModalHeader>
        <CModalBody>

          <CFormInput
            type="text"
            label="Business Associate Name"
            placeholder="Business Associate Name "
          />
          <CFormInput
            type="text"
            label="Unique Code"
            placeholder="Unique Code  "
          />

          {/* <CFormCheck
                              type="check"
                              label="Make / Model"
                              placeholder="Make / Model "
                         /> */}
          <CFormInput
            type="text"
            label="Contact Person "
            placeholder=" CAtegory Of Business Associate"
          />
          <CFormInput
            type="text"
            label="Location"
            placeholder="Location "
          />
          <CFormInput
            type="text"
            label="Address : Line 1"
            placeholder="Address : Line 1"
          />
          <CFormInput
            type="text"
            label="Address : Line 2"
            placeholder="Address : Line 2"
          />
          <CFormInput
            type="text"
            label="Address : Line 3"
            placeholder=" Address : Line 3"
          />
          <CFormInput
            type="text"
            label="City"
            placeholder="City"
          />
          <CFormInput
            type="text"
            label="State"
            placeholder="State"
          />
          <CFormInput
            type="text"
            label="Country"
            placeholder="Country"
          />
          <CFormInput
            type="text"
            label="ZIP / PIN"
            placeholder="ZIP / PIN"
          />
          <CFormInput
            type="text"
            label="Phone"
            placeholder="Phone"
          />
          <CFormInput
            type="text"
            label="Fax"
            placeholder="Fax"
          />
          <CFormInput
            type="text"
            label="Email"
            placeholder="Email"
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

export default BussinessAssociate
