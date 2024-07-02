// import {
//   CButton,
//   CCol,
//   CFormSelect,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import React from "react";
// import { useState } from "react";
// import { FaArrowRight, FaDownload } from "react-icons/fa";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import AuditTrailPDF from "./AuditTrailPDF";

// function AuditTrail() {
//   const pageSize = 5; // Number of items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const [search, setSearch] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState("Select Product");
//   const [selectedOperation, setSelectedOperation] =
//     useState("Select Operations");
//   const [selectedUser, setSelectedUser] = useState("Select Users");

//   const data = [
//     {
//       id: 1,
//       dateTime: "Feb 11th 2023 10:12",
//       formName: "Category",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Login",
//       employeeName: "Admin",
//     },
//     {
//       id: 2,
//       dateTime: "Feb 15th 2024 18:22",
//       formName: "Glass",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "LogOut",
//       employeeName: "SuperAdmin",
//     },
//     {
//       id: 3,
//       dateTime: "Mar 23rd 2024 10:50",
//       formName: "Hydraulic Oil",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Category Added",
//       employeeName: "Admin",
//     },
//     {
//       id: 4,
//       dateTime: "Apr 15th 2024 19:45",
//       formName: "Category",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Product",
//       employeeName: "Rajesh",
//     },
//     {
//       id: 5,
//       dateTime: "May 20th 2024 21:33",
//       formName: "Sampling Field",
//       actionRowName: "Room Is Clean",
//       oldAction: "Active",
//       newAction: "Updated from ACTIVE to INACTIVE",
//       employeeName: "Manager",
//     },
//     {
//       id: 6,
//       dateTime: "May 17th 2024 09:51",
//       formName: "Login",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Logged IN",
//       employeeName: "Admin",
//     },
//     {
//       id: 7,
//       dateTime: "Feb 15th 2024 18:22",
//       formName: "Handling",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Handling Added",
//       employeeName: "Admin",
//     },
//     {
//       id: 8,
//       dateTime: "Mar 23rd 2024 10:50",
//       formName: "Category",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Category Added",
//       employeeName: "Admin",
//     },
//     {
//       id: 9,
//       dateTime: "Apr 15th 2024 19:45",
//       formName: "Category",
//       actionRowName: "",
//       oldAction: "-",
//       newAction: "Category Added",
//       employeeName: "Admin",
//     },
//   ];

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, data.length);

//   const filterData = () => {
//     return data.filter((item) => {
//       const matchesProduct =
//         selectedProduct === "Select Product" ||
//         item.formName.toLowerCase().includes(selectedProduct.toLowerCase());
//       const matchesOperation =
//         selectedOperation === "Select Operations" ||
//         item.newAction.toLowerCase().includes(selectedOperation.toLowerCase());
//       const matchesUser =
//         selectedUser === "Select Users" ||
//         item.employeeName.toLowerCase().includes(selectedUser.toLowerCase());
//       const matchesSearch = item.employeeName
//         .toLowerCase()
//         .includes(search.toLowerCase());
//       return matchesProduct && matchesOperation && matchesUser && matchesSearch;
//     });
//   };

//   const filteredData = filterData();

//   const nextPage = () => setCurrentPage(currentPage + 1);
//   const prevPage = () => setCurrentPage(currentPage - 1);
//   const nextToLastPage = () =>
//     setCurrentPage(Math.ceil(filteredData.length / pageSize));

