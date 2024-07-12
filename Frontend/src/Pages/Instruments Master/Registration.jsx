/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import InstrumentMasterModal from "../Modals/InstrumentMasterModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Category: "Product 1",
    InstrumentId: "Seq 1",
    Instrument: "Info 1",
    Made: "Start 1",
    Model: "Model 1",
    ManuNo: "Manu 1",
    InstalledAt: "Location 1",
    ExpiryOn: "2024-12-31",
    status: "DROPPED",
    CalibrationStatus: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    Category: "Product 2",
    InstrumentId: "Seq 2",
    Instrument: "Info 2",
    Made: "Start 2",
    Model: "Model 2",
    ManuNo: "Manu 2",
    InstalledAt: "Location 2",
    ExpiryOn: "2025-01-15",
    status: "INITIATED",
    CalibrationStatus: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    Category: "Product 3",
    InstrumentId: "Seq 3",
    Instrument: "Info 3",
    Made: "Start 3",
    Model: "Model 3",
    ManuNo: "Manu 3",
    InstalledAt: "Location 3",
    ExpiryOn: "2024-11-20",
    status: "REINITIATED",
    CalibrationStatus: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    Category: "Product 4",
    InstrumentId: "Seq 4",
    Instrument: "Info 4",
    Made: "Start 4",
    Model: "Model 4",
    ManuNo: "Manu 4",
    InstalledAt: "Location 4",
    ExpiryOn: "2025-02-10",
    status: "APPROVED",
    CalibrationStatus: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    Category: "Product 5",
    InstrumentId: "Seq 5",
    Instrument: "Info 5",
    Made: "Start 5",
    Model: "Model 5",
    ManuNo: "Manu 5",
    InstalledAt: "Location 5",
    ExpiryOn: "2024-10-05",
    status: "REJECTED",
    CalibrationStatus: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    Category: "Product 6",
    InstrumentId: "Seq 6",
    Instrument: "Info 6",
    Made: "Start 6",
    Model: "Model 6",
    ManuNo: "Manu 6",
    InstalledAt: "Location 6",
    ExpiryOn: "2025-03-15",
    status: "DROPPED",
    CalibrationStatus: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    Category: "Product 7",
    InstrumentId: "Seq 7",
    Instrument: "Info 7",
    Made: "Start 7",
    Model: "Model 7",
    ManuNo: "Manu 7",
    InstalledAt: "Location 7",
    ExpiryOn: "2025-04-30",
    status: "INITIATED",
    CalibrationStatus: "Active",
  },
];

const Registration = () => {
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
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.CalibrationStatus === "Active") counts.Active++;
      else if (item.CalibrationStatus === "Inactive") counts.Inactive++;
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
      row.Category.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Category", accessor: "Category" },
    { header: "Instrument Id", accessor: "InstrumentId" },
    { header: "Instrument", accessor: "Instrument" },
    { header: "Made", accessor: "Made" },
    { header: "Model", accessor: "Model" },
    { header: "Manu No.", accessor: "ManuNo" },
    { header: "Installed At", accessor: "InstalledAt" },
    { header: "Expiry On", accessor: "ExpiryOn" },
    { header: "Status", accessor: "status" },
    {
      header: "Calibration Status",
      accessor: "CalibrationStatus",
      Cell: ({ value }) => (
        <span
          style={{
            backgroundColor: value === "Active" ? "green" : "red",
            color: "white",
            padding: "0.25em 0.5em",
            borderRadius: "4px",
          }}
        >
          {value}
        </span>
      ),
    },
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
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      Category: item["Category"] || "",
      InstrumentId: item["Instrument Id"] || "",
      Instrument: item["Instrument"] || "",
      Made: item["Made"] || "",
      Model: item["Model"] || "",
      ManuNo: item["Manu No."] || "",
      InstalledAt: item["Installed At"] || "",
      ExpiryOn: item["Expiry On"] || "",
      status: item["Status"] || "",
      CalibrationStatus: item["Calibration Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false); // Update data state with parsed Excel data
  };
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Instrument Registration</h1>

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
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
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
          <ATMButton
            text="Instrument Registration"
            color="blue"
            onClick={openModal}
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InstrumentMasterModal
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

export default Registration;
