
import React, { useEffect, useState } from "react";
import "./Admin.css";
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
import Dropdown from "../../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../../components/ATM components/Button/ATMButton";
import Table from "../../../components/ATM components/Table/Table";
import ImportModal from "../../Modals/importModal";
import PDFDownload from "../../PDFComponent/PDFDownload ";
import ReusableModal from "../../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../../config.json";
import { toast } from "react-toastify";

const fields = [
  { label: "Employee ID", key: "employeeId" },
  { label: "Analyst Name", key: "storageName" },
  { label: "Role", key: "role" },
  { label: "Email", key: "email" },
  { label: "Added On", key: "addedOn" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
];

const Admin = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fetchAdminData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/departmentAdmin`);
      const formattedData = response.data[0]?.departmentAdmin || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
      toast.error("Failed to fetch admin data");
    }
  };

  useEffect(() => {
    fetchAdminData();
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
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/departmentAdmin/${item.uniqueId}`);
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Admin deleted successfully");
        fetchAdminData();
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("Failed to delete admin");
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
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Analyst Name", accessor: "storageName" },
    { header: "Role", accessor: "role" },
    { header: "Email", accessor: "email" },
    { header: "Added On", accessor: "addedOn" },
    {
      header: "Attachment",
      accessor: "attachment",
      Cell: ({ row }) => {
        const attachment = row.original.attachment;
        return attachment ? (
          <a href={attachment} target="_blank" rel="noopener noreferrer">
            View Attachment
          </a>
        ) : (
          "No Attachment"
        );
      },
    },
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
            onClick={() => openEditModal(row.original)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </>
      ),
    },
  ];

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const storageName = row.storageName || "";
        return (
          storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
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
      employeeId: item["Employee ID"] || "",
      storageName: item["Analyst Name"] || "",
      role: item["Role"] || "",
      email: item["Email"] || "",
      addedOn: item["Added On"] || new Date().toISOString().split("T")[0],
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  const addNewAdmin = async (newAdmin) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/departmentAdmin`, newAdmin);
      if (response.status === 200) {
        const addedAdmin = response.data.addLIMS;
        setData((prevData) => [
          ...prevData,
          {
            ...addedAdmin,
            sno: addedAdmin.uniqueId,
            checkbox: false,
          },
        ]);
        closeModal();
        fetchAdminData();
        toast.success("Admin added successfully");
      }
    } catch (error) {
      console.error("Error adding admin:", error);
      toast.error("Failed to add admin");
    }
  };


  
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData || !viewModalData.uniqueId) {
      console.error("No valid admin data selected for update");
      toast.error("No valid data selected for update");
      return;
    }
  
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/departmentAdmin/${viewModalData.uniqueId}`,
        { status: newStatus }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Status updated successfully");
        closeViewModal();
        fetchAdminData(); // Refresh the data after update
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };  
  
  

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [employeeId, setEmployeeId] = useState("");
    const [storageName, setStorageName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    const handleAdd = () => {
      const newAdmin = {
        employeeId,
        storageName,
        role,
        email,
        addedOn: new Date().toISOString().split("T")[0],
        attachment: "",
        status: "Active",
      };
      onAdd(newAdmin);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Admin</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Employee ID"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Analyst Name"
            placeholder="Analyst Name"
            value={storageName}
            onChange={(e) => setStorageName(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <CFormInput
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
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
        `${BASE_URL}/manage-lims/update/departmentAdmin/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId ? { ...item, ...updatedData } : item
        );
        setData(newData);
        toast.success("Admin updated successfully");
      }
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Failed to update admin");
    } finally {
      setEditModalData(null);
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
          <CModalTitle>Edit Admin</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Employee ID"
            placeholder="Employee ID"
            value={formData?.employeeId || ""}
            onChange={handleChange}
            name="employeeId"
          />
          <CFormInput
            type="text"
            label="Analyst Name"
            placeholder="Analyst Name"
            value={formData?.storageName || ""}
            onChange={handleChange}
            name="storageName"
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
            type="email"
            label="Email"
            placeholder="Email"
            value={formData?.email || ""}
            onChange={handleChange}
            name="email"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
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
        <h4 className="fw-bold">Admin/Employee</h4>
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
            fileName="User_Admin.pdf"
            title="User Management Admin Data"
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
          onAdd={addNewAdmin}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Admin Details"
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

export default Admin;


