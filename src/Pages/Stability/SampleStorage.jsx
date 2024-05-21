import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function SampleStorage() {
     const [addModal, setAddModal] = useState(false)
     const badgeStyle = { background: "#cdffca" }
     return (
          <>

               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5">Sample Storage</div>


                         </div>
                         <div className="d-flex gap-4">
                              <div className="chart-widgets w-100">
                                   <div className="">
                                        <div className="row">
                                             <div className="col shadow p-3 m-3 rounded" style={{ background: 'linear-gradient(#0d6efd, #9ec5fe)' }}>
                                                  <div className="text-light fs-5">INITIATED</div>
                                                  <div className="count fs-1 text-light fw-bolder">1</div>
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
                                                  <div className="count fs-1 text-light fw-bolder">1</div>
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
                                             <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Sample Storage</CButton>
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
                                             <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Chamber ID</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Actual Quantity</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Available Quantity</CTableHeaderCell>
                                             <CTableHeaderCell scope="col">Protocol Type</CTableHeaderCell>
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
                                             <CTableDataCell>100</CTableDataCell>
                                             <CTableDataCell>80</CTableDataCell>
                                             <CTableDataCell>New001</CTableDataCell>

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
                                             <CTableDataCell>EM</CTableDataCell>
                                             <CTableDataCell>EUR/SOP-AD-02</CTableDataCell>
                                             <CTableDataCell>90</CTableDataCell>
                                             <CTableDataCell>60</CTableDataCell>
                                             <CTableDataCell>Test002</CTableDataCell>

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
                                             <CTableDataCell>Polycaprolactone IP</CTableDataCell>
                                             <CTableDataCell>EUR/SOP-AD-03</CTableDataCell>
                                             <CTableDataCell>80</CTableDataCell>
                                             <CTableDataCell>80</CTableDataCell>
                                             <CTableDataCell>New003</CTableDataCell>

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
                         <CModalTitle>Add Sample Storage</CModalTitle>
                    </CModalHeader>
                    <CModalBody>

                         <CFormSelect
                              type="text"
                              label="Specification ID"
                              placeholder="Select... "
                              options={[
                                   "",
                                   { label: "HCL10132%" },
                                   { label: "HOS 234" },
                                   { label: "CHPOIL001" },
                                   { label: "MB-PM-001/01" },
                                   { label: "RPS-TSLV-00" },
                                   { label: "rest0001" },
                                 ]}
                         />
                              <CFormInput
                                   type="text"
                                   label="Product/Material Name"
                                   placeholder="Testamine "
                                   disabled
                              />
                              <CFormSelect
                                   type="text"
                                   label="Protocol ID"
                                   placeholder="select... "
                                   options={[
                                        "select...",
                                        { label: "asdf3453" },
                                        { label: "001" },
                                        { label: "STP132432" },
                                        { label: "MB-PM-001/01" },
                                        { label: "RPS-TSLV-00" },
                                        { label: "rest0001" },
                                      ]}
                              />
                              <CFormSelect
                                   type="text"
                                   label="Storage Conditions"
                                   placeholder="select... "
                                   options={[
                                        "select...",
                                        { label: "asdf3453" },
                                        { label: "001" },
                                        { label: "STP132432" },
                                        { label: "MB-PM-001/01" },
                                        { label: "RPS-TSLV-00" },
                                        { label: "rest0001" },
                                      ]}
                              />
                                   <CFormSelect
                                        type="text"
                                        label="Chamber ID"
                                        placeholder="select... "
                                   />
                              <CFormInput
                                   type="text"
                                   label=" Actual Storage Quantity"
                                   placeholder="Actual Storage Quantity "
                              />

                         <CFormInput
                              type="text"
                              label="Available Storage Quantity"
                              placeholder="Available Storage Quantity "
                         />
                         <CFormInput
                              type="text"
                              label="Number Of Storage Positions"
                              placeholder="Number Of Storage Positions"
                         />
                         <CFormInput
                              type="text"
                              label="Number Of Storage Positions"
                              placeholder="Number Of Positions"
                         />
                         <CFormInput
                              type="text"
                              label="Chamber Description"
                              placeholder=" Chamber Description"
                         />
                         <CFormInput
                              type="text"
                              label="Chamber Location"
                              placeholder=" Chamber Location"
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

export default SampleStorage
