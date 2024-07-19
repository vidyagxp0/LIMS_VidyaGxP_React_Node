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
import LocationModal from "../Modals/LocationModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    PlantName: "Plant-001",
    Facility: "Production Line A",
    Location: "Main Building, Floor 1",
    Prefix: "PLA",
    LocationTypeId: "Building-001",
    AddedOn: "13-06-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    PlantName: "Plant-002",
    Facility: "Warehouse B",
    Location: "Warehouse Area, Block C",
    Prefix: "WHB",
    LocationTypeId: "Warehouse-001",
    AddedOn: "14-06-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    PlantName: "Plant-003",
    Facility: "Research Lab C",
    Location: "Research Building, Lab 1",
    Prefix: "RLC",
    LocationTypeId: "Lab-001",
    AddedOn: "15-06-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    PlantName: "Plant-004",
    Facility: "Assembly Line D",
    Location: "Assembly Area, Section 2",
    Prefix: "ALD",
    LocationTypeId: "Assembly-001",
    AddedOn: "16-06-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    PlantName: "Plant-005",
    Facility: "Processing Unit E",
    Location: "Processing Facility, Unit 3",
    Prefix: "PUE",
    LocationTypeId: "Processing-001",
    AddedOn: "17-06-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    PlantName: "Plant-006",
    Facility: "Distribution Center F",
    Location: "Distribution Area, Block D",
    Prefix: "DCF",
    LocationTypeId: "Distribution-001",
    AddedOn: "18-06-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    PlantName: "Plant-007",
    Facility: "Testing Facility G",
    Location: "Testing Building, Lab 2",
    Prefix: "TFG",
    LocationTypeId: "Testing-001",
    AddedOn: "19-06-2024",
    status: "Active",
  },
];

const Location = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
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
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });

    setCardCounts(counts);
  }, [data]);

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
      row.PlantName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      sno: index + 1,
      PlantName: item["Plant Name"] || "",
      Facility: item["Facility"] || "",
      Location: item["Location"] || "",
      Prefix: item["Prefix"] || "",
      LocationTypeId: item["Location Type Id"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Plant Name", accessor: "PlantName" },
    { header: "Facility", accessor: "Facility" },
    { header: "Location", accessor: "Location" },
    { header: "Prefix", accessor: "Prefix" },
    { header: "Location Type Id", accessor: "LocationTypeId" },
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
      <h1 className="text-2xl font-bold mb-4">Locations</h1>

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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Location" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <LocationModal visible={isModalOpen} closeModal={closeModal} />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};
export default Location;
