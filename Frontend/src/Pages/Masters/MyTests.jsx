import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      ARNo: "AR001",
      productName: "Product 1",
      sampleIncharge: "John Doe",
      assignedOn: "2024-01-01",
      sampleType: "Type A",
      status: "INITIATED",
    },
    {
      checkbox: false,
      sno: 2,
      ARNo: "AR002",
      productName: "Product 2",
      sampleIncharge: "Jane Smith",
      assignedOn: "2024-01-02",
      sampleType: "Type B",
      status: "APPROVED",
    },
    {
      checkbox: false,
      sno: 3,
      ARNo: "AR003",
      productName: "Product 3",
      sampleIncharge: "Alice Johnson",
      assignedOn: "2024-01-03",
      sampleType: "Type C",
      status: "REJECTED",
    },
    {
      checkbox: false,
      sno: 4,
      ARNo: "AR004",
      productName: "Product 4",
      sampleIncharge: "Bob Brown",
      assignedOn: "2024-01-04",
      sampleType: "Type D",
      status: "DROPPED",
    },
    {
      checkbox: false,
      sno: 5,
      ARNo: "AR005",
      productName: "Product 5",
      sampleIncharge: "Charlie Davis",
      assignedOn: "2024-01-05",
      sampleType: "Type E",
      status: "REINITIATED",
    },
    {
      checkbox: false,
      sno: 6,
      ARNo: "AR006",
      productName: "Product 6",
      sampleIncharge: "Daniel Evans",
      assignedOn: "2024-01-06",
      sampleType: "Type F",
      status: "INITIATED",
    },
    {
      checkbox: false,
      sno: 7,
      ARNo: "AR007",
      productName: "Product 7",
      sampleIncharge: "Ella Foster",
      assignedOn: "2024-01-07",
      sampleType: "Type G",
      status: "APPROVED",
    },
    {
      checkbox: false,
      sno: 8,
      ARNo: "AR008",
      productName: "Product 8",
      sampleIncharge: "Frank Green",
      assignedOn: "2024-01-08",
      sampleType: "Type H",
      status: "REJECTED",
    },
    {
      checkbox: false,
      sno: 9,
      ARNo: "AR009",
      productName: "Product 9",
      sampleIncharge: "Grace Harris",
      assignedOn: "2024-01-09",
      sampleType: "Type I",
      status: "DROPPED",
    },
    {
      checkbox: false,
      sno: 10,
      ARNo: "AR010",
      productName: "Product 10",
      sampleIncharge: "Henry Jackson",
      assignedOn: "2024-01-10",
      sampleType: "Type J",
      status: "REINITIATED",
    },
  ];
  

function MyTests() {
    const [data, setData] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
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
        row.ARNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
        { header: "A.R No.", accessor: "ARNo" },
        { header: "Product Name", accessor: "productName" },
        { header: "Sample Incharge", accessor: "sampleIncharge" },
        { header: "Assigned On", accessor: "assignedOn" },
        { header: "Sample Type", accessor: "sampleType" },
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
      
  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      ARNo: item["A.R No."] || "", // Adjusted accessor
      productName: item["Product Name"] || "", // Adjusted accessor
      sampleIncharge: item["Sample Incharge"] || "", // Adjusted accessor
      assignedOn: item["Assigned On"] || "", // Adjusted accessor
      sampleType: item["Sample Type"] || "", // Adjusted accessor
      status: item["Status"] || "", // Adjusted accessor
    }));
  
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
    return (
        <>
        <div className="m-5 mt-3">
          <div className="main-head">
            <h4 className="fw-bold">My Test</h4>
          </div>
          <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
         
        </div>
        <div className="float-right flex gap-4">
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
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
          {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
        </div>
      </>
    )
}

export default MyTests;