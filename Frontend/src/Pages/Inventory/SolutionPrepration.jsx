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
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    SolutionPreparationCode: "code1",
    SolutionName: "code1",
    Methodno: "material 1",
    Type: "dummy desc",
    BatchNo: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    SolutionPreparationCode: "code2",
    SolutionName: "solution 2",
    Methodno: "method 2",
    Type: "type 2",
    BatchNo: "batch 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    SolutionPreparationCode: "code3",
    SolutionName: "solution 3",
    Methodno: "method 3",
    Type: "type 3",
    BatchNo: "batch 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    SolutionPreparationCode: "code4",
    SolutionName: "solution 4",
    Methodno: "method 4",
    Type: "type 4",
    BatchNo: "batch 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    SolutionPreparationCode: "code5",
    SolutionName: "solution 5",
    Methodno: "method 5",
    Type: "type 5",
    BatchNo: "batch 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    SolutionPreparationCode: "code6",
    SolutionName: "solution 6",
    Methodno: "method 6",
    Type: "type 6",
    BatchNo: "batch 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    SolutionPreparationCode: "code7",
    SolutionName: "solution 7",
    Methodno: "method 7",
    Type: "type 7",
    BatchNo: "batch 7",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    SolutionPreparationCode: "code8",
    SolutionName: "solution 8",
    Methodno: "method 8",
    Type: "type 8",
    BatchNo: "batch 8",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    SolutionPreparationCode: "code9",
    SolutionName: "solution 9",
    Methodno: "method 9",
    Type: "type 9",
    BatchNo: "batch 9",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    SolutionPreparationCode: "code10",
    SolutionName: "solution 10",
    Methodno: "method 10",
    Type: "type 10",
    BatchNo: "batch 10",
    status: "REJECTED",
  },
];

const SolutionPrepration = () => {
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
      row.SolutionName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    {
      header: "Solution Preparation Code",
      accessor: "SolutionPreparationCode",
    },
    { header: "Solution Name", accessor: "SolutionName" },
    { header: "Method no.", accessor: "Methodno" },
    { header: "Type", accessor: "Type" },
    { header: "Batch No.", accessor: "BatchNo" },
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
      <h1 className="text-2xl font-bold mb-4">Solution Preparations</h1>
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
        <div className="float-right">
          <ATMButton
            text="Add Solution Preparation"
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
      <InternalRegistrationModal
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
    </div>
  );
};

export default SolutionPrepration;
