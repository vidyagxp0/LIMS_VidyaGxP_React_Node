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
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const badgeStyle = { background: "green", color: "white", width: "110px" };
     const badgeStyle2 = { background: "red", color: "white", width: "110px", };
     const [selectedStatus, setSelectedStatus] = useState("All");

     const pageSize = 5; // Number of items per page
     const [currentPage, setCurrentPage] = useState(1);

     const data = [
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
               item.name.toLowerCase().includes(search.toLowerCase())
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
                    <div className="container-fluid my-5 ">
                         <div className="main-head">
                              <div className="title fw-bold fs-5 py-4">Sample Acceptance Template</div>
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
                                             options={[
                                                  
                                                  { label: 'All', value: 'All' },
                                                  { label: 'Active', value: 'ACTIVE' },
                                                  { label: 'Inactive', value: 'INACTIVE' }
                                             ]}
                                        />
                                   </CCol>
                                   <CCol sm={2}></CCol>
                                   <CCol sm={3}>
                                        <div className="d-flex justify-content-end">
                                             <CButton color="primary" onClick={() => setAddModal(true)}>
                                                  Add Sample Template
                                             </CButton>
                                        </div>
                                   </CCol>
                              </CRow>
                         </div>
                         <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
                                   <CTableHead>
                                        <CTableRow>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}}  scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">S NO.</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Name</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Unique Code</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">No. Of Check Items</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Updated At</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Status</CTableHeaderCell>
                                             <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
                                        </CTableRow>
                                   </CTableHead>
                                   <CTableBody>
                                        {filterData().slice(startIndex, endIndex)
                                             .filter((item) => {
                                                  return search.toLowerCase() === ""
                                                       ? item
                                                       : item.name.toLowerCase().includes(search);
                                             })
                                             .map((item, index) => (
                                                  <CTableRow key={index}>
                                                       <CTableHeaderCell scope="row" className="text-center">
                                                            <input type="checkbox" />
                                                       </CTableHeaderCell>
                                                       <CTableDataCell>{item.id}</CTableDataCell>
                                                       <CTableDataCell key={item.id}>{item.name}</CTableDataCell>
                                                       <CTableDataCell>{item.code}</CTableDataCell>
                                                       <CTableDataCell>{item.checkItems}</CTableDataCell>
                                                       <CTableDataCell>{item.updatedAt}</CTableDataCell>
                                                       <CTableDataCell className="d-flex">
                                                            <div
                                                                 className="py-2 px-3 small rounded fw-bold"
                                                                 style={
                                                                      item.status === "ACTIVE"
                                                                           ? badgeStyle
                                                                           : badgeStyle2
                                                                 }
                                                            >
                                                                 {item.status}
                                                            </div>
                                                       </CTableDataCell>
                                                       <CTableDataCell>
                                                            <div className="d-flex gap-3">
                                                                 <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                                                                      <FontAwesomeIcon icon={faPenToSquare} />
                                                                 </div>
                                                                 <div
                                                                      className="cursor-pointer"
                                                                      onClick={() => setDeleteModal(item.id)}
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
                              <button className="btn " onClick={nextToLastPage}>
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
                    <CModalTitle>New Condition</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <CFormInput type="text" label="Name" placeholder="Name" />
                    <CFormInput type="text" label="Unique Code" placeholder="Unique Code" />
                    <CFormInput type="text" label="No. Of Check Items" placeholder="No. of Check Items" />
                    <CButton color="primary" className="mt-2">Add</CButton>
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
           <p>Do you want to delete this Sample Acceptance Template{}</p>
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

export default SampleAcceptanceTemplate;
