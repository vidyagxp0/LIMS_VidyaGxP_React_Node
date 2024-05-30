import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { CCol, CFormInput, CFormSelect, CRow } from "@coreui/react";

export default function InvestigationL2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  const data = [
    {
      srNo: 1,
      testName: "Test A",
      testCode: "A001",
      testType: "Type 1",
      addedOn: "2024-05-01",
      status: "PENDING",
    },
    {
      srNo: 2,
      testName: "Test B",
      testCode: "B002",
      testType: "Type 2",
      addedOn: "2024-05-02",
      status: "APPROVED",
    },
    {
      srNo: 3,
      testName: "Test C",
      testCode: "C003",
      testType: "Type 3",
      addedOn: "2024-05-03",
      status: "PENDING",
    },
    {
      srNo: 4,
      testName: "Test D",
      testCode: "D004",
      testType: "Type 4",
      addedOn: "2024-05-04",
      status: "APPROVED",
    },
    {
      srNo: 5,
      testName: "Test E",
      testCode: "E005",
      testType: "Type 5",
      addedOn: "2024-05-05",
      status: "PENDING",
    },
    {
      srNo: 6,
      testName: "Test F",
      testCode: "F006",
      testType: "Type 6",
      addedOn: "2024-05-06",
      status: "APPROVED",
    },
    {
      srNo: 7,
      testName: "Test G",
      testCode: "G007",
      testType: "Type 7",
      addedOn: "2024-05-07",
      status: "PENDING",
    },
    {
      srNo: 8,
      testName: "Test H",
      testCode: "H008",
      testType: "Type 8",
      addedOn: "2024-05-08",
      status: "APPROVED",
    },
    {
      srNo: 9,
      testName: "Test I",
      testCode: "I009",
      testType: "Type 9",
      addedOn: "2024-05-09",
      status: "PENDING",
    },
    {
      srNo: 10,
      testName: "Test J",
      testCode: "J010",
      testType: "Type 10",
      addedOn: "2024-05-10",
      status: "APPROVED",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      (item.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.testCode.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "" || item.status === statusFilter)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const renderRows = () => {
    return filteredData.slice(startIndex, endIndex).map((item, index) => (
      <tr key={index}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{item.srNo}</td>
        <td>{item.testName}</td>
        <td>{item.testCode}</td>
        <td>{item.testType}</td>
        <td>{item.addedOn}</td>
        <td hidden>{item.status}</td>
        <td>
          <Link to="/testResultsDetails">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </td>
      </tr>
    ));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div id="div1" className="mx-4 mb-5 mt-5">
        <h4 className="fw-bold">Test Results QA</h4>
      </div>
      <div className="my-2" style={{ marginLeft: "24px" }}>
        <CRow className="my-0">
          <CCol sm={4}>
            <CFormInput
              type="text"
              style={{ border: "2px solid gray" }}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </CCol>
          <CCol sm={3}>
            <CFormSelect
              value={statusFilter}
              style={{ border: "2px solid gray" }}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                'Select Status',
                { label: 'All', value: '' },
                { label: 'Pending', value: 'PENDING' },
                { label: 'Approved', value: 'APPROVED' },
              ]}
            />
          </CCol>
        </CRow>
      </div>
      <div className="m-4  rounded bg-white" style={{ border: "2px solid gray" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">
                <input type="checkbox" />
              </th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Sr.No</th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Test Name</th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Test Code</th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Test Type</th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Added On</th>
              <th style={{ background: "#3C496A", color: "white" }} scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
      <div className="pagination my-4 d-flex justify-content-between align-items-center">
        <div className="pagination-buttons d-flex align-items-center">
          <button
            className="btn btn-outline-secondary mr-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>
          <span className="current-page-number bg-dark-subtle page-item rounded-circle p-2">
            {currentPage}
          </span>
          <button
            className="btn btn-outline-secondary ml-2"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
        <button
          className="btn  d-flex align-items-center"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowRight className="ms-2" />
        </button>
      </div>
    </>
  );
}
