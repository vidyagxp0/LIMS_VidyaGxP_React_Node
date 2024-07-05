import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, } from "@coreui/react";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';
import ImportModal from '../Modals/importModal';

const initialData = [
    {
      checkbox: false,
      sno: 1,
      samplingID: "T001",
      specificationID: "T001",
      sampleType: "Type A",
      productName: "Test Name 1",
      testPlan: "Plan A",
      sampleTemplate: "Template A",
      sampleRule: "Rule A",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      samplingID: "T002",
      specificationID: "T002",
      sampleType: "Type B",
      productName: "Test Name 2",
      testPlan: "Plan B",
      sampleTemplate: "Template B",
      sampleRule: "Rule B",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      samplingID: "T003",
      specificationID: "T003",
      sampleType: "Type A",
      productName: "Test Name 3",
      testPlan: "Plan A",
      sampleTemplate: "Template A",
      sampleRule: "Rule A",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      samplingID: "T004",
      specificationID: "T004",
      sampleType: "Type C",
      productName: "Test Name 4",
      testPlan: "Plan C",
      sampleTemplate: "Template C",
      sampleRule: "Rule C",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      samplingID: "T005",
      specificationID: "T005",
      sampleType: "Type A",
      productName: "Test Name 5",
      testPlan: "Plan A",
      sampleTemplate: "Template A",
      sampleRule: "Rule A",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      samplingID: "T006",
      specificationID: "T006",
      sampleType: "Type B",
      productName: "Test Name 6",
      testPlan: "Plan B",
      sampleTemplate: "Template B",
      sampleRule: "Rule B",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      samplingID: "T007",
      specificationID: "T007",
      sampleType: "Type C",
      productName: "Test Name 7",
      testPlan: "Plan C",
      sampleTemplate: "Template C",
      sampleRule: "Rule C",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 8,
      samplingID: "T008",
      specificationID: "T008",
      sampleType: "Type A",
      productName: "Test Name 8",
      testPlan: "Plan A",
      sampleTemplate: "Template A",
      sampleRule: "Rule A",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 9,
      samplingID: "T009",
      specificationID: "T009",
      sampleType: "Type B",
      productName: "Test Name 9",
      testPlan: "Plan B",
      sampleTemplate: "Template B",
      sampleRule: "Rule B",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 10,
      samplingID: "T010",
      specificationID: "T010",
      sampleType: "Type C",
      productName: "Test Name 10",
      testPlan: "Plan C",
      sampleTemplate: "Template C",
      sampleRule: "Rule C",
      status: "Inactive",
    },
  ];
  
const SamplingConfiguration = () => {
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
         row.samplingID.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
       { header: "Sampling ID", accessor: "samplingID" },
       { header: "Specification ID", accessor: "specificationID" },
       { header: "Sample Type", accessor: "sampleType" },
       { header: "Product Name", accessor: "productName" },
       { header: "Test Plan", accessor: "testPlan" },
       { header: "Sample Template", accessor: "sampleTemplate" },
       { header: "Sample Rule", accessor: "sampleRule" },
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
        sno:  index + 1,
        samplingID: item["Sampling ID"] || "",
        specificationID: item["Specification ID"] || "",
        sampleType: item["Sample Type"] || "",
        productName: item["Product Name"] || "",
        testPlan: item["Test Plan"] || "",
        sampleTemplate: item["Sample Template"] || "",
        sampleRule: item["Sample Rule"] || "",
        status: item["Status"] || "",
      }));
    
      const concatenatedData = [ ...updatedData];
      setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data
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
                    <h4 className="fw-bold">Sampling Configuration</h4>
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
              text="Add Sampling Configuration"
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
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
        </>
    );
};

const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Add Configuration</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CFormSelect
                    className='mb-3'
                    type="select"
                    label="Test Plan / Revision No."

                    options={[
                        "Select...",
                        { label: "TP-010110", value: "TP-010110" },
                        { label: "TP-010111", value: "TP-010111" },
                        { label: "TP-010112", value: "TP-010112" },
                        { label: "TP-010113", value: "TP-010113" }
                    ]}
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Specification ID"
                    placeholder="Specification ID"
                    disabled
                />

                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Product/Material Name"
                    placeholder="Product/Material Name"
                    disabled
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Product/Material Code"
                    placeholder="Product/Material Code"
                    disabled
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Sample Type"
                    placeholder="Sample Type"
                    disabled
                />
                <CFormSelect
                    className='mb-3'
                    type="select"
                    label="Sampling Template"
                    options={[
                        "Select Test Category",
                        { label: "Raw Sampling", value: "Raw Sampling" },
                        { label: "Test Temp1", value: "Test Temp1" },
                        { label: "Test Temp2", value: "Test Temp2" },
                        { label: "Test Temp3", value: "Test Temp3" }
                    ]}
                />
                <CFormSelect
                    className='mb-3'
                    type="select"
                    label="Sampling Rule"
                    options={[
                        "Select Sampling Rule",
                        { label: "C2", value: "C2" },
                        { label: "Raw sample", value: "Raw sample" },
                        { label: "Sample C1", value: "Sample C1" },
                        { label: "Sample C2", value: "Sample C2" }
                    ]}
                />
                <CFormSelect
                    className='mb-3'
                    type="select"
                    label="Sampling Test"
                    options={[
                        "Select...",
                        { label: "No Options", value: "No Options" },

                    ]}
                />
                <CFormInput
                    className='mb-3'
                    type="text"
                    label="Comment"
                    placeholder="Comment"
                />

            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton color="primary">Submit</CButton>
            </CModalFooter>
        </CModal>
    );
};


export default SamplingConfiguration
