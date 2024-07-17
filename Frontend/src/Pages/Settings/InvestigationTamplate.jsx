

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
import ImportModal from "../Modals/importModal.jsx";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    TemplateName: "BA-001",
    UniqueCode: "Associate 1",
    NoOfAnalystSection: "City A",
    NoOfSupervisorSection: "State A",
    UpdatedAt: "DROPPED",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    TemplateName: "BA-002",
    UniqueCode: "Associate 2",
    NoOfAnalystSection: "City B",
    NoOfSupervisorSection: "State B",
    UpdatedAt: "INITIATED",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    TemplateName: "BA-003",
    UniqueCode: "Associate 3",
    NoOfAnalystSection: "City C",
    NoOfSupervisorSection: "State C",
    UpdatedAt: "REINITIATED",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    TemplateName: "BA-004",
    UniqueCode: "Associate 4",
    NoOfAnalystSection: "City D",
    NoOfSupervisorSection: "State D",
    UpdatedAt: "APPROVED",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    TemplateName: "BA-005",
    UniqueCode: "Associate 5",
    NoOfAnalystSection: "City E",
    NoOfSupervisorSection: "State E",
    UpdatedAt: "REJECTED",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    TemplateName: "BA-006",
    UniqueCode: "Associate 6",
    NoOfAnalystSection: "City F",
    NoOfSupervisorSection: "State F",
    UpdatedAt: "DROPPED",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    TemplateName: "BA-007",
    UniqueCode: "Associate 7",
    NoOfAnalystSection: "City G",
    NoOfSupervisorSection: "State G",
    UpdatedAt: "INITIATED",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    TemplateName: "BA-008",
    UniqueCode: "Associate 8",
    NoOfAnalystSection: "City H",
    NoOfSupervisorSection: "State H",
    UpdatedAt: "REINITIATED",
    status: "REINITIATED",
  },
];

   


const InvestigationTamplate = () => {
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
      row.NoOfAnalystSection.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData); 
    setIsViewModalOpen(true); 
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      NoOfAnalystSection: item["TempNO. Of Analyst Section"] || "",
      NoOfSupervisorSection: item["No. Of Supervisor Section"] || "",
      UpdatedAt: item["Updated At"] || "",
        status: item["Status"] || "",
      }));

      const concatenateData = [...updatedData];
      setData(concatenateData); // Update data state with parsed Excel data
      setIsModalsOpen(false); // Close the import modal after data upload
    };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "TempNO. Of Analyst Section", accessor: "NoOfAnalystSection" },
    { header: "No. Of Supervisor Section", accessor: "NoOfSupervisorSection" },
    { header: "Updated At", accessor: "UpdatedAt" },
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
      <h1 className="text-2xl font-bold mb-4">Investigation Template</h1>
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
        <PDFDownload columns={columns} data={initialData} fileName="Investigation_Template.pdf" title="Investigation Template Data" />
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          {/* <ATMButton text="Add Worksheet Fields" color="blue" onClick={openModal} /> */}
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
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default InvestigationTamplate;
