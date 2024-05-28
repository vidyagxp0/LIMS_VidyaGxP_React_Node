
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SamplingField = () => {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: " red", color: "white", width: "110px" };

    const employees = [

        { fieldName: "Room is clean", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "sampling check list", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Manufacturing Date", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Cracks Observerd", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Batch No", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Container Name", fieldType: 'DataField', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Cracks Observerd", fieldType: 'DataField', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Sampling Check List", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Manufacturing Date", fieldType: 'RadioButton', registeredBy: 'Manager', registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Manufacturing Date", fieldType: 'Label', registeredBy: 'Admin', registeredOn: '2024-05-16', status: 'INACTIVE' },

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
                <td>{employee.fieldName}</td>
                <td>{employee.fieldType}</td>
                <td>{employee.registeredBy}</td>
                <td>{employee.registeredOn}</td>
                <td>
                    <button
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                            employee.status === "ACTIVE"
                                ? badgeStyle
                                : badgeStyle2
                        }
                    >
                        {employee.status}
                    </button>
                </td>
                <td>
                    <div className='d-flex'>
                        <Link to="#" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='mx-2'>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                        <Link to="#" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="offcanvas" data-bs-target="#deleteOffcanvas" aria-controls="deleteOffcanvas">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </Link>
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

    const handleDelete = () => {
        console.log(`Deleting employee: ${selectedEmployee.name}`);
        // Perform delete operation here
        setSelectedEmployee(null);
    };


    return (
        <div className=" mx-5 ">
            <div className="row my-5 ">
                <div className="main-head">
                    <div className="title fw-bold fs-5 py-4">Sampling / Sampling Field</div>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select style={{ outline: "none" }} id='selectOption' onChange={(e) => {
                                setSelectedStatus(e.target.value);

                                setCurrentPage(1); // Reset to the first page on filter change
                            }}>
                                <option value="All">All</option>
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>

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
                        <CgAddR />  <span>Add Sampling Field</span>
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
                            Add Fields
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

                    <label className="line3" htmlFor="">Field Name</label>
                    <input className="line4" required type="text" placeholder="Sample Type Name" />

                    <label className="line3" htmlFor="">Field Type</label>
                    <select className="line4" required>
                        <option value="">Select Field Type</option>
                        <option value="option1">Radio Button</option>
                        <option value="option2">Label</option>
                        <option value="option3">Entry Field</option>
                        <option value="option4">Date Field</option>

                    </select>


                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>
                        <button>Submit</button>


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
                            <div id="line1"><h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete Sampling Field</h5>
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
                            <p>Do you want to delete this Sampling Field { }?</p>
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
                            <th>Field Name</th>
                            <th>Field Type</th>
                            <th>Registered By</th>
                            <th>Registered On</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>

            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
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

export default SamplingField
