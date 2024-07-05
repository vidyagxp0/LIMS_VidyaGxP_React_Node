import React from "react";

import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    conditionCode: "T001",
    stabilityCondition: "Type A",
    description: "Test Name 1",
    status: "Active",
    addedOn: "2024-01-01",
  },
  {
    checkbox: false,
    sno: 2,
    conditionCode: "T002",
    stabilityCondition: "Type B",
    description: "Test Name 2",
    status: "Inactive",
    addedOn: "2024-01-02",
  },
  {
    checkbox: false,
    sno: 3,
    conditionCode: "T003",
    stabilityCondition: "Type A",
    description: "Test Name 3",
    status: "Active",
    addedOn: "2024-01-03",
  },
  {
    checkbox: false,
    sno: 4,
    conditionCode: "T004",
    stabilityCondition: "Type C",
    description: "Test Name 4",
    status: "Inactive",
    addedOn: "2024-01-04",
  },
  {
    checkbox: false,
    sno: 5,
    conditionCode: "T005",
    stabilityCondition: "Type A",
    description: "Test Name 5",
    status: "Active",
    addedOn: "2024-01-05",
  },
  {
    checkbox: false,
    sno: 6,
    conditionCode: "T006",
    stabilityCondition: "Type B",
    description: "Test Name 6",
    status: "Inactive",
    addedOn: "2024-01-06",
  },
  {
    checkbox: false,
    sno: 7,
    conditionCode: "T007",
    stabilityCondition: "Type C",
    description: "Test Name 7",
    status: "Active",
    addedOn: "2024-01-07",
  },
  {
    checkbox: false,
    sno: 8,
    conditionCode: "T008",
    stabilityCondition: "Type A",
    description: "Test Name 8",
    status: "Inactive",
    addedOn: "2024-01-08",
  },
  {
    checkbox: false,
    sno: 9,
    conditionCode: "T009",
    stabilityCondition: "Type B",
    description: "Test Name 9",
    status: "Active",
    addedOn: "2024-01-09",
  },
  {
    checkbox: false,
    sno: 10,
    conditionCode: "T010",
    stabilityCondition: "Type C",
    description: "Test Name 10",
    status: "Inactive",
    addedOn: "2024-01-10",
  },
];

function Storage_Condition() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      row.conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Condition", accessor: "stabilityCondition" },
    { header: "Description", accessor: "description" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => {
              onViewDetails(row), navigate("/testResultsDetails");
            }}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      conditionCode: item["Condition Code"] || "",
      stabilityCondition: item["Stability Condition"] || "",
      description: item["Description"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
setIsModalsOpen(false); // Close the import modal after data upload
  };
  
  

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Storage Conditions</h4>
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
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
            
             />
            <ATMButton
              text="Add Storage Condition"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
        />
      </div>

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
       {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </>
  );
}

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Condition</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Stability Storage Condition"
            placeholder="°C °F "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder=" "
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton className="bg-info text-white">Add</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Storage_Condition;
