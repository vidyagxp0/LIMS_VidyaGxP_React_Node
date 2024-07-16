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

import { PiDownloadBold } from "react-icons/pi";
import jsPDF from "jspdf";
import "jspdf-autotable";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    DateTime: "01-07-2024 09:43",
    FormName: "Storage Location",
    ActionRowName: "TP-UNDW2/WBL/STP/FG/0493-02-0000051",
    OldAction: "Active",
    NewAction: "Logged In",
    EmployeeName: "Admin",
  },
  {
    checkbox: false,
    sno: 2,
    DateTime: "01-07-2024 10:00",
    FormName: "Inventory",
    ActionRowName: "TP-UNDW2/WBL/INV/0392-03-0000021",
    OldAction: "Inactive",
    NewAction: "Active",
    EmployeeName: "John",
  },
  {
    checkbox: false,
    sno: 3,
    DateTime: "01-07-2024 10:30",
    FormName: "Shipping",
    ActionRowName: "TP-UNDW2/WBL/SHP/0493-02-0000052",
    OldAction: "Active",
    NewAction: "Shipped",
    EmployeeName: "Doe",
  },
  {
    checkbox: false,
    sno: 4,
    DateTime: "01-07-2024 11:00",
    FormName: "Receiving",
    ActionRowName: "TP-UNDW2/WBL/RCV/0493-02-0000031",
    OldAction: "Inactive",
    NewAction: "Received",
    EmployeeName: "Smith",
  },
  {
    checkbox: false,
    sno: 5,
    DateTime: "01-07-2024 11:30",
    FormName: "Quality Control",
    ActionRowName: "TP-UNDW2/WBL/QC/0593-04-0000071",
    OldAction: "Pending",
    NewAction: "Approved",
    EmployeeName: "Alice",
  },
  {
    checkbox: false,
    sno: 6,
    DateTime: "01-07-2024 12:00",
    FormName: "Maintenance",
    ActionRowName: "TP-UNDW2/WBL/MNT/0493-02-0000011",
    OldAction: "Active",
    NewAction: "Completed",
    EmployeeName: "Bob",
  },
  {
    checkbox: false,
    sno: 7,
    DateTime: "01-07-2024 12:30",
    FormName: "Audit",
    ActionRowName: "TP-UNDW2/WBL/AUD/0493-02-0000081",
    OldAction: "Scheduled",
    NewAction: "Completed",
    EmployeeName: "Charlie",
  },
  {
    checkbox: false,
    sno: 8,
    DateTime: "01-07-2024 13:00",
    FormName: "Storage Location",
    ActionRowName: "TP-UNDW2/WBL/STP/FG/0493-02-0000052",
    OldAction: "Logged Out",
    NewAction: "Logged In",
    EmployeeName: "Admin",
  },
  {
    checkbox: false,
    sno: 9,
    DateTime: "01-07-2024 13:30",
    FormName: "Inventory",
    ActionRowName: "TP-UNDW2/WBL/INV/0392-03-0000022",
    OldAction: "Active",
    NewAction: "Inactive",
    EmployeeName: "Eve",
  },
];

const AuditTrail = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
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
      if (item.OldAction === "Active") counts.Active++;
      else if (item.OldAction === "Inactive") counts.Inactive++;
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
      row.FormName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Date Time", accessor: "DateTime" },
    { header: "Form Name", accessor: "FormName" },
    { header: "Action Row Name", accessor: "ActionRowName" },
    { header: "Old Action", accessor: "OldAction" },
    { header: "New Action", accessor: "NewAction" },
    { header: "Employee Name", accessor: "EmployeeName" },

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

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Audit Trail Data", 20, 20);

    const filteredColumns = columns.filter(
      (col) => col.accessor !== "checkbox" && col.accessor !== "action"
    );

    const tableColumn = filteredColumns.map((col) =>
      col.header.props ? "Select All" : col.header
    );
    const tableRows = filteredData.map((row) =>
      filteredColumns.map((col) => row[col.accessor])
    );

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("audit_trail.pdf");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>

      <div className="flex items-center justify-between mb-4 w-full">
        <div className="flex space-x-4">
          <Dropdown
            options={[
              { value: "All", label: "Select Product" },
              { value: "Glass", label: "Glass" },
              { value: "Hydraulic Oil", label: "Hydraulic Oil" },
              { value: "Apixaban", label: "Apixaban" },
              { value: "chpoil", label: "chpoil" },
              { value: "Feliconar", label: "Feliconar" },
              { value: "Sulphuric Acid", label: "Sulphuric Acid" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <Dropdown
            options={[
              { value: "All", label: "Select Operations" },
              { value: "login", label: "login" },
              { value: "logout", label: "logout" },
              { value: "Product", label: "Product" },
              { value: "Specification", label: "Specification" },
              { value: "Feliconar", label: "Feliconar" },
              { value: "Sulphuric Acid", label: "Sulphuric Acid" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <Dropdown
            options={[
              { value: "All", label: "Select Users" },
              { value: "Admin1", label: "Admin1" },
              { value: "User2", label: "User2" },
              { value: "User3", label: "User3" },
              { value: "User4", label: "User4" },
              { value: "User5", label: "User5" },
              { value: "User6", label: "User6" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div
          style={{
            border: "1px solid #f98d6b",
            padding: "7px",
            width: "42px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f98d6b",
            borderRadius: "5px",
            cursor: "pointer",
            color: "white",
          }}
          onClick={handleDownload}
        >
          <PiDownloadBold />
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

export default AuditTrail;
