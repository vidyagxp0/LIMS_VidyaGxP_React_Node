import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function SampleAcceptanceTemplate() {
     const [addModal, setAddModal] = useState(false)
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
                                             <CButton color="dark" onClick={() => setAddModal(true)}>Add Sample </CButton>
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
                                             <CTableHeaderCell scope="col">Chamber ID</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Current Storage Conditions</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Initiated On</CTableHeaderCell>
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
                                             <CTableDataCell>describe</CTableDataCell>
                                             <CTableDataCell>65°F</CTableDataCell>
                                             <CTableDataCell>05-may-2024 20:50</CTableDataCell>                                           
                                             
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
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>Na</CTableDataCell>
                                             <CTableDataCell>65°C</CTableDataCell>
                                             <CTableDataCell>15-may-2024 12:50</CTableDataCell>                                           
                                             
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
                                             <CTableDataCell>3</CTableDataCell>
                                             <CTableDataCell>stmp5</CTableDataCell>
                                             <CTableDataCell>sample</CTableDataCell>
                                             <CTableDataCell>65°c</CTableDataCell>
                                             <CTableDataCell>20-may-2024 15:20</CTableDataCell>                                           
                                             
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
                    </div>
               </div>

               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}

          </>
     )
}

export default SampleAcceptanceTemplate
