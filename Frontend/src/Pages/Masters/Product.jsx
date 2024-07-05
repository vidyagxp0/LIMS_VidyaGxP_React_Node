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
    uniqueCode: "UC001",
    productName: "Product 1",
    genericName: "Generic 1",
    reTestingPeriod: "2024-06-01",
    addDate: "2024-01-01",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "UC002",
    productName: "Product 2",
    genericName: "Generic 2",
    reTestingPeriod: "2024-06-02",
    addDate: "2024-01-02",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    uniqueCode: "UC003",
    productName: "Product 3",
    genericName: "Generic 3",
    reTestingPeriod: "2024-06-03",
    addDate: "2024-01-03",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    uniqueCode: "UC004",
    productName: "Product 4",
    genericName: "Generic 4",
    reTestingPeriod: "2024-06-04",
    addDate: "2024-01-04",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    uniqueCode: "UC005",
    productName: "Product 5",
    genericName: "Generic 5",
    reTestingPeriod: "2024-06-05",
    addDate: "2024-01-05",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    uniqueCode: "UC006",
    productName: "Product 6",
    genericName: "Generic 6",
    reTestingPeriod: "2024-06-06",
    addDate: "2024-01-06",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    uniqueCode: "UC007",
    productName: "Product 7",
    genericName: "Generic 7",
    reTestingPeriod: "2024-06-07",
    addDate: "2024-01-07",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    uniqueCode: "UC008",
    productName: "Product 8",
    genericName: "Generic 8",
    reTestingPeriod: "2024-06-08",
    addDate: "2024-01-08",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    uniqueCode: "UC009",
    productName: "Product 9",
    genericName: "Generic 9",
    reTestingPeriod: "2024-06-09",
    addDate: "2024-01-09",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    uniqueCode: "UC010",
    productName: "Product 10",
    genericName: "Generic 10",
    reTestingPeriod: "2024-06-10",
    addDate: "2024-01-10",
    status: "REJECTED",
  },
];

function Product() {
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
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Product/Material</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Name"
            placeholder="Product Name "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Product Code "
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Generic Name"
            placeholder="Generic Name"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Re-testing Period"
            placeholder="Re-testing Period "
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
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
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "Product Name", accessor: "productName" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Re-Testing Period", accessor: "reTestingPeriod" },
    { header: "Add Date", accessor: "addDate" },
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
      uniqueCode: item["Unique Code"] || "",
      productName: item["Product Name"] || "",
      genericName: item["Generic Name"] || "",
      reTestingPeriod: item["Re-Testing Period"] || "",
      addDate: item["Add Date"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenatedData = [ ...updatedData];
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
    console.log("Deleted item:", item);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Master/Product</h4>
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
              text="Add Master/Product"
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

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {viewModalData && (
        <ViewModal visible={viewModalData} closeModal={closeViewModal} />
      )}
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </>
  );
}

export default Product;
