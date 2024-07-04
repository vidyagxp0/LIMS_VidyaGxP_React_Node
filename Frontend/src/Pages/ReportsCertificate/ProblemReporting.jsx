

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
import ProblemReportingModal from "../Modals/ProblemReportingModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";

const initialData = [
    {
      checkbox: false,
      sno: 1,
      Instrument: "INST-001",
      InstrumentCategory: "Cat-001",
      SuppliedBy: "Supplier A",
      ProblemId: "PRB-001",
      ProblemInBrief: "Brief description 1",
      ProblemInDetails: "Detailed description 1",
      OccuredOn: "2024-06-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      Instrument: "INST-002",
      InstrumentCategory: "Cat-002",
      SuppliedBy: "Supplier B",
      ProblemId: "PRB-002",
      ProblemInBrief: "Brief description 2",
      ProblemInDetails: "Detailed description 2",
      OccuredOn: "2024-06-02",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      Instrument: "INST-003",
      InstrumentCategory: "Cat-003",
      SuppliedBy: "Supplier C",
      ProblemId: "PRB-003",
      ProblemInBrief: "Brief description 3",
      ProblemInDetails: "Detailed description 3",
      OccuredOn: "2024-06-03",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      Instrument: "INST-004",
      InstrumentCategory: "Cat-004",
      SuppliedBy: "Supplier D",
      ProblemId: "PRB-004",
      ProblemInBrief: "Brief description 4",
      ProblemInDetails: "Detailed description 4",
      OccuredOn: "2024-06-04",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      Instrument: "INST-005",
      InstrumentCategory: "Cat-005",
      SuppliedBy: "Supplier E",
      ProblemId: "PRB-005",
      ProblemInBrief: "Brief description 5",
      ProblemInDetails: "Detailed description 5",
      OccuredOn: "2024-06-05",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      Instrument: "INST-006",
      InstrumentCategory: "Cat-006",
      SuppliedBy: "Supplier F",
      ProblemId: "PRB-006",
      ProblemInBrief: "Brief description 6",
      ProblemInDetails: "Detailed description 6",
      OccuredOn: "2024-06-06",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      Instrument: "INST-007",
      InstrumentCategory: "Cat-007",
      SuppliedBy: "Supplier G",
      ProblemId: "PRB-007",
      ProblemInBrief: "Brief description 7",
      ProblemInDetails: "Detailed description 7",
      OccuredOn: "2024-06-07",
      status: "Active",
    },
  ];
  
const ProblemReporting = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
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
      row.Instrument.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Instrument", accessor: "Instrument" },
    { header: "Instrument Category", accessor: "InstrumentCategory" },
    { header: "Supplied By", accessor: "SuppliedBy" },
    { header: "Problem ID", accessor: "ProblemId" },
    { header: "Problem In Details", accessor: "ProblemInDetails" },
    { header: "Occured On", accessor: "OccuredOn" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: initialData.length + index + 1,
      instrument: item["Instrument"] || "",
      instrumentCategory: item["Instrument Category"] || "",
      suppliedBy: item["Supplied By"] || "",
      problemId: item["Problem ID"] || "",
      problemInDetails: item["Problem In Details"] || "",
      occurredOn: item["Occurred On"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...data, ...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
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
      <h1 className="text-2xl font-bold mb-4">Problem Reporting</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
          <ATMButton text="Add Problem" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <ProblemReportingModal
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
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};
export default ProblemReporting;
