import { useState } from "react";
import {
  CButton,
  CFormInput,
  CFormSelect,
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
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    productCode: "P001",
    productName: "Product 1",
    specificationID: "S001",
    specificationName: "Specification 1",
    effectFrom: "2024-01-01",
    reviewDate: "2024-06-01",
    attachment: "attachment",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 2,
    productCode: "P002",
    productName: "Product 2",
    specificationID: "S002",
    specificationName: "Specification 2",
    effectFrom: "2024-01-02",
    reviewDate: "2024-06-02",
    attachment: "attachment",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 3,
    productCode: "P003",
    productName: "Product 3",
    specificationID: "S003",
    specificationName: "Specification 3",
    effectFrom: "2024-01-03",
    reviewDate: "2024-06-03",
    attachment: "attachment",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 4,
    productCode: "P004",
    productName: "Product 4",
    specificationID: "S004",
    specificationName: "Specification 4",
    effectFrom: "2024-01-04",
    reviewDate: "2024-06-04",
    attachment: "attachment",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 5,
    productCode: "P005",
    productName: "Product 5",
    specificationID: "S005",
    specificationName: "Specification 5",
    effectFrom: "2024-01-05",
    reviewDate: "2024-06-05",
    attachment: "attachment",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 6,
    productCode: "P006",
    productName: "Product 6",
    specificationID: "S006",
    specificationName: "Specification 6",
    effectFrom: "2024-01-06",
    reviewDate: "2024-06-06",
    attachment: "attachment",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 7,
    productCode: "P007",
    productName: "Product 7",
    specificationID: "S007",
    specificationName: "Specification 7",
    effectFrom: "2024-01-07",
    reviewDate: "2024-06-07",
    attachment: "attachment",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 8,
    productCode: "P008",
    productName: "Product 8",
    specificationID: "S008",
    specificationName: "Specification 8",
    effectFrom: "2024-01-08",
    reviewDate: "2024-06-08",
    attachment: "attachment",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 9,
    productCode: "P009",
    productName: "Product 9",
    specificationID: "S009",
    specificationName: "Specification 9",
    effectFrom: "2024-01-09",
    reviewDate: "2024-06-09",
    attachment: "attachment",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 10,
    productCode: "P010",
    productName: "Product 10",
    specificationID: "S010",
    specificationName: "Specification 10",
    effectFrom: "2024-01-10",
    reviewDate: "2024-06-10",
    attachment: "attachment",
    status: "REINITIATED",
  },
];

function SpecificationsTestProcedure() {
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
      row.productCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    const top100Films = [
      { label: "The Shawshank Redemption", year: 1994 },
      { label: "The Godfather", year: 1972 },
      { label: "The Godfather: Part II", year: 1974 },
      { label: "The Dark Knight", year: 2008 },
      { label: "12 Angry Men", year: 1957 },
    ];

    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add Specification</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <label className="mb-3" htmlFor="">
            Product/Material Code
          </label>
          <Autocomplete
            className="mb-3"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="" />}
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Product Name"
            placeholder="Product Name"
            disabled
          />

          <CFormInput
            className="mb-3"
            type="text"
            label="Specification Name"
            placeholder="Specification Name"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Specification ID"
            placeholder="Specification ID"
          />

          <CFormSelect
            className="mb-3"
            type="select"
            label="Sample Type"
            options={[
              "Select Sample Type",
              { label: "Raw Material", value: "Raw Material" },
              { label: "hcl", value: "hcl" },
              { label: "Hydrochloric Acid", value: "Hydrochloric Acid" },
              { label: "Petrochemical", value: "Petrochemical" },
              { label: "Initiated Product", value: "Initiated Product" },
              { label: "Semi Finished", value: "Semi Finished" },
              { label: "ABCD", value: "ABCD" },
              { label: "H2So4", value: "H2So4" },
              { label: "Micro Media", value: "Micro Media" },
              { label: "FG Templage", value: "FG Templage" },
            ]}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Specification Type"
            options={[
              "Select Specification Type",
              { label: "environment", value: "environment" },
              { label: "culture", value: "culture" },
              { label: "culture1", value: "culture1" },
              { label: "working-standard", value: "working-standard" },
              { label: "tentative", value: "tentative" },
              { label: "release", value: "release" },
              { label: "regulatory", value: "regulatory" },
              { label: "Raw Material", value: "Raw Material" },
              { label: "instrument", value: "instrument" },
              { label: "shell life", value: "shell life" },
            ]}
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Effective From"
            placeholder=""
          />
          <CFormInput
            className="mb-3"
            type="date"
            label="Review Date"
            placeholder=""
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Supersedes"
            placeholder="Supersedes"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Test Procedure No."
            placeholder="Standard Test Procedure No."
          />
          <CFormInput
            className="mb-3"
            type="file"
            label="Document"
            placeholder=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Add Specifications</CButton>
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
    { header: "Product Code", accessor: "productCode" },
    { header: "Product Name", accessor: "productName" },
    { header: "Specification ID", accessor: "specificationID" },
    { header: "Specification Name", accessor: "specificationName" },
    { header: "Effect From", accessor: "effectFrom" },
    { header: "Review Date", accessor: "reviewDate" },
    { header: "attachment", accessor: "attachment" },
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
    console.log("Deleted item:", item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      productCode: item["Product Code"] || "",
      productName: item["Product Name"] || "",
      specificationID: item["Specification ID"] || "",
      specificationName: item["Specification Name"] || "",
      effectFrom: item["Effect From"] || "",
      reviewDate: item["Review Date"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));
  
    // Concatenate the updated data with existing data
    const concatenatedData = [...data, ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
  
  };
  

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Standard Test Procedure</h4>
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
              text="Add Test Procedure"
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

export default SpecificationsTestProcedure;
