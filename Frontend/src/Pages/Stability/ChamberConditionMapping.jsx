import { useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table3 from "../../components/ATM components/Table/Table3.jsx";
import ChamberConditionMappingModal from "../Modals/ChamberConditionMappingModal.jsx";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    chamberId: "CH001",
    description: "Description 1",
    currentStorageCondition: "Condition A",
    initiatedOn: "2024-01-01",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    chamberId: "CH002",
    description: "Description 2",
    currentStorageCondition: "Condition B",
    initiatedOn: "2024-01-02",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 3,
    chamberId: "CH003",
    description: "Description 3",
    currentStorageCondition: "Condition C",
    initiatedOn: "2024-01-03",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 4,
    chamberId: "CH004",
    description: "Description 4",
    currentStorageCondition: "Condition D",
    initiatedOn: "2024-01-04",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 5,
    chamberId: "CH005",
    description: "Description 5",
    currentStorageCondition: "Condition E",
    initiatedOn: "2024-01-05",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 6,
    chamberId: "CH006",
    description: "Description 6",
    currentStorageCondition: "Condition F",
    initiatedOn: "2024-01-06",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    chamberId: "CH007",
    description: "Description 7",
    currentStorageCondition: "Condition G",
    initiatedOn: "2024-01-07",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 8,
    chamberId: "CH008",
    description: "Description 8",
    currentStorageCondition: "Condition H",
    initiatedOn: "2024-01-08",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 9,
    chamberId: "CH009",
    description: "Description 9",
    currentStorageCondition: "Condition I",
    initiatedOn: "2024-01-09",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 10,
    chamberId: "CH010",
    description: "Description 10",
    currentStorageCondition: "Condition J",
    initiatedOn: "2024-01-10",
    status: "DROPPED",
  },
];

function ChamberConditionMapping() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.chamberId.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Storage Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="Name" placeholder="Storage Name" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Cancel
          </CButton>
          <CButton color="primary">Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Chamber Id", accessor: "chamberId" },
    { header: "Description", accessor: "description" },
    {
      header: "Current Storage Condition",
      accessor: "currentStorageCondition",
    },
    { header: "	Initiated On", accessor: "initiatedOn" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <ATMButton text="Update" color="blue" onClick={row} />
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
    setViewModalData(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      chamberId: item["Chamber Id"] || "",
      description: item["Description"] || "",
      currentStorageCondition: item["Current Storage Condition"] || "",
      initiatedOn: item["Initiated On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsImportModalOpen(false); // Close the import modal after data upload
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Chamber Condition Mapping</h4>
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
            {/* <ATMButton text="Update" color="blue" onClick={openModal} /> */}
          </div>
        </div>
        <Table3
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onDelete={handleDelete}
        />
        <ChamberConditionMappingModal
          visible={isModalOpen}
          closeModal={closeModal}
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
      {viewModalData && (
        <ImportModal visible={viewModalData} closeModal={closeViewModal} />
      )}
    </>
  );
}

export default ChamberConditionMapping;
