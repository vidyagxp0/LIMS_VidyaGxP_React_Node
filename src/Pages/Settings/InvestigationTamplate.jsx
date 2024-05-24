import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InvestigationTamplate() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5">Investigation Template</div>


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
                                                  { label: 'Dropped' }
                                             ]}
                                        />
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        
                                   </CCol>
                              </CRow>
                         </div>
                         <div className="bg-white mt-5">
                              <CTable align="middle" responsive className=" shadow">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Template Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">No. of Analyst Section</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">No. of Supervisor Section</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
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
                                             <CTableDataCell>stmp</CTableDataCell>
                                             <CTableDataCell>1</CTableDataCell>
                                             <CTableDataCell>1</CTableDataCell>
                                             <CTableDataCell>Sep 29th 23 16:19</CTableDataCell>
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

// const StatusModal = (_props) => {
//      return (
//           <>

//                <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
//                     <CModalHeader>
//                          <CModalTitle>Add Storage Chamber</CModalTitle>
//                     </CModalHeader>
//                     <CModalBody>

//                          <CFormInput
//                               type="text"
//                               label="Chamber ID"
//                               placeholder="Chamber Id "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Description"
//                               placeholder="Enter Description "
//                          />

//                          <CFormInput
//                               type="text"
//                               label="Make / Model"
//                               placeholder="Make / Model "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Serial No."
//                               placeholder="Serial Number "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Location"
//                               placeholder="Location "
//                          />
//                          <CFormTextarea
//                               type="text"
//                               label="Comments"
//                               placeholder=""
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Stability Storage Condition"
//                               placeholder="Select... "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Number Of Racks"
//                               placeholder="Number Of Racks "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Number Of Shelfs"
//                               placeholder="Number Of Shelfs "
//                          />
//                          <CFormInput
//                               type="text"
//                               label="Maximum No. Of Positions For Shelf"
//                               placeholder="0"
//                          />
//                     </CModalBody>
//                     <CModalFooter>
//                          <CButton color="light" onClick={_props.closeModal}>Back</CButton>
//                          <CButton className="bg-info text-white">Submit</CButton>
//                     </CModalFooter>
//                </CModal>

//           </>
//      )
// }


export default InvestigationTamplate
