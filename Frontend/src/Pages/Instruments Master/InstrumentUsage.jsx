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
import InstrumentUsageModal from "../Modals/InstrumentUsageModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
    {
      checkbox: false,
      sno: 1,
      InstrumentID: "Product 1",
      InstrumentCategory: "Description 1",
      UsageCode: "MOD001",
      ProductName: "Brand A",
      ARNO: "Model X",
      UsedFor: "MFG12345",
      UsedBy: "Supplier 1",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      InstrumentID: "Product 2",
      InstrumentCategory: "Description 2",
      UsageCode: "MOD002",
      ProductName: "Brand B",
      ARNO: "Model Y",
      UsedFor: "MFG67890",
      UsedBy: "Supplier 2",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      InstrumentID: "Product 3",
      InstrumentCategory: "Description 3",
      UsageCode: "MOD003",
      ProductName: "Brand C",
      ARNO: "Model Z",
      UsedFor: "MFG11111",
      UsedBy: "Supplier 3",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      InstrumentID: "Product 4",
      InstrumentCategory: "Description 4",
      UsageCode: "MOD004",
      ProductName: "Brand D",
      ARNO: "Model W",
      UsedFor: "MFG22222",
      UsedBy: "Supplier 4",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      InstrumentID: "Product 5",
      InstrumentCategory: "Description 5",
      UsageCode: "MOD005",
      ProductName: "Brand E",
      ARNO: "Model V",
      UsedFor: "MFG33333",
      UsedBy: "Supplier 5",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      InstrumentID: "Product 6",
      InstrumentCategory: "Description 6",
      UsageCode: "MOD006",
      ProductName: "Brand F",
      ARNO: "Model U",
      UsedFor: "MFG44444",
      UsedBy: "Supplier 6",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      InstrumentID: "Product 7",
      InstrumentCategory: "Description 7",
      UsageCode: "MOD007",
      ProductName: "Brand G",
      ARNO: "Model T",
      UsedFor: "MFG55555",
      UsedBy: "Supplier 7",
      status: "Active",
    },
  ];
  

const InstrumentUsage = () => {
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

  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Instrument ID", accessor: "InstrumentID" },
    { header: "Instrument Category", accessor: "InstrumentCategory" },
    { header: "Usage Code", accessor: "UsageCode" },
    { header: "Product Name", accessor: "ProductName" },
    { header: "Ar.No", accessor: "ARNO" },
    { header: "Used For", accessor: "UsedFor" },
    { header: "UsedBy", accessor: "UsedBy" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      InstrumentID: item["Instrument ID"] || "",
      InstrumentCategory: item["Instrument Category"] || "",
      UsageCode: item["Usage Code"] || "",
      ProductName: item["Product Name"] || "",
      ARNO: item["Ar.No"] || "",
      UsedFor: item["Used For"] || "",
      UsedBy: item["UsedBy"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
  };
  

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
      <h1 className="text-2xl font-bold mb-4">Instrument Usage</h1>

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
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
          <ATMButton
            text="Instrument Usage"
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
      <InstrumentUsageModal
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
export default InstrumentUsage;
