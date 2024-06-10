import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import React from 'react';

import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Approval.css";

function Approval() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const data = [
    {
      id: 1,
      name: "Product Material",
      code: "na-002",
      description: "NA",
      status: "INITIATED",
    },
    {
      id: 2,
      name: "Jacob",
      code: "Thornton",
      description: "@fat",
      status: "APPROVED",
    },
    {
      id: 3,
      name: "Larry",
      code: "Bird",
      description: "@twitter",
      status: "REJECTED",
    },
    {
      id: 4,
      name: "Product Material",
      code: "na-002",
      description: "NA",
      status: "REINITIATED",
    },
    {
      id: 5,
      name: "Jacob",
      code: "Thornton",
      description: "@fat",
      status: "DROPPED",
    },
    {
      id: 6,
      name: "Larry",
      code: "Bird",
      description: "@twitter",
      status: "APPROVED",
    },
    {
      id: 7,
      name: "Product Material",
      code: "na-002",
      description: "NA",
      status: "REJECTED",
    },
    {
      id: 8,
      name: "Jacob",
      code: "Thornton",
      description: "@fat",
      status: "REINITIATED",
    },
    {
      id: 9,
      name: "Larry",
      code: "Bird",
      description: "@twitter",
      status: "INITIATED",
    },
    {
      id: 10,
      name: "Product Material",
      code: "na-002",
      description: "NA",
      status: "DROPPED",
    },
    {
      id: 11,
      name: "Jacob",
      code: "Thornton",
      description: "@fat",
      status: "REINITIATED",
    },
    {
      id: 12,
      name: "Larry",
      code: "Bird",
      description: "@twitter",
      status: "INITIATED",
    },
    {
      id: 13,
      name: "Product Material",
      code: "na-002",
      description: "NA",
      status: "DROPPED",
    },
  ];

  const filteredData = data.filter((item) => {
    const searchFilter =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const statusFilterCheck =
      statusFilter === "" || item.status === statusFilter;
    return searchFilter && statusFilterCheck;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="m-5 mt-3   flex flex-col items-center justify-center ">
        <div className="main-head w-[100%] ">
          <h4 className="fw-bold">Approvals</h4>
        </div>
        <div className=" w-[100%]  ">
          <CRow className="mt-5 mb-3">
            <CCol sm={4}>
              <CFormInput
                style={{ fontSize: "0.9rem" }}
                className="w-[20px] "
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
                style={{ fontSize: "0.9rem" }}
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                }}
                options={[
                  { value: "", label: "All" },
                  { value: "INITIATED", label: "Initiated" },
                  { value: "APPROVED", label: "Approved" },
                  { value: "REJECTED", label: "Rejected" },
                  { value: "REINITIATED", label: "Reinitiated" },
                  { value: "DROPPED", label: "Dropped" },
                ]}
              />
            </CCol>
          </CRow>
        </div>
        <div
          className="  w-full h-full  bg-white"
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            boxShadow: "5px 5px 20px #5D76A9",
          }}
        >
          <CTable
            align="middle"
            // color="secondary "
            hover
            responsive="xl"
            className="mb-0 rounded-lg table-responsive flex items-center justify-center "
          >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  S No.
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Code
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  User
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Status
                </CTableHeaderCell>
                <CTableHeaderCell
                  style={{ background: "#5D76A9", color: "white" }}
                  scope="col"
                >
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedData.map((item, index) => (
                <CTableRow key={item.id}>
                  <CTableDataCell style={{ marginLeft: "10px" }}>
                    {(currentPage - 1) * pageSize + index + 1}
                  </CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.code}</CTableDataCell>
                  <CTableDataCell>{item.description}</CTableDataCell>
                  <CTableDataCell>
                    <button
                      className={`p-1 w-50 rounded text-light d-flex justify-content-center align-items-center bg-${
                        item.status === "INITIATED"
                          ? "blue-700"
                          : item.status === "APPROVED"
                          ? "green-700"
                          : item.status === "REJECTED"
                          ? "red-700"
                          : item.status === "REINITIATED"
                          ? "yellow-500"
                          : item.status === "DROPPED"
                          ? "purple-700"
                          : "white"
                      }`}
                      style={{ fontSize: "0.7rem" }}
                    >
                      {item.status}
                    </button>
                  </CTableDataCell>
                  <CTableDataCell className="text-start">
                    <Link to="/approval/1321">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>

        <div className="d-flex justify-end  w-full mt-4">
          <div className="pagination">
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
            <button className="btn mr-2 bg-dark-subtle rounded-circle">
              {currentPage}
            </button>
            <button
              style={{ background: "#21516a", color: "white" }}
              className="btn mr-2"
              onClick={handleNextPage}
            >
              &gt;&gt;
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Approval;
