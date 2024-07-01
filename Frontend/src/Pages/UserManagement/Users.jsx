import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
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
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";

const initialData = [
  { checkbox: false, sno: 1, userId: "USR001", user: "User 1", role: "Role 1", department: "Department 1", joiningDate: "2024-01-01", status: "Active", addedBy: "Admin 1", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit1" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete1" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 2, userId: "USR002", user: "User 2", role: "Role 2", department: "Department 2", joiningDate: "2024-01-02", status: "Inactive", addedBy: "Admin 2", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit2" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete2" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 3, userId: "USR003", user: "User 3", role: "Role 3", department: "Department 3", joiningDate: "2024-01-03", status: "Active", addedBy: "Admin 3", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit3" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete3" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 4, userId: "USR004", user: "User 4", role: "Role 4", department: "Department 4", joiningDate: "2024-01-04", status: "Inactive", addedBy: "Admin 4", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit4" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete4" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 5, userId: "USR005", user: "User 5", role: "Role 5", department: "Department 5", joiningDate: "2024-01-05", status: "Active", addedBy: "Admin 5", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit5" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete5" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 6, userId: "USR006", user: "User 6", role: "Role 6", department: "Department 6", joiningDate: "2024-01-06", status: "Inactive", addedBy: "Admin 6", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit6" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete6" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 7, userId: "USR007", user: "User 7", role: "Role 7", department: "Department 7", joiningDate: "2024-01-07", status: "Active", addedBy: "Admin 7", action: [
  
    <FontAwesomeIcon icon={faPenToSquare} key="edit7" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete7" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 8, userId: "USR008", user: "User 8", role: "Role 8", department: "Department 8", joiningDate: "2024-01-08", status: "Inactive", addedBy: "Admin 8", action: [
  
    <FontAwesomeIcon icon={faPenToSquare} key="edit8" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete8" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 9, userId: "USR009", user: "User 9", role: "Role 9", department: "Department 9", joiningDate: "2024-01-09", status: "Active", addedBy: "Admin 9", action: [
    
    <FontAwesomeIcon icon={faPenToSquare} key="edit9" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete9" className="cursor-pointer" />
  ]},
  { checkbox: false, sno: 10, userId: "USR010", user: "User 10", role: "Role 10", department: "Department 10", joiningDate: "2024-01-10", status: "Inactive", addedBy: "Admin 10", action: [
   
    <FontAwesomeIcon icon={faPenToSquare} key="edit10" className="mr-2 cursor-pointer" />,
    <FontAwesomeIcon icon={faTrashCan} key="delete10" className="cursor-pointer" />
  ]},
];

const Users = () => {
  const [data, setData] = useState(initialData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === 'All' || row.status === statusFilter)
    );
  });




  const columns = [
    { header: <input type="checkbox" onChange={handleSelectAll} />, accessor: 'checkbox' },
    { header: 'SrNo.', accessor: 'sno' },
    { header: 'user ID', accessor: 'userId' },
    { header: 'User', accessor: 'user' },
    { header: 'Role', accessor: 'role' },
    { header: 'Department.', accessor: 'department' },
    { header: 'Joining Date.', accessor: 'joiningDate' },
    { header: 'Status', accessor: 'status' },
    { header: 'Added By', accessor: 'addedBy' },
    {
      header: 'Actions',
      accessor: 'action',
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

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">User Management/Users</h4>
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
        <div className="float-right">
          <ATMButton text="Add User" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table columns={columns} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
       
      

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} />
      )}

    </div>
  );
};

const StatusModal = (_props) => {
  return (
    <>
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Add User </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput type="text" label="User Name" placeholder="UserName " />
          <CFormInput
            type="number"
            label="Contact Number"
            placeholder="+91 0000000000 "
          />
          <CFormInput
            type="email"
            label="Gmail Address"
            placeholder=" sample@gmail.com"
          />

          <CFormInput type="text" label="Address" placeholder="Address " />

          <CFormSelect
            type="select"
            label="Plant"
            placeholder="Select... "
            options={[
              "Select...",
              { label: "Master", value: "Master" },
              { label: "win_Master", value: "win_Master" },
              { label: "plant3", value: "plant3" },
              { label: "PlantDemo4", value: "PlantDemo4" },
            ]}
          />
          <CFormSelect
            type="select"
            label="Department"
            placeholder="Select Department"
            options={[
              "Select Department",
              { label: "Admin", value: "Admin" },
              { label: "Quality Assurance", value: "Quality Assurance" },
              { label: "Quality Check", value: "Quality Check" },
              { label: "Store", value: "Store" },
            ]}
          />
          <CFormSelect
            type="select"
            label="Role"
            placeholder="Select Role "
            options={[
              "Select Role",
              { label: "No Options", value: "No Options" },
            ]}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>
            Back
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};


export default Users;
