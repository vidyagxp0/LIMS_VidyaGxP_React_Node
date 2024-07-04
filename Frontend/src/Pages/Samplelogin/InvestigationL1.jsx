import React, { useState } from 'react'
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';
import { useNavigate } from 'react-router-dom';
import ImportModal from "../Modals/importModal";


const initialData = [
  {
    checkbox: false,
    sno: 1,
    testName: "Test Name 1",
    testCode: "T001",
    testType: "Type A",
    addedOn: "2024-01-01",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 2,
    testName: "Test Name 2",
    testCode: "T002",
    testType: "Type B",
    addedOn: "2024-01-02",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 3,
    testName: "Test Name 3",
    testCode: "T003",
    testType: "Type A",
    addedOn: "2024-01-03",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 4,
    testName: "Test Name 4",
    testCode: "T004",
    testType: "Type C",
    addedOn: "2024-01-04",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 5,
    testName: "Test Name 5",
    testCode: "T005",
    testType: "Type A",
    addedOn: "2024-01-05",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 6,
    testName: "Test Name 6",
    testCode: "T006",
    testType: "Type B",
    addedOn: "2024-01-06",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 7,
    testName: "Test Name 7",
    testCode: "T007",
    testType: "Type C",
    addedOn: "2024-01-07",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 8,
    testName: "Test Name 8",
    testCode: "T008",
    testType: "Type A",
    addedOn: "2024-01-08",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 9,
    testName: "Test Name 9",
    testCode: "T009",
    testType: "Type B",
    addedOn: "2024-01-09",
    attachment: "attachment",
  },
  {
    checkbox: false,
    sno: 10,
    testName: "Test Name 10",
    testCode: "T010",
    testType: "Type C",
    addedOn: "2024-01-10",
    attachment: "attachment",
  },
];

const InvestigationL1 = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const navigate = useNavigate()

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
      row.testName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    navigate("/testResultsDetails");

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
    { header: "test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Test Type", accessor: "testType" },
    { header: "Added On", accessor: "addedOn" },
    { header: "attachment", accessor: "attachment" },
    { header: "Actions", accessor: "action",    

      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() =>{ onViewDetails(row), navigate("/testResultsDetails")}} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
     },
  ];

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      testType: item["Test Type"] || "",
      addedOn: item["Added On"] || "",
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
          <h4 className="fw-bold">Investigation L1</h4>
        </div>
     

      <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
          </div>
          <div className="float-right flex gap-4">
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add investigation L1 In" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData}  onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
        {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
   
        </div>
    </>
  )
}
export default InvestigationL1