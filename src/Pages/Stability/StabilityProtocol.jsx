import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

function StabilityProtocol() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">
                    
                         <div className="main-head">
                    <div className="title fw-bold fs-5">Stability Protocol</div>

                              
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
                                        <div className="d-flex justify-content-end">
                                             <CButton color="dark" onClick={() => setAddModal(true)}>Add Protocol</CButton>
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
                                             <CTableHeaderCell scope="col">Product/Material</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Specification ID</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Protocol Type</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Protocol Id</CTableHeaderCell>
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
                                             <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>

                                             <CTableDataCell>EUR/SOP-AD-01</CTableDataCell>
                                             <CTableDataCell>Sodium Propyl Paraben IP</CTableDataCell>
                                             <CTableDataCell>Finised Product</CTableDataCell>
                                             <CTableDataCell>New</CTableDataCell>
                                             <CTableDataCell>05-may-2024</CTableDataCell>
                                             <CTableDataCell>001</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
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
                                             <CTableDataCell>Polycaprolactone New</CTableDataCell>

                                             <CTableDataCell>EUR/SOP-AD-02</CTableDataCell>
                                             <CTableDataCell>Polycaprolactone New</CTableDataCell>
                                             <CTableDataCell>Finised Product</CTableDataCell>
                                             <CTableDataCell>New</CTableDataCell>
                                             <CTableDataCell>15-may-2024</CTableDataCell>
                                             <CTableDataCell>002</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>DROPPED</div>
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
                                             <CTableDataCell>3</CTableDataCell>
                                             <CTableDataCell>Polycaprolactone</CTableDataCell>

                                             <CTableDataCell>EUR/SOP-AD01</CTableDataCell>
                                             <CTableDataCell>Polycaprolactone</CTableDataCell>
                                             <CTableDataCell>Finised Product</CTableDataCell>
                                             <CTableDataCell>New</CTableDataCell>
                                             <CTableDataCell>09-may-2024</CTableDataCell>
                                             <CTableDataCell>003</CTableDataCell>
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
                         <CModalTitle>Add Storage Chamber</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormInput
                              type="text"
                              label="Chamber ID"
                              placeholder="Chamber Id "
                         />
                         <CFormInput
                              type="text"
                              label="Description"
                              placeholder="Enter Description "
                         />
                         
                         <CFormInput
                              type="text"
                              label="Make / Model"
                              placeholder="Make / Model "
                         />
                         <CFormInput
                              type="text"
                              label="Serial No."
                              placeholder="Serial Number "
                         />
                         <CFormInput
                              type="text"
                              label="Location"
                              placeholder="Location "
                         />
                         <CFormTextarea
                              type="text"
                              label="Comments"
                              placeholder=""
                         />
                         <CFormInput
                              type="text"
                              label="Stability Storage Condition"
                              placeholder="Select... "
                         />
                         <CFormInput
                              type="text"
                              label="Number Of Racks"
                              placeholder="Number Of Racks "
                         />
                         <CFormInput
                              type="text"
                              label="Number Of Shelfs"
                              placeholder="Number Of Shelfs "
                         />
                         <CFormInput
                              type="text"
                              label="Maximum No. Of Positions For Shelf"
                              placeholder="0"
                         />
                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                         <CButton color="dark">Add</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default StabilityProtocol
