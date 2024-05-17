
import React, { useState } from 'react';
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
        <div className=" mx-5 ">
        <div className="row my-5 ">
                <div className="main-head"> 
                    <div className="title fw-bold fs-5">Roles</div>
                </div>
  
            </div>

            {/* Employee table */}
            <div className=' shadow table-responsive p-4'>
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
