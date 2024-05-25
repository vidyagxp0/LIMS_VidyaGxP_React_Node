import {
     CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter,
     CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead,
     CTableHeaderCell, CTableRow
 } from "@coreui/react";
 import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { useState } from "react";
 import { FaArrowRight } from "react-icons/fa";
 import { Link } from "react-router-dom";
 
 function StorageChamber() {
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const badgeStyle = { background: "#cdffca" };
 
     const chambers = [
         { id: 1, chamberId: "stmp1", description: "describe", makeModel: "isubus111", serialNo: "54255455", location: "loc1", status: "APPROVED" },
         { id: 2, chamberId: "test21", description: "NA", makeModel: "testing", serialNo: "25365488", location: "Plant1", status: "INITIATED" },
         { id: 3, chamberId: "test", description: "NA", makeModel: "testing525", serialNo: "25255488", location: "Lab1", status: "INITIATED" },
         // Add 7 more objects similar to the above to make 10 in total
     ];
 
     return (
         <>
             <div id="approval-page" className="h-100 mx-5">
                 <div className="container-fluid my-5">
                     <div className="main-head">
                         <div className="title fw-bold fs-5">Storage Chamber</div>
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
                                 <CFormInput type="email" placeholder="Search..." />
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
                                     <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Chamber</CButton>
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
                                     <CTableHeaderCell scope="col">Make/Model</CTableHeaderCell>
                                     <CTableHeaderCell scope="col">Serial.No.</CTableHeaderCell>
                                     <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                                     <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                     <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                 </CTableRow>
                             </CTableHead>
                             <CTableBody>
                                 {chambers.map((chamber, index) => (
                                     <CTableRow key={chamber.id}>
                                         <CTableHeaderCell scope="row" className="text-center">
                                             <input type="checkbox" />
                                         </CTableHeaderCell>
                                         <CTableDataCell>{index + 1}</CTableDataCell>
                                         <CTableDataCell>{chamber.chamberId}</CTableDataCell>
                                         <CTableDataCell>{chamber.description}</CTableDataCell>
                                         <CTableDataCell>{chamber.makeModel}</CTableDataCell>
                                         <CTableDataCell>{chamber.serialNo}</CTableDataCell>
                                         <CTableDataCell>{chamber.location}</CTableDataCell>
                                         <CTableDataCell className="d-flex">
                                             <div className="py-2 px-3 small rounded fw-bold" style={badgeStyle}>{chamber.status}</div>
                                         </CTableDataCell>
                                         <CTableDataCell>
                                             <div className="d-flex gap-3">
                                                 <Link to="/stability/storageChamberDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                 <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                 <div className='cursor-pointer' onClick={() => setDeleteModal(true)}><FontAwesomeIcon icon={faTrashCan} /></div>
                                             </div>
                                         </CTableDataCell>
                                     </CTableRow>
                                 ))}
                             </CTableBody>
                         </CTable>
                     </div>
                     <div className="pagination">
                         <div className="pagination">
                             <div className='mr-5'>
                                 <button className="btn mr-2">&lt;&lt;</button>
                             </div>
                             <div className="current-page-number mr-2 bg-dark-subtle page-item">
                                 <button className='btn rounded-circle'> 1 </button>
                             </div>
                             <div>
                                 <button className="btn mr-2">&gt;&gt;</button>
                             </div>
                         </div>
                         <button className="btn btn-next"> Next <FaArrowRight /></button>
                     </div>
                 </div>
             </div>
             {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
             {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
         </>
     );
 }
 
 const StatusModal = (_props) => {
     return (
         <>
             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                 <CModalHeader>
                     <CModalTitle>Add Storage Chamber</CModalTitle>
                 </CModalHeader>
                 <CModalBody>
                     <CFormInput type="text" label="Chamber ID" placeholder="Chamber Id " />
                     <CFormInput type="text" label="Description" placeholder="Enter Description " />
                     <CFormInput type="text" label="Make / Model" placeholder="Make / Model " />
                     <CFormInput type="text" label="Serial No." placeholder="Serial Number " />
                     <CFormInput type="text" label="Location" placeholder="Location " />
                     <CFormTextarea type="text" label="Comments" placeholder="" />
                     <CFormInput type="text" label="Stability Storage Condition" placeholder="Select... " />
                     <CFormInput type="text" label="Number Of Racks" placeholder="Number Of Racks " />
                     <CFormInput type="text" label="Number Of Shelfs" placeholder="Number Of Shelfs " />
                     <CFormInput type="text" label="Maximum No. Of Positions For Shelf" placeholder="0" />
                 </CModalBody>
                 <CModalFooter>
                     <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                     <CButton className="bg-info text-white">Submit</CButton>
                 </CModalFooter>
             </CModal>
         </>
     );
 }
 
 const DeleteModal = (_props) => {
     return (
         <>
             <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                 <CModalHeader>
                     <CModalTitle>Delete Storage Chamber</CModalTitle>
                 </CModalHeader>
                 <CModalBody>
                     <p>Do you want to delete this storage chamber <code>stmp23</code>?</p>
                     <CFormInput type="text" label="User ID" placeholder="Chamber Id " />
                     <CFormInput type="password" label="Password" placeholder="Your password" />
                 </CModalBody>
                 <CModalFooter>
                     <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                     <CButton className="bg-info text-white">Submit</CButton>
                 </CModalFooter>
             </CModal>
         </>
     );
 }
 
 export default StorageChamber;
 