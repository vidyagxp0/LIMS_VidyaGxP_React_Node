import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    uniqueCode: "UC001",
    description: "Description for UC001",
    numberofRanges: 5,
    updatedAt: "2024-07-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    uniqueCode: "UC002",
    description: "Description for UC002",
    numberofRanges: 10,
    updatedAt: "2024-06-30",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    uniqueCode: "UC003",
    description: "Description for UC003",
    numberofRanges: 7,
    updatedAt: "2024-06-29",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    uniqueCode: "UC004",
    description: "Description for UC004",
    numberofRanges: 3,
    updatedAt: "2024-06-28",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    uniqueCode: "UC005",
    description: "Description for UC005",
    numberofRanges: 8,
    updatedAt: "2024-06-27",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    uniqueCode: "UC006",
    description: "Description for UC006",
    numberofRanges: 2,
    updatedAt: "2024-06-26",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    uniqueCode: "UC007",
    description: "Description for UC007",
    numberofRanges: 6,
    updatedAt: "2024-06-25",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 8,
    uniqueCode: "UC008",
    description: "Description for UC008",
    numberofRanges: 9,
    updatedAt: "2024-06-24",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 9,
    uniqueCode: "UC009",
    description: "Description for UC009",
    numberofRanges: 4,
    updatedAt: "2024-06-23",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 10,
    uniqueCode: "UC010",
    description: "Description for UC010",
    numberofRanges: 1,
    updatedAt: "2024-06-22",
    status: "Inactive",
  },
];

const SamplingRule = () => {
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
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Unique Code", accessor: "uniqueCode" },
    { header: "Description", accessor: "description" },
    { header: "Number of Ranges", accessor: "numberofRanges" },
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
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      uniqueCode: item["Unique Code"] || "",
      description: item["Description"] || "",
      numberofRanges: item["Number of Ranges"] || "",
      updatedAt: item["Updated At"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };
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

  return (
    <>
      <div className="m-5 mt-3 ">
        <div className="main-head">
          <h4 className="fw-bold">Sampling Rule</h4>
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
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sampling Rule"
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

const StatusModal = (_props) => {
  const [numRows, setNumRows] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setInputValue(value);
    }
  };

  const addRows = () => {
    setNumRows(inputValue);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        <CTableRow key={i}>
          <CTableHeaderCell className="mb-3 m-2 flex justify-between itmes center gap-4" scope="row">
            {i + 1}
            <CFormInput className="border-1 border-black" placeholder="Lower"></CFormInput>
            <CFormInput className="border-1 border-black" placeholder="Upper"></CFormInput>
            <CFormInput className="border-1 border-black" placeholder="No. of Containers"></CFormInput>
          </CTableHeaderCell>
          {/* <CTableDataCell className="mb-3 m-2">
            Rack {i + 1}: <input type="text" />{" "}
          </CTableDataCell> */}
        </CTableRow>
      );
    }
    return rows;
  };

  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="xl"
    >
      <CModalHeader>
        <CModalTitle>Add Rule</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className="mb-3"
          type="text"
          label="Sampling Rule Name"
          placeholder="Sampling Rule Name"
        />

        <CFormInput
          className="mb-3"
          type="text"
          label="Unique Code"
          placeholder="Unique Code"
        />

        <CFormInput
          className="mb-3"
          type="number"
          label="Number of Ranges"
          placeholder="Number of Ranges"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
        />
        <CButton color="primary" onClick={addRows}>
          Add Range
        </CButton>
      </CModalBody>
      <CTableBody className="mb-3">{renderRows()}</CTableBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary">Submit</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default SamplingRule;
