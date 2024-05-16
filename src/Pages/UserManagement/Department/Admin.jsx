import React, { useState } from 'react';
import './Admin.css';
import { HiDotsHorizontal, HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';


const Admin = () => {
    const pageSize = 9; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Dummy data for the table
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
        { id: "USER-022024-0000010", name: 'Jane Smith', analyst: 'Business Analyst', role: 'User', email: 'jane@example.com', addedOn: '2024-05-16', status: 'Inactive' },

        // Dummy data here...
    ];

    // Function to calculate start and end indices for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    // Function to render table rows for current page
    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.analyst}</td>
                <td>{employee.role}</td>
                <td>{employee.email}<button className='btn btn-right'>Resend Email</button></td>
                <td>{employee.addedOn}</td>
                <td className='rounded-5 bg-danger bg-opacity-25 text-danger d-flex justify-content-center' >{employee.status}</td>
                <td>
                    {/* Action buttons */}

                    <HiDotsHorizontal />

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
        setCurrentPage(Math.ceil(employees.length / pageSize));
    };

    return (
        <div className="container mt-4 pb-4">
            <div className="row mb-4 p-4">
                <div className="main-head">
                    <h4 className="fw-bold mb-4 mt-4">Admin/Employee</h4>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <button className='btn border btn-block btn-right'>
                        <a href='/login'><img src='/images/plus-icon.svg' alt="Plus icon" /></a>
                        Add User
                    </button>
                </div> */}

                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        ...
                    </div>
                </div>




            </div>

            {/* Employee table */}
            <div className='table-responsive p-4 container1'>
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

            {/* Pagination */}



            <div className="pagination">

                <div className="pagination">
                    <div className='mr-5'>
                        <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'> {currentPage} </button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>

                    </div>

                </div>
                <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
            </div>

        </div>
    );
};

export default Admin;
