import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import {  faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"


function SampleAcceptanceTemplate() {
     const [addModal, setAddModal] = useState(false)
     const [deleteModal, setDeleteModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5">Sample Acceptance Template</div>

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
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Sample Template </CButton>
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
                                             <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">No. Of Check Items </CTableHeaderCell>
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
                                             <CTableDataCell>ACCC</CTableDataCell>
                                             <CTableDataCell>6</CTableDataCell>
                                             <CTableDataCell>05-may-2024 20:50</CTableDataCell>
                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                                             </CTableDataCell>

                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                                       </div>
                                             </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                             <CTableHeaderCell scope="row" className="text-center">
                                                  <input type="checkbox" />
                                             </CTableHeaderCell>
                                             <CTableDataCell>2</CTableDataCell>
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>ACC011</CTableDataCell>
                                             <CTableDataCell>2</CTableDataCell>
                                             <CTableDataCell>15-may-2024 12:50</CTableDataCell>
                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                                             </CTableDataCell>

                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                                  </div>
                                             </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                             <CTableHeaderCell scope="row" className="text-center">
                                                  <input type="checkbox" />
                                             </CTableHeaderCell>
                                             <CTableDataCell>3</CTableDataCell>
                                             <CTableDataCell>stmp5</CTableDataCell>
                                             <CTableDataCell>sample code</CTableDataCell>
                                             <CTableDataCell>8</CTableDataCell>
                                             <CTableDataCell>20-may-2024 15:20</CTableDataCell>
                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>ACTIVE</div>
                                             </CTableDataCell>

                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
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
               {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}


          </>
     )
}

const StatusModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                    <CModalHeader>
                         <CModalTitle>New Condition</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormInput
                              type="text"
                              label="Name"
                              placeholder="Name "
                         />
                         <CFormInput
                              type="text"
                              label="Unique Code"
                              placeholder=" Unique Code"
                         />
                         <CFormInput
                              type="text"
                              label="No. Of Check Items"
                              placeholder="No. of Check Items"
                         />
                         <CButton className="bg-info text-white">Add</CButton>

                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

const DeleteModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                    <CModalHeader>
                         <CModalTitle>Delete Sample Acceptance Template</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                         <p>Do you want to delete this Sample Acceptance Template <code>stmp1</code>?</p>

                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default SampleAcceptanceTemplate
