



import React, { useEffect, useState } from "react";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import ReusableModal from "../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import { toast } from "react-toastify";

const fields = [
  { label: "User ID", key: "userId" },
  { label: "User Name", key: "user" },
  { label: "Role", key: "role" },
  { label: "Department", key: "department" },
  { label: "Joining Date", key: "joiningDate" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
  { label: "Added By", key: "addedBy" },
];

const Users = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/users`);
      const formattedData = response.data[0]?.users || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Users data:", error);
      toast.error("Failed to fetch Users data");
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewModalData(null);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/users/${item.uniqueId}`);
      if (response.status === 200) {
        toast.success("User deleted successfully");
        fetchUsersData();
      }
    } catch (error) {
      console.error("Error deleting User:", error);
      toast.error("Failed to delete User");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

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
  
  const filteredData = data.filter((row) => {
    const userName = row.user || "";
    return (
      userName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      userId: item["User ID"] || "",
      user: item["User Name"] || "",
      role: item["Role"] || "",
      department: item["Department"] || "",
      joiningDate: item["Joining Date"] || new Date().toISOString().split("T")[0],
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
      addedBy: item["Added By"] || "",
    }));

    setData(updatedData);
    setIsModalsOpen(false);
    toast.success("Data imported successfully");
  };

  const addNewUser = async (newUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/users`, newUser);
      if (response.status === 200) {
        toast.success("User added successfully");
        fetchUsersData();
        closeModal();
      }
    } catch (error) {
      console.error("Error adding User:", error);
      toast.error("Failed to add User");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus || !viewModalData || !viewModalData.uniqueId) {
      toast.error("Invalid Status update");
      return;
    }
    try {
      const response = await axios.put(`${BASE_URL}/manage-lims/update/users/${viewModalData.uniqueId}`, { status: newStatus });
      if (response.status === 200) {
        toast.success("Status updated successfully");
        fetchUsersData();
        closeViewModal();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");

    const handleAdd = () => {
      const newUser = {
        userId,
        user: userName,
        role,
        department,
        joiningDate: new Date().toISOString().split("T")[0],
        attachment: "",
        status: "Active",
        addedBy: "Admin", // You might want to get this from the current user's context
      };
      onAdd(newUser);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="User ID"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <CFormInput
            type="text"
            label="User Name"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Department"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/users/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        toast.success("User updated successfully");
        fetchUsersData();
        closeEditModal();
      }
    } catch (error) {
      console.error("Error updating User:", error);
      toast.error("Failed to update User");
    }
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
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Edit User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="User ID"
            placeholder="User ID"
            value={formData?.userId || ""}
            onChange={handleChange}
            name="userId"
          />
          <CFormInput
            type="text"
            label="User Name"
            placeholder="User Name"
            value={formData?.user || ""}
            onChange={handleChange}
            name="user"
          />
          <CFormInput
            type="text"
            label="Role"
            placeholder="Role"
            value={formData?.role || ""}
            onChange={handleChange}
            name="role"
          />
          <CFormInput
            type="text"
            label="Department"
            placeholder="Department"
            value={formData?.department || ""}
            onChange={handleChange}
            name="department"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className="fw-bold">User Management/Users</h4>
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
          <PDFDownload
            columns={columns}
            data={filteredData}
            fileName="Users.pdf"
            title="User Management Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add User" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewUser}
        />
      )}
      {isViewModalOpen && viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="User Details"
          updateStatus={handleStatusUpdate}
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
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default Users;
