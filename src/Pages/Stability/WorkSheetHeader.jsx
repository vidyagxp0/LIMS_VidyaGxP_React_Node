import { CButton, CCol, CFooter, CFormInput, CFormSelect, CHeader, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function WorkSheetHeader() {
     const [addModal, setAddModal] = useState(false)
     const [deleteModal, setDeleteModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5"> Stability WorkSheet Header</div>


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
                                   <CCol sm={2}>

                                   </CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Worksheet</CButton>
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
                                             <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Worksheet Type</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Report Title</CTableHeaderCell>
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
                                             <CTableDataCell>Micro Media</CTableDataCell>
                                             <CTableDataCell>With Specification</CTableDataCell>
                                             <CTableDataCell>testing</CTableDataCell>
                                             <CTableDataCell>testing001</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/stability/worksheetHeaderDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                  <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                                  </div>
                                             </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                             <CTableHeaderCell scope="row" className="text-center">
                                                  <input type="checkbox" />
                                             </CTableHeaderCell>
                                             <CTableDataCell>2</CTableDataCell>
                                             <CTableDataCell>water type</CTableDataCell>
                                             <CTableDataCell>without-specification</CTableDataCell>
                                             <CTableDataCell>pm01</CTableDataCell>
                                             <CTableDataCell>R123</CTableDataCell>

                                             <CTableDataCell className="d-flex">
                                                  <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>APPROVED</div>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/stability/worksheetHeaderDetails"><FontAwesomeIcon icon={faEye} /></Link>
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
                         <CModalTitle>Add Worksheet Header</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormSelect
                              type="text"
                              label="Sample Type"
                              placeholder="Select..."
                              options={[
                                   "Select...",
                                   { label: "HCL" },
                                   { label: "Hydrochrolic Acid" },
                                   { label: "Petrochemical" },
                                   { label: "Initial Product" }
                                 ]}
                         />
                         <CFormSelect
                              type="text"
                              label="Worksheet Type"
                              placeholder="Select Worksheet Type"
                              options={[
                                   "Select Coa Type ",
                                   { label: "With Specification" },
                                   { label: "Without Specification" },
                                   { label: "ERP" }
                                   
                                 ]}
                         />
                         <CFormInput
                              type="text"
                              label="Unique Code"
                              placeholder="Unique Code"
                              disabled
                         />
                         <CFormInput
                              type="text"
                              label="Report Title"
                              placeholder=" Report Title"
                         />
                         <CFormInput
                              type="text"
                              label="Product/Material Caption"
                              placeholder=" Product"
                         />
                         <CFormInput
                              type="text"
                              label="Format No."
                              placeholder=" Format No."
                         />
                         <CHeader className="bg-light">Header</CHeader>
                         <CFormInput
                              type="text"
                              label="Rows"
                              placeholder=" Rows"
                         />
                         <CFormSelect
                              type="text"
                              label="Columns"
                              placeholder=" Columns"
                              options={[
                                   " Columns",
                                   { label: "2" },
                                   { label: "4" },
                                   { label: "6" }
                                   
                                 ]}
                         />
                         <CFooter className="bg-light">Footer</CFooter>
                         
                         <CFormInput
                              type="text"
                              label="Rows"
                              placeholder=" Rows"
                         />
                         <CFormSelect
                              type="text"
                              label="Columns"
                              placeholder=" Columns"
                              options={[
                                   " Columns",
                                   { label: "2" },
                                   { label: "4" },
                                   { label: "6" }
                                   
                                 ]}
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

const DeleteModal = (_props) => {
     return (
          <>

               <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                    <CModalHeader>
                         <CModalTitle>Delete Worksheet </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                         <p>Do you want to delete this Worksheet <code>Micro media</code>?</p>

                    </CModalBody>
                    <CModalFooter>
                         <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                         <CButton className="bg-info text-white">Submit</CButton>
                    </CModalFooter>
               </CModal>

          </>
     )
}

export default WorkSheetHeader
