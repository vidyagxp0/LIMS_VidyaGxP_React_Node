import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';
import ImportModal from '../Modals/importModal';

const initialData = [
    {
      checkbox: false,
      sno: 1,
      fieldName: "Field 1",
      fieldType: "Type A",
      registeredBy: "User 1",
      registeredOn: "2024-07-01",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 2,
      fieldName: "Field 2",
      fieldType: "Type B",
      registeredBy: "User 2",
      registeredOn: "2024-06-30",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 3,
      fieldName: "Field 3",
      fieldType: "Type A",
      registeredBy: "User 3",
      registeredOn: "2024-06-29",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 4,
      fieldName: "Field 4",
      fieldType: "Type C",
      registeredBy: "User 4",
      registeredOn: "2024-06-28",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 5,
      fieldName: "Field 5",
      fieldType: "Type A",
      registeredBy: "User 5",
      registeredOn: "2024-06-27",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 6,
      fieldName: "Field 6",
      fieldType: "Type B",
      registeredBy: "User 6",
      registeredOn: "2024-06-26",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 7,
      fieldName: "Field 7",
      fieldType: "Type C",
      registeredBy: "User 7",
      registeredOn: "2024-06-25",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 8,
      fieldName: "Field 8",
      fieldType: "Type A",
      registeredBy: "User 8",
      registeredOn: "2024-06-24",
      status: "Inactive",
    },
    {
      checkbox: false,
      sno: 9,
      fieldName: "Field 9",
      fieldType: "Type B",
      registeredBy: "User 9",
      registeredOn: "2024-06-23",
      status: "Active",
    },
    {
      checkbox: false,
      sno: 10,
      fieldName: "Field 10",
      fieldType: "Type C",
      registeredBy: "User 10",
      registeredOn: "2024-06-22",
      status: "Inactive",
    },
  ];
  

const SamplingField = () => {
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
        row.fieldName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
      { header: "Field Name", accessor: "fieldName" },
      { header: "Field Type", accessor: "fieldType" },
      { header: "Registered By", accessor: "registeredBy" },
      { header: "Registered On", accessor: "registeredOn" },
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
        fieldName: item["Field Name"] || "",
        fieldType: item["Field Type"] || "",
        registeredBy: item["Registered By"] || "",
        registeredOn: item["Registered On"] || "",
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
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Sampling Field</h4>
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
              text="Add Sample Field"
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
                <CModalTitle>Add Fields</CModalTitle>
            </CModalHeader>
            <CModalBody>

                <CFormInput
                    className="mb-3"
                    type="text"
                    label="Field Name"
                    placeholder="Sample Type Name"
                />
                <CFormSelect
                    className="mb-3"
                    type="select"
                    label="Field Type"
                    options={[
                        "Select",
                        { label: "Radio Button", value: "Radio Button" },
                        { label: "Label", value: "Label" },
                        { label: "Entry Field", value: "Entry Field" },
                        { label: "Date Field", value: "Date Field" }
                    ]}
                />

            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton color="primary">Submit</CButton>
            </CModalFooter>
        </CModal>
    );
};

export default SamplingField
