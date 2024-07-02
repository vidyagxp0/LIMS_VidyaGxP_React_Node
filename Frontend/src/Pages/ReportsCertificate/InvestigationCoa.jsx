// import {
//   CButton,
//   CCol,
//   CFormInput,
//   CFormSelect,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import { faEye } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React,{ useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function InvestigationCoa() {
//   const badgeStyle = { background: "gray", color: "white", width: "110px" };
//   const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
//   const badgeStyle3 = { background: "green", color: "white", width: "110px" };
//   const badgeStyle4 = { background: "red", color: "white", width: "110px" };
//   const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
//   const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

//   const [selectedStatus, setSelectedStatus] = useState("All");

//   const pageSize = 5; // Number of items per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState([
//     {
//       id: 1,
//       sampleType: "Petrochemical",
//       productMaterial: "Hydraulic Oil",
//       arNo: "ARPC0000001",
//       genericName: "hyo",
//       specificationCode: "HOS 234",
//       status: "APPROVED",
//     },
//     {
//       id: 2,
//       sampleType: "Petrochemical",
//       productMaterial: "Sacubitril",
//       arNo: "ARPC0000002",
//       genericName: "Polycaprolactone",
//       specificationCode: "RPS-TSLV-00",
//       status: "APPROVED",
//     },
//     {
//       id: 3,
//       sampleType: "Chemical",
//       productMaterial: "Ethanol",
//       arNo: "ARPC0000003",
//       genericName: "ethyl",
//       specificationCode: "ETH-123",
//       status: "INITIATED",
//     },
//     {
//       id: 4,
//       sampleType: "Pharmaceutical",
//       productMaterial: "Aspirin",
//       arNo: "ARPC0000004",
//       genericName: "acetylsalicylic",
//       specificationCode: "ASP-567",
//       status: "REJECTED",
//     },
//     {
//       id: 5,
//       sampleType: "Polymer",
//       productMaterial: "Nylon",
//       arNo: "ARPC0000005",
//       genericName: "polyamide",
//       specificationCode: "NYL-890",
//       status: "APPROVED",
//     },
//     {
//       id: 6,
//       sampleType: "Metal",
//       productMaterial: "Steel",
//       arNo: "ARPC0000006",
//       genericName: "ferrum",
//       specificationCode: "STL-101",
//       status: "REINITIATED",
//     },
//   ]);

//   const startIndex = (currentPage - 1) * pageSize;
//   const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
//   const endIndex = Math.min(startIndex + pageSize, filteredData.length);
//   const nextPage = () => setCurrentPage(currentPage + 1);
//   const prevPage = () => setCurrentPage(currentPage - 1);
//   const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

//   return (
//     <>
//       <div className="m-5 mt-3">
//           <div className="main-head">
//           <h4 className="fw-bold">Investigation Coa</h4>
//           </div>
//           <div>
//             <CRow className="mb-3 mt-5">
//               <CCol sm={2}>
//                 <CFormSelect
//                   options={[
//                     "Ar No.",
//                     { label: "ARPC0000001" },
//                     { label: "ARPC0000002" },
//                     { label: "ARPC0000003" },
//                   ]}
//                   style={{fontSize:'0.9rem'}}
//                 />
//               </CCol>
//               <CCol sm={3}>
//                 <CFormSelect
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   value={selectedStatus} style={{fontSize:'0.9rem'}}
//                   options={[
//                     "All",
//                     { label: "Initiated", value: "INITIATED" },
//                     { label: "Approved", value: "APPROVED" },
//                     { label: "Rejected", value: "REJECTED" },
//                     { label: "Reinitiated", value: "REINITIATED" },
//                     { label: "Dropped", value: "DROPPED" },
//                   ]}
//                 />
//               </CCol>
//             </CRow>
//           </div>
//             <div
//           className=" rounded bg-white"
//           style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
//         >
//             <CTable align="middle" responsive className="  ">
//               <CTableHead>
//                 <CTableRow>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >S NO.</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Sample Type</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Product / Material</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >A.R No.</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Generic Name</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Specification Code</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Status</CTableHeaderCell>
//                   <CTableHeaderCell
//                   style={{ background: "#5D76A9", color: "white"}}
//                   scope="col"
//                 >Actions</CTableHeaderCell>
//                 </CTableRow>
//               </CTableHead>
//               <CTableBody>
//                 {filteredData.slice(startIndex, endIndex).map((item) => (
//                   <CTableRow key={item.id} >
//                     <CTableDataCell>{item.id}</CTableDataCell>
//                     <CTableDataCell>{item.sampleType}</CTableDataCell>
//                     <CTableDataCell>{item.productMaterial}</CTableDataCell>
//                     <CTableDataCell>{item.arNo}</CTableDataCell>
//                     <CTableDataCell>{item.genericName}</CTableDataCell>
//                     <CTableDataCell>{item.specificationCode}</CTableDataCell>
//                     <CTableDataCell>
//                     <button
//                         className={`py-1 px-2 w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
//                           item.status === "INITIATED"
//                             ? "blue-700"
//                             : item.status === "APPROVED"
//                             ? "green-700"
//                             : item.status === "REJECTED"
//                             ? "red-700"
//                             : item.status === "REINITIATED"
//                             ? "yellow-500"
//                             : item.status === "DROPPED"
//                             ? "purple-700"
//                             : "white"
//                         }`} style={{fontSize:'0.6rem'}}
//                       >
//                         {item.status}
//                       </button>
//                     </CTableDataCell>
//                     <CTableDataCell>
//                       <div className="d-flex gap-3">
//                         <Link to="/stability/sample_LoginDetails">
//                           <FontAwesomeIcon icon={faEye} />
//                         </Link>
//                       </div>
//                     </CTableDataCell>
//                   </CTableRow>
//                 ))}
//               </CTableBody>
//             </CTable>
//           </div>

