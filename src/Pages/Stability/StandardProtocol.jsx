import React, { useState } from "react";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StandardProtocol() {
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const pageSize = 5; // Number of items per page
     const [currentPage, setCurrentPage] = useState(1);
     const [selectedStatus, setSelectedStatus] = useState("All");
     const badgeStyle = { background: "green", color: "white", width: "110px" };
     const badgeStyle2 = { background: "red", color: "white", width: "110px" };


     // Sample data for the table
     const data = [
          { id: 1, name: "testing", protocolId: "testing@123", description: "test", status: "Active" },
          { id: 2, name: "TESTING", protocolId: "001", description: "NA", status: "Active" },
          { id: 3, name: "Protocol1", protocolId: "002", description: "protocol1", status: "Active" },
          { id: 4, name: "Protocol2", protocolId: "003", description: "protocol2", status: "Inactive" },
          { id: 5, name: "Protocol3", protocolId: "004", description: "protocol3", status: "Inactive" },
          { id: 6, name: "Protocol4", protocolId: "005", description: "protocol4", status: "Active" },
          { id: 7, name: "Protocol5", protocolId: "006", description: "protocol5", status: "Inactive" },
          { id: 8, name: "Protocol6", protocolId: "007", description: "protocol6", status: "Active" },
          { id: 9, name: "Protocol7", protocolId: "008", description: "protocol7", status: "Inactive" },
          { id: 10, name: "Protocol8", protocolId: "009", description: "protocol8", status: "Active" }
     ];

     // Function to calculate start and end indices for current page
     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = Math.min(startIndex + pageSize, data.length);

     // Filtered data based on selected status
     const filteredData = data.filter(item =>
          selectedStatus === "All" ? true : item.status === selectedStatus
     );

     // Handle pagination controls
     const nextPage = () => setCurrentPage(currentPage + 1);
     const prevPage = () => setCurrentPage(currentPage - 1);
     const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

     return (
          <>
               <div id="approval-page" className="h-100 mx-5">
                    <div className="container-fluid my-5">
                         <div className="main-head">
                              <h4 className="fw-bold mb-4 mt-3">Standard Protocol</h4>
                         </div>
                         <div>
                              <CRow className="mb-3">
                                   <CCol sm={4}>
                                        <CFormInput
                                             style={{ border: "2px solid gray" }}

                                             type="email"
                                             placeholder="Search..."
                                        />
                                   </CCol>
                                   <CCol sm={3}>
                                        <CFormSelect
                                             value={selectedStatus} style={{ border: "2px solid gray" }}
                                             onChange={(e) => setSelectedStatus(e.target.value)}
                                             options={[
                                                  { label: 'All', value: 'All' },
                                                  { label: 'Active', value: 'Active' },
                                                  { label: 'Inactive', value: 'Inactive' }
                                             ]}
                                        />
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton className="text-white" style={{ background: "#4B49B6" }} onClick={() => setAddModal(true)}>Add Condition</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Standard Protocol Name</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Standard Protocol Id</CTableHeaderCell>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col">Standard Protocol Description</CTableHeaderCell>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        {filteredData.slice(startIndex, endIndex).map((item) => (
                                             <CTableRow key={item.id}>
                                                  <CTableHeaderCell scope="row" className="text-center">
                                                       <input type="checkbox" />
                                                  </CTableHeaderCell>
                                                  <CTableDataCell>{item.name}</CTableDataCell>
                                                  <CTableDataCell>{item.protocolId}</CTableDataCell>
                                                  <CTableDataCell>{item.description}</CTableDataCell>
                                                  <CTableDataCell className="d-flex">
                                                       <div
                                                            className="py-2 px-3 small rounded fw-bold"
                                                            style={
                                                                 item.status === "Active"
                                                                      ? badgeStyle
                                                                      : badgeStyle2
                                                            }
                                                       >
                                                            {item.status}
                                                       </div>
                                                  </CTableDataCell>
                                                  <CTableDataCell>
                                                       <div className="d-flex gap-3">
                                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                            <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                                       </div>
                                                  </CTableDataCell>
                                             </CTableRow>
                                        ))}
                                   </CTableBody>
                              </CTable>
                         </div>
                         <div className="pagination mt-5">
                              <div className="pagination">
                                   <div className='mr-5'>
                                        <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                                   </div>
                                   <div className="current-page-number mr-2 bg-dark-subtle page-item">
                                        <button className='btn rounded-circle'>{currentPage}</button>
                                   </div>
                                   <div>
                                        <button className="btn mr-2" onClick={nextPage} disabled={
                                             endIndex >= filteredData.length}>&gt;&gt;</button>
                                   </div>
                              </div>
                              <button className="btn btn-next" > Next <FaArrowRight /></button>
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
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
               <CModalHeader>
                    <CModalTitle>Standard Protocol</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <CFormInput
                         type="text"
                         label="Standard Protocol Name"
                         placeholder=""
                    />
                    <CFormInput
                         type="text"
                         label="Standard Protocol Id"
                         placeholder=""
                    />
                    <CFormInput
                         type="text"
                         label="Description"
                         placeholder=""
                    />
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
                    <CButton className="bg-info text-white">Add</CButton>
               </CModalFooter>
          </CModal>
     );
}

const DeleteModal = (_props) => {
     return (
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
               <CModalHeader>
                    <CModalTitle>Delete Product</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <p>Do you want to delete this Standard Protocol?</p>
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white">Submit</CButton>
               </CModalFooter>
          </CModal>
     );
}

export default StandardProtocol;
