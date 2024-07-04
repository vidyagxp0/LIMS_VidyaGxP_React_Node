import React, { useState } from 'react'
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import ImportModal from '../Modals/importModal';

const initialData = [
  {
    checkbox: false,
    sno: 1,
    categoryName: "Category 1",
    uniqueCode: "UC001",
    description: "Description 1",
    addedOn: "2024-01-01",
    effectFrom: "2024-01-01",
    reviewDate: "2024-06-01",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    categoryName: "Category 2",
    uniqueCode: "UC002",
    description: "Description 2",
    addedOn: "2024-01-02",
    effectFrom: "2024-01-02",
    reviewDate: "2024-06-02",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 3,
    categoryName: "Category 3",
    uniqueCode: "UC003",
    description: "Description 3",
    addedOn: "2024-01-03",
    effectFrom: "2024-01-03",
    reviewDate: "2024-06-03",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 4,
    categoryName: "Category 4",
    uniqueCode: "UC004",
    description: "Description 4",
    addedOn: "2024-01-04",
    effectFrom: "2024-01-04",
    reviewDate: "2024-06-04",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 5,
    categoryName: "Category 5",
    uniqueCode: "UC005",
    description: "Description 5",
    addedOn: "2024-01-05",
    effectFrom: "2024-01-05",
    reviewDate: "2024-06-05",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    categoryName: "Category 6",
    uniqueCode: "UC006",
    description: "Description 6",
    addedOn: "2024-01-06",
    effectFrom: "2024-01-06",
    reviewDate: "2024-06-06",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    categoryName: "Category 7",
    uniqueCode: "UC007",
    description: "Description 7",
    addedOn: "2024-01-07",
    effectFrom: "2024-01-07",
    reviewDate: "2024-06-07",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 8,
    categoryName: "Category 8",
    uniqueCode: "UC008",
    description: "Description 8",
    addedOn: "2024-01-08",
    effectFrom: "2024-01-08",
    reviewDate: "2024-06-08",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 9,
    categoryName: "Category 9",
    uniqueCode: "UC009",
    description: "Description 9",
    addedOn: "2024-01-09",
    effectFrom: "2024-01-09",
    reviewDate: "2024-06-09",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 10,
    categoryName: "Category 10",
    uniqueCode: "UC010",
    description: "Description 10",
    addedOn: "2024-01-10",
    effectFrom: "2024-01-10",
    reviewDate: "2024-06-10",
    status: "REINITIATED",
  },
];


function Specifications() {
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
          <CModalTitle>Add Test Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add information of Test Category</p>
  
          <CFormInput
            className='mb-3'
            type="text"
            label="Name"
            placeholder="Category Name "
          />
          <CFormInput
            className='mb-3'
            type="text"
            label="Unique Code"
            placeholder="Unique Code "
          />
          <CFormInput
            className='mb-3'
            type="text"
            label="Description"
            placeholder="Description"
          />
          
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
    { header: "Category Name", accessor: "categoryName" },
    { header: "	Unique Code", accessor: "uniqueCode" },
    { header: "Description", accessor: "description" },
    { header: "Added On", accessor: "addedOn" },
    { header: "Effect From", accessor: "effectFrom" },
    { header: "Review Date", accessor: "reviewDate" },
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
      categoryName: item["Category Name"] || "",
      uniqueCode: item["Unique Code"] || "",
      description: item["Description"] || "",
      addedOn: item["Added On"] || "",
      effectFrom: item["Effect From"] || "",
      reviewDate: item["Review Date"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [...initialData, ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
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
          <h4 className="fw-bold">Test Categories</h4>
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
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
             />
            <ATMButton
              text="Add Test Categories"
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

export default Specifications;



