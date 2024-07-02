

// const StatusModal = (_props) => {
//   return (
//     <>
//       <CModal
//         alignment="center"
//         visible={_props.visible}
//         onClose={_props.closeModal}
//       >
//         <CModalHeader>
//           <CModalTitle>Add Worksheet Fields</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CFormInput
//             type="text"
//             label="Name"
//             placeholder="WorkSheet Field Name "
//           />

//           <CFormSelect
//             type="text"
//             label="Binds To"
//             placeholder="Select..."
//             options={[
//               "Select...",
//               { label: "HCL" },
//               { label: "Hydrochrolic Acid" },
//               { label: "Petrochemical" },
//               { label: "Initial Product" },
//             ]}
//           />

//           <CFormInput
//             type="text"
//             label="Description"
//             placeholder="Description"
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={_props.closeModal}>
//             Back
//           </CButton>
//           <CButton className="bg-info text-white">Add Field</CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };




import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faPenToSquare,faTrashCan,} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
     {
       checkbox: false,
       sno: 1,
       WorksheetField: "BA-001",
       SampleTypeName: "Associate 1",
       Description: "City A",
       AddedOn: "State A",
       status: "DROPPED",
     },
     {
       checkbox: false,
       sno: 2,
       WorksheetField: "BA-002",
       SampleTypeName: "Associate 2",
       Description: "City B",
       AddedOn: "State B",
       status: "INITIATED",
     },
     {
       checkbox: false,
       sno: 3,
       WorksheetField: "BA-003",
       SampleTypeName: "Associate 3",
       Description: "City C",
       AddedOn: "State C",
       status: "REINITIATED",
     },
     {
       checkbox: false,
       sno: 4,
       WorksheetField: "BA-004",
       SampleTypeName: "Associate 4",
       Description: "City D",
       AddedOn: "State D",
       status: "APPROVED",
     },
     {
       checkbox: false,
       sno: 5,
       WorksheetField: "BA-005",
       SampleTypeName: "Associate 5",
       Description: "City E",
       AddedOn: "State E",
       status: "REJECTED",
     },
     {
       checkbox: false,
       sno: 6,
       WorksheetField: "BA-006",
       SampleTypeName: "Associate 6",
       Description: "City F",
       AddedOn: "State F",
       status: "DROPPED",
     },
     {
       checkbox: false,
       sno: 7,
       WorksheetField: "BA-007",
       SampleTypeName: "Associate 7",
       Description: "City G",
       AddedOn: "State G",
       status: "INITIATED",
     },
     {
       checkbox: false,
       sno: 8,
       WorksheetField: "BA-008",
       SampleTypeName: "Associate 8",
       Description: "City H",
       AddedOn: "State H",
       status: "REINITIATED",
     },
   ];
   


const WorkSheetField = () => {
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
      row.SampleTypeName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Worksheet Field", accessor: "WorksheetField" },
    { header: "Sample_type Name", accessor: "SampleTypeName" },
    { header: "Description", accessor: "Description" },
    { header: "Added On", accessor: "AddedOn" },
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
      <h1 className="text-2xl font-bold mb-4">Worksheet Fields</h1>
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
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
        <div className="float-right">
          <ATMButton text="Add Worksheet Fields" color="blue" onClick={openModal} />
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

export default WorkSheetField;
