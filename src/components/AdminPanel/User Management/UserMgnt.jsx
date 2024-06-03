import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

const UserMgnt = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewPermissionModal, setViewPermissionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);

  const [data, setData] = useState([
    { id: 'na-001', name: 'Admin', designation:'Admin',  email: 'Admin@gamil.com' },
    { id: 'na-002', name: 'Super Admin', designation:'Super Admin', email: 'SuperAdmin@gamil.com' },
    { id: 'na-003', name: 'User1', designation:'Manager', email: 'user1@gamil.com' },
    { id: 'na-004', name: 'User2', designation:'Quality Manager', email: 'user2@gamil.com' },
    { id: 'na-005', name: 'User3', designation:'Quality Analyst', email: 'user3@gamil.com' },
    { id: 'na-006', name: 'User4', designation:'User4', email: 'user4@gamil.com' },
    { id: 'na-007', name: 'User5', designation:'Quality Manager', email: 'user5@gamil.com' },
    { id: 'na-008', name: 'User6', designation:'User6', email: 'user6@gamil.com' },
    { id: 'na-009', name: 'User7', designation:'Quality Manager', email: 'user7@gamil.com' },
    { id: 'na-010', name: 'User8', designation:'User10', email: 'user8@gamil.com' }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextToLastPage = () => setCurrentPage(Math.ceil(data.length / pageSize));

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

  return (
    <div className="mx-5">
      <div className="row my-5">
        <div className="main-head d-flex justify-content-between">
          <div className="title fw-bold fs-5 py-4">User management</div>
          <div className=" fs-5 py-4">
            <CButton color="primary" onClick={() => setAddModal(true)} style={{ border: "2px solid gray ", width: "150px" }} >Add User</CButton>
          </div>
        </div>
      </div>

      <div className="rounded bg-white" style={{ border: "2px solid gray" }}>
        <CTable align="middle" responsive className="mb-0 table-striped table-responsive">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" >S.No</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col" >ID</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Designation</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.slice(startIndex, endIndex).map((item, index) => (
              <CTableRow key={item.id}>
                <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                <CTableDataCell>{item.id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.designation}</CTableDataCell>
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

      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="pagination">
          <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
            &lt;&lt;
          </button>
          <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
          <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
            &gt;&gt;
          </button>
        </div>
        <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
          Next <FaArrowRight className='ms-2' />
        </button>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} addUser={handleAddUser} />}
      {editModal && <EditModal visible={editModal} closeModal={() => setEditModal(false)} data={editData} confirmEdit={handleEditConfirm} />}
      {viewPermissionModal && <ViewPermissionModal visible={viewPermissionModal} closeModal={() => setViewPermissionModal(false)} data={editData} />}
      {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
    </div>
  );
}

const StatusModal = (_props) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    designation: '',
    gender: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newUser = {
      ...formData,
      id: `na-${Math.random().toString(36).substr(2, 9)}` // Generate a random ID
    };
    _props.addUser(newUser);
  };

  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
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
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            { label: "Select", value: "" },
            { label: "Admin", value: "Admin" },
            { label: "Manager", value: "Manager" },
            { label: "Quality Analyst", value: "Quality Analyst" }
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary" onClick={handleSubmit}>Add User</CButton>
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
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
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
            "Select ",
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
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            "Select ",
            { label: "Admin", value: "Admin" },
            { label: "Manager", value: "Manager" },
            { label: "Quality Analyst", value: "Quality Analyst" }
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Back</CButton>
        <CButton color="primary" onClick={handleSubmit}>Update User</CButton>
      </CModalFooter>
    </CModal>
  );
};

const ViewPermissionModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
      <CModalHeader>
        <CModalTitle>View Permission</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Permissions for { _props.data.name }</p>
        {/* Display user permissions here */}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={_props.closeModal}>Close</CButton>
      </CModalFooter>
    </CModal>
  );
};

const DeleteModal = (_props) => {
  return (
    <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
      <CModalHeader>
        <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>Delete User</CModalTitle>
      </CModalHeader>
      <div className="modal-body" style={{ fontSize: "1.2rem", fontWeight: "500", lineHeight: "1.5", marginBottom: "1rem", columnGap: "0px", border: "0px !important" }}>
        <p>Are you sure you want to delete this User?</p>
      </div>
      <CModalFooter>
        <CButton color="secondary" onClick={_props.closeModal} style={{ marginRight: "0.5rem", fontWeight: "500" }}>Cancel</CButton>
        <CButton color="danger" onClick={_props.confirmDelete} style={{ fontWeight: "500", color: "white" }}>Delete</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UserMgnt;
