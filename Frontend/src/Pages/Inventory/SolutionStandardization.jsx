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
    StandardizationCode: "code1",
    PreparationNo: "code1",
    SolutionName: "material 1",
    Type: "dummy desc",
    Comments: "dummy desc",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    StandardizationCode: "code2",
    PreparationNo: "prep2",
    SolutionName: "solution 2",
    Type: "type 2",
    Comments: "description 2",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    StandardizationCode: "code3",
    PreparationNo: "prep3",
    SolutionName: "solution 3",
    Type: "type 3",
    Comments: "description 3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    StandardizationCode: "code4",
    PreparationNo: "prep4",
    SolutionName: "solution 4",
    Type: "type 4",
    Comments: "description 4",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    StandardizationCode: "code5",
    PreparationNo: "prep5",
    SolutionName: "solution 5",
    Type: "type 5",
    Comments: "description 5",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    StandardizationCode: "code6",
    PreparationNo: "prep6",
    SolutionName: "solution 6",
    Type: "type 6",
    Comments: "description 6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    StandardizationCode: "code7",
    PreparationNo: "prep7",
    SolutionName: "solution 7",
    Type: "type 7",
    Comments: "description 7",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    StandardizationCode: "code8",
    PreparationNo: "prep8",
    SolutionName: "solution 8",
    Type: "type 8",
    Comments: "description 8",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    StandardizationCode: "code9",
    PreparationNo: "prep9",
    SolutionName: "solution 9",
    Type: "type 9",
    Comments: "description 9",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    StandardizationCode: "code10",
    PreparationNo: "prep10",
    SolutionName: "solution 10",
    Type: "type 10",
    Comments: "description 10",
    status: "REJECTED",
  },
];

const SolutionStandardization = () => {
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
    { header: "Standardization Code", accessor: "StandardizationCode" },
    { header: "Preparation No.", accessor: "PreparationNo" },
    { header: "Solution Name", accessor: "SolutionName" },
    { header: "Type", accessor: "Type" },
    { header: "Comments", accessor: "Comments" },
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
      <h1 className="text-2xl font-bold mb-4">Solution Standardizations</h1>
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
            text="Add Standardization"
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

export default SolutionStandardization;
