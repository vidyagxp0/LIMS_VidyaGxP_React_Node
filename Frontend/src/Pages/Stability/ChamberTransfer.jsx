// import { useState } from "react";
// import {
//   CButton,
//   CFormInput,
//   CFormSelect,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
// } from "@coreui/react";
// import {
//   faEye,
//   faPenToSquare,
//   faTrashCan,
// } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import { Link } from "react-router-dom";
// import ImportModal from "../Modals/importModal";
// import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
// import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
// import Table from "../../components/ATM components/Table/Table";
// import ViewModal from "../Modals/ViewModal";
// import ATMButton from "../../components/ATM components/Button/ATMButton";
// const initialData = [
//   {
//     checkbox: false,
//     sno: 1,
//     conditionCode: "C001",
//     stabilityCondition: "25°C/60% RH",
//     description: "Standard storage condition",
//     status: "INITIATED",
//   },
//   {
//     checkbox: false,
//     sno: 2,
//     conditionCode: "C002",
//     stabilityCondition: "30°C/65% RH",
//     description: "Accelerated storage condition",
//     status: "INITIATED",
//   },
//   {
//     checkbox: false,
//     sno: 3,
//     conditionCode: "C003",
//     stabilityCondition: "40°C/75% RH",
//     description: "Stress storage condition",
//     status: "INITIATED",
//   },
//   {
//     checkbox: false,
//     sno: 4,
//     conditionCode: "C004",
//     stabilityCondition: "5°C",
//     description: "Cold storage condition",
//     status: "INITIATED",
//   },
//   {
//     checkbox: false,
//     sno: 5,
//     conditionCode: "C005",
//     stabilityCondition: "-20°C",
//     description: "Frozen storage condition",
//     status: "INITIATED",
//   },
// ];
// function ChamberTransfer() {
//   const [data, setData] = useState(initialData);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [viewModalData, setViewModalData] = useState(null);
//   const [isModalsOpen, setIsModalsOpen] = useState(false);

//   const handleOpenModals = () => {
//     setIsModalsOpen(true);
//   };

//   const handleCloseModals = () => {
//     setIsModalsOpen(false);
//   };
//   const handleSelectAll = (e) => {
//     const checked = e.target.checked;
//     const newData = data.map((row) => ({ ...row, checkbox: checked }));
//     setData(newData);
//   };

//   const filteredData = data.filter((row) => {
//     return (
//       row.conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (statusFilter === "All" || row.status === statusFilter)
//     );
//   });

//   const onViewDetails = (rowData) => {
//     setViewModalData(rowData);
//   };

//   const handleCheckboxChange = (index) => {
//     const newData = [...data];
//     newData[index].checkbox = !newData[index].checkbox;
//     setData(newData);
//   };


//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const closeViewModal = () => {
//     setViewModalData(false);
//   };

//   const handleDelete = (item) => {
//     const newData = data.filter((d) => d !== item);
//     setData(newData);
//     console.log("Deleted item:", item);
//   };
//   const StatusModal = (_props) => {
//     return (
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Stability Chamber Transfer</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CModalTitle className="mb-3">From</CModalTitle>
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Chamber ID"
//             placeholder="Chamber Id "
//           />
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Storage Condition"
//             placeholder=" Storage Condition "
//           />

//           <CModalTitle className="mb-3">To</CModalTitle>
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Chamber ID"
//             placeholder="Chamber Id "
//           />
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Storage Condition"
//             placeholder="Storage Condition "
//           />

//           <CFormSelect
//             className="mb-3"
//             type="select"
//             label="Product"
//             options={[
//               "Select...",
//               { label: "Glass" },
//               { label: "Hydraulic Oil" },
//               { label: "chpoil" },
//               { label: "Feliconar" },
//               { label: "Sacubitril" },
//               { label: "Testamine" },
//             ]}
//             placeholder=" "
//           />
//           <CFormSelect
//             className="mb-3"
//             type="select"
//             label="Protocol"
//             options={[
//               "Select...",
//               { label: "asd3454" },
//               { label: "STB2" },
//               { label: "Btc1P" },
//               { label: "Stab7654" },
//             ]}
//             placeholder=" "
//           />
//           <div className="d-flex justify-content-end">
//             <CButton className="bg-info text-white mb-3">Display</CButton>
//           </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Back
//           </CButton>
//           <CButton className="bg-info text-white">Submit</CButton>
//         </CModalFooter>
//       </CModal>
//     );
//   };

//   const handleExcelDataUpload = (excelData) => {
//     const updatedData = excelData.map((item, index) => ({
//       checkbox: false,
//       sno: index + 1,
//       conditionCode: item["Condition Code"] || "",
//       stabilityCondition: item["Stability Condition"] || "",
//       description: item["Description"] || "",
//       status: item["Status"] || "INITIATED",
//     }));
  
//     const concatenateData = [...data, ...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
//     setIsImportModalOpen(false); // Close the import modal after data upload
//   };
  

//   return (
//     <>
//       <div className="m-5 mt-3">
//         <div className="main-head">
//           <h4 className="fw-bold">Chamber Transfer</h4>
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <div className="flex space-x-4">
//             <SearchBar value={searchQuery} onChange={setSearchQuery} />
//             <Dropdown
//               options={[
//                 { value: "All", label: "All" },
//                 { value: "Active", label: "Active" },
//                 { value: "Inactive", label: "Inactive" },
//               ]}
//               value={statusFilter}
//               onChange={setStatusFilter}
//             />
//           </div>
//           <div className="float-right flex gap-4">
//             <ATMButton 
//             text="Import"
//             color='pink'
//             onClick={handleOpenModals}
            
//              />
//             <ATMButton
//               text="Add Chamber Transfer"
//               color="blue"
//               onClick={openModal}
//             />
//           </div>
//         </div>
//         <Table
//           columns={columns}
//           data={filteredData}
//           onCheckboxChange={handleCheckboxChange}
//           onViewDetails={onViewDetails}
//           onDelete={handleDelete}
//         />
//       </div>

//       {isModalOpen && (
//         <StatusModal visible={isModalOpen} closeModal={closeModal} />
//       )}
//       {viewModalData && (
//         <ViewModal visible={viewModalData} closeModal={closeViewModal} />
//       )}
//        {isModalsOpen && (
//         <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
//       )}
//     </>
//   );
// }

// export default ChamberTransfer;
