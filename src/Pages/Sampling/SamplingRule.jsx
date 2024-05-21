
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SamplingRule = () => {
    const pageSize = 9; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    
    

    // data for the table
    const employees = [

        { uniqueCode: "USER-022024-000001", description: 'Raw Sample', numberOfRanges: '3',  updatedAt: '2024-05-15', status: 'Active' },
        { uniqueCode: "USER-022024-000002", description: 'c1', numberOfRanges: '5',  updatedAt: '2024-05-16', status: 'Inactive' },
        { uniqueCode: "USER-022024-000003", description: 'Raw Sample', numberOfRanges: '3',  updatedAt: '2024-05-15', status: 'Active' },
        { uniqueCode: "USER-022024-000004", description: 'c1', numberOfRanges: '5',  updatedAt: '2024-05-16', status: 'Inactive' },
        { uniqueCode: "USER-022024-000005", description: 'Raw Sample', numberOfRanges: '3',  updatedAt: '2024-05-15', status: 'Active' },
        { uniqueCode: "USER-022024-000006", description: 'c1', numberOfRanges: '5',  updatedAt: '2024-05-16', status: 'Inactive' },
        { uniqueCode: "USER-022024-000007", description: 'Raw Sample', numberOfRanges: '3',  updatedAt: '2024-05-15', status: 'Active' },
        { uniqueCode: "USER-022024-000008", description: 'c1', numberOfRanges: '5',  updatedAt: '2024-05-16', status: 'Inactive' },
        { uniqueCode: "USER-022024-000009", description: 'Raw Sample', numberOfRanges: '3',  updatedAt: '2024-05-15', status: 'Active' },
        { uniqueCode: "USER-022024-0000010", description: 'c1', numberOfRanges: '5',  updatedAt: '2024-05-16', status: 'Inactive' },

        
    ];

    // Function to calculate start and end indices for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    // Function to render table rows for current page
    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.uniqueCode}</td>
                <td>{employee.description}</td>
                <td>{employee.numberOfRanges}</td>              
                <td>{employee.updatedAt}</td>
                <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
                <td>
                    <span
                        className="btn "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        >
                <FontAwesomeIcon icon={faPenToSquare} />                
                </span>
                <Link to="#"><FontAwesomeIcon icon={faTrashCan} /></Link>
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
        <div className=" mx-5 ">
            <div className="row my-5 ">
                <div className="main-head">
                    <div className="title fw-bold fs-5">Sampling Rule</div>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>Select Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>

                <div className="col-md-6">
                    <button
                        id="Addbtn"
                        className="btn btn-primary btn-right"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <CgAddR />  <span>Add Sampling Rule</span>
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
                            Add Rule
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
                    
                    <label id="line3" htmlFor="">Sampling Rule Name</label>
                    <input id="line4" required type="text" placeholder="Sampling Rule Name" />

                    <label id="line3" htmlFor="">Unique Code</label>
                    <input id="line4" required type="text" placeholder="Unique Code" />

                    <label id="line3" htmlFor="">Number of Ranges</label>
                    <div className='d-flex '>
                    <input id="line4" required type="text" placeholder="Number of Ranges" />
                    <button className='btn btn-info text-white' >Add</button>
                    </div>
                    
                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>



                        <button>Submit</button>


                    </div>
                </div>




            </div>

            {/* Employee table */}
            <div className='table-responsive shadow p-4 container1'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Unique Code</th>
                            <th>Description</th>
                            <th>Number Of Ranges</th>
                            <th>Updated At</th>
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

export default SamplingRule
