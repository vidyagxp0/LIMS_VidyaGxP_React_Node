// const StatusModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//     >
//       <CModalHeader>
//         <CModalTitle>Add Calibration Data Sheet</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <CFormInput
//           label="Name"
//           className="mb-3"
//           type="text"
//           placeholder="Name"
//         />
//         <CFormInput
//           label="Unique code"
//           className="mb-3"
//           type="text"
//           placeholder=""
//         />
//         <div style={{ margin: "15px 0px" }}>
//           <label>
//             {" "}
//             Quantitative Parameters &nbsp;
//             <input type="checkbox" onChange={handleCheckboxChange} />
//           </label>
//           {showAdditionalFields && (
//             <>
//               <br />
//               <label>No. of Quantitative Parameters</label>
//               <input
//                 style={{ width: "80%" }}
//                 className="line4"
//                 type="text"
//                 placeholder="No. of Quantitative Parameters"
//               />
//               <button
//                 style={{
//                   backgroundColor: "#0f93c3",
//                   borderRadius: "4px",
//                   border: "1px solid #0f93c3",
//                   color: "white",
//                   padding: "2px 8px",
//                 }}
//               >
//                 Add
//               </button>

//               <label>Parameters and No. of Set Points</label>
//               <input
//                 style={{ width: "80%" }}
//                 className="line4"
//                 type="text"
//                 placeholder="Parameters and No. of Set Points"
//               />
//               <button
//                 style={{
//                   backgroundColor: "#0f93c3",
//                   borderRadius: "4px",
//                   border: "1px solid #0f93c3",
//                   color: "white",
//                   padding: "2px 8px",
//                 }}
//               >
//                 Set
//               </button>
//             </>
//           )}
//           <br />
//           <label style={{ padding: "7px 0px", marginTop: "3px" }}>
//             Qualitative Parameter &nbsp;
//             <input type="checkbox" onChange={handleCheckboxChange2} />
//           </label>
//           {showAdditionalFields2 && (
//             <>
//               <br />
//               <label>No. of Qualitative Parameters</label>
//               <input
//                 style={{ width: "240px" }}
//                 className="line4"
//                 type="text"
//                 placeholder="No. of Qualitative Parameters"
//               />
//               <button
//                 style={{
//                   backgroundColor: "#0f93c3",
//                   borderRadius: "4px",
//                   border: "1px solid #0f93c3",
//                   color: "white",
//                   padding: "2px 8px",
//                 }}
//               >
//                 Add
//               </button>
//             </>
//           )}
//           <br />
//         </div>

//         <div className="d-flex gap-3 mt-4">
//           <CButton color="light w-50" onClick={_props.closeModal}>
//             &lt; Back
//           </CButton>
//           <CButton color="primary w-50">Submit</CButton>
//         </div>
//       </CModalBody>
//     </CModal>
//   );
// };

// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle>Delete User</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Are you sure you want to delete this Data sheet name?</p>
//       </CModalBody>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.confirmDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Uniquecode: "Product 1",
    DataSheetName: "Seq 1",
    QuantitativeParameters: "Info 1",
    QualitativeParameters: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    Uniquecode: "Product 2",
    DataSheetName: "Seq 2",
    QuantitativeParameters: "Info 2",
    QualitativeParameters: "Start 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    Uniquecode: "Product 3",
    DataSheetName: "Seq 3",
    QuantitativeParameters: "Info 3",
    QualitativeParameters: "Start 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    Uniquecode: "Product 4",
    DataSheetName: "Seq 4",
    QuantitativeParameters: "Info 4",
    QualitativeParameters: "Start 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    Uniquecode: "Product 5",
    DataSheetName: "Seq 5",
    QuantitativeParameters: "Info 5",
    QualitativeParameters: "Start 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    Uniquecode: "Product 6",
    DataSheetName: "Seq 6",
    QuantitativeParameters: "Info 6",
    QualitativeParameters: "Start 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    Uniquecode: "Product 7",
    DataSheetName: "Seq 7",
    QuantitativeParameters: "Info 7",
    QualitativeParameters: "Start 7",
    status: "INITIATED",
  },
];


const CalibrationDataSheet = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
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
      row.DataSheetName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Unique code", accessor: "Uniquecode" },
    { header: "DataSheetName", accessor: "DataSheetName" },
    { header: "Quantitative Parameters", accessor: "QuantitativeParameters" },
    { header: "Qualitative Parameters", accessor: "QualitativeParameters" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      Uniquecode: item["Unique code"] || "",
      DataSheetName: item["DataSheetName"] || "",
      QuantitativeParameters: item["Quantitative Parameters"] || "",
      QualitativeParameters: item["Qualitative Parameters"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calibration Data Sheets</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
            
             />
          <ATMButton text="Add DataSheet" color="blue" onClick={openModal} />
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
      {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

export default CalibrationDataSheet;
