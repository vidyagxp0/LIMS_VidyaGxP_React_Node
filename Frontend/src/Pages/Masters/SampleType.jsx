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
import "../../Pages/StorageCondition/StorageCondition.css";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ViewModal from "../Modals/ViewModal";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleTypeName: "Type 1",
    addDate: "2024-01-01",
    daysToComplete: 10,
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleTypeName: "Type 2",
    addDate: "2024-01-02",
    daysToComplete: 20,
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    sampleTypeName: "Type 3",
    addDate: "2024-01-03",
    daysToComplete: 30,
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    sampleTypeName: "Type 4",
    addDate: "2024-01-04",
    daysToComplete: 40,
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    sampleTypeName: "Type 5",
    addDate: "2024-01-05",
    daysToComplete: 50,
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    sampleTypeName: "Type 6",
    addDate: "2024-01-06",
    daysToComplete: 60,
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    sampleTypeName: "Type 7",
    addDate: "2024-01-07",
    daysToComplete: 70,
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    sampleTypeName: "Type 8",
    addDate: "2024-01-08",
    daysToComplete: 80,
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 9,
    sampleTypeName: "Type 9",
    addDate: "2024-01-09",
    daysToComplete: 90,
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 10,
    sampleTypeName: "Type 10",
    addDate: "2024-01-10",
    daysToComplete: 100,
    status: "REJECTED",
  },
];

function SampleType() {
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
      row.sampleTypeName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
          <CModalTitle>Add Sample Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
  
          <CFormInput
            className='mb-3'
            type='text'
            label='Sample Name'
            placeholder='ID'
          />
  
          <CFormInput
            className='mb-3'
            type='text'
            label='Prefix'
            placeholder='Model Number'
          />
  
          <CFormInput
            className='mb-3'
            type='text'
            label='Days To Complete'
            placeholder='Number' />
  
          <label className="line3" htmlFor="">Selected Standard Fields Displays At Sample Registration</label>
          <FormGroup style={{ marginLeft: '20px' }}>
            <FormControlLabel control={<Checkbox />} label="Manufacturing Date" />
            <FormControlLabel control={<Checkbox />} label="Expiry Date" />
            <FormControlLabel control={<Checkbox />} label="Batch No." />
            <FormControlLabel control={<Checkbox />} label="Batch Size" />
            <FormControlLabel control={<Checkbox />} label="Packing Type" />
            <FormControlLabel control={<Checkbox />} label="Project" />
            <FormControlLabel control={<Checkbox />} label="Supplier" />
            <FormControlLabel control={<Checkbox />} label="Customer" />
            <FormControlLabel control={<Checkbox />} label="Manufacturer" />
            <FormControlLabel control={<Checkbox />} label="Priority" />
            <FormControlLabel control={<Checkbox />} label="Sampling Quantity" />
            <FormControlLabel control={<Checkbox />} label="Sample Reference No" />
            <FormControlLabel control={<Checkbox />} label="Recommended Reference Lot" />
            <FormControlLabel control={<Checkbox />} label="W.S. Validity Period" />
            <FormControlLabel control={<Checkbox />} label="Storage Condition" />
            <FormControlLabel control={<Checkbox />} label="Storage Location" />
            <FormControlLabel control={<Checkbox />} label="Comments" />
          </FormGroup>
  
          <FormControl style={{ margin: '20px' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Reserve Sample Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">Sampling Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">Analyst Level Investigation Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">Sample Destruction Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">Sample Acceptance Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">TCI Approval Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">SI Approval Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">MGR Approval Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">QA Approval Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
  
            <FormLabel id="demo-row-radio-buttons-group-label">Reduced/Retesting Required</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
  
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
    { header: "Sample Type Name", accessor: "sampleTypeName" },
    { header: "Add Date", accessor: "addDate" },
    { header: "Days to Complete", accessor: "daysToComplete" },
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
      sampleTypeName: item["Sample Type Name"] || "",
      addDate: item["Add Date"] || "",
      daysToComplete: item["Days to Complete"] || "",
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
    console.log('Deleted item:', item);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Type</h4>
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
              text="Add Sample Type"
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

export default SampleType;