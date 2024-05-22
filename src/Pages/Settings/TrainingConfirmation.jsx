import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function TrainingConfirmation() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <h4 className="fw-bold mb-4 mt-3">Training Confirmations</h4>
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
                                                  { label: 'Active', value: '1' },
                                                  { label: 'Inactive', value: '0' }
                                             ]}
                                        />
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Confirmation</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className="bg-white mt-5">
                              <CTable align="middle" responsive className=" shadow">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Analyst</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Test Technique</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Training Details</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
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
                                             <CTableDataCell>test</CTableDataCell>
                                             <CTableDataCell>hcltest</CTableDataCell>                                     
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>test done</CTableDataCell>
                                             <CTableDataCell>11 may 2024</CTableDataCell>                                        
                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
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
                         <CModalTitle>Add Training Confirmation</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormSelect
                              type="text"
                              label="Analyst"
                              placeholder="Select..."
                              options={[
                                "Select...",
                                {label:"No Options"}
                              ]}
                         />
                         <CFormInput
                              type="text"
                              label="Employee Id"
                              placeholder="Employee Id"
                              disabled
                         />
                         <CFormInput
                              type="text"
                              label="Role/Title"
                              placeholder="Role/Title"
                              disabled
                         />
                         <CFormSelect
                              type="text"
                              label="Test Technique"
                              placeholder="Select..."
                              options={[
                                "Select...",
                                {label:"Description"}
                              ]}
                         />
                         <CFormInput
                              type="text"
                              label="Training Details"
                              placeholder="Training Details"
                         />
                         <CFormInput
                              type="text"
                              label="Training Details"
                              placeholder="Training Details"
                         />
                         <CFormInput
                              type="file"
                              label="Browse"
                              placeholder="Choose File"
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


export default TrainingConfirmation
