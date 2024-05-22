import { CButton, CCol, CFooter, CFormInput, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function WorkSheelField() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5"> WorkSheet Field</div>


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
                                                  <div className="count fs-1 text-light fw-bolder">2</div>
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
                                   <CCol sm={6}>

                                   </CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Worksheet Fields</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className="bg-white mt-5">
                              <CTable align="middle" responsive className=" shadow">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Worksheet Field</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">sample_type Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        <CTableRow>
                                             
                                             <CTableDataCell>1</CTableDataCell>
                                             <CTableDataCell>Chemical</CTableDataCell>
                                             <CTableDataCell>hcl</CTableDataCell>
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>May 22nd 24 11:28</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
                                                  </div>
                                             </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                             
                                             <CTableDataCell>2</CTableDataCell>
                                             <CTableDataCell>Chemical</CTableDataCell>
                                             <CTableDataCell>hcl</CTableDataCell>
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>May 22nd 24 11:28</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>Initiated</div>
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
                         <CModalTitle>Add Worksheet Fields</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                    <CFormInput
                              type="text"
                              label="Name"
                              placeholder="WorkSheet Field Name "
                         />

                         <CFormSelect
                              type="text"
                              label="Binds To"
                              placeholder="Select..."
                              options={[
                                   "Select...",
                                   { label: "HCL" },
                                   { label: "Hydrochrolic Acid" },
                                   { label: "Petrochemical" },
                                   { label: "Initial Product" }
                                 ]}
                         />
                         
                         
                         <CFormInput
                              type="text"
                              label="Description"
                              placeholder="Description"
                         />
                                               
                                                 
                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Add Field</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default WorkSheelField
