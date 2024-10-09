import React, { useState, useEffect } from "react";
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
import WorkingStandardIssueModal from "../Modals/WorkingStandardIssueModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import ReusableModal from "../Modals/ResusableModal.jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    WorkingContainerNo: "code1",
    ContainerQty: "material 1",
    ContainerValidityPeriodDay: "dummy desc",
    ContainerValidUpto: "30/06/2024 00:00",
    LotValidUpto: "2024-06-30",
    AddedOn: "29/06/2024 10:34",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    WorkingContainerNo: "code2",
    ContainerQty: "material 2",
    ContainerValidityPeriodDay: "description 2",
    ContainerValidUpto: "01/07/2024 00:00",
    LotValidUpto: "2024-07-01",
    AddedOn: "28/06/2024 11:45",
    status: "Active",
  },
];

const WorkingStandardIssue = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.DROPPED++;
      else if (item.status === "Inactive") counts.INITIATED++;
    });
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
      row.WorkingContainerNo.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const fields = [
    { label: "Sno", key: "sno" },
    { label: "WorkingContainerNo", key: "WorkingContainerNo" },
    { label: "ContainerQty", key: "ContainerQty" },
    { label: "ContainerValidityPeriodDay", key: "ContainerValidityPeriodDay" },
    { label: "ContainerValidUpto", key: "ContainerValidUpto" },
    { label: "LotValidUpto", key: "LotValidUpto" },
    { label: "AddedOn", key: "AddedOn" },
    { label: "Status", key: "status" }
    
    
  ];

  const handleStatusUpdate = (workingStd, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.workingStd === workingStd ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      WorkingContainerNo: item["Working Container No"] || "",
      ContainerQty: item["Container Qty"] || "",
      ContainerValidityPeriodDay:
        item["Container Validity Period Day(s)"] || "",
      ContainerValidUpto: item["Container Valid Upto"] || "",
      LotValidUpto: item["Lot Valid Upto"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "INITIATED",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);

    setIsModalsOpen(false);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Working Container No.	", accessor: "WorkingContainerNo" },
    { header: "Container Qty	", accessor: "ContainerQty" },
    {
      header: "Container Validity Period Day(s)	",
      accessor: "ContainerValidityPeriodDay",
    },
    { header: "Container Valid Upto	", accessor: "ContainerValidUpto" },
    { header: "Lot Valid Upto	", accessor: "LotValidUpto" },
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
              { value: "Active", label: "ACTIVE" },
              { value: "Inactive", label: "INACTIVE" },
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
      <WorkingStandardIssueModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="InstrumentMasterReg."
          updateStatus={handleStatusUpdate}
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
    </div></>
  );
};

export default WorkingStandardIssue;
