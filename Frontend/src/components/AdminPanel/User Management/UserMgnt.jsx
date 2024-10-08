import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserMgnt = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewPermissionModal, setViewPermissionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/admin/get-all-users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const responseData = response.data.response;
      console.log(responseData, "989898989898");
      if (responseData) {
        setData(responseData || []);
      } else {
        console.error("Failed to fetch users:", responseData.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Error fetching users");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      getUsers();
    } else {
      console.warn("No admin token found.");
      toast.error("Please log in to continue.");
    }
  }, []);

  const totalPages = Math.ceil(data.length / pageSize);
  // const paginatedData = data?.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:9000/admin/delete-user/${deleteId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(data.filter((item) => item.id !== deleteId));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    } finally {
      setDeleteModal(false);
    }
  };

  const handleEditClick = (item) => {
    setEditData(item);
    setEditModal(true);
  };

  const handleViewPermissionClick = (item) => {
    setEditData(item);
    setViewPermissionModal(true);
  };

  const handleEditConfirm = async (updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/admin/edit-user/${updatedData.id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const dataUpdated = response.data;

      if (dataUpdated.success) {
        setData(
          data.map((item) => (item.id === updatedData.id ? updatedData : item))
        );
        toast.success("User updated successfully");
      } else {
        toast.error(dataUpdated.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    } finally {
      setEditModal(false);
    }
  };

  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/admin/add-user",
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setData([...data, response.data.data]);
        toast.success("User added successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user");
    } finally {
      setAddModal(false);
    }
  };

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">User management</div>
          <div className=" fs-5 py-4">
            <CButton
              color="primary"
              onClick={() => setAddModal(true)}
              style={{ fontSize: "0.9rem" }}
            >
              Add User
            </CButton>
          </div>
        </div>
      </div>

      <div
        className="rounded bg-white"
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          boxShadow: "5px 5px 20px #5D76A9",
        }}
      >
        <CTable align="middle" responsive className="mb-0 table-responsive">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                S.No
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                ID
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                Name
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                Designation
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                Email
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                Actions
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data?.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.user_id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.designation}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-success text-light cursor-pointer"
                      onClick={() => handleViewPermissionClick(item)}
                    >
                      View Permission
                    </button>
                    <button
                      className="btn btn-primary text-light cursor-pointer"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger text-light cursor-pointer"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>

      <div className="d-flex justify-content-end my-4">
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <span className="page-link" onClick={handlePrevPage}>
                Previous
              </span>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a className="page-link" href="#" onClick={handleNextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {addModal && (
        <StatusModal
          visible={addModal}
          closeModal={() => setAddModal(false)}
          addUser={handleAddUser}
        />
      )}
      {editModal && (
        <EditModal
          visible={editModal}
          closeModal={() => setEditModal(false)}
          data={editData}
          confirmEdit={handleEditConfirm}
        />
      )}
      {viewPermissionModal && (
        <ViewPermissionModal
          visible={viewPermissionModal}
          closeModal={() => setViewPermissionModal(false)}
          data={editData}
        />
      )}
      {deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

const StatusModal = (_props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  console.log(token, "adminToken");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    gender: "",
    password: "",
    rolesArray: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!token) {
      toast.error("No authorization token found.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:9000/admin/add-user",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data, "000000000000000000");
  
      if (data.success) {
        toast.success(data.message || "User added successfully!");
      } else {
        toast.error(data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred.");
      } else if (error.request) {
        toast.error("No response from server.");
      } else {
        toast.error("An error occurred: " + error.message);
      }
    }
  };
  

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
        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Full Name <span style={{ color: "red" }}>*</span>
            </>
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="email"
          label={
            <>
              Email <span style={{ color: "red" }}>*</span>
            </>
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <CFormSelect
          className="mb-3"
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
        />
        <CFormInput
          className="mb-3"
          type="password"
          label={
            <>
              Password <span style={{ color: "red" }}>*</span>
            </>
          }
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <CFormSelect
          className="mb-3"
          label="Roles"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            { label: "Admin", value: "Admin" },
            { label: "Manager", value: "Manager" },
            { label: "Quality Analyst", value: "Quality Analyst" },
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Add User00
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const EditModal = (_props) => {
  const [formData, setFormData] = useState({ ..._props.data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    _props.confirmEdit(formData);
  };

  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>Edit User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className="mb-3"
          type="text"
          label={
            <>
              Full Name <span style={{ color: "red" }}>*</span>
            </>
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="email"
          label={
            <>
              Email <span style={{ color: "red" }}>*</span>
            </>
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <CFormInput
          className="mb-3"
          type="text"
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <CFormSelect
          className="mb-3"
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            "Select ",
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
        />
        <CFormInput
          className="mb-3"
          type="password"
          label={
            <>
              Password <span style={{ color: "red" }}>*</span>
            </>
          }
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <CFormSelect
          className="mb-3"
          label="Roles"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            "Select ",
            { label: "Admin", value: "Admin" },
            { label: "Manager", value: "Manager" },
            { label: "Quality Analyst", value: "Quality Analyst" },
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Update User
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const ViewPermissionModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
    >
      <CModalHeader>
        <CModalTitle>View Permission</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Permissions for {_props.data.name}</p>
        {/* Display user permissions here */}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (_props) => {
  return (
    <CModal
      alignment="center"
      visible={_props.visible}
      onClose={_props.closeModal}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Delete User
        </CModalTitle>
      </CModalHeader>
      <div
        className="modal-body"
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          lineHeight: "1.5",
          marginBottom: "1rem",
          columnGap: "0px",
          border: "0px !important",
        }}
      >
        <p>Are you sure you want to delete this User?</p>
      </div>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={_props.closeModal}
          style={{ marginRight: "0.5rem", fontWeight: "500" }}
        >
          Cancel
        </CButton>
        <CButton
          color="danger"
          onClick={_props.confirmDelete}
          style={{ fontWeight: "500", color: "white" }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UserMgnt;
