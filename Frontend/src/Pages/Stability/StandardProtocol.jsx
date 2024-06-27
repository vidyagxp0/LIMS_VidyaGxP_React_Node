import React, { useState } from "react";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function StandardProtocol() {
     const pageSize = 5;
     const [currentPage, setCurrentPage] = useState(1);
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);

     const [data, setData] = useState([
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
     ]);

     const [searchTerm, setSearchTerm] = useState("");
     const [statusFilter, setStatusFilter] = useState("");

     const filteredData = data.filter((item) => {
          const searchFilter =
               item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.protocolId.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.description.toLowerCase().includes(searchTerm.toLowerCase());
          const statusFilterCheck =
               statusFilter === "" || item.status === statusFilter;
          return searchFilter && statusFilterCheck;
     });

     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = Math.min(startIndex + pageSize, data.length);

     const nextPage = () => setCurrentPage(currentPage + 1);
     const prevPage = () => setCurrentPage(currentPage - 1);
     const handleDeleteClick = (id) => {
          setDeleteId(id);
          setDeleteModal(true);
     };

     const handleDeleteConfirm = () => {
          setData(data.filter((item) => item.id !== deleteId));
          setDeleteModal(false);
          setDeleteId(null);
     };

     return (
          <>
               <div className="m-5 mt-3">
                    <div className="main-head">
                         <h4 className="fw-bold">Standard Protocol</h4>
                    </div>
                    <div>
                         <CRow className="mt-5 mb-3">
                              <CCol sm={4}>
                                   <CFormInput
                                        style={{ fontSize: '0.9rem' }}
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                             setSearchTerm(e.target.value);
                                             setCurrentPage(1);
                                        }}
                                   />
                              </CCol>
                              <CCol sm={3}>
                                   <CFormSelect
                                        value={statusFilter}
                                        style={{ fontSize: '0.9rem' }}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        options={[
                                             { label: "All", value: "" },
                                             { label: "Active", value: "Active" },
                                             { label: "Inactive", value: "Inactive" },
                                        ]}
                                   />
                              </CCol>
                              <CCol sm={2}></CCol>
                              <CCol sm={3}>
                                   <div className="d-flex justify-content-end">
                                        <CButton className="text-white" style={{ background: "#4B49B6", fontSize: '0.9rem' }} onClick={() => setAddModal(true)}>Add Condition</CButton>
                                   </div>
                              </CCol>
                         </CRow>
                    </div>
                    <div
                         className="rounded bg-white"
                         style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                    >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
                              <CTableHead>
                                   <CTableRow>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Standard Protocol Name</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Standard Protocol Id</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Standard Protocol Description</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
                                   </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                   {filteredData.slice(startIndex, endIndex).map((item) => (
                                        <CTableRow key={item.id}>
                                             <CTableDataCell scope="row" className="text-center">
                                                  <input type="checkbox" />
                                             </CTableDataCell>
                                             <CTableDataCell>{item.name}</CTableDataCell>
                                             <CTableDataCell>{item.protocolId}</CTableDataCell>
                                             <CTableDataCell>{item.description}</CTableDataCell>
                                             <CTableDataCell>
                                                  <button
                                                       className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "Inactive"
                                                                 ? "red-700"
                                                                 : item.status === "Active"
                                                                      ? "green-700"
                                                                      : "white"
                                                            }`} style={{ fontSize: '0.6rem' }}
                                                  >
                                                       {item.status}
                                                  </button>
                                             </CTableDataCell>
                                             <CTableDataCell>
                                                  <div className="d-flex gap-3">
                                                       <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                       <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                       <div className='cursor-pointer' onClick={() => handleDeleteClick(item.id)} ><FontAwesomeIcon icon={faTrashCan} /></div>
                                                  </div>
                                             </CTableDataCell>
                                        </CTableRow>
                                   ))}
                              </CTableBody>
                         </CTable>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-4">
                         <div className="pagination">
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                   &lt;&lt;
                              </button>
                              <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                              <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                   &gt;&gt;
                              </button>
                         </div>
                    </div>
               </div>

               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
               {deleteModal && (
                    <DeleteModal
                         visible={deleteModal}
                         closeModal={() => setDeleteModal(false)}
                         confirmDelete={handleDeleteConfirm}
                         handleDelete={handleDeleteClick}
                    />
               )}
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
                         className="mb-3"
                         type="text"
                         label="Standard Protocol Name"
                         placeholder=""
                    />
                    <CFormInput
                         className="mb-3"
                         type="text"
                         label="Standard Protocol Id"
                         placeholder=""
                    />
                    <CFormInput
                         className="mb-3"
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
          <CModal
               alignment="center"
               visible={_props.visible}
               onClose={_props.closeModal}
               size="lg"
          >
               <CModalHeader>
                    <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                         Delete Product
                    </CModalTitle>
               </CModalHeader>
               <div
                    className="modal-body"
                    style={{
                         fontSize: "1.2rem",
                         fontWeight: "500",
                         lineHeight: "1.5",
                         marginBottom: "1rem",
                         columnGap: "0px",
                         border: "0px !important",
                    }}
               >
                    <p>Do you want to delete this Standard Protocol { }?</p>
               </div>
               <CModalFooter>
                    <CButton
                         color="secondary"
                         onClick={_props.closeModal}
                         style={{
                              marginRight: "0.5rem",
                              fontWeight: "500",
                         }}
                    >
                         Cancel
                    </CButton>
                    <CButton
                         color="danger"
                         onClick={_props.confirmDelete}
                         style={{
                              fontWeight: "500",
                              color: "white",
                         }}
                    >
                         Delete
                    </CButton>
               </CModalFooter>
          </CModal>
     );
};

export default StandardProtocol;
