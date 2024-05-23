
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SamplingField = () => {
    const pageSize = 9;
    const [currentPage, setCurrentPage] = useState(1);
    
    const employees = [

        { fieldName: "Room is clean", fieldType:'RadioButton', registeredBy: 'Manager',  registeredOn: '2024-05-15',  status: 'ACTIVE' },
        { fieldName: "sampling check list", fieldType:'Label', registeredBy: 'Admin',  registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Manufacturing Date", fieldType:'DataField', registeredBy: 'Manager',  registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Cracks Observerd", fieldType:'Label', registeredBy: 'Admin',  registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Batch No", fieldType:'RadioButton', registeredBy: 'Manager',  registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Container Name", fieldType:'DataField', registeredBy: 'Admin',  registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Cracks Observerd", fieldType:'DataField', registeredBy: 'Manager',  registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Sampling Check List", fieldType:'Label', registeredBy: 'Admin',  registeredOn: '2024-05-16', status: 'INACTIVE' },
        { fieldName: "Manufacturing Date", fieldType:'RadioButton', registeredBy: 'Manager',  registeredOn: '2024-05-15', status: 'ACTIVE' },
        { fieldName: "Manufacturing Date", fieldType:'Label', registeredBy: 'Admin',  registeredOn: '2024-05-16', status: 'INACTIVE' },
        
    ];

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.fieldName}</td>
                <td>{employee.fieldType}</td>
                <td>{employee.registeredBy}</td>
                <td>{employee.registeredOn}</td>
                <td className={`rounded-5 ${employee.status === 'ACTIVE' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'ACTIVE' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
                <td>
                <span
                        className="btn "
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        >
                <FontAwesomeIcon icon={faPenToSquare} />                
                </span>
                <span className='cursor-pointer' data-bs-toggle="modal" data-bs-target="#removeSamplingFieldModal"><FontAwesomeIcon icon={faTrashCan} /></span>                              

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
        setCurrentPage(Math.ceil(employees.length / pageSize));
    };

    return (
        <div className=" mx-5 ">
            <div className="row my-5 ">
                <div className="main-head">
                    <div className="title fw-bold fs-5">Sampling / Sampling Field</div>
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
                    
                    <label id="line3" htmlFor="">Field Name</label>
                    <input id="line4" required type="text" placeholder="Sample Type Name" />

                    <label id="line3" htmlFor="">Field Type</label>
                    <select id="line4"  required>
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




            </div>

            {/* Employee table */}
            <div className='table-responsive shadow p-4 container1'>
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
                <div className="modal fade" id="removeSamplingFieldModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Delete Sampling Field</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="">Do you want to delete this Sampling Field <code>Sampling Check List</code> ?</p>
                            </div>
                            <div className="d-flex justify-content-end m-3">
                                <button type="button" className="btn btn-secondary mx-4" data-bs-dismiss="modal">Back</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default SamplingField
