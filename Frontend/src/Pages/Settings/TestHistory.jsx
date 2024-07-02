/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// // import "./StorageCondition.css";
// import "react-toastify/dist/ReactToastify.css";
// import { FaArrowRight } from "react-icons/fa";

// export default function TestHistory() {
//   const pageSize = 10;
//   const [currentPage, setCurrentPage] = useState(1);

//   const employees = [
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "INPending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//     {
//       user: "Initiated Product",
//       role: "Sacubitril",
//       departments: "ARIP0000095",
//       joiningDate: "N/A",
//       addedBy: "RPS-TSLV-00",
//       status: "Pending",
//     },
//   ];
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, employees.length);

//   const renderRows = () => {
//     return employees.slice(startIndex, endIndex).map((employee, index) => (
//       <tr key={startIndex + index}>
//         <td>
//           <input type="checkbox" />
//         </td>
//         <td>{startIndex + index + 1}</td>
//         <td>{employee.user}</td>
//         <td>{employee.role}</td>

//         <td>{employee.addedBy}</td>
//       </tr>
//     ));
//   };
//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <>
//       <div className="m-5 mt-3">
//         <div className="main-head">
//           <h4>Test History</h4>
//         </div>

//         <div
//           className="mt-5 rounded bg-white"
//           style={{
//             fontFamily: "sans-serif",
//             fontSize: "0.9rem",
//             boxShadow: "5px 5px 20px #5D76A9",
//           }}
//         >
//           <table className="table table-responsive">
//             <thead>
//               <tr>
//                 <th style={{ background: "#5D76A9", color: "white" }}>
//                   <input type="checkbox" />
//                 </th>
//                 <th style={{ background: "#5D76A9", color: "white" }}>SNo.</th>
//                 <th style={{ background: "#5D76A9", color: "white" }}>
//                   Test Name
//                 </th>
//                 <th style={{ background: "#5D76A9", color: "white" }}>
//                   Tests Planned
//                 </th>
//                 <th style={{ background: "#5D76A9", color: "white" }}>
//                   Tests Executed
//                 </th>
//               </tr>
//             </thead>
//             <tbody>{renderRows()}</tbody>
//           </table>
//         </div>
//         <div className="d-flex justify-content-end align-items-center mt-4">
//           <div className="pagination">
//             <button
//               style={{ background: "#21516a", color: "white" }}
//               className="btn mr-2"
//               onClick={prevPage}
//               disabled={currentPage === 1}
//             >
//               &lt;&lt;
//             </button>
//             <button className="btn mr-2 bg-dark-subtle rounded-circle">
//               {currentPage}
//             </button>
//             <button
//               style={{ background: "#21516a", color: "white" }}
//               className="btn mr-2"
//               onClick={nextPage}
//               disabled={endIndex >= employees.length}
//             >
//               &gt;&gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    TestName: "Test-001",
    TestsPlanned: "10",
    TestsExecuted: "8",
  },
  {
    checkbox: false,
    sno: 2,
    TestName: "Test-002",
    TestsPlanned: "15",
    TestsExecuted: "12",
  },
  {
    checkbox: false,
    sno: 3,
    TestName: "Test-003",
    TestsPlanned: "20",
    TestsExecuted: "18",
  },
  {
    checkbox: false,
    sno: 4,
    TestName: "Test-004",
    TestsPlanned: "5",
    TestsExecuted: "4",
  },
  {
    checkbox: false,
    sno: 5,
    TestName: "Test-005",
    TestsPlanned: "25",
    TestsExecuted: "20",
  },
  {
    checkbox: false,
    sno: 6,
    TestName: "Test-006",
    TestsPlanned: "12",
    TestsExecuted: "11",
  },
  {
    checkbox: false,
    sno: 7,
    TestName: "Test-007",
    TestsPlanned: "18",
    TestsExecuted: "16",
  },
  {
    checkbox: false,
    sno: 8,
    TestName: "Test-008",
    TestsPlanned: "30",
    TestsExecuted: "27",
  },
  {
    checkbox: false,
    sno: 9,
    TestName: "Test-009",
    TestsPlanned: "22",
    TestsExecuted: "19",
  },
  {
    checkbox: false,
    sno: 10,
    TestName: "Test-010",
    TestsPlanned: "8",
    TestsExecuted: "7",
  },
  {
    checkbox: false,
    sno: 11,
    TestName: "Test-011",
    TestsPlanned: "14",
    TestsExecuted: "13",
  },
  {
    checkbox: false,
    sno: 12,
    TestName: "Test-012",
    TestsPlanned: "6",
    TestsExecuted: "5",
  },
  {
    checkbox: false,
    sno: 13,
    TestName: "Test-013",
    TestsPlanned: "28",
    TestsExecuted: "25",
  },
  {
    checkbox: false,
    sno: 14,
    TestName: "Test-014",
    TestsPlanned: "35",
    TestsExecuted: "30",
  },
  {
    checkbox: false,
    sno: 15,
    TestName: "Test-015",
    TestsPlanned: "17",
    TestsExecuted: "15",
  },
  {
    checkbox: false,
    sno: 16,
    TestName: "Test-016",
    TestsPlanned: "11",
    TestsExecuted: "10",
  },
  {
    checkbox: false,
    sno: 17,
    TestName: "Test-017",
    TestsPlanned: "19",
    TestsExecuted: "18",
  },
  {
    checkbox: false,
    sno: 18,
    TestName: "Test-018",
    TestsPlanned: "23",
    TestsExecuted: "21",
  },
  {
    checkbox: false,
    sno: 19,
    TestName: "Test-019",
    TestsPlanned: "9",
    TestsExecuted: "8",
  },
  {
    checkbox: false,
    sno: 20,
    TestName: "Test-020",
    TestsPlanned: "16",
    TestsExecuted: "15",
  },
];

const TestHistory = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.TestName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Test Name", accessor: "TestName" },
    { header: "Tests Planned", accessor: "TestsPlanned" },
    { header: "Tests Executed", accessor: "TestsExecuted" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service Provider</h1>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
    </div>
  );
};

export default TestHistory;
