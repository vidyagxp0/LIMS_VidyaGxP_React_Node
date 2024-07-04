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

import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";

const initialData = [
     {
       checkbox: false,
       sno: 1,
       name: "Name 1",
       uniqueCode: "UC001",
       NoOfCheckItems: 10,
       updatedAt: "2024-01-01",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 2,
       name: "Name 2",
       uniqueCode: "UC002",
       NoOfCheckItems: 15,
       updatedAt: "2024-01-02",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 3,
       name: "Name 3",
       uniqueCode: "UC003",
       NoOfCheckItems: 8,
       updatedAt: "2024-01-03",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 4,
       name: "Name 4",
       uniqueCode: "UC004",
       NoOfCheckItems: 12,
       updatedAt: "2024-01-04",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 5,
       name: "Name 5",
       uniqueCode: "UC005",
       NoOfCheckItems: 20,
       updatedAt: "2024-01-05",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 6,
       name: "Name 6",
       uniqueCode: "UC006",
       NoOfCheckItems: 18,
       updatedAt: "2024-01-06",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 7,
       name: "Name 7",
       uniqueCode: "UC007",
       NoOfCheckItems: 5,
       updatedAt: "2024-01-07",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 8,
       name: "Name 8",
       uniqueCode: "UC008",
       NoOfCheckItems: 25,
       updatedAt: "2024-01-08",
       status: "Inactive",
     },
     {
       checkbox: false,
       sno: 9,
       name: "Name 9",
       uniqueCode: "UC009",
       NoOfCheckItems: 9,
       updatedAt: "2024-01-09",
       status: "Active",
     },
     {
       checkbox: false,
       sno: 10,
       name: "Name 10",
       uniqueCode: "UC010",
       NoOfCheckItems: 11,
       updatedAt: "2024-01-10",
       status: "Inactive",
     },
   ];
   

function SampleAcceptanceTemplate() {
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
      row.uniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
          <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
               <CModalHeader>
                    <CModalTitle>New Condition</CModalTitle>
               </CModalHeader>
               <CModalBody>
                    <CFormInput className="mb-3" type="text" label="Name" placeholder="Name" />
                    <CFormInput className="mb-3" type="text" label="Unique Code" placeholder="Unique Code" />
                    <CFormInput className="mb-3" type="text" label="No. Of Check Items" placeholder="No. of Check Items" />
                    {/* <CButton className="mb-3" color="primary" className="mt-2">Add</CButton> */}
               </CModalBody>
               <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
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
    { header: "Name", accessor: "name" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "No. of Check Items", accessor: "NoOfCheckItems" },
    { header: "Updated At", accessor: "updatedAt" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: initialData.length + index + 1,
      name: item["Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      noOfCheckItems: item["No. of Check Items"] || 0,
      updatedAt: item["Updated At"] || "",
      status: item["Status"] || "INITIATED",
    }));
  
    const concatenateData = [...data, ...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
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
    console.log('Deleted item:', item);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Acceptance Template</h4>
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
              text="Add Sample Acceptance"
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
      </div>
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={closeModal} />}
      {viewModalData && <ViewModal visible={viewModalData} closeModal={closeViewModal} />}
    </>
  );
}

export default SampleAcceptanceTemplate;