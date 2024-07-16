import React, { useEffect, useState } from "react";
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
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    userId: "USR001",
    user: "User 1",
    role: "Role 1",
    department: "Department 1",
    joiningDate: "2024-01-01",
    attachment: "attachment",
    status: "Active",
    addedBy: "Admin 1",
  },
  {
    checkbox: false,
    sno: 2,
    userId: "USR002",
    user: "User 2",
    role: "Role 2",
    department: "Department 2",
    joiningDate: "2024-01-02",
    attachment: "attachment",
    status: "Inactive",
    addedBy: "Admin 2",
  },
  {
    checkbox: false,
    sno: 3,
    userId: "USR003",
    user: "User 3",
    role: "Role 3",
    department: "Department 3",
    joiningDate: "2024-01-03",
    attachment: "attachment",
    status: "Active",
    addedBy: "Admin 3",
  },
];

const Users = () => {
  const [data, setData] = useState(initialData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Inactive");
  const [editModalData, setEditModalData] = useState(null);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "user ID", accessor: "userId" },
    { header: "User", accessor: "user" },
    { header: "Role", accessor: "role" },
    { header: "Department", accessor: "department" },
    { header: "Joining Date", accessor: "joiningDate" },
    { header: "Status", accessor: "status" },
    { header: "Added By", accessor: "addedBy" },
    { header: "attachment", accessor: "attachment" },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      userId: item["User Id"] || "",
      user: item["User"] || "",
      role: item["Role"] || "",
      department: item["Department"] || "",
      joiningDate: item["Joining Date"] || "",
      reviewDate: item["Review Date"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      addedBy: item["Added By"] || "",
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false); // Update data state with parsed Excel data
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    setData((prevData)=>[
      ...prevData,
      {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [plant, setPlant] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");

    const handleAdd = () => {
      const newCondition = {
        userId: "EMP00",
        user: name,
        role: role,
        department: department,
        addedBy: "Admin",
        joiningDate: new Date().toISOString().split("T")[0],
        attachment: "attachment",
        action: [],
        status: "Active",
      };
      onAdd(newCondition);
      closeModal();
    };
    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Add User </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput 
            type="text"
             label="User Name" 
            placeholder="UserName " 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <CFormInput
              type="number"
              label="Contact Number"
              placeholder="+91 0000000000 "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <CFormInput
              type="email"
              label="Gmail Address"
              placeholder=" sample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CFormInput
             type="text" 
            label="Address"
             placeholder="Address "
              value={address} 
            onChange={(e) => setAddress(e.target.value)} />

            <CFormSelect
              type="select"
              label="Plant"
              placeholder="Select... "
              value={plant}
              onChange={(e) => setPlant(e.target.value)}
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
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
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
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={[
                "Select Role",
                { label: "No Options", value: "No Options" },
              ]}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton color="primary" onClick={handleAdd}>Submit</CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <>
        <CModal alignment="center" visible={visible} onClose={closeModal}>
          <CModalHeader>
            <CModalTitle>Add User </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput 
            type="text"
             label="User Name" 
            placeholder="UserName " 
            value={formData?. user||""}
            onChange={handleChange} 
            name="user"
            />
            <CFormInput
              type="number"
              label="Contact Number"
              placeholder="+91 0000000000 "
              value={formData?.contact||""}
              onChange={handleChange}
              name="contact"
            />
            <CFormInput
              type="email"
              label="Gmail Address"
              placeholder=" sample@gmail.com"
              value={formData?.email||""}
              onChange={handleChange}
              name="email"
            />

            <CFormInput
             type="text" 
            label="Address"
             placeholder="Address "
              value={formData?.address||""} 
            onChange={handleChange}
            name="address" 
             />

            <CFormSelect
              type="select"
              label="Plant"
              placeholder="Select... "
              value={formData?.plant||""}
              onChange={handleChange}
              options={[
                "Select...",
                { label: "Master", value: "Master" },
                { label: "win_Master", value: "win_Master" },
                { label: "plant3", value: "plant3" },
                { label: "PlantDemo4", value: "PlantDemo4" },
              ]}
              name="plant"
            />
            <CFormSelect
              type="select"
              label="Department"
              placeholder="Select Department"
              value={formData?.department||""}
              onChange={handleChange}
              options={[
                "Select Department",
                { label: "Admin", value: "Admin" },
                { label: "Quality Assurance", value: "Quality Assurance" },
                { label: "Quality Check", value: "Quality Check" },
                { label: "Store", value: "Store" },
              ]}
              name="department"
            />
            <CFormSelect
              type="select"
              label="Role"
              placeholder="Select Role "
              value={formData?.role||""}
              onChange={handleChange}
              options={[
                "Select Role",
                { label: "No Options", value: "No Options" },
              ]}
              name="role"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton color="primary" onClick={handleSave}>Submit</CButton>
          </CModalFooter>
        </CModal>
      </>
    );
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
          <ATMButton text="Add User" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        openEditModal={openEditModal}
      />

      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition}/>
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
        {editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default Users;
