
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
import RefrenceCultureLotModal from "../Modals/RefrenceCultureLotModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ReferenceLotCode: "code1",
    ReferenceCulture: "application1",
    ReceivedQuantity: "brand1",
    BatchNo: "material1",
    CatalogueNo: "material1",
    ValidUpto: "material1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    ReferenceLotCode: "code2",
    ReferenceCulture: "application2",
    ReceivedQuantity: "brand2",
    BatchNo: "material2",
    CatalogueNo: "material2",
    ValidUpto: "material2",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 3,
    ReferenceLotCode: "code3",
    ReferenceCulture: "application3",
    ReceivedQuantity: "brand3",
    BatchNo: "material3",
    CatalogueNo: "material3",
    ValidUpto: "material3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    ReferenceLotCode: "code4",
    ReferenceCulture: "application4",
    ReceivedQuantity: "brand4",
    BatchNo: "material4",
    CatalogueNo: "material4",
    ValidUpto: "material4",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 5,
    ReferenceLotCode: "code5",
    ReferenceCulture: "application5",
    ReceivedQuantity: "brand5",
    BatchNo: "material5",
    CatalogueNo: "material5",
    ValidUpto: "material5",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 6,
    ReferenceLotCode: "code6",
    ReferenceCulture: "application6",
    ReceivedQuantity: "brand6",
    BatchNo: "material6",
    CatalogueNo: "material6",
    ValidUpto: "material6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    ReferenceLotCode: "code7",
    ReferenceCulture: "application7",
    ReceivedQuantity: "brand7",
    BatchNo: "material7",
    CatalogueNo: "material7",
    ValidUpto: "material7",
    status: "REINITIATED",
  },
];

const RefrenceCultureLot = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
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
      row.ReferenceLotCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      ReferenceLotCode: item["Reference Lot Code"] || "",
      ReferenceCulture: item["Reference Culture"] || "",
      ReceivedQuantity: item["Received Quantity"] || "",
      BatchNo: item["Batch No"] || "",
      CatalogueNo: item["Catalogue No"] || "",
      ValidUpto: item["Valid Upto"] || "",
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
    { header: "Reference Lot Code", accessor: "ReferenceLotCode" },
    { header: "Reference Culture", accessor: "ReferenceCulture" },
    { header: "Received Quantity", accessor: "ReceivedQuantity" },
    { header: "Batch No", accessor: "BatchNo" },
    { header: "Catalogue No", accessor: "CatalogueNo" },
    { header: "Valid Upto", accessor: "ValidUpto" },
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
      <h1 className="text-2xl font-bold mb-4">Reference Culture Lot</h1>

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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Culture Lot" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <RefrenceCultureLotModal
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
    </div>
  );
};

export default RefrenceCultureLot;
