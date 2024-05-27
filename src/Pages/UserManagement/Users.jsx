import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const Users = () => {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');

    
    const employees = [

        { id: "USER-022024-000001", user: 'John Doe',  role: 'admin', departments: 'QC', joiningDate: '2024-05-15' , addedBy: 'admin',  status: 'Active'  },
        { id: "USER-022024-000002", user: 'Jane Smith',  role: 'admin', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000003", user: 'John Doe',  role: 'admin', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000004", user: 'Jane Smith',  role: 'qa', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000005", user: 'John Doe',  role: 'qa', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000006", user: 'Jane Smith',  role: 'qc', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000007", user: 'John Doe',  role: 'analyst', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000008", user: 'Jane Smith',  role: 'mgr', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000009", user: 'John Doe',  role: 'si', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-0000010", user: 'Jane Smith',  role: 'qa', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },

    ];

    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

    // Function to render table rows for current page
    const renderRows = () => {
        return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.departments}</td>
                <td>{employee.joiningDate}</td>
                <td> <button style={{ background: employee.status === 'Active' ? 'green' : 'red', color: 'white', width: '110px' }} className=" btn d-flex py-2 px-3  small rounded fw-bold"> {employee.status}</button></td>
            
                <td>{employee.addedBy}</td>
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

    const handleDelete = () => {
        console.log(`Deleting employee: ${selectedEmployee.name}`);
        // Perform delete operation here
        setSelectedEmployee(null);
    };

    return (
        <div className=" mx-5 ">
        <div className="row my-5 ">
                <div className="main-head">
                    
                    <div className="title fw-bold fs-5 py-4">User Management/Users</div>
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
                        style={{background:"#4B49B6"}}
                    >
                        <CgAddR />  <span>Add user</span>
                    </button>
                </div>
                 {/* right toggle of add user  */}


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
                        
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="userName" placeholder="UserName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" id="contactNumber" placeholder="+91 0000000000" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Gmail Address</label>
                            <input type="text" className="form-control" id="email" placeholder="sample@gmail.com" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="plant" className="form-label">Plant</label>
                            <select className="form-select" id='plant' aria-label="Default select example">
                                <option selected>Select... </option>
                                <option value="1">Master</option>
                                <option value="2">win_Master</option>
                                <option value="3">plant3</option>
                                <option value="4">PlantDemo4</option>                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Department</label>
                            <select className="form-select" id='department' aria-label="Default select example">
                                <option selected>Select Department </option>
                                <option value="1">Admin</option>
                                <option value="2">Quality Assurance</option>
                                <option value="3">Quality Check</option>
                                <option value="4">Store</option>                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Role</label>
                            <select className="form-select" id='role' aria-label="Default select example">
                                <option selected>Select Role </option>
                                <option value="1">No Options</option>                                                              
                            </select>
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
                            <div id="line1"><h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete User</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    onClick={() => setSelectedEmployee(null)}
                                ></button>
                            </div>
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

            {/* Employee table */}
            <div className='table-responsive bg-white rounded py-3 px-4 mt-5' style={{ boxShadow: "0px 0px 3px black" }}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Departments</th>
                            <th>Joining Date</th>
                            <th>Status</th>
                            <th>Added By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}



            <div className="d-flex justify-content-between align-items-center mt-5">
                        <div className="pagination">
                            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                                &gt;&gt;
                            </button>
                        </div>
                        <button className="btn " onClick={nextToLastPage}>
                            Next <FaArrowRight />
                        </button>
                    </div>

        </div>
    );
};

export default Users;

