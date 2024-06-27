import {
     CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter,
     CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell,
     CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function SampleAcceptanceTemplate() {
     const pageSize = 5;
     const [currentPage, setCurrentPage] = useState(1);
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const [deleteId, setDeleteId] = useState(null);

     const [data, setData] = useState([
          { id: 1, name: "stmp1", code: "ACCC", checkItems: 6, updatedAt: "05-may-2024 20:50", status: "ACTIVE" },
          { id: 2, name: "testing", code: "ACC011", checkItems: 2, updatedAt: "15-may-2024 12:50", status: "ACTIVE" },
          { id: 3, name: "stmp5", code: "sample code", checkItems: 8, updatedAt: "20-may-2024 15:20", status: "ACTIVE" },
          { id: 4, name: "stmp2", code: "ACD012", checkItems: 3, updatedAt: "25-may-2024 10:30", status: "INACTIVE" },
          { id: 5, name: "stmp3", code: "ACE013", checkItems: 5, updatedAt: "30-may-2024 14:00", status: "ACTIVE" },
          { id: 6, name: "stmp4", code: "ACF014", checkItems: 7, updatedAt: "02-jun-2024 09:45", status: "INACTIVE" },
          { id: 7, name: "stmp6", code: "ACG015", checkItems: 4, updatedAt: "05-jun-2024 11:20", status: "ACTIVE" },
          { id: 8, name: "stmp7", code: "ACH016", checkItems: 9, updatedAt: "10-jun-2024 16:35", status: "ACTIVE" },
          { id: 9, name: "stmp8", code: "ACI017", checkItems: 1, updatedAt: "15-jun-2024 13:55", status: "INACTIVE" },
          { id: 10, name: "stmp9", code: "ACJ018", checkItems: 2, updatedAt: "20-jun-2024 19:10", status: "ACTIVE" }
     ]);

     const [searchTerm, setSearchTerm] = useState("");
     const [selectedStatus, setSelectedStatus] = useState("All");

     const filterData = () => {
          const filteredData =
               selectedStatus === "All"
                    ? data
                    : data.filter(
                         (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
                    );
          return filteredData.filter((item) =>
               item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.checkItems.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.updatedAt.toLowerCase().includes(searchTerm.toLowerCase())
          );
     };
     const filteredData = filterData();

     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = Math.min(startIndex + pageSize, data.length);
     const [search, setSearch] = useState("");

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
                         <h4 className="fw-bold">Sample Acceptance Template</h4>
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
                                        value={selectedStatus}
                                        style={{ fontSize: '0.9rem' }}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        options={[
                                             { label: "All", value: "All" },
                                             { label: "Active", value: "Active" },
                                             { label: "Inactive", value: "Inactive" },
                                        ]}
                                   />
                              </CCol>
                              <CCol sm={2}></CCol>
                              <CCol sm={3}>
                                   <div className="d-flex justify-content-end">
                                        <CButton
                                             className="text-white"
                                             style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                                             onClick={() => setAddModal(true)}
                                        >
                                             Add Sample Template
                                        </CButton>
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
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Name</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Unique Code</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">No. Of Check Items</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Updated At</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                                        <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
                                   </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                   {filterData().slice(startIndex, endIndex)
                                        .filter((item) => {
                                             return search.toLowerCase() === ""
                                                  ? item
                                                  : item.name.toLowerCase().includes(search) ||
                                                  item.code.toLowerCase().includes(search) ||
                                                  item.checkItems.toLowerCase().includes(search) ||
                                                  item.updatedAt.toLowerCase().includes(search)
                                        })
                                        .map((item, index) => (
                                             <CTableRow key={index}>
                                                  <CTableHeaderCell scope="row" className="text-center">
                                                       <input type="checkbox" />
                                                  </CTableHeaderCell>
                                                  <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                                  <CTableDataCell key={item.id}>{item.name}</CTableDataCell>
                                                  <CTableDataCell>{item.code}</CTableDataCell>
                                                  <CTableDataCell>{item.checkItems}</CTableDataCell>
                                                  <CTableDataCell>{item.updatedAt}</CTableDataCell>
                                                  <CTableDataCell>
                                                       <button
                                                            className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${item.status === "INACTIVE"
                                                                      ? "red-700"
                                                                      : item.status === "ACTIVE"
                                                                           ? "green-700"
                                                                           : "white"
                                                                 }`} style={{ fontSize: '0.6rem' }}
                                                       >
                                                            {item.status}
                                                       </button>
                                                  </CTableDataCell>
                                                  <CTableDataCell>
                                                       <div className="d-flex gap-3">
                                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                                                                 <FontAwesomeIcon icon={faPenToSquare} />
                                                            </div>
                                                            <div
                                                                 className='cursor-pointer'
                                                                 onClick={() => handleDeleteClick(item.id)}
                                                            >
                                                                 <FontAwesomeIcon icon={faTrashCan} />
                                                            </div>

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
                    <CModalTitle>New Condition</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <CFormInput className="mb-3" type="text" label="Name" placeholder="Name" />
                    <CFormInput className="mb-3" type="text" label="Unique Code" placeholder="Unique Code" />
                    <CFormInput className="mb-3" type="text" label="No. Of Check Items" placeholder="No. of Check Items" />
                    {/* <CButton className="mb-3" color="primary" className="mt-2">Add</CButton> */}
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
               </CModalFooter>
          </CModal>
     );
};


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
                         Delete Sample Acceptance Template
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
                    <p>Do you want to delete this Sample Acceptance Template{ }</p>
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

export default SampleAcceptanceTemplate;
