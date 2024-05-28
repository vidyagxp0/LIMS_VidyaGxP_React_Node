import {
    CButton, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell,
    CTableHead, CTableHeaderCell, CTableRow
  } from "@coreui/react";
  import React, { useState } from 'react';
  import './Samplelogin.css';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEye } from "@fortawesome/free-regular-svg-icons";
  import { Link } from 'react-router-dom';
  import { FaArrowRight } from 'react-icons/fa';
  
  export default function Samplelogin() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
  
    const employees = [
      { srNo: '1', testName: 'Total Fungal Count', testCode: 'WBL/FPS/FG/2893-T-25', testType: 'QUANTITATIVE', status: 'PENDING', addedOn: '13-07-2023' },
      { srNo: '2', testName: 'Bacterial Count', testCode: 'WBL/FPS/FG/2893-T-26', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '14-07-2023' },
      { srNo: '3', testName: 'Yeast Count', testCode: 'WBL/FPS/FG/2893-T-27', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '15-07-2023' },
      { srNo: '4', testName: 'Mold Count', testCode: 'WBL/FPS/FG/2893-T-28', testType: 'QUANTITATIVE', status: 'APPROVED', addedOn: '16-07-2023' },
      { srNo: '5', testName: 'E. coli Detection', testCode: 'WBL/FPS/FG/2893-T-29', testType: 'QUALITATIVE', status: 'PENDING', addedOn: '17-07-2023' },
      { srNo: '6', testName: 'Salmonella Detection', testCode: 'WBL/FPS/FG/2893-T-30', testType: 'QUALITATIVE', status: 'APPROVED', addedOn: '18-07-2023' }
    ];
  
    const filteredEmployees = employees.filter(employee =>
      (employee.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.testCode.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || employee.status === statusFilter)
    );
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);
  
    const renderRows = () => {
      return filteredEmployees.slice(startIndex, endIndex).map((test, index) => (
        <tr key={index}>
          <td><input type="checkbox" /></td>
          <td>{test.srNo}</td>
          <td>{test.testName}</td>
          <td>{test.testCode}</td>
          <td>{test.testType}</td>
          <td hidden>{test.status}</td>
          <td>{test.addedOn}</td>
          <td>
            <div className="d-flex gap-3">
              <Link to="/testResultsDetails" className="mx-3"><FontAwesomeIcon icon={faEye} /></Link>
            </div>
          </td>
        </tr>
      ));
    };
  
    const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const nextToLastPage = () => {
      setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
    };
  
    return (
      <>
        <div className="m-4 p-4">
          <div className="main-head">
            <h4 className="fw-bold mb-4 mt-3">Test Results QA</h4>
          </div>
          <div>
            <CRow className="my-5">
              <CCol sm={4}>
                <CFormInput
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CCol>
              <CCol sm={3}>
                <CFormSelect
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  options={[
                    'Select Status',
                    { label: 'All', value: '' },
                    { label: 'Pending', value: 'PENDING' },
                    { label: 'Approved', value: 'APPROVED' },
                  ]}
                />
              </CCol>
              <CCol sm={2}></CCol>
              <CCol sm={3}></CCol>
            </CRow>
          </div>
  
          <div className='table table-responsive p-4 shadow rounded'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Test Name</th>
                  <th scope="col">Test Code</th>
                  <th scope="col">Test Type</th>
                  <th scope="col">Added On</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderRows()}
              </tbody>
            </table>
          </div>
  
          <div className="pagination">
            <div className="pagination ">
              <div className='mr-5'>
                <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
              </div>
              <div className="current-page-number mr-2 bg-dark-subtle page-item">
                <button className='btn rounded-circle'> {currentPage} </button>
              </div>
              <div>
                <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
              </div>
            </div>
            <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
          </div>
        </div>
      </>
    );
  }
  