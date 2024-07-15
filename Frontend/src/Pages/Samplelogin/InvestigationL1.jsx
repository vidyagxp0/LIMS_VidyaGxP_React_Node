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
      sno:  index + 1,
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      testType: item["Test Type"] || "",
      addedOn: item["Added On"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [ ...updatedData];
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
            {/* <ATMButton text="Add investigation L1 In" color="blue" onClick={openModal} /> */}
          </div>
        </div>
        <Table columns={columns} data={filteredData}  onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
        {isModalsOpen && (
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
   
        </div>
    </>
  )
}
export default InvestigationL1