//   return (
//     <>
//       <div className="m-5 mt-3">
//         <div className="main-head">
//           <h4 className="fw-bold">Audit Trail</h4>
//         </div>
//         <div>
//           <CRow className="mb-3 mt-5">
//             <CCol sm={3}>
//               <CFormSelect
//                 style={{ fontSize: "0.9rem" }}
//                 value={selectedProduct}
//                 onChange={(e) => setSelectedProduct(e.target.value)}
//                 options={[
//                   "Select Product",
//                   { label: "Glass" },
//                   { label: "Hydraulic Oil" },
//                   { label: "Apixaban" },
//                   { label: "chpoil" },
//                   { label: "Feliconar" },
//                   { label: "Sulphuric Acid" },
//                 ]}
//               />
//             </CCol>
//             <CCol sm={3}>
//               <CFormSelect
//                 style={{ fontSize: "0.9rem" }}
//                 value={selectedOperation}
//                 onChange={(e) => setSelectedOperation(e.target.value)}
//                 options={[
//                   "Select Operations",
//                   { label: "Login" },
//                   { label: "LogOut" },
//                   { label: "Product" },
//                   { label: "Specifications" },
//                   { label: "Registration" },
//                   { label: "Test Allot" },
//                 ]}
//               />
//             </CCol>
//             <CCol sm={3}>
//               <CFormSelect
//                 style={{ fontSize: "0.9rem" }}
//                 value={selectedUser}
//                 onChange={(e) => setSelectedUser(e.target.value)}
//                 options={[
//                   "Select Users",
//                   { label: "Rajesh" },
//                   { label: "QA" },
//                   { label: "Manager" },
//                   { label: "Aliya" },
//                   { label: "Admin" },
//                   { label: "Super Admin" },
//                 ]}
//               />
//             </CCol>
//             <CCol sm={2}></CCol>
//             <CCol sm={1}>
//               <div className="d-flex justify-content-end">
//                 <PDFDownloadLink
//                   document={<AuditTrailPDF data={filteredData} />}
//                   fileName="audit_trail_report.pdf"
//                   className="btn btn-danger bg-opacity-75 rounded"
//                 >
//                   <FaDownload />
//                 </PDFDownloadLink>
//               </div>
//             </CCol>
//           </CRow>
//         </div>
//         <div
//           className=" rounded bg-white"
//           style={{
//             fontFamily: "sans-serif",
//             fontSize: "0.9rem",
//             boxShadow: "5px 5px 20px #5D76A9",
//           }}
//         >
//           <CTable align="middle" responsive className="  ">
//             <CTableHead>
//               <CTableRow>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   S NO.
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   Date Time
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   Form Name
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   Action Row Name
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   Old Action
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   New Action
//                 </CTableHeaderCell>
//                 <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white" }}
//                   scope="col"
//                 >
//                   Employee Name
//                 </CTableHeaderCell>
//               </CTableRow>
//             </CTableHead>
//             <CTableBody>
//               {filteredData.slice(startIndex, endIndex).map((item, index) => (
//                 <CTableRow key={index}>
//                   <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
//                   <CTableDataCell>{item.dateTime}</CTableDataCell>
//                   <CTableDataCell>{item.formName}</CTableDataCell>
//                   <CTableDataCell>{item.actionRowName}</CTableDataCell>
//                   <CTableDataCell>{item.oldAction}</CTableDataCell>
//                   <CTableDataCell>{item.newAction}</CTableDataCell>
//                   <CTableDataCell>{item.employeeName}</CTableDataCell>
//                 </CTableRow>
//               ))}
//             </CTableBody>
//           </CTable>
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
//               disabled={endIndex >= data.length}
//             >
//               &gt;&gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AuditTrail;

// const StatusModal = ({ visible, closeModal }) => {
//   return (
//     <CModal alignment="center" visible={visible} onClose={closeModal}>
//       <CModalHeader>
//         <CModalTitle>New Plant</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CFormInput
//           type="text"
//           className="mb-3"
//           label="Name"
//           placeholder=" Name"
//         />
//         <CFormInput
//           type="text"
//           className="mb-3"
//           label="Unique Code"
//           placeholder="Unique Code"
//         />
//         <CFormInput
//           type="text"
//           className="mb-3"
//           label="Generic Name"
//           placeholder="Generic Name "
//         />
//         <CFormInput
//           type="text"
//           className="mb-3"
//           label="Re-testing Period(Days)"
//           placeholder="Re-testing Period(Days)"
//         />
//       </CModalBody>
//       <CModalFooter>
//         <CButton color="light" onClick={closeModal}>
//           Back
//         </CButton>
//         <CButton color="primary">Add New</CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };

// const DeleteModal = ({ visible, closeModal, handleDelete }) => {
//   return (
//     <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
//       <CModalHeader>
//         <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
//           Delete Plants Workflow
//         </CModalTitle>
//       </CModalHeader>
//       <CModalBody
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "500",
//           lineHeight: "1.5",
//           marginBottom: "1rem",
//           columnGap: "0px",
//           border: "0px !important",
//         }}
//       >
//         <p>Do you want to delete this plants workflow?</p>
//       </CModalBody>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={closeModal}
//           style={{ marginRight: "0.5rem", fontWeight: "500" }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={handleDelete}
//           style={{ fontWeight: "500", color: "white" }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
// };
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

