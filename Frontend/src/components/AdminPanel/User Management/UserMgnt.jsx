import React, { useCallback, useEffect, useState } from "react";
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
import { BASE_URL } from "../../../config.json";
import { toast } from "react-toastify";

const UserMgnt = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewPermissionModal, setViewPermissionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/admin/get-all-users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.response);
      setData(response.data.response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  const fetchRoles = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/admin/get-all-roles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.response, "ROlessssss");
      setRoles(response.data.response);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  }, []);
  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, [fetchUsers, fetchRoles]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice(startIndex, endIndex);

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
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/admin/delete-user/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.filter((item) => item.id !== deleteId));
      setDeleteModal(false);
      toast.success("User successfully deleted");
      fetchUsers();
      fetchRoles();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
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
    console.log(updatedData.user_id, "Updated");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BASE_URL}/admin/edit-user/${updatedData.user_id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(
        data.map((item) =>
          item.id === response.data.id ? response.data : item
        )
      );
      setEditModal(false);
      toast.success("User successfully updated");
      fetchUsers();
      fetchRoles();
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date
      .toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      })
      .replace(",", ""); // Remove comma between date and time
  };

  return (
    <div className="mx-5">
      <div className="row my-2">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">User management</div>
          <div className="fs-5 py-4">
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
                Gender
              </CTableHeaderCell>
              <CTableHeaderCell
                style={{ background: "#5D76A9", color: "white" }}
                scope="col"
              >
                Created At
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
                Role
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
            {paginatedData.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                <CTableDataCell>{item.user_id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                {item.designation ? (
                  <CTableDataCell>{item.designation}</CTableDataCell>
                ) : (
                  <CTableDataCell>Null</CTableDataCell>
                )}
                {/* <CTableDataCell>{item.designation}</CTableDataCell> */}
                {item.gender ? (
                  <CTableDataCell>{item.gender}</CTableDataCell>
                ) : (
                  <CTableDataCell>Null</CTableDataCell>
                )}
                {/* <CTableDataCell>{item.gender}</CTableDataCell> */}
                <CTableDataCell>{formatDate(item.createdAt)}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>
                  {item.UserRoles && item.UserRoles.length > 0
                    ? item.UserRoles[0].role
                    : "No Role"}
                </CTableDataCell>

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
                      onClick={() => handleDeleteClick(item.user_id)}
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
          roles={roles}
        />
      )}
      {editModal && (
        <EditModal
          visible={editModal}
          closeModal={() => setEditModal(false)}
          data={editData}
          confirmEdit={handleEditConfirm}
          roles={roles}
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
const handleAddUser = async (newUser, props) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${BASE_URL}/admin/add-user`, newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    props.fetchUsers();
    props.setAddModal(false);
    toast.success("User successfully added");
  } catch (error) {
    console.error("Error adding user:", error);
    toast.error(error.response?.data.message);
  }
};

const ViewPermissionModal = (props) => {
  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
    >
      <CModalHeader className="flex justify-center">
        <CModalTitle className="text-center text-2xl font-semibold">
          View Permissions for {props.data?.name || "User"}
        </CModalTitle>
      </CModalHeader>
      <CModalBody className="p-3 mt-2">
        {props.data?.UserRoles && props.data.UserRoles.length > 0 ? (
          <ul className="space-y-3">
            {props.data.UserRoles.map((role, index) => (
              <li
                className="bg-gray-100 p-3 rounded-lg text-lg font-medium shadow-sm"
                key={index}
              >
                {role.role}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-lg">No roles assigned.</p>
        )}
      </CModalBody>
      <CModalFooter className="flex justify-end">
        <CButton color="light" onClick={props.closeModal}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (props) => {
  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
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
          onClick={props.closeModal}
          style={{ marginRight: "0.5rem", fontWeight: "500" }}
        >
          Cancel
        </CButton>
        <CButton
          color="danger"
          onClick={props.confirmDelete}
          style={{ fontWeight: "500", color: "white" }}
        >
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const EditModal = (props) => {
  const [formData, setFormData] = useState({ ...props.data });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rolesArray") {
      if (value === "selectAll") {
        // Select all roles
        const allRoles = props.roles.map((role) => role.role_id);
        setFormData((prevData) => ({
          ...prevData,
          [name]: allRoles,
        }));
      } else {
        const selectedRoles = Array.from(e.target.selectedOptions, (option) =>
          Number(option.value)
        ); // Convert to numbers
        setFormData((prevData) => ({
          ...prevData,
          [name]: selectedRoles,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    props.confirmEdit(formData);
  };

  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
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
          name="rolesArray"
          value={formData.rolesArray}
          onChange={handleChange}
          multiple
          options={[
            { label: "Select Role", value: "" },
            { label: "Select All", value: "selectAll" },
            ...props.roles.map((role) => ({
              label: role.role,
              value: role.role_id,
            })),
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={props.closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Update User
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

const StatusModal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    gender: "",
    password: "",
    user_type: "",
    rolesArray: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rolesArray") {
      if (value === "selectAll") {
        // Select all roles
        const allRoles = props.roles.map((role) => role.role_id);
        setFormData((prevData) => ({
          ...prevData,
          [name]: allRoles,
        }));
      } else {
        const selectedRoles = Array.from(e.target.selectedOptions, (option) =>
          Number(option.value)
        ); // Convert to numbers
        setFormData((prevData) => ({
          ...prevData,
          [name]: selectedRoles,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    await props.handleAddUser(formData); // Assume handleAddUser is passed as a prop
  };

  return (
    <CModal
      alignment="center"
      visible={props.visible}
      onClose={props.closeModal}
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
          name="rolesArray"
          value={formData.rolesArray}
          onChange={handleChange}
          multiple
          options={[
            { label: "Select Role", value: "" },
            { label: "Select All", value: "selectAll" },
            ...props.roles.map((role) => ({
              label: role.role,
              value: role.role_id,
            })),
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={props.closeModal}>
          Back
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Add User
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UserMgnt;
