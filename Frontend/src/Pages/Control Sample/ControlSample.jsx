import React, { useState } from "react";
import AtmTab from "../../components/ATM components/AtmTab/AtmTab";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import ImportModal from "../Modals/importModal";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sampleId: "SID001",
    productName: "Material 1",
    productCode: "MCode001",
    sampleType: "Type A",
    market: "Market A",
    arNo: "AR001",
    batchNo: "Batch001",
    mfgDate: "2023-10-01",
    expiryDate: "2025-10-01",
    quantity: "1000",
    quantityWithdrawn: "500",
    currentQuantity: "500",
    uom: "KG",
    storageLocation: "Loc001",
    storageCondition: "Cold Storage",
    visualInspectionScheduledOn: "2024-10-01",
    visualInspectionPerformedBy: "Inspector A",
    abnormalObservation: "No",
    observationDate: "2024-09-30",
    destructionDueOn: "2026-10-01",
    destroyedBy: "Staff A",
    neutralizingAgent: "Agent A",
    destructionDate: "2026-09-30",
    remarks: "No remarks",
    status: "Active",
  },
  {
    checkbox: false,
    sampleId: "SID002",
    productName: "Material 2",
    productCode: "MCode002",
    sampleType: "Type B",
    market: "Market B",
    arNo: "AR002",
    batchNo: "Batch002",
    mfgDate: "2023-11-01",
    expiryDate: "2025-11-01",
    quantity: "2000",
    quantityWithdrawn: "1000",
    currentQuantity: "1000",
    uom: "L",
    storageLocation: "Loc002",
    storageCondition: "Room Temperature",
    visualInspectionScheduledOn: "2024-11-01",
    visualInspectionPerformedBy: "Inspector B",
    abnormalObservation: "No",
    observationDate: "2024-10-31",
    destructionDueOn: "2026-11-01",
    destroyedBy: "Staff B",
    neutralizingAgent: "Agent B",
    destructionDate: "2026-10-31",
    remarks: "Minor observation",
    status: "Inactive",
  },
  {
    checkbox: false,
    sampleId: "SID003",
    productName: "Material 3",
    productCode: "MCode003",
    sampleType: "Type C",
    market: "Market C",
    arNo: "AR003",
    batchNo: "Batch003",
    mfgDate: "2023-12-01",
    expiryDate: "2025-12-01",
    quantity: "3000",
    quantityWithdrawn: "1500",
    currentQuantity: "1500",
    uom: "g",
    storageLocation: "Loc003",
    storageCondition: "Freezer",
    visualInspectionScheduledOn: "2024-12-01",
    visualInspectionPerformedBy: "Inspector C",
    abnormalObservation: "Yes",
    observationDate: "2024-11-30",
    destructionDueOn: "2026-12-01",
    destroyedBy: "Staff C",
    neutralizingAgent: "Agent C",
    destructionDate: "2026-11-30",
    remarks: "Requires follow-up",
    status: "Active",
  },
];

const ControlSample = () => {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const filteredData = data.filter((row) => {
    return (
      row.productName?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });
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
  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: "checkbox" },
    { header: "Sample ID", accessor: "sampleId" },
    { header: "Product/ Material Name", accessor: "productName" },
    { header: "Product/ Material Code", accessor: "productCode" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Market", accessor: "market" },
    { header: "AR No.", accessor: "arNo" },
    { header: "Batch No.", accessor: "batchNo" },
    { header: "MFG Date", accessor: "mfgDate" },
    { header: "Expiry Date", accessor: "expiryDate" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Quantity Withdrawn", accessor: "quantityWithdrawn" },
    { header: "Current Quantity", accessor: "currentQuantity" },
    { header: "UOM", accessor: "uom" },
    { header: "Storage Location", accessor: "storageLocation" },
    { header: "Storage Condition", accessor: "storageCondition" },
    { header: "Visual Inspection Scheduled On", accessor: "visualInspectionScheduledOn" },
    { header: "Visual Inspection Performed By", accessor: "visualInspectionPerformedBy" },
    { header: "Any Abnormal Observation", accessor: "abnormalObservation" },
    { header: "Observation Date", accessor: "observationDate" },
    { header: "Destruction Due On", accessor: "destructionDueOn" },
    { header: "Destroyed By", accessor: "destroyedBy" },
    { header: "Neutralizing Agent", accessor: "neutralizingAgent" },
    { header: "Destruction Date", accessor: "destructionDate" },
    { header: "Remarks", accessor: "remarks" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() => onViewDetails(row)} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => onDeleteItem(row)} />
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false, // Default unchecked checkbox
      sampleId: item["Sample ID"] || "", // Mapping 'Sample ID' from Excel data
      productName: item["Product/ Material Name"] || "", // Mapping 'Product/ Material Name'
      productCode: item["Product/ Material Code"] || "", // Mapping 'Product/ Material Code'
      sampleType: item["Sample Type"] || "", // Mapping 'Sample Type'
      market: item["Market"] || "", // Mapping 'Market'
      arNo: item["AR No."] || "", // Mapping 'AR No.'
      batchNo: item["Batch No."] || "", // Mapping 'Batch No.'
      mfgDate: item["MFG Date"] || "", // Mapping 'MFG Date'
      expiryDate: item["Expiry Date"] || "", // Mapping 'Expiry Date'
      quantity: item["Quantity"] || "", // Mapping 'Quantity'
      quantityWithdrawn: item["Quantity Withdrawn"] || "", // Mapping 'Quantity Withdrawn'
      currentQuantity: item["Current Quantity"] || "", // Mapping 'Current Quantity'
      uom: item["UOM"] || "", // Mapping 'UOM'
      storageLocation: item["Storage Location"] || "", // Mapping 'Storage Location'
      storageCondition: item["Storage Condition"] || "", // Mapping 'Storage Condition'
      visualInspectionScheduledOn: item["Visual Inspection Scheduled On"] || "", // Mapping 'Visual Inspection Scheduled On'
      visualInspectionPerformedBy: item["Visual Inspection Performed By"] || "", // Mapping 'Visual Inspection Performed By'
      abnormalObservation: item["Any Abnormal Observation"] || "", // Mapping 'Any Abnormal Observation'
      observationDate: item["Observation Date"] || "", // Mapping 'Observation Date'
      destructionDueOn: item["Destruction Due On"] || "", // Mapping 'Destruction Due On'
      destroyedBy: item["Destroyed By"] || "", // Mapping 'Destroyed By'
      neutralizingAgent: item["Neutralizing Agent"] || "", // Mapping 'Neutralizing Agent'
      destructionDate: item["Destruction Date"] || "", // Mapping 'Destruction Date'
      remarks: item["Remarks"] || "", // Mapping 'Remarks'
      status: item["Status"] || "", // Mapping 'Status'
    }));

    // Update the state with the parsed Excel data
    setData(updatedData);
    setIsModalsOpen(false); // Close the modal after data upload
  };

  return (
    <>
      <LaunchQMS />

      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold ">Control Sample Management</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              title="Storage Location"
              fileName="Storage_Location.pdf"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Control Sample" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />
      </div>
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </>
  );
};

export default ControlSample;
