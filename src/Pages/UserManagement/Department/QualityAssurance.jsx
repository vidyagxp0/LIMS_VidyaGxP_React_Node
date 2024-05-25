import React, { useState } from 'react';
import './Admin.css';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const QualityAssurance = () => {
    const pageSize = 3; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');

    const employees = [
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
    ];

    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.analyst}</td>
                <td>{employee.role}</td>
                <td>{employee.email}
                    <button className='btn btn-right p-1 m-2'>Resend Email</button>
                </td>
                <td>{employee.addedOn}</td>
                <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-success' : 'bg-danger'} bg-opacity-25 text-${employee.status === 'Active' ? 'success' : 'danger'} d-flex justify-content-center p-1 m-2`}>{employee.status}</td>
                <td>
                    <span
                        className="btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    <Link to="#" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="offcanvas" data-bs-target="#deleteOffcanvas" aria-controls="deleteOffcanvas">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </Link>
                </td>
            </tr>
        ));
    };

    const nextPage = () => {
        if (endIndex < filteredEmployees.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
    };

    const handleDelete = () => {
        console.log(`Deleting employee: ${selectedEmployee.name}`);
        setSelectedEmployee(null);
    };

    return (
        <div className="mx-5">
            <div className="row my-5">
                <div className="main-head">
                    <div className="title fw-bold fs-5">Quality Assurance/Employee</div>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption' onChange={(e) => {
                                setSelectedStatus(e.target.value);
                                setCurrentPage(1); // Reset to the first page on filter change
                            }}>
                                <option value="All">All</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <button
                        id="Addbtn"
                        className="btn btn-right"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        style={{ background: "#4B49B6" }}
                    >
                        <CgAddR /> <span>Add user</span>
                    </button>
                </div>

                <div
                    className="offcanvas offcanvas-end overflow-y-scroll"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header ">
                        <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Add User
                        </h5>
                            <button
                                id="closebtn"
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>
                    <div className="offcanvas-body">
                        <p className='mb-3'>Please Add User To fill This Details</p>

                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="userName" placeholder="UserName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input type="text" className="form-control" id="contactNumber" placeholder="+91 0000000000" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Gmail Address</label>
                            <input type="text" className="form-control" id="email" placeholder="sample@gmail.com" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="number" className="form-control" id="address" placeholder="Address" />
                        </div>

                        <div className="d-flex justify-content-center gap-4 mt-4">
                            <button type="button" className='btn btn-secondary w-100' data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
                            <button type="button" className='btn btn-primary w-100'>Create User ID</button>
                        </div>
                    </div>
                </div>

                {selectedEmployee && (
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="deleteOffcanvas"
                        aria-labelledby="deleteOffcanvasLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete Employee</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                                onClick={() => setSelectedEmployee(null)}
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>Are you sure you want to delete {selectedEmployee.name}?</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-light" data-bs-dismiss="offcanvas" onClick={() => setSelectedEmployee(null)}>Back</button>
                                <button className="btn btn-info" onClick={handleDelete}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='table-responsive p-4 container1' style={{ boxShadow: "0px 0px 3px black" }}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Employee ID</th>
                            <th>Analyst Name</th>
                            <th>Role</th>
                            <th>Email verified</th>
                            <th>Added On</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <div className="pagination">
                    <div className='mr-5'>
                        <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'> {currentPage} </button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
                    </div>
                </div>
                <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default QualityAssurance;
