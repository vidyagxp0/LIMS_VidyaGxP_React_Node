import React, { useState } from 'react';
import '../UserManagement/Department/Admin.css';
import { FaArrowRight } from 'react-icons/fa';

const Roles = () => {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    
    const employees = [

        { role: 'sd_manager', status: 'Active' },
        { role: 'sd_user', status: 'Active' },
        { role: 'sd_manger', status: 'Inactive' },
        { role: 'sd_user', status: 'Active' },
        { role: 'sd', status: 'Active' },
        { role: 'sc', status: 'Active' },
        { role: 'sd', status: 'Active' },
        { role: 'qc', status: 'Inactive' },
        { role: 'qa', status: 'Active' },
        { role: 'mgr', status: 'Active' },
        { role: 'si', status: 'Inactive' },
        { role: 'tci', status: 'Active' },
        { role: 'tester', status: 'Active' },
        { role: 'super_admin', status: 'Active' },
        { role: 'manager', status: 'Active' },
        { role: 'analyst', status: 'Active' },
        { role: 'admin', status: 'Active' },
        { role: 'qa', status: 'Active' },
        { role: 'qc', status: 'Active' },
        { role: 'sdadmin', status: 'Active' },


    ];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);
    

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(employees.length / pageSize));
    };

    // Function to render table rows for current page
    const renderRows = () => {
    return employees.slice(startIndex, endIndex).map((employee, index) => (
        <tr key={startIndex + index}>
            <td>{startIndex + index + 1}</td>
                <td>{employee.role}</td>
                <td> <button style={{ background: employee.status === 'Active' ? 'green' : 'red', color: 'white', width: '110px' }} className=" btn d-flex py-2 px-3  small rounded fw-bold"> {employee.status}</button></td>
            </tr>
        ));
    };

    return (
        <div className=" mx-5 ">
            <div className="row  ">
                <div className="main-head">
                    <div className="title fw-bold fs-5 my-4">Roles</div>
                </div>

            </div>

            {/* Employee table */}
            <div className=" rounded    bg-white" style={{ border: "2px solid gray" }}>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th style={{background:"#3C496A", color:"white"}} className='w-25'>S.No.</th>
                            <th style={{background:"#3C496A", color:"white"}} className='w-25'>Role</th>
                            <th style={{background:"#3C496A", color:"white"}} className='w-25'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
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
                <button className="btn d-flex align-items-center " onClick={nextToLastPage}>
                    Next <FaArrowRight className='ms-2' />
                </button>
            </div>
        </div>
    );
};

export default Roles
