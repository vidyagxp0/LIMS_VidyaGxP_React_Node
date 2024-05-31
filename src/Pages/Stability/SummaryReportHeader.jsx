import { 
     CButton, CCol, CFooter, CFormInput, CFormSelect, CHeader, CModal, 
     CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, 
     CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow 
   } from "@coreui/react";
   import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import { useState } from "react";
   import { FaArrowRight } from "react-icons/fa";
   import { Link } from "react-router-dom";
   
   function SummaryReportHeader() {
     const [addModal, setAddModal] = useState(false);
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
       { id: 1, productCaption: "testing", reportTitle: "testing001", status: "DROPPED" },
       { id: 2, productCaption: "FG123", reportTitle: "testing002", status: "INITIATED" },
       { id: 3, productCaption: "testing", reportTitle: "testing003", status: "REJECTED" },
       { id: 4, productCaption: "FG456", reportTitle: "testing004", status: "APPROVED" },
       { id: 5, productCaption: "testing", reportTitle: "testing005", status: "INITIATED" },
       { id: 6, productCaption: "FG789", reportTitle: "testing006", status: "DROPPED" },
       { id: 7, productCaption: "testing", reportTitle: "testing007", status: "INITIATED" },
       { id: 8, productCaption: "FG012", reportTitle: "testing008", status: "APPROVED" },
       { id: 9, productCaption: "testing", reportTitle: "testing009", status: "REJECTED" },
       { id: 10, productCaption: "FG345", reportTitle: "testing010", status: "REINITIATED" }
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
      item.productCaption.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredData = filterData();

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
  
   
     return (
       <>
         <div  className="h-100 mx-5">
           <div className="container-fluid my-5">
             <div className="main-head">
               <div className="title fw-bold fs-5">Summary Report Header</div>
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
                     <CButton color="primary" onClick={() => setAddModal(true)}>Add Summary</CButton>
                   </div>
                 </CCol>
               </CRow>
             </div>
             <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                 <CTableHead>
                   <CTableRow>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">S NO.</CTableHeaderCell>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Product Caption</CTableHeaderCell>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Report Title</CTableHeaderCell>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Status</CTableHeaderCell>
                     <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
                   </CTableRow>
                 </CTableHead>
                 <CTableBody>
                 {filterData().slice(startIndex, endIndex)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.productCaption.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <CTableRow key={index}>
                       <CTableHeaderCell scope="row" className="text-center">
                         <input type="checkbox" />
                       </CTableHeaderCell>
                       <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                       <CTableDataCell key={item.id}>{item.productCaption}</CTableDataCell>
                       <CTableDataCell>{item.reportTitle}</CTableDataCell>
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
                           <Link to="/stability/SummaryReportHeaderDetails"><FontAwesomeIcon icon={faEye} /></Link>
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
       </>
     );
   }
   
   const StatusModal = (_props) => {
     return (
       <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
         <CModalHeader>
           <CModalTitle>Add Summary Report Header</CModalTitle>
         </CModalHeader>
         <CModalBody>
           <CFormInput type="text" label="Report Title" placeholder=" Report Title" />
           <CFormInput type="text" label="Product/Material Caption" placeholder=" Product" />
           <CFormInput type="text" label="Format No." placeholder=" Format No." />
           <CHeader className="bg-light">Header</CHeader>
           <CFormInput type="text" label="Rows" placeholder=" Rows" />
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
           <CFormInput type="text" label="Rows" placeholder=" Rows" />
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
           <CButton color="primary">Submit</CButton>
         </CModalFooter>
       </CModal>
     );
   } 
   
   export default SummaryReportHeader;
   