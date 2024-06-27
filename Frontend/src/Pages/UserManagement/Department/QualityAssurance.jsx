import React, { useState } from 'react';
import './Admin.css';
import { FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

const QualityAssurance = () => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: " red", color: "white", width: "110px" };

    const [employees, setEmployees] = useState([
        { id: "USER-022024-000001", name: 'John Doe', analyst: 'Data Analyst', role: 'User', email: 'john@example.com', addedOn: '2024-05-15', status: 'Active' },
        { id: "USER-022024-000002", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },
        { id: "USER-022024-000003", name: 'John Doe', analyst: 'Data Analyst', role: 'User', email: 'john@example.com', addedOn: '2024-05-15', status: 'Active' },
        { id: "USER-022024-000004", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },
        { id: "USER-022024-000005", name: 'John Doe', analyst: 'Data Analyst', role: 'User', email: 'john@example.com', addedOn: '2024-05-15', status: 'Active' },
        { id: "USER-022024-000006", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },
        { id: "USER-022024-000007", name: 'John Doe', analyst: 'Data Analyst', role: 'User', email: 'john@example.com', addedOn: '2024-05-15', status: 'Active' },
        { id: "USER-022024-000008", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },
        { id: "USER-022024-000009", name: 'John Doe', analyst: 'Data Analyst', role: 'User', email: 'john@example.com', addedOn: '2024-05-15', status: 'Active' },
        { id: "USER-022024-000010", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },
    ]);

    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.analyst}</td>
                <td>{employee.role}</td>
                <td>{employee.email}
                   <button  style={{backgroundColor:'#577B8D',color:'white',borderRadius:'3px', fontSize:'0.7rem',padding:'3px',marginLeft:'2px'}}>Resend Email</button>
                </td>
                <td>{employee.addedOn}</td>
                <td>  <button
              className={`p-1 small w-100 rounded text-light d-flex justify-content-center align-items-center bg-${
                employee.status === "Active"
                  ? "green-700"
                  : employee.status === "Inactive"
                  ? "red-700"
                  : "white"
              }`}  style={{fontSize:'10px'}}
            >
              {employee.status}
            </button></td>
                <td>

                    <div className="d-flex gap-3">

                        <div
                            className="cursor-pointer"
                            onClick={() => setAddModal(true)}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div className="cursor-pointer" onClick={() => handleDeleteClick(employee.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </td>
            </tr>
        ));
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== deleteId));
        setDeleteModal(false);
    };

    return (
        <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className=" fw-bold">Quality Assurance/Employee</h4>
      </div>
      <CRow className="mt-5 mb-3 d-flex justify-content-between">
        <CCol sm={3}>
          <CFormSelect
            style={{ fontSize: "0.9rem" }}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            value={selectedStatus}
          >
            <option value="All">All</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </CFormSelect>
        </CCol>

        <CCol sm={3}>
          <div className="d-flex justify-content-end">
            <CButton
              color="primary"
              style={{ fontSize: "0.9rem" }}
              onClick={() => setAddModal(true)}
            >
              Add User
            </CButton>
          </div>
        </CCol>
      </CRow>

      <div
        className=" bg-white rounded"
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          boxShadow: "5px 5px 20px #5D76A9",
        }}
      >
        <table className="mb-0 table table-responsive">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white" }}>S.No.</th>
              <th style={{ background: "#5D76A9", color: "white" }}>
                Employee ID
              </th>
              <th style={{ background: "#5D76A9", color: "white" }}>
                Analyst Name
              </th>
              <th style={{ background: "#5D76A9", color: "white" }}>Role</th>
              <th style={{ background: "#5D76A9", color: "white" }}>Email</th>
              <th style={{ background: "#5D76A9", color: "white" }}>
                Added On
              </th>
              <th style={{ background: "#5D76A9", color: "white" }}>Status</th>
              <th style={{ background: "#5D76A9", color: "white" }}>Action</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>

   

      <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
                       

      

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
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
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Add User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Please Add User To fill This Details</p>
                <CFormInput
                className='mb-3'
                    type="text"
                    label="User Name"
                    placeholder="UserName "
                />
                <CFormInput
                className='mb-3'
                    type="number"
                    label="Contact Number"
                    placeholder="+91 0000000000 "
                />
                <CFormInput
                className='mb-3'
                    type="email"
                    label="Gmail Address"
                    placeholder="sample@gmail.com"
                />
                <CFormInput
                className='mb-3'
                    type="text"
                    label="Address"
                    placeholder="Address "
                />
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton color="primary">Submit</CButton>
            </CModalFooter>
        </CModal>
    );
};

const DeleteModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                <CModalHeader>
                    <CModalTitle>Delete User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Are you sure you want to delete this user { } ?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        onClick={_props.closeModal}
                        style={{
                            marginRight: "0.5rem",
                            fontWeight: "500",
                        }}
                    >
                        Cancel
                    </CButton>
                    <CButton
                        color="danger"
                        onClick={_props.confirmDelete}
                        style={{
                            fontWeight: "500",
                            color: "white",
                        }}
                    >
                        Delete
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default QualityAssurance;
