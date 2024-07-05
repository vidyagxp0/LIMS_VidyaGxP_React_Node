


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
import MediaLotUsageModal from "../Modals/MediaLotUsageModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MediaName: "Agar Plate 001",
    BatchNo: "100",
    UsageType: "General microbiological work",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "01-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaName: "Agar Plate 002",
    BatchNo: "101",
    UsageType: "Enteric bacteria isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    MediaName: "Agar Plate 003",
    BatchNo: "102",
    UsageType: "Fastidious organisms",
    ContainerNo: "Petri Dish",
    CollectionType: "Sterilized",
    AddedOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    MediaName: "Agar Plate 004",
    BatchNo: "103",
    UsageType: "Fungal isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    MediaName: "Agar Plate 005",
    BatchNo: "104",
    UsageType: "Staphylococci isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "05-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaName: "Agar Plate 006",
    BatchNo: "105",
    UsageType: "Fastidious bacteria",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    MediaName: "Agar Plate 007",
    BatchNo: "106",
    UsageType: "Pseudomonas aeruginosa isolation",
    ContainerNo: "Petri Dish",
    CollectionType: "Autoclaved",
    AddedOn: "07-07-2024",
    status: "Active",
  },
];

const MediaLotUsage = () => {
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
      MediaName: item["Media Name"] || "",
      BatchNo: item["Batch No."] || "",
      UsageType: item["Usage Type"] || "",
      ContainerNo: item["Container No."] || "",
      CollectionType: item["Collection Type"] || "",
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
    { header: "Batch No.", accessor: "BatchNo" },
    { header: "Usage Type", accessor: "UsageType" },
    { header: "Container No.", accessor: "ContainerNo" },
    { header: "Collection Type", accessor: "CollectionType" },
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
      <h1 className="text-2xl font-bold mb-4">Media Lot Usage</h1>

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
          <ATMButton text="Media Lot Usage" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <MediaLotUsageModal
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

export default MediaLotUsage;
