import {
     CButton,
     CCol,
     CFooter,
     CFormInput,
     CFormSelect,
     CHeader,
     CModal,
     CModalBody,
     CModalFooter,
     CModalHeader,
     CModalTitle,
     CRow,
     CTable,
     CTableBody,
     CTableDataCell,
     CTableHead,
     CTableHeaderCell,
     CTableRow
} from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CoaTemplate() {
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false)
     // const [deleteId, setDeleteId] = useState(null)

     const badgeStyle = { background: "gray", color: "white", width: "110px" };
     const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px", };
     const badgeStyle3 = { background: "green", color: "white", width: "110px" };
     const badgeStyle4 = { background: "red", color: "white", width: "110px" };
     const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
     const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
     const [selectedStatus, setSelectedStatus] = useState("All");

     const pageSize = 5; // Number of items per page
     const [currentPage, setCurrentPage] = useState(1);

     const data = [
          { id: 1, caption: "testing", title: "Test", type: "With Specification", status: "REINITIATED" },
          { id: 2, caption: "testing001", title: "Test001", type: "Without Specification", status: "REJECTED" },
          { id: 3, caption: "sample", title: "Sample Report", type: "With Specification", status: "APPROVED" },
          { id: 4, caption: "example", title: "Example Report", type: "Without Specification", status: "INITIATED" },
          { id: 5, caption: "demo", title: "Demo Report", type: "With Specification", status: "REJECTED" },
          { id: 6, caption: "test2", title: "Test Report 2", type: "ERP", status: "APPROVED" },
          { id: 7, caption: "test3", title: "Test Report 3", type: "With Specification", status: "REINITIATED" },
          { id: 8, caption: "sample2", title: "Sample Report 2", type: "Without Specification", status: "INITIATED" },
          { id: 9, caption: "example2", title: "Example Report 2", type: "ERP", status: "REJECTED" },
          { id: 10, caption: "demo2", title: "Demo Report 2", type: "With Specification", status: "APPROVED" }
     ];

     const startIndex = (currentPage - 1) * pageSize;
     const endIndex = Math.min(startIndex + pageSize, data.length);
     const [search, setSearch] = useState("");

     const filterData = () => {
          const filteredData =
               selectedStatus === "All"
                    ? data
                    : data.filter(
                         (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
                    );
          return filteredData.filter((item) =>
               item.caption.toLowerCase().includes(search.toLowerCase())
          );
     };
     const filteredData = filterData();

     const nextPage = () => setCurrentPage(currentPage + 1);
     const prevPage = () => setCurrentPage(currentPage - 1);
     const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
     const handleDelete = (id) => {
          setData((prevData) => prevData.filter((item) => item.id !== id));
          setDeleteModal(false);
     };

     return (
          <>
               <div className="h-100 mx-5">
                    <div className="container-fluid my-5">
                         <div className="main-head">
                              <div className="title fw-bold fs-5">Certificate Of Analysis</div>
                         </div>
                         <div className="d-flex gap-4">
                              <div className="chart-widgets w-100">
                                   <div className="">
                                        <div className="row" style={{ cursor: "pointer" }}>
                                             <button
                                                  className="col shadow p-3 m-3 rounded"
                                                  style={{
                                                       background: "linear-gradient(45deg,#0d6efd, #9ec5fe )",
                                                       textAlign: "left",
                                                  }}
                                                  onClick={() => setSelectedStatus("INITIATED")}
                                             >
                                                  <div className="text-light fs-5">INITIATED</div>
                                                  <div
                                                       className="count fs-1 text-light fw-bolder"
                                                       style={{ color: "white" }}
                                                  >
                                                       {
                                                            filterData().filter(
                                                                 (item) => item.status === "INITIATED"
                                                            ).length
                                                       }
                                                  </div>
                                             </button>
                                             <button
                                                  className="col shadow p-3 m-3 rounded"
                                                  style={{
                                                       background: "linear-gradient(45deg, #d63384, #9ec5fe)",
                                                       textAlign: "left",
                                                       boxShadow: "0px 10px 20px  black !important",
                                                  }}
                                                  onClick={() => setSelectedStatus("REINITIATED")}
                                             >
                                                  <div className="text-light fs-5">REINITIATED</div>

                                                  <div
                                                       className="count fs-1 text-light fw-bolder"
                                                       style={{ color: "white" }}
                                                  >
                                                       {
                                                            filterData().filter(
                                                                 (item) => item.status === "REINITIATED"
                                                            ).length
                                                       }
                                                  </div>
                                             </button>
                                             <button
                                                  className="col shadow p-3 m-3 rounded"
                                                  style={{
                                                       background: "linear-gradient(45deg, #ffc107, #9ec5fe)",
                                                       textAlign: "left",
                                                  }}
                                                  onClick={() => setSelectedStatus("APPROVED")}
                                             >
                                                  <butto className="text-light fs-5">APPROVED</butto>
                                                  <div
                                                       className="count fs-1 text-light fw-bolder"
                                                       style={{ color: "white", textAlign: "left" }}
                                                  >
                                                       {
                                                            filterData().filter(
                                                                 (item) => item.status === "APPROVED"
                                                            ).length
                                                       }
                                                  </div>
                                             </button>

                                             <button
                                                  className="col shadow p-3 m-3 rounded"
                                                  style={{
                                                       background: "linear-gradient(45deg, #dc3545, #9ec5fe)",
                                                       textAlign: "left",
                                                  }}
                                                  onClick={() => setSelectedStatus("REJECTED")}
                                             >
                                                  <div className="text-light fs-5">REJECTED</div>
                                                  <div
                                                       className="count fs-1 text-light fw-bolder"
                                                       style={{ color: "white" }}
                                                  >
                                                       {
                                                            filterData().filter(
                                                                 (item) => item.status === "REJECTED"
                                                            ).length
                                                       }
                                                  </div>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <CRow className="mb-3">
                                   <CCol sm={4}>
                                        <CFormInput
                                             style={{ border: "2px solid gray" }}
                                             type="email"
                                             placeholder="Search..."
                                             onChange={(e) => setSearch(e.target.value)}
                                        />
                                   </CCol>
                                   <CCol sm={3}>
                                        <CFormSelect
                                             onChange={(e) => setSelectedStatus(e.target.value)}
                                             value={selectedStatus}
                                             style={{ border: "2px solid gray" }}
                                        >
                                             <option value="All">All</option>
                                             <option value="Initiated">Initiated</option>
                                             <option value="Approved">Approved</option>
                                             <option value="Rejected">Rejected</option>
                                             <option value="Reinitiated">Reinitiated</option>
                                             <option value="Dropped">Dropped</option>
                                        </CFormSelect>
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton color="primary" onClick={() => setAddModal(true)}>Add COA Template</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Product Caption</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Report Title</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Coa Type</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        {filterData().slice(startIndex, endIndex)
                                             .filter((item) => {
                                                  return search.toLowerCase() === ""
                                                       ? item
                                                       : item.caption.toLowerCase().includes(search);
                                             })
                                             .map((item, index) => (
                                                  <CTableRow key={index}>
                                                       <CTableHeaderCell scope="row" className="text-center">
                                                            <input type="checkbox" />
                                                       </CTableHeaderCell>
                                                       <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                                       <CTableDataCell key={item.id}>{item.caption}</CTableDataCell>
                                                       <CTableDataCell>{item.title}</CTableDataCell>
                                                       <CTableDataCell>{item.type}</CTableDataCell>
                                                       <CTableDataCell className="d-flex">
                                                            <div
                                                                 className="py-2 px-3 small rounded fw-bold"
                                                                 style={
                                                                      item.status === "INITIATED"
                                                                           ? badgeStyle2
                                                                           : item.status === "APPROVED"
                                                                                ? badgeStyle3
                                                                                : item.status === "REJECTED"
                                                                                     ? badgeStyle4
                                                                                     : item.status === "REINITIATED"
                                                                                          ? badgeStyle5
                                                                                          : item.status === "DROPPED"
                                                                                               ? badgeStyle6
                                                                                               : item.status === "ALL"
                                                                                                    ? badgeStyle
                                                                                                    : badgeStyle
                                                                 }
                                                            >
                                                                 {item.status}
                                                            </div>
                                                       </CTableDataCell>
                                                       <CTableDataCell>
                                                            <div className="d-flex gap-3">
                                                                 <Link to="/stability/CoaTemplateDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                                 
                                                            </div>
                                                       </CTableDataCell>
                                                  </CTableRow>
                                             ))}
                                   </CTableBody>
                              </CTable>
                         </div>
                         <div className="d-flex justify-content-between align-items-center mt-4">
                              <div className="pagination">
                                   <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                        &lt;&lt;
                                   </button>
                                   <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                                   <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                        &gt;&gt;
                                   </button>
                              </div>
                              <button className="btn btn-next" onClick={nextToLastPage}>
                                   Next <FaArrowRight />
                              </button>
                         </div>
                    </div>
               </div>
               {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
               {deleteModal && (
                    <DeleteModal
                         visible={deleteModal !== false}
                         closeModal={() => setDeleteModal(false)}
                         handleDelete={() => handleDelete(deleteModal)}
                    />
               )}
          </>
     );
}

const StatusModal = (_props) => {
     return (
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
               <CModalHeader>
                    <CModalTitle>Add Coa Template</CModalTitle>
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
                         label="Coa Type"
                         placeholder="Select Coa Type"
                         options={[
                              "Select Coa Type",
                              { label: "With Specification" },
                              { label: "Without Specification" },
                              { label: "ERP" }
                         ]}
                    />
                    <CFormInput
                         type="text"
                         label="Report Title"
                         placeholder="Report Title"
                    />
                    <CFormInput
                         type="text"
                         label="Product/Material Caption"
                         placeholder="Product"
                    />
                    <CFormInput
                         type="text"
                         label="Format No."
                         placeholder="Format No."
                    />
                    <CHeader className="bg-light">Header</CHeader>
                    <CFormInput
                         type="text"
                         label="Rows"
                         placeholder="Rows"
                    />
                    <CFormSelect
                         type="text"
                         label="Columns"
                         placeholder="Columns"
                         options={[
                              "Columns",
                              { label: "2" },
                              { label: "4" },
                              { label: "6" }
                         ]}
                    />
                    <CFooter className="bg-light">Footer</CFooter>
                    <CFormInput
                         type="text"
                         label="Rows"
                         placeholder="Rows"
                    />
                    <CFormSelect
                         type="text"
                         label="Columns"
                         placeholder="Columns"
                         options={[
                              "Columns",
                              { label: "2" },
                              { label: "4" },
                              { label: "6" }
                         ]}
                    />
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
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
                         Delete Coa Template
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
                    <p>Do you want to delete this COA Template</p>
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
                         onClick={_props.handleDelete}
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

export default CoaTemplate;
