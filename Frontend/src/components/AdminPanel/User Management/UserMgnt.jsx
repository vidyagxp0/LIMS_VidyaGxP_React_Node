import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from 'axios';
import { BASE_URL } from '../../../config.json';

const UserMgnt = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewPermissionModal, setViewPermissionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/admin/get-all-users`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.response);
      setData(response.data.response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/admin/get-all-roles`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.response, "ROlessssss");
      setRoles(response.data.response); // Assuming the response data is an array of roles
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

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

  const handleDeleteConfirm = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setDeleteModal(false);
  };

  const handleEditClick = (item) => {
    setEditData(item);
    setEditModal(true);
  };

  const handleViewPermissionClick = (item) => {
    setEditData(item);
    setViewPermissionModal(true);
  };

  const handleEditConfirm = (updatedData) => {
    setData(data.map((item) => (item.id === updatedData.id ? updatedData : item)));
    setEditModal(false);
  };

  const handleAddUser = (newUser) => {
    setData([...data, newUser]);
    setAddModal(false);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    }).replace(',', ''); // Remove comma between date and time
  };

  return (
    <div className="mx-5">
      <div className="row my-2">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">User management</div>
          <div className="fs-5 py-4">
            <CButton color="primary" onClick={() => setAddModal(true)} style={{ fontSize: '0.9rem' }}>Add User</CButton>
          </div>
        </div>
      </div>

      <div className="rounded bg-white" style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}>
        <CTable align="middle" responsive className="mb-0 table-responsive">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">S.No</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Designation</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Gender</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {paginatedData.map((item, index) => (
              <CTableRow key={item.id}>
                <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                <CTableDataCell>{item.user_id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.designation}</CTableDataCell>
                <CTableDataCell>{item.gender}</CTableDataCell>
                <CTableDataCell>{formatDate(item.createdAt)}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex gap-3">
                    <button className="btn btn-success text-light cursor-pointer" onClick={() => handleViewPermissionClick(item)}>View Permission</button>
                    <button className="btn btn-primary text-light cursor-pointer" onClick={() => handleEditClick(item)}>Edit</button>
                    <button className="btn btn-danger text-light cursor-pointer" onClick={() => handleDeleteClick(item.id)}>Delete</button>
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
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <span className="page-link" onClick={handlePrevPage}>Previous</span>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={handleNextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} addUser={handleAddUser} roles={roles} />}
      {editModal && <EditModal visible={editModal} closeModal={() => setEditModal(false)} data={editData} confirmEdit={handleEditConfirm} roles={roles} />}
      {viewPermissionModal && <ViewPermissionModal visible={viewPermissionModal} closeModal={() => setViewPermissionModal(false)} data={editData} />}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
    </div>
  );
}

const StatusModal = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    gender: '',
    password: '',
    role: '',
    // profilePic: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     profilePic: e.target.files[0] // Store the selected file
  //   }));
  // };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
  
      if (!token) {
        console.error("Token not found. User might not be logged in.");
        return;
      }
  
      const formDataToSend = new FormData(); // Create a FormData object
  
      // Append user data to FormData
      Object.keys(formData).forEach(key => {
        // Check if formData[key] is an object or array and append accordingly
        if (Array.isArray(formData[key])) {
          formData[key].forEach((value, index) => {
            formDataToSend.append(`${key}[${index}]`, value);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      const response = await axios.post(`${BASE_URL}/admin/add-user`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`, // Add Bearer token for authorization
          // 'Content-Type': 'multipart/form-data'
        }
      });
  
      // Assuming the response contains the newly created user
      const newUser = response.data; // Adjust based on your API response structure
  
      // If addUser is a prop function passed down to add the new user to the parent state
      if (props.addUser) {
        props.addUser(newUser);
      }
  
      // If closeModal is a prop function passed to close the modal after submission
      if (props.closeModal) {
        props.closeModal();
      }
  
      console.log("User successfully added:", newUser); // For debugging
  
    } catch (error) {
      // Log detailed error information for easier debugging
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during setup:", error.message);
      }
    }
  };
  

  return (
    <CModal alignment="center" visible={props.visible} onClose={props.closeModal}>
      <CModalHeader>
        <CModalTitle>Add User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className='mb-3'
          type="text"
          label={
            <>
              Full Name <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <CFormInput
          className='mb-3'
          type="email"
          label={
            <>
              Email <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <CFormSelect
          className='mb-3'
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" }
          ]}
        />
        <CFormInput
          className='mb-3'
          type="password"
          label={
            <>
              Password <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <CFormSelect
          className='mb-3'
          label="Roles"
          name="role" // Ensure this is singular
          value={formData.role} // Corrected to formData.role
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            ...props.roles.map((role) => ({ label: role.role, value: role.role_id })) // Pass roles as props
          ]}
        />
        {/* <CFormInput
          className='mb-3'
          type="file"
          label="Profile Picture"
          name="profilePic"
          onChange={handleFileChange} // Handle file selection
        /> */}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={props.closeModal}>Back</CButton>
        <CButton color="primary" onClick={handleSubmit}>Add User</CButton>
      </CModalFooter>
    </CModal>
  );
};

const EditModal = (props) => {
  const [formData, setFormData] = useState({ ...props.data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    props.confirmEdit(formData);
  };

  return (
    <CModal alignment="center" visible={props.visible} onClose={props.closeModal}>
      <CModalHeader>
        <CModalTitle>Edit User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          className='mb-3'
          type="text"
          label={
            <>
              Full Name <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <CFormInput
          className='mb-3'
          type="email"
          label={
            <>
              Email <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <CFormInput
          className='mb-3'
          type="text"
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <CFormSelect
          className='mb-3'
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" }
          ]}
        />
        <CFormInput
          className='mb-3'
          type="password"
          label={
            <>
              Password <span style={{ color: 'red' }}>*</span>
            </>
          }
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <CFormSelect
          className='mb-3'
          label="Roles"
          name="role" // Ensure this is singular
          value={formData.role} // Corrected to formData.role
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            ...props.roles.map((role) => ({ label: role.role, value: role.role_id })) // Pass roles as props
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={props.closeModal}>Back</CButton>
        <CButton color="primary" onClick={handleSubmit}>Update User</CButton>
      </CModalFooter>
    </CModal>
  );
};

const ViewPermissionModal = (props) => {
  return (
    <CModal alignment="center" visible={props.visible} onClose={props.closeModal}>
      <CModalHeader>
        <CModalTitle>View Permission</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Permissions for {props.data.name}</p>
        {/* Display user permissions here */}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={props.closeModal}>Close</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (props) => {
  return (
    <CModal alignment="center" visible={props.visible} onClose={props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>Delete User</CModalTitle>
      </CModalHeader>
      <div className="modal-body" style={{ fontSize: "1.2rem", fontWeight: "500", lineHeight: "1.5", marginBottom: "1rem", columnGap: "0px", border: "0px !important" }}>
        <p>Are you sure you want to delete this User?</p>
      </div>
      <CModalFooter>
        <CButton color="secondary" onClick={props.closeModal} style={{ marginRight: "0.5rem", fontWeight: "500" }}>Cancel</CButton>
        <CButton color="danger" onClick={props.confirmDelete} style={{ fontWeight: "500", color: "white" }}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UserMgnt;