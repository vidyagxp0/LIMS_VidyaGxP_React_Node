import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function InvestigationL2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;

  const data = [
    { srNo: 1, testName: 'Test A', testCode: 'A001', testType: 'Type 1', addedOn: '2024-05-01', status: 'PENDING' },
    { srNo: 2, testName: 'Test B', testCode: 'B002', testType: 'Type 2', addedOn: '2024-05-02', status: 'APPROVED' },
    { srNo: 3, testName: 'Test C', testCode: 'C003', testType: 'Type 3', addedOn: '2024-05-03', status: 'PENDING' },
    { srNo: 4, testName: 'Test D', testCode: 'D004', testType: 'Type 4', addedOn: '2024-05-04', status: 'APPROVED' },
    { srNo: 5, testName: 'Test E', testCode: 'E005', testType: 'Type 5', addedOn: '2024-05-05', status: 'PENDING' },
    { srNo: 6, testName: 'Test F', testCode: 'F006', testType: 'Type 6', addedOn: '2024-05-06', status: 'APPROVED' },
    { srNo: 7, testName: 'Test G', testCode: 'G007', testType: 'Type 7', addedOn: '2024-05-07', status: 'PENDING' },
    { srNo: 8, testName: 'Test H', testCode: 'H008', testType: 'Type 8', addedOn: '2024-05-08', status: 'APPROVED' },
    { srNo: 9, testName: 'Test I', testCode: 'I009', testType: 'Type 9', addedOn: '2024-05-09', status: 'PENDING' },
    { srNo: 10, testName: 'Test J', testCode: 'J010', testType: 'Type 10', addedOn: '2024-05-10', status: 'APPROVED' },
  ];

  const filteredData = data.filter(item =>
    (item.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.testCode.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === "" || item.status === statusFilter)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);

  const renderRows = () => {
    return filteredData.slice(startIndex, endIndex).map((item, index) => (
      <tr key={index}>
        <td><input type="checkbox" /></td>
        <td>{item.srNo}</td>
        <td>{item.testName}</td>
        <td>{item.testCode}</td>
        <td>{item.testType}</td>
        <td>{item.addedOn}</td>
        <td hidden>{item.status}</td>
        <td>
          <Link to="/testResultsDetails"><FontAwesomeIcon icon={faEye} /></Link>
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

  return (
    <>
      <div id="div1">
        <h5>Test Results QA</h5>
      </div>
      <div id="div2">
        <div id="searchmain">
          <div id="searchicon">
            <CiSearch />
          </div>
          <div className="">
            <input
              type="text"
              className=""
              id=""
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div id="div2ka2">
          <select
            className="form-control form-select"
            id="fv-topics"
            name="status"
            data-placeholder="Select a option"
            required=""
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option label="Select Status" value=""></option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
          </select>
        </div>
      </div>

      <div className='table table-responsive p-4 shadow rounded'>
      <table className="table" style={{ fontSize: '0.8rem', margin: '0px auto', width: '98%' }}>
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

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(filteredData.length / pageSize)).keys()].map(pageNumber => (
            <li
              className={`page-item ${pageNumber + 1 === currentPage ? 'active' : ''}`}
              key={pageNumber}
            >
              <button className="page-link" onClick={() => setCurrentPage(pageNumber + 1)}>
                {pageNumber + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={nextPage} disabled={endIndex >= filteredData.length}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
