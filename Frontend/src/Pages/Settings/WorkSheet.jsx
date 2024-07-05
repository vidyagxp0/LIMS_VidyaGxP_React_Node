
import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faPenToSquare,faTrashCan,} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import WorkSheetModal from "../Modals/WorkSheetModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    SequenceNumber: "Associate 1",
    WorksheetName: "BA-001",
    ProductName: "City A",
    GtpNumber: "State A",
    MethodValidationNo: "Country A",
    StandardPreparation: "12345",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    SequenceNumber: "Associate 2",
    WorksheetName: "BA-002",
    ProductName: "City B",
    GtpNumber: "State B",
    MethodValidationNo: "Country B",
    StandardPreparation: "23456",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    SequenceNumber: "Associate 3",
    WorksheetName: "BA-003",
    ProductName: "City C",
    GtpNumber: "State C",
    MethodValidationNo: "Country C",
    StandardPreparation: "34567",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    SequenceNumber: "Associate 4",
    WorksheetName: "BA-004",
    ProductName: "City D",
    GtpNumber: "State D",
    MethodValidationNo: "Country D",
    StandardPreparation: "45678",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    SequenceNumber: "Associate 5",
    WorksheetName: "BA-005",
    ProductName: "City E",
    GtpNumber: "State E",
    MethodValidationNo: "Country E",
    StandardPreparation: "56789",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    SequenceNumber: "Associate 6",
    WorksheetName: "BA-006",
    ProductName: "City F",
    GtpNumber: "State F",
    MethodValidationNo: "Country F",
    StandardPreparation: "67890",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    SequenceNumber: "Associate 7",
    WorksheetName: "BA-007",
    ProductName: "City G",
    GtpNumber: "State G",
    MethodValidationNo: "Country G",
    StandardPreparation: "78901",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    SequenceNumber: "Associate 8",
    WorksheetName: "BA-008",
    ProductName: "City H",
    GtpNumber: "State H",
    MethodValidationNo: "Country H",
    StandardPreparation: "89012",
    status: "REINITIATED",
  },
];



const WorkSheet = () => {
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
      row.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      sno: data.length + index + 1,
      SequenceNumber: item["Sequence Number"] || "",
      WorksheetName: item["Worksheet Name"] || "",
      ProductName: item["Product Name"] || "",
      GtpNumber: item["Gtp Number"] || "",
      MethodValidationNo: item["Method Validaion No."] || "",
      StandardPreparation: item["Standard Preparation"] || "",
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
    { header: "Sequence Number", accessor: "SequenceNumber" },
    { header: "Worksheet Name", accessor: "WorksheetName" },
    { header: "Product Name", accessor: "ProductName" },
    { header: "Gtp Number", accessor: "GtpNumber" },
    { header: "Method Validaion No.", accessor: "MethodValidationNo" },
    { header: "Standard Preparation", accessor: "StandardPreparation" },
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
      <h1 className="text-2xl font-bold mb-4">Worksheets</h1>
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
        <div className="float-right flex gap-4">
        <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add Worksheet" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <WorkSheetModal
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

export default WorkSheet;
