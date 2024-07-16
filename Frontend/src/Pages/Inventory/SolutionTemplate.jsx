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
import SolutionTemplateModal from "../Modals/SolutionTemplateModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "code1",
    prefix: "code1",
    TheoreticalStrength: "material 1",
    SolutionExpiryPeriod: "dummy desc",
    PreparationMethod: "dummy desc",
    comments: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    name: "code2",
    prefix: "code2",
    TheoreticalStrength: "material 2",
    SolutionExpiryPeriod: "description 2",
    PreparationMethod: "description 2",
    comments: "description 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    name: "code3",
    prefix: "code3",
    TheoreticalStrength: "material 3",
    SolutionExpiryPeriod: "description 3",
    PreparationMethod: "description 3",
    comments: "description 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    name: "code4",
    prefix: "code4",
    TheoreticalStrength: "material 4",
    SolutionExpiryPeriod: "description 4",
    PreparationMethod: "description 4",
    comments: "description 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    name: "code5",
    prefix: "code5",
    TheoreticalStrength: "material 5",
    SolutionExpiryPeriod: "description 5",
    PreparationMethod: "description 5",
    comments: "description 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    name: "code6",
    prefix: "code6",
    TheoreticalStrength: "material 6",
    SolutionExpiryPeriod: "description 6",
    PreparationMethod: "description 6",
    comments: "description 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    name: "code7",
    prefix: "code7",
    TheoreticalStrength: "material 7",
    SolutionExpiryPeriod: "description 7",
    PreparationMethod: "description 7",
    comments: "description 7",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    name: "code8",
    prefix: "code8",
    TheoreticalStrength: "material 8",
    SolutionExpiryPeriod: "description 8",
    PreparationMethod: "description 8",
    comments: "description 8",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    name: "code9",
    prefix: "code9",
    TheoreticalStrength: "material 9",
    SolutionExpiryPeriod: "description 9",
    PreparationMethod: "description 9",
    comments: "description 9",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    name: "code10",
    prefix: "code10",
    TheoreticalStrength: "material 10",
    SolutionExpiryPeriod: "description 10",
    PreparationMethod: "description 10",
    comments: "description 10",
    status: "REJECTED",
  },
];

const SolutionTemplate = () => {
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
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      name: item["Name"] || "",
      prefix: item["Prefix"] || "",
      TheoreticalStrength: item["Theoretical Strength"] || "",
      SolutionExpiryPeriod: item["Solution Expiry Period"] || "",
      PreparationMethod: item["Preparation Method"] || "",
      comments: item["Comments"] || "",
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
    { header: "Name	", accessor: "name" },
    { header: "Prefix	", accessor: "prefix" },
    { header: "Theoretical Strength	", accessor: "TheoreticalStrength" },
    { header: "Solution Expiry Period	", accessor: "SolutionExpiryPeriod" },
    { header: "Preparation Method	", accessor: "PreparationMethod" },
    { header: "Comments", accessor: "comments" },
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
      <h1 className="text-2xl font-bold mb-4">Solution Template</h1>
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
          <ATMButton
            text="Add Solution Template"
            color="blue"
            onClick={openModal}
          />
        </div>
      </div>
      {/* <div className="text-center">
        <h3 className="text-gray-500">No Template Found</h3>
      </div> */}
      {/* <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      /> */}
      <div className="text-center flex justify-center items-center">
        <h2 className="text-blue-500 font-serif font-bold">
          No Template Found
        </h2>
      </div>
      <SolutionTemplateModal visible={isModalOpen} closeModal={closeModal} />
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

export default SolutionTemplate;
