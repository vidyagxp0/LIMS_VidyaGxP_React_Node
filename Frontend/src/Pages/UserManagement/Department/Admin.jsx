import React, { useState } from "react";
import "./Admin.css";
import { FaArrowRight } from "react-icons/fa";
import { faPenToSquare, faTrashCan, faEye, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import SearchBar from "../../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../../components/ATM components/Button/ATMButton";
import Table from "../../../components/ATM components/Table/Table";
import ImportModal from "../../Modals/importModal";


const initialData = [
  {
    checkbox: false, sno: 1, employeeId: "EMP001", storageName: "Analyst 1", role: "Role 1", email: "analyst1@example.com", addedOn: "2024-01-01", attachment: "attachment", status: "Active", action: [

    ]
  },
  {
    checkbox: false, sno: 2, employeeId: "EMP002", storageName: "Analyst 2", role: "Role 2", email: "analyst2@example.com", addedOn: "2024-01-02", attachment: "attachment", status: "Inactive", action: [

    ]
  },
  {
    checkbox: false, sno: 3, employeeId: "EMP003", storageName: "Analyst 3", role: "Role 3", email: "analyst3@example.com", addedOn: "2024-01-03", attachment: "attachment", status: "Active", action: [

    ]
  },
  {
    checkbox: false, sno: 4, employeeId: "EMP004", storageName: "Analyst 4", role: "Role 4", email: "analyst4@example.com", addedOn: "2024-01-04", attachment: "attachment", status: "Inactive", action: [

    ]
  },
  {
    checkbox: false, sno: 5, employeeId: "EMP005", storageName: "Analyst 5", role: "Role 5", email: "analyst5@example.com", addedOn: "2024-01-05", attachment: "attachment", status: "Active", action: [

    ]
  },
  {
    checkbox: false, sno: 6, employeeId: "EMP006", storageName: "Analyst 6", role: "Role 6", email: "analyst6@example.com", addedOn: "2024-01-06", attachment: "attachment", status: "Inactive", action: [

    ]
  },
  {
    checkbox: false, sno: 7, employeeId: "EMP007", storageName: "Analyst 7", role: "Role 7", email: "analyst7@example.com", addedOn: "2024-01-07", attachment: "attachment", status: "Active", action: [

    ]
  },
  {
    checkbox: false, sno: 8, employeeId: "EMP008", storageName: "Analyst 8", role: "Role 8", email: "analyst8@example.com", addedOn: "2024-01-08", attachment: "attachment", status: "Inactive", action: [

    ]
  },
  {
    checkbox: false, sno: 9, employeeId: "EMP009", storageName: "Analyst 9", role: "Role 9", email: "analyst9@example.com", addedOn: "2024-01-09", attachment: "attachment", status: "Active", action: [

    ]
  },
  {
    checkbox: false, sno: 10, employeeId: "EMP010", storageName: "Analyst 10", role: "Role 10", email: "analyst10@example.com", addedOn: "2024-01-10", attachment: "attachment", status: "Inactive", action: [

    ]
  },
];

const Admin = () => {
  const [data, setData] = useState(initialData);
  const [addModal, setAddModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);

  // Calculate start and end indices for current page
  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

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
      row.storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === 'All' || row.status === statusFilter)
    );
  });




  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: 'checkbox' },
    { header: 'SrNo.', accessor: 'sno' },
    { header: 'Employee ID', accessor: 'employeeId' },
    { header: 'Analyst Name', accessor: 'storageName' },
    { header: 'Role', accessor: 'role' },
    { header: 'Email', accessor: 'email' },
    { header: 'Added On', accessor: 'addedOn' },
    { header: "attachment", accessor: "attachment" },
    { header: 'Status', accessor: 'status' },
    {
      header: 'Actions',
      accessor: 'action',
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() => onViewDetails(row)} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => onDeleteItem(row)} />
        </>
      ),
    },
  ];

  // Function to render table rows for current page

  // Function to handle pagination



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: data.length + index + 1,
      employeeId: item["Employee Id"] || "",
      storageName: item["Storage Name"] || "",
      role: item["Role"] || "",
      email: item["Email"] || "",
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
    <div>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className=" fw-bold">Admin/Employee</h4>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <Dropdown
              options={[
                { value: 'All', label: 'All' },
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },

              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add User" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />

      </div>


      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}
      {isModalsOpen && (
        <ImportModal isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
      )}
    </div>
  );
};

const StatusModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>Add User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Please Add User To fill This Details</p>
        <CFormInput
          className="mb-3"
          type="text"
          label="User Name"
          placeholder="UserName "
        />
        <CFormInput
          className="mb-3"
          type="number"
          label="Contact Number"
          placeholder="+91 0000000000 "
        />
        <CFormInput
          className="mb-3"
          type="email"
          label="Gmail Address"
          placeholder="sample@gmail.com"
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Address"
          placeholder="Address "
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



export default Admin;
