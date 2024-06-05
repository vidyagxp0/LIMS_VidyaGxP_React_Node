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
      <div  className="m-5 mt-3">
        <h4 className="fw-bold">Test Results QA</h4>
      <div  >
        <CRow className="mt-5 mb-3">
          <CCol sm={4}>
            <CFormInput
              type="text"
              style={{fontSize:'0.9rem'}}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </CCol>
          <CCol sm={3}>
            <CFormSelect
              value={statusFilter}
              style={{fontSize:'0.9rem'}}
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
            <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <table className="table   ">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">
                <input type="checkbox" />
              </th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Sr.No</th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Name</th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Code</th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Test Type</th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Added On</th>
              <th style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
            </div>
    </>
  );
}
