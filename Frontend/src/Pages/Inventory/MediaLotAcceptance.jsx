

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
import MediaLotAcceptanceModal from "../Modals/MediaLotAcceptanceModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MediaName: "Agar Plate 001",
    MediaLotNo: "100",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "Nutrient Agar",
    AddedOn: "01-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaName: "Agar Plate 002",
    MediaLotNo: "101",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "MacConkey Agar",
    AddedOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    MediaName: "Agar Plate 003",
    MediaLotNo: "102",
    LotBatchNo: "30",
    ModeOfPreparation: "Sterilized",
    Sample: "Blood Agar",
    AddedOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    MediaName: "Agar Plate 004",
    MediaLotNo: "103",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "Sabouraud Dextrose Agar",
    AddedOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    MediaName: "Agar Plate 005",
    MediaLotNo: "104",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "Mannitol Salt Agar",
    AddedOn: "05-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaName: "Agar Plate 006",
    MediaLotNo: "105",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "Chocolate Agar",
    AddedOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    MediaName: "Agar Plate 007",
    MediaLotNo: "106",
    LotBatchNo: "30",
    ModeOfPreparation: "Autoclaved",
    Sample: "Cetrimide Agar",
    AddedOn: "07-07-2024",
    status: "Active",
  },
];

const MediaLotAcceptance = () => {
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

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.MediaName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      MediaLotNo: item["Media Name"] || "",
      MediaLotNo: item["Media Lot No."] || "",
      LotBatchNo: item["Lot Batch No."] || "",
      ModeOfPreparation: item["Mode Of Preparation"] || "",
      Sample: item["Sample"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Media Name", accessor: "MediaName" },
    { header: "Media Lot No.", accessor: "MediaLotNo" },
    { header: "Lot Batch No.", accessor: "LotBatchNo" },
    { header: "Mode Of Preparation", accessor: "ModeOfPreparation" },
    { header: "Sample", accessor: "Sample" },
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
      <h1 className="text-2xl font-bold mb-4">Media Lot Acceptance</h1>

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
          <ATMButton
            text="Media Lot Acceptance"
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
      <MediaLotAcceptanceModal
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

export default MediaLotAcceptance;
