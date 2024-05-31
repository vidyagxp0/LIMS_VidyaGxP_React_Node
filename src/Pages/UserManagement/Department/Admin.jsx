import React, { useState } from 'react';
import './Admin.css';
import { FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

const Admin = () => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };


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

    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);
    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    // Function to render table rows for current page
    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.analyst}</td>
                <td>{employee.role}</td>
                <td>
                    {employee.email}
                    <button className='btn btn-right p-1 m-2'>Resend Email</button>
                </td>
                <td>{employee.addedOn}</td>
                <td>
                    <button
                        style={{
                            background: employee.status === 'Active' ? 'green' : 'red',
                            color: 'white',
                            width: '110px'
                        }}
                        className="btn d-flex py-2 px-3 small rounded fw-bold">
                        {employee.status}
                    </button>
                </td>
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

    // Function to handle pagination
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
        <div className="mx-5">
            <div className="row my-5">
                <div className="main-head">
                    <div className="title fw-bold fs-5 py-4">Admin/Employee</div>
                </div>
                <div className="d-flex justify-content-between my-4">
                    <div className="dropdown">
                        <CFormSelect
                            onChange={(e) => {
                                setSelectedStatus(e.target.value);
                                setCurrentPage(1);
                            }}
                            value={selectedStatus}
                            style={{ border: "2px solid gray", width: "220px" }}
                        >

                            <option value="All">All</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </CFormSelect>
                    </div>
                    <div className="">
                        <CButton color="primary" onClick={() => setAddModal(true)}>Add User</CButton>
                    </div>
                </div>

            </div>

            <div className=' bg-white rounded' style={{ border: "2px solid gray" }} >
                <table className="mb-0 table-striped table table-responsive">
                    <thead>
                        <tr>
                            <th style={{ background: "#3C496A", color: "white" }}>S.No.</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Employee ID</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Analyst Name</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Role</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Email</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Status</th>
                            <th style={{ background: "#3C496A", color: "white" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between align-items-center my-4">
                <div className="pagination">
                    <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                        &lt;&lt;
                    </button>
                    <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                    <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                        &gt;&gt;
                    </button>
                </div>
                <button className="btn d-flex align-items-center border" onClick={nextToLastPage}>
                    Next <FaArrowRight className='ms-2' />
                </button>
            </div>

            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
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
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete User</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Are you sure you want to delete this user?</p>
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
    );
};

export default Admin;