//           <div className="d-flex justify-content-end align-items-center mt-4">
//                         <div className="pagination">
//                             <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
//                                 &lt;&lt;
//                             </button>
//                             <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
//                             <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
//                                 &gt;&gt;
//                             </button>
//                         </div>

//                     </div>
//       </div>
//     </>
//   );
// }

// export default InvestigationCoa;

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
    SampleType: "ST-001",
    ProductMaterial: "COA-001",
    ArNo: "Type 1",
    GenericName: "2024-06-01",
    SpecificationCode: "CH-001",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 2,
    SampleType: "ST-002",
    ProductMaterial: "COA-002",
    ArNo: "Type 2",
    GenericName: "2024-06-02",
    SpecificationCode: "CH-002",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 3,
    SampleType: "ST-003",
    ProductMaterial: "COA-003",
    ArNo: "Type 3",
    GenericName: "2024-06-03",
    SpecificationCode: "CH-003",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 4,
    SampleType: "ST-004",
    ProductMaterial: "COA-004",
    ArNo: "Type 4",
    GenericName: "2024-06-04",
    SpecificationCode: "CH-004",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 5,
    SampleType: "ST-005",
    ProductMaterial: "COA-005",
    ArNo: "Type 5",
    GenericName: "2024-06-05",
    SpecificationCode: "CH-005",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 6,
    SampleType: "ST-006",
    ProductMaterial: "COA-006",
    ArNo: "Type 6",
    GenericName: "2024-06-06",
    SpecificationCode: "CH-006",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    SampleType: "ST-007",
    ProductMaterial: "COA-007",
    ArNo: "Type 7",
    GenericName: "2024-06-07",
    SpecificationCode: "CH-007",
    status: "INITIATED",
  },
];

const InvestigationCoa = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    DROPPED: 0,
    REJECTED: 0,
  });

  useEffect(() => {
    const counts = {
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      DROPPED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
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
      row.SampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Sample Type", accessor: "SampleType" },
    { header: "Product/Material", accessor: "ProductMaterial" },
    { header: "AR NO.", accessor: "ArNo" },
    { header: "Generic Name", accessor: "GenericName" },
    { header: "Specification Code", accessor: "SpecificationCode" },
    { header: "Status", accessor: "status" },

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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Investigation Coa</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "AR NO.", label: "AR NO." },
              { value: "Type 1", label: "Type 1." },
              { value: "Type 2", label: "Type 2" },
              { value: "Type 3", label: "Type 3" },
              { value: "Type 4", label: "Type 4" },
              { value: "Type 5", label: "Type 5" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "APPROVED", label: "APPROVED." },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          {/* <ATMButton text="Add COA Template" color="blue" onClick={openModal} /> */}
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
export default InvestigationCoa;
