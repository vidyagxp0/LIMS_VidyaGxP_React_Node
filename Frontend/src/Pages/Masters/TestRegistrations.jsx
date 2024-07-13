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
import TestRegistrationModal from "../Modals/TestRegistrationModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    sno: 1,
    checkbox: "",
    specId: "HYO",
    productName: "Sacubitril",
    testName: "test",
    testCode: "ARIP0000095",
    method: "May 18th 24",
    category: "Aug 18th 24",
    testType: "APPROVED",
    status: "APPROVED",
  },
  {
    sno: 2,
    checkbox: "",
    specId: "XYZ",
    productName: "Rivaroxaban",
    testName: "Sample test",
    testCode: "ABC123456",
    method: "June 1st 24",
    category: "Sep 1st 24",
    testType: "PENDING",
    status: "INITIATED",
  },
];

const TestRegistration = () => {
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
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "DROPPED") counts.DROPPED++;
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
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      ScheduleCode: item["Schedule Code"] || "",
      ScheduleDate: item["Schedule Date"] || "",
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
    { header: "Sr.no.", accessor: "sno" },
    { header: "Specification ID", accessor: "specId" },
    { header: "Product Name", accessor: "productName" },
    { header: "Test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Method", accessor: "method" },
    { header: "Category", accessor: "category" },
    { header: "Test type", accessor: "testType" },
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
      <h1 className="text-2xl font-bold mb-4">Test Registration</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <Dropdown
            options={[
              { value: "Select Type", label: "Select Type" },
              { value: "raw-material", label: "Raw Material" },
              { value: "hcl", label: "HCL" },
              { value: "hydrochloric-acid", label: "Hydrochloric Acid" },
              { value: "petrochemical", label: "Petrochemical" },
              { value: "initiated-product", label: "Initiated Product" },
              { value: "semi-finished", label: "Semi Finished" },
              { value: "abcd", label: "ABCD" },
              { value: "h2so4", label: "H2So4" },
              { value: "att108", label: "ATT108" },
              { value: "micro-media", label: "Micro Media" },
              { value: "fg-templage", label: "FG Templage" },
              { value: "water-type", label: "Water Type" },
              { value: "sodium", label: "Sodium" },
              { value: "test-sample-type", label: "Test Sample Type" },
              {
                value: "new-product-sample-type",
                label: "New Product Sample Type",
              },
              { value: "packing-material", label: "Packing Material" },
              { value: "raw-material-1", label: "Raw Material-1" },
              { value: "finished-product", label: "Finished Product" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <Dropdown
            options={[
              { value: "Select Client", label: "Select Client" },
              { value: "MIT Power", label: "MIT Power" },
              { value: "LIMS", label: "LIMS" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />{" "}
          <Dropdown
            options={[
              { value: "Select Specifications", label: "Select Specs" },
              {
                value:
                  "RMS-TDL-01 - Tadalfil Raw material testing specification",
                label:
                  "RMS-TDL-01 - Tadalfil Raw material testing specification",
              },
              { value: "DR123 - Resinate02", label: "DR123 - Resinate02" },
              { value: "DCU-1 - DCU-01", label: "DCU-1 - DCU-01" },
              { value: "DS-02 - Salts2", label: "DS-02 - Salts2" },
              {
                value: "DS02 - Diclofenac Sodium-01",
                label: "DS02 - Diclofenac Sodium-01",
              },
              { value: "DFA-1 - DFA-01", label: "DFA-1 - DFA-01" },
              { value: "DS2 - DHS-1", label: "DS2 - DHS-1" },
              { value: "DFD-1 - DFD-01", label: "DFD-1 - DFD-01" },
              { value: "DVS-1 - DVS-01", label: "DVS-1 - DVS-01" },
              { value: "MIR1 - Mirabegron1", label: "MIR1 - Mirabegron1" },
              { value: "CLO-1 - CLO-01", label: "CLO-1 - CLO-01" },
              { value: "ESZ123 - Eslica12", label: "ESZ123 - Eslica12" },
              { value: "CTH-1 - CTH-01", label: "CTH-1 - CTH-01" },
              { value: "HYDRO89 - HydrochL", label: "HYDRO89 - HydrochL" },
              { value: "LEV2 - Levetiracetam", label: "LEV2 - Levetiracetam" },
              { value: "CPZ-1 - CPZ-01", label: "CPZ-1 - CPZ-01" },
              { value: "MM24 - M/M", label: "MM24 - M/M" },
              { value: "CLB-1 - CBN-01", label: "CLB-1 - CBN-01" },
              { value: "OM01 - Medoxomil", label: "OM01 - Medoxomil" },
              {
                value: "OX12 - Oxcarbazepine1",
                label: "OX12 - Oxcarbazepine1",
              },
              { value: "P101 - Pirfenidone1", label: "P101 - Pirfenidone1" },
              { value: "RAN124 - Ranolazine", label: "RAN124 - Ranolazine" },
              { value: "RR12 - Rivaroxaban", label: "RR12 - Rivaroxaban" },
              {
                value: "R12 - SOP for Rosuvastatin",
                label: "R12 - SOP for Rosuvastatin",
              },
              { value: "CBN-1 - CBN-01", label: "CBN-1 - CBN-01" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton
            text="Add Registration"
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
      <TestRegistrationModal visible={isModalOpen} closeModal={closeModal} />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};
export default TestRegistration;
