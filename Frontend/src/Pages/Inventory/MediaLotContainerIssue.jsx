
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
import MediaLotContainerIssueModal from "../Modals/MediaLotContainerIssueModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    MediaContainerNo: "Agar Plate 001",
    ContainerQty: "100",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "01-07-2024",
    AddedOn: "01-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    MediaContainerNo: "Agar Plate 002",
    ContainerQty: "150",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "02-07-2024",
    AddedOn: "02-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 3,
    MediaContainerNo: "Agar Plate 003",
    ContainerQty: "120",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "03-07-2024",
    AddedOn: "03-07-2024",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 4,
    MediaContainerNo: "Agar Plate 004",
    ContainerQty: "80",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "04-07-2024",
    AddedOn: "04-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 5,
    MediaContainerNo: "Agar Plate 005",
    ContainerQty: "90",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "05-07-2024",
    AddedOn: "05-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    MediaContainerNo: "Agar Plate 006",
    ContainerQty: "70",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "06-07-2024",
    AddedOn: "06-07-2024",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 7,
    MediaContainerNo: "Agar Plate 007",
    ContainerQty: "110",
    ContainerValidityPeriodDays: "30",
    ContainerValidUpto: "31-07-2024",
    LotValidUpto: "07-07-2024",
    AddedOn: "07-07-2024",
    status: "Active",
  },
];

const MediaLotContainersIssue = () => {
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
      row.MediaContainerNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      MediaContainerNo: item["Media Container No."] || "",
      ContainerQty: item["Container Qty"] || "",
      ContainerValidityPeriodDays: item["Container Validity Period Days(s)"] || "",
      ContainerValidUpto: item["Container Valid Upto"] || "",
      LotValidUpto: item["Lot Valid Upto"] || "",
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
    { header: "Media Container No.", accessor: "MediaContainerNo" },
    { header: "Container Qty", accessor: "ContainerQty" },
    {
      header: "Container Validity Period Day(s)",
      accessor: "ContainerValidityPeriodDays",
    },
    { header: "Container Valid Upto", accessor: "ContainerValidUpto" },
    { header: "Lot Valid Upto", accessor: "LotValidUpto" },
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
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Media Lot Containers Issue</h1>

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
            text="Media Lot Containers Issue"
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
      <MediaLotContainerIssueModal
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
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div></>
  );
};

export default MediaLotContainersIssue;