import { PiDownloadBold } from "react-icons/pi";
import jsPDF from "jspdf";
import "jspdf-autotable";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    DateTime: "01-07-2024 09:43",
    FormName: "Storage Location",
    ActionRowName: "TP-UNDW2/WBL/STP/FG/0493-02-0000051",
    OldAction: "Active",
    NewAction: "Logged In",
    EmployeeName: "Admin",
  },
  {
    checkbox: false,
    sno: 2,
    DateTime: "01-07-2024 10:00",
    FormName: "Inventory",
    ActionRowName: "TP-UNDW2/WBL/INV/0392-03-0000021",
    OldAction: "Inactive",
    NewAction: "Active",
    EmployeeName: "John",
  },
  {
    checkbox: false,
    sno: 3,
    DateTime: "01-07-2024 10:30",
    FormName: "Shipping",
    ActionRowName: "TP-UNDW2/WBL/SHP/0493-02-0000052",
    OldAction: "Active",
    NewAction: "Shipped",
    EmployeeName: "Doe",
  },
  {
    checkbox: false,
    sno: 4,
    DateTime: "01-07-2024 11:00",
    FormName: "Receiving",
    ActionRowName: "TP-UNDW2/WBL/RCV/0493-02-0000031",
    OldAction: "Inactive",
    NewAction: "Received",
    EmployeeName: "Smith",
  },
  {
    checkbox: false,
    sno: 5,
    DateTime: "01-07-2024 11:30",
    FormName: "Quality Control",
    ActionRowName: "TP-UNDW2/WBL/QC/0593-04-0000071",
    OldAction: "Pending",
    NewAction: "Approved",
    EmployeeName: "Alice",
  },
  {
    checkbox: false,
    sno: 6,
    DateTime: "01-07-2024 12:00",
    FormName: "Maintenance",
    ActionRowName: "TP-UNDW2/WBL/MNT/0493-02-0000011",
    OldAction: "Active",
    NewAction: "Completed",
    EmployeeName: "Bob",
  },
  {
    checkbox: false,
    sno: 7,
    DateTime: "01-07-2024 12:30",
    FormName: "Audit",
    ActionRowName: "TP-UNDW2/WBL/AUD/0493-02-0000081",
    OldAction: "Scheduled",
    NewAction: "Completed",
    EmployeeName: "Charlie",
  },
  {
    checkbox: false,
    sno: 8,
    DateTime: "01-07-2024 13:00",
    FormName: "Storage Location",
    ActionRowName: "TP-UNDW2/WBL/STP/FG/0493-02-0000052",
    OldAction: "Logged Out",
    NewAction: "Logged In",
    EmployeeName: "Admin",
  },
  {
    checkbox: false,
    sno: 9,
    DateTime: "01-07-2024 13:30",
    FormName: "Inventory",
    ActionRowName: "TP-UNDW2/WBL/INV/0392-03-0000022",
    OldAction: "Active",
    NewAction: "Inactive",
    EmployeeName: "Eve",
  },
];

const AuditTrail = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.OldAction === "Active") counts.Active++;
      else if (item.OldAction === "Inactive") counts.Inactive++;
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
      row.FormName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Date Time", accessor: "DateTime" },
    { header: "Form Name", accessor: "FormName" },
    { header: "Action Row Name", accessor: "ActionRowName" },
    { header: "Old Action", accessor: "OldAction" },
    { header: "New Action", accessor: "NewAction" },
    { header: "Employee Name", accessor: "EmployeeName" },

    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
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

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Audit Trail Data", 20, 20);

    const tableColumn = columns.map((col) =>
      col.header.props ? "Select All" : col.header
    );
    const tableRows = filteredData.map((row) =>
      columns.map((col) => row[col.accessor])
    );

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("audit_trail.pdf");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>

      <div className="flex items-center justify-between mb-4 w-full">
        <div className="flex space-x-4">
          <Dropdown
            options={[
              { value: "All", label: "Select Product" },
              { value: "Glass", label: "Glass" },
              { value: "Hydraulic Oil", label: "Hydraulic Oil" },
              { value: "Apixaban", label: "Apixaban" },
              { value: "chpoil", label: "chpoil" },
              { value: "Feliconar", label: "Feliconar" },
              { value: "Sulphuric Acid", label: "Sulphuric Acid" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <Dropdown
            options={[
              { value: "All", label: "Select Operations" },
              { value: "login", label: "login" },
              { value: "logout", label: "logout" },
              { value: "Product", label: "Product" },
              { value: "Specification", label: "Specification" },
              { value: "Feliconar", label: "Feliconar" },
              { value: "Sulphuric Acid", label: "Sulphuric Acid" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <Dropdown
            options={[
              { value: "All", label: "Select Users" },
              { value: "Admin1", label: "Admin1" },
              { value: "User2", label: "User2" },
              { value: "User3", label: "User3" },
              { value: "User4", label: "User4" },
              { value: "User5", label: "User5" },
              { value: "User6", label: "User6" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div
          style={{
            border: "1px solid #f98d6b",
            padding: "7px",
            width: "42px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f98d6b",
            borderRadius: "5px",
            cursor: "pointer",
            color: "white",
          }}
          onClick={handleDownload}
        >
          <PiDownloadBold />
        </div>
      </div>
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

export default AuditTrail;
