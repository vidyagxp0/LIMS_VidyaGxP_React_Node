import { useState } from "react";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
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

const initialData = [
    {
      checkbox: false,
      sno: 1,
      conditionCode: "CC001",
      stabilityCondition: "Stable",
      description: "Description 1",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      conditionCode: "CC002",
      stabilityCondition: "Unstable",
      description: "Description 2",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      conditionCode: "CC003",
      stabilityCondition: "Stable",
      description: "Description 3",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      conditionCode: "CC004",
      stabilityCondition: "Unstable",
      description: "Description 4",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      conditionCode: "CC005",
      stabilityCondition: "Stable",
      description: "Description 5",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      conditionCode: "CC006",
      stabilityCondition: "Unstable",
      description: "Description 6",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      conditionCode: "CC007",
      stabilityCondition: "Stable",
      description: "Description 7",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 8,
      conditionCode: "CC008",
      stabilityCondition: "Unstable",
      description: "Description 8",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 9,
      conditionCode: "CC009",
      stabilityCondition: "Stable",
      description: "Description 9",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 10,
      conditionCode: "CC010",
      stabilityCondition: "Unstable",
      description: "Description 10",
      status: "Inactive",
    },
  ];
  
  

function ChamberTransfer() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

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
  const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Stability Chamber Transfer</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CModalTitle className="mb-3">From</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder=" Storage Condition " />

                <CModalTitle className="mb-3">To</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder="Storage Condition " />

                <CFormSelect className="mb-3" type="select" label="Product" options={[
                    "Select...",
                    { label: "Glass" },
                    { label: "Hydraulic Oil" },
                    { label: "chpoil" },
                    { label: "Feliconar" },
                    { label: "Sacubitril" },
                    { label: "Testamine" }
                ]} placeholder=" " />
                <CFormSelect className="mb-3" type="select" label="Protocol" options={[
                    "Select...",
                    { label: "asd3454" },
                    { label: "STB2" },
                    { label: "Btc1P" },
                    { label: "Stab7654" }
                ]} placeholder=" " />
                <div className="d-flex justify-content-end">
                <CButton className="bg-info text-white mb-3">Display</CButton>
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton className="bg-info text-white">Submit</CButton>
            </CModalFooter>
        </CModal>
    )
}

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Chamber Transfer</h4>
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
          <div className="float-right">
            <ATMButton
              text="Add Chamber Transfer"
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

      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={closeModal} />}
      {viewModalData && <ViewModal visible={viewModalData} closeModal={closeViewModal} />}
    </>
  );
 
}

export default ChamberTransfer;
