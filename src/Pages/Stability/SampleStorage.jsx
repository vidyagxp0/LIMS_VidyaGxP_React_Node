import { CButton, CCol, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function SampleStorage() {
     const [addModal, setAddModal] = useState(false)
     const [deleteModal, setDeleteModal] = useState(false)
     const [deleteId, setDeleteId] = useState(null)

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
          { id: 1, productName: "Sodium Propyl Paraben IP", chamberId: "EUR/SOP-AD-01", actualQty: 100, availableQty: 80, protocolId: "New001", status: "APPROVED" },
          { id: 2, productName: "EM", chamberId: "EUR/SOP-AD-02", actualQty: 90, availableQty: 60, protocolId: "Test002", status: "DROPPED" },
          { id: 3, productName: "Polycaprolactone IP", chamberId: "EUR/SOP-AD-03", actualQty: 80, availableQty: 80, protocolId: "New003", status: "INITIATED" },
          { id: 4, productName: "Acetaminophen", chamberId: "EUR/SOP-AD-04", actualQty: 120, availableQty: 100, protocolId: "New004", status: "APPROVED" },
          { id: 5, productName: "Ibuprofen", chamberId: "EUR/SOP-AD-05", actualQty: 110, availableQty: 90, protocolId: "New005", status: "REINITIATED" },
          { id: 6, productName: "Aspirin", chamberId: "EUR/SOP-AD-06", actualQty: 130, availableQty: 110, protocolId: "New006", status: "REJECTED" },
          { id: 7, productName: "Caffeine", chamberId: "EUR/SOP-AD-07", actualQty: 140, availableQty: 120, protocolId: "New007", status: "INITIATED" },
          { id: 8, productName: "Naproxen", chamberId: "EUR/SOP-AD-08", actualQty: 150, availableQty: 130, protocolId: "New008", status: "APPROVED" },
          { id: 9, productName: "Lidocaine", chamberId: "EUR/SOP-AD-09", actualQty: 160, availableQty: 140, protocolId: "New009", status: "DROPPED" },
          { id: 10, productName: "Ethanol", chamberId: "EUR/SOP-AD-10", actualQty: 170, availableQty: 150, protocolId: "New010", status: "REJECTED" },
     ];

     const startIndex = (currentPage - 1) * pageSize;
     const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
     const endIndex = Math.min(startIndex + pageSize, filteredData.length);
     const nextPage = () => setCurrentPage(currentPage + 1);
     const prevPage = () => setCurrentPage(currentPage - 1);
     const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
     const handleDeleteClick = (id) => {
          setDeleteId(id);
          setDeleteModal(true);
     };

     const handleDeleteConfirm = () => {
          setData(data.filter((item) => item.id !== deleteId));
          setDeleteModal(false);
     };
     const filterData = () => {
          let filtered = data;

          if (selectedStatus !== "All") {
               filtered = filtered.filter((item) => item.status === selectedStatus.toUpperCase());
          }

          if (search) {
               filtered = filtered.filter((item) =>
                    item.product.toLowerCase().includes(search.toLowerCase())
               );
          }

          return filtered;
     };
     const [search, setSearch] = useState("");
     console.log(search);

     return (
          <>

               <div className="h-100 mx-5">
                    <div className="container-fluid my-5">
                         <div className="main-head">
                              <div className="title fw-bold fs-5 py-4">Sample Storage</div>
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
                                        // onChange={(e) => setSearch(e.target.value)}
                                        />
                                   </CCol>
                                   <CCol sm={3}>
                                        <CFormSelect
                                             onChange={(e) => setSelectedStatus(e.target.value)}
                                             value={selectedStatus}
                                             style={{ border: "2px solid gray" }}
                                        >
                                             <option value="All">All</option>
                                             <option value="INITIATED">Initiated</option>
                                             <option value="APPROVED">Approved</option>
                                             <option value="REJECTED">Rejected</option>
                                             <option value="REINITIATED">Reinitiated</option>
                                             <option value="DROPPED">Dropped</option>
                                        </CFormSelect>
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton color="primary" onClick={() => setAddModal(true)}>Add Sample Storage</CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Product Name</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Chamber ID</CTableHeaderCell>
                                             <CTableHeaderCell  style={{background:"#3C496A", color:"white"}} scope="col">Actual Quantity</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Available Quantity</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Protocol Type</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        {filterData().slice(startIndex, endIndex).map((item, index) => (
                                             <CTableRow key={item.id}>
                                                  <CTableHeaderCell scope="row" className="text-center">
                                                       <input type="checkbox" />
                                                  </CTableHeaderCell>
                                                  <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                                  <CTableDataCell>{item.productName}</CTableDataCell>
                                                  <CTableDataCell>{item.chamberId}</CTableDataCell>
                                                  <CTableDataCell>{item.actualQty}</CTableDataCell>
                                                  <CTableDataCell>{item.availableQty}</CTableDataCell>
                                                  <CTableDataCell>{item.protocolId}</CTableDataCell>
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
                                                            <Link to="/stability/sampleStorageDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                            <div
                                                                 className="cursor-pointer"
                                                                 onClick={() => setAddModal(true)}
                                                            >
                                                                 <FontAwesomeIcon icon={faPenToSquare} />
                                                            </div>
                                                            <div className="cursor-pointer" onClick={() => handleDeleteClick(item.id)}>
                                                                 <FontAwesomeIcon icon={faTrashCan} />
                                                            </div>
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
               {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
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
                         Delete Instrument Registration
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
                    <p>Are you sure you want to delete this { }?</p>
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

export default SampleStorage
