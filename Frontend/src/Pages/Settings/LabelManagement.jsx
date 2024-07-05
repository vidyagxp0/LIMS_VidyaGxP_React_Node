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
import LabelManagemantModal from "../Modals/LabelManagemantModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    LabelName: "Associate 1",
    UniqueCode: "BA-001",
    City: "City A",
    State: "State A",
    Country: "Country A",
    ZipCode: "12345",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    LabelName: "Associate 2",
    UniqueCode: "BA-002",
    City: "City B",
    State: "State B",
    Country: "Country B",
    ZipCode: "23456",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    LabelName: "Associate 3",
    UniqueCode: "BA-003",
    City: "City C",
    State: "State C",
    Country: "Country C",
    ZipCode: "34567",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    LabelName: "Associate 4",
    UniqueCode: "BA-004",
    City: "City D",
    State: "State D",
    Country: "Country D",
    ZipCode: "45678",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    LabelName: "Associate 5",
    UniqueCode: "BA-005",
    City: "City E",
    State: "State E",
    Country: "Country E",
    ZipCode: "56789",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    LabelName: "Associate 6",
    UniqueCode: "BA-006",
    City: "City F",
    State: "State F",
    Country: "Country F",
    ZipCode: "67890",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    LabelName: "Associate 7",
    UniqueCode: "BA-007",
    City: "City G",
    State: "State G",
    Country: "Country G",
    ZipCode: "78901",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    LabelName: "Associate 8",
    UniqueCode: "BA-008",
    City: "City H",
    State: "State H",
    Country: "Country H",
    ZipCode: "89012",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    LabelName: "Associate 9",
    UniqueCode: "BA-009",
    City: "City I",
    State: "State I",
    Country: "Country I",
    ZipCode: "90123",
    status: "APPROVED",
  },
];

const LabelManagement = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      row.LabelName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      LabelName: item["Label Name"] || "",
      UniqueCode: item["Unique Code"] || "",
      City: item["City"] || "",
      State: item["state"] || "",
      Country: item["Country"] || "",
      ZipCode: item["Zip Code"] || "",
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
    { header: "Label Name", accessor: "LabelName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "City", accessor: "City" },
    { header: "State", accessor: "State" },
    { header: "Country", accessor: "Country" },
    { header: "Zip Code", accessor: "ZipCode" },
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
      <h1 className="text-2xl font-bold mb-4">Label Management</h1>
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

          <ATMButton text="Add Label" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <LabelManagemantModal visible={isModalOpen} closeModal={closeModal} />
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

export default LabelManagement;
