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
import WorkingStandardUsageModal from "../Modals/WorkingStandardUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    refStdlotNo: "code1",
    Quantityused: "code1",
    UsedOn: "material 1",
    UsedBy: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    refStdlotNo: "code2",
    Quantityused: "code2",
    UsedOn: "material 2",
    UsedBy: "description 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    refStdlotNo: "code3",
    Quantityused: "code3",
    UsedOn: "material 3",
    UsedBy: "description 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    refStdlotNo: "code4",
    Quantityused: "code4",
    UsedOn: "material 4",
    UsedBy: "description 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    refStdlotNo: "code5",
    Quantityused: "code5",
    UsedOn: "material 5",
    UsedBy: "description 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    refStdlotNo: "code6",
    Quantityused: "code6",
    UsedOn: "material 6",
    UsedBy: "description 6",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 7,
    refStdlotNo: "code7",
    Quantityused: "code7",
    UsedOn: "material 7",
    UsedBy: "description 7",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 8,
    refStdlotNo: "code8",
    Quantityused: "code8",
    UsedOn: "material 8",
    UsedBy: "description 8",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 9,
    refStdlotNo: "code9",
    Quantityused: "code9",
    UsedOn: "material 9",
    UsedBy: "description 9",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 10,
    refStdlotNo: "code10",
    Quantityused: "code10",
    UsedOn: "material 10",
    UsedBy: "description 10",
    status: "DROPPED",
  },
];

const WorkingStandardUsage = () => {
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

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };


  const filteredData = data.filter((row) => {
    return (
      row.refStdlotNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      refStdlotNo: item["Ref. Std. Lot. No"] || "",
      Quantityused: item["Quantity used"] || "",
      UsedOn: item["Used On"] || "",
      UsedBy: item["Used By"] || "",
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
    { header: "Ref. Std. Lot. No	", accessor: "refStdlotNo" },
    { header: "Quantity used	", accessor: "Quantityused" },
    { header: "Used On", accessor: "UsedOn" },
    { header: "Used By", accessor: "UsedBy" },
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
      <h1 className="text-2xl font-bold mb-4">Working Standard Lot Usage</h1>
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
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Lot Usage" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <WorkingStandardUsageModal
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

export default WorkingStandardUsage;
