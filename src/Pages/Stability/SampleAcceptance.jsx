import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useState } from "react"
import { FaDownload } from "react-icons/fa"


function SampleAcceptance() {
     const badgeStyle = { background: "gray", color: "white", width: "110px" };
     const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px", };
     const badgeStyle3 = { background: "green", color: "white", width: "110px" };
     const badgeStyle4 = { background: "red", color: "white", width: "110px" };
     const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
     const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
     const [selectedStatus, setSelectedStatus] = useState("All");
     const data = [];

     const filterData = () => {
          const filteredData =
               selectedStatus === "All"
                    ? data
                    : data.filter(
                         (item) => item.status.toUpperCase() === selectedStatus.toUpperCase()
                    );
          return filteredData.filter((item) =>
               item.data.toLowerCase().includes(search.toLowerCase())
          );
     };
     const filteredData = filterData();


     return (
          <>

               <div className="h-100 mx-5">
                    <div className="container-fluid my-5">

                         <div className="main-head">
                              <div className="title fw-bold fs-5 py-4"> Sample Acceptance</div>


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
                              <CRow className="mb-3 py-4">
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
                                   <CCol sm={2}>

                                   </CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <div className="pe-4">
                                                  <CButton className="bg-danger bg-opacity-75 rounded" >
                                                       <FaDownload />
                                                  </CButton></div>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>

                         <div className="bg-white mt-5" >
                              <CTable align="middle" responsive >
                                   <CTableHead>
                                        <CTableRow align="middle">
                                             <center>
                                                  <h4 >No Sample Acceptance Found</h4>
                                             </center>
                                        </CTableRow>
                                   </CTableHead>
                              </CTable>
                         </div>

                    </div>
               </div>

          </>
     )
}



export default SampleAcceptance
