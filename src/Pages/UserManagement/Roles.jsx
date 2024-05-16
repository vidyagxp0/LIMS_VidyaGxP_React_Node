
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../UserManagement/Department/Admin.css';


const Roles = () => {
   
    const employees = [

        {    role: 'sd_manager',   status: 'Active' },
        {    role: 'sd_user',   status: 'Active'},
        {    role: 'sd_manger',   status: 'Active' },
        {    role: 'sd_user',   status: 'Active'},
        {    role: 'sd',   status: 'Active' },
        {    role: 'sc',   status: 'Active'},
        {    role: 'sd',   status: 'Active' },
        {    role: 'qc',   status: 'Active'},
        {    role: 'qa',   status: 'Active' },
        {    role: 'mgr',   status: 'Active'},
        {    role: 'si',   status: 'Active' },
        {    role: 'tci',   status: 'Active'},
        {    role: 'tester',   status: 'Active' },
        {    role: 'super_admin',   status: 'Active'},
        {    role: 'manager',   status: 'Active' },
        {    role: 'analyst',   status: 'Active'},
        {    role: 'admin',   status: 'Active' },
        {    role: 'qa',   status: 'Active'},
        {    role: 'qc',   status: 'Active' },
        {    role: 'sdadmin',   status: 'Active'},

        
    ];

    // Function to render table rows for current page
    const renderRows = () => {
        return employees.slice().map((employee, index) => (
            <tr key={ index}>
                <td>{ index + 1}</td>
                <td>{employee.role}</td>
                <td ><button className={`btn rounded-5 ${employee.status === 'Active' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'success' : 'warning'} justify-content-center p-1`} >{employee.status}</button></td>
            </tr>
        ));
    };

    return (
        <div className="container mt-4 pb-4">
            <div className="row mb-4 p-4">
                <div className="main-head">
                    <h4 className="fw-bold mb-4 mt-4">Roles</h4>
                </div>
                
                
               
            </div>

            {/* Employee table */}
            <div className='table-responsive p-4 container1'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            
                            <th>Role</th>
                            
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            

        </div>
    );
};






export default Roles
