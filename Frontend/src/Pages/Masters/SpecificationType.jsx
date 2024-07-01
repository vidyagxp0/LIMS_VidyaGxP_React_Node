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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    specificationType: "Type 1",
    addedOn: "2024-01-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    specificationType: "Type 2",
    addedOn: "2024-01-02",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 3,
    specificationType: "Type 3",
    addedOn: "2024-01-03",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 4,
    specificationType: "Type 4",
    addedOn: "2024-01-04",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 5,
    specificationType: "Type 5",
    addedOn: "2024-01-05",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 6,
    specificationType: "Type 6",
    addedOn: "2024-01-06",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 7,
    specificationType: "Type 7",
    addedOn: "2024-01-07",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 8,
    specificationType: "Type 8",
    addedOn: "2024-01-08",
    status: "Inactive",
  },
  {
    checkbox: false,
    sno: 9,
    specificationType: "Type 9",
    addedOn: "2024-01-09",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 10,
    specificationType: "Type 10",
    addedOn: "2024-01-10",
    status: "Inactive",
  },
];


function SpecificationType() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.specificationType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
          <CModalTitle>Update specification type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Update information and add new specification type</p>
  
          <CFormInput
            className='mb-3'
            type="text"
            label="Specification Type Name"
            placeholder="Specification Type Name"
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
    { header: "Specification Type", accessor: "specificationType" },
    { header: "Added On", accessor: "addedOn" },
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
    console.log('Deleted item:', item);
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Specifications Type</h4>
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
          <div className="float-right">
            <ATMButton
              text="Add Specifications Type"
              color="blue"
              
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

      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={closeModal} />}
      {viewModalData && <ViewModal visible={viewModalData} closeModal={closeViewModal} />}
    </>
  );
}

export default SpecificationType;