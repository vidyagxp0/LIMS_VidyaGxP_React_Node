import { useState } from 'react';
import {
  CButton, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead,
  CTableHeaderCell, CTableRow
} from "@coreui/react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';


function Approval() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const data = [
    { id: 1, name: 'Product Material', code: 'na-002', description: 'NA', status: 'INITIATED' },
    { id: 2, name: 'Jacob', code: 'Thornton', description: '@fat', status: 'APPROVED' },
    { id: 3, name: 'Larry', code: 'Bird', description: '@twitter', status: 'REJECTED' },
    { id: 4, name: 'Product Material', code: 'na-002', description: 'NA', status: 'REINITIATED' },
    { id: 5, name: 'Jacob', code: 'Thornton', description: '@fat', status: 'DROPPED' },
    { id: 6, name: 'Larry', code: 'Bird', description: '@twitter', status: 'APPROVED' },
    { id: 7, name: 'Product Material', code: 'na-002', description: 'NA', status: 'REJECTED' },
    { id: 8, name: 'Jacob', code: 'Thornton', description: '@fat', status: 'REINITIATED' },
    { id: 9, name: 'Larry', code: 'Bird', description: '@twitter', status: 'INITIATED' },
    { id: 10, name: 'Product Material', code: 'na-002', description: 'NA', status: 'DROPPED' },
  ];

  const filteredData = data.filter(item => {
    const searchFilter = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const statusFilterCheck = statusFilter === "" || item.status === statusFilter;
    return searchFilter && statusFilterCheck;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  

  return (
    <>
      <div className="m-4 p-4">
        <div className="main-head">
          <h4 className="fw-bold mb-5 mt-3">Approvals</h4>
        </div>
        <div>
          <CRow className="mb-3">
            <CCol sm={3}>
              <CFormInput
                className="mb-3 "
                style={{border:"2px solid gray"}}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search change
                }}
              />
            </CCol>
            <CCol sm={3}>
              <CFormSelect
                className="border-2"
                style={{border:"2px solid gray"}}
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
                options={[
                  { disabled:true, label: 'Select Status', value: "" },
                  { value: '', label: 'All' },
                  { value: 'INITIATED', label: 'Initiated' },
                  { value: 'APPROVED', label: 'Approved' },
                  { value: 'REJECTED', label: 'Rejected' },
                  { value: 'REINITIATED', label: 'Reinitiated' },
                  { value: 'DROPPED', label: 'Dropped' }
                ]}
              />
            </CCol>
            <CCol sm={6}></CCol>
          </CRow>
        </div>
        <div className=" rounded   bg-white" style={{border:"2px solid gray"}}>
          <CTable align="middle" responsive className="mb-0 table-responsive">
            <CTableHead >
              <CTableRow > 
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">S No.</CTableHeaderCell>
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Code</CTableHeaderCell>
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">User</CTableHeaderCell>
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedData.map((item, index) => (
                <CTableRow key={item.id}>
                  <CTableDataCell style={{marginLeft:"10px"}}>{(currentPage - 1) * pageSize + index + 1}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.code}</CTableDataCell>
                  <CTableDataCell>{item.description}</CTableDataCell>
                  <CTableDataCell className="d-flex justify-content-start">
                    <div className="w-50">
                      <div className=
                        {`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${item.status === 'INITIATED' ? 'blue-700'
                          : item.status === "APPROVED"
                            ? 'green-700'
                            : item.status === "REJECTED"
                              ? 'red-700'
                              : item.status === "REINITIATED"
                                ? 'yellow-500'
                                : item.status === "DROPPED"
                                  ? 'purple-700'
                                  : 'white'}`
                        } >
                        {item.status}
                      </div>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-start">
                    <Link to={`/approval/${item.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>
        <div className="d-flex justify-content-around my-4">
          <div className="d-flex gap-3">
            <CButton onClick={handlePrevPage} disabled={currentPage === 1}>&lt; &lt;</CButton>
            <button className='btn border'>{currentPage}</button>
            <CButton onClick={handleNextPage} disabled={currentPage === totalPages}>&gt; &gt;</CButton>
          </div>
          <div>
            <CButton onClick={handleNextPage} className='d-flex gap-2' disabled={currentPage === totalPages}>Next <FaArrowRight className='mt-1' /></CButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approval;
