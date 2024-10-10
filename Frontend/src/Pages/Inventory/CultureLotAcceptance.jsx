;

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
import CultureLotAcceptanceModal from "../Modals/CultureLotAcceptanceModal";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    ReferenceCultureName: "code1",
    ReferenceCultureCode: "application1",
    Comments: "brand1",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    ReferenceCultureName: "code2",
    ReferenceCultureCode: "application2",
    Comments: "brand2",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 3,
    ReferenceCultureName: "code3",
    ReferenceCultureCode: "application3",
    Comments: "brand3",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    ReferenceCultureName: "code4",
    ReferenceCultureCode: "application4",
    Comments: "brand4",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 5,
    ReferenceCultureName: "code5",
    ReferenceCultureCode: "application5",
    Comments: "brand5",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 6,
    ReferenceCultureName: "code6",
    ReferenceCultureCode: "application6",
    Comments: "brand6",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    ReferenceCultureName: "code7",
    ReferenceCultureCode: "application7",
    Comments: "brand7",
    status: "REINITIATED",
  },
];

const
  CultureLotAcceptance = () => {
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
        row.ReferenceCultureName.toLowerCase().includes(
          searchQuery.toLowerCase()
        ) &&
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
        ReferenceCultureName: item["Reference Culture Name"] || "",
        ReferenceCultureCode: item["Reference Culture Code"] || "",
        Comments: item["Comments"] || "",
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
      { header: "Reference Culture Name", accessor: "ReferenceCultureName" },
      { header: "Reference Culture Code", accessor: "ReferenceCultureCode" },
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
      <>
      <LaunchQMS/>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Culture Lot Acceptance</h1>

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
              text="Add Culture Template"
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
        <CultureLotAcceptanceModal
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

export default CultureLotAcceptance;
