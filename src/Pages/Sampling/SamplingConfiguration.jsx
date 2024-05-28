
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SamplingConfiguration = () => {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };
    
    const employees = [

        { samplingId: "USER-022024-000001", specificationId: 'spsc', sample: 'Micro Media', product: 'tamc', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C2' },
        { samplingId: "USER-022024-000002", specificationId: 'wbl/fps', sample: 'Raw Sampling', product: 'sodium propyl', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { samplingId: "USER-022024-000003", specificationId: 'spsc011', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C1' },
        { samplingId: "USER-022024-000004", specificationId: 'wbl/fps/001', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { samplingId: "USER-022024-000005", specificationId: 'spsc/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C3' },
        { samplingId: "USER-022024-000006", specificationId: 'wbl/fps/002', sample: 'finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { samplingId: "USER-022024-000007", specificationId: 'spsc/00/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C5' },
        { samplingId: "USER-022024-000008", specificationId: 'wbl/fps/0003', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },
        { samplingId: "USER-022024-000009", specificationId: 'spsc/01/001', sample: 'Micro Media', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-tamc_1/Tamc/01/00', sampleTemplate: 'Raw Sampling Template', sampleRule: 'C4' },
        { samplingId: "USER-022024-0000010", specificationId: 'wbl/fps/004', sample: 'Finished Product', product: 'LUPIN MIRA S 25 TABLET', testPlan: 'TP-sppip/SPSC-000012', sampleTemplate: 'test temp_1', sampleRule: 'Raw Sample' },


    ];
    const filteredEmployees = employees.filter(employee =>
        selectedStatus === 'All' ? true : employee.status.toUpperCase() === selectedStatus.toUpperCase()
    );

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.samplingId}</td>
                <td>{employee.specificationId}</td>
                <td>{employee.sample}</td>
                <td>{employee.product}</td>
                <td>{employee.testPlan}</td>
                <td>{employee.sampleTemplate}</td>
                <td>{employee.sampleRule}</td>

                <td >
                    <div className='d-flex'>
                    <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
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
                    <div className="title fw-bold fs-5 py-4">Sampling Configuration</div>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">                    
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option value="ALL">All</option>
                                <option value="ACTIVE" >Active</option>
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
                        <CgAddR />  <span>Add Configuration</span>
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
                            Add Configuration
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

                    <label className="line3" htmlFor="">Test Plan / Revision No.</label>
                    <select className="line4" required>
                        <option value="">Select...</option>
                        <option value="option1">TP-010110</option>
                        <option value="option2">TP-012122</option>
                        <option value="option3">TP-010110</option>
                    </select>


                    <label className="line3" htmlFor="">Specification ID</label>
                    <input className="line4" required type="text" placeholder="" disabled />

                    <label className="line3" htmlFor="">Product/Material Name</label>
                    <input className="line4" required type="text" placeholder="Product/Material Name" disabled />

                    <label className="line3" htmlFor="">Product/Material Code</label>
                    <input className="line4" required type="text" placeholder="Product/Material Code" disabled />

                    <label className="line3" htmlFor="">Sample Type</label>
                    <input className="line4" required type="text" placeholder="" disabled />

                    <label className="line3" htmlFor="">Sampling Template</label>
                    <select className="line4" required>
                        <option value="">Select Test Category</option>
                        <option value="option1">Raw Sampling</option>
                        <option value="option2">Test Temp1</option>
                        <option value="option3">Test temp2</option>
                    </select>

                    <label className="line3" htmlFor="">Sampling Rule</label>
                    <select className="line4" required>
                        <option value="">Select Sampling Rule</option>
                        <option value="option1">C2</option>
                        <option value="option2">Raw sample</option>
                        <option value="option3">Sample C1</option>
                    </select>

                    <label className="line3" htmlFor="">Sampling Test</label>
                    <select className="line4" required>
                        <option value="">Select...</option>
                        <option value="option1">No Options</option>

                    </select>

                    <label className="line3" htmlFor="">Comment</label>
                    <input className="line4" required type="text" placeholder="Test Code" />


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
                            <div id="line1"><h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete Sampling Configuration</h5>
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
                            <p>Do you want to delete this Sampling Configuration {selectedEmployee.samplingId}?</p>
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
                            <th>Sampling ID</th>
                            <th>Specification ID</th>
                            <th>Sample Type</th>
                            <th>Product Name</th>
                            <th>Test Plan</th>
                            <th>Sample Template</th>
                            <th>Sample Rule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
                
            </div>




            {/* Pagination */}
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

export default SamplingConfiguration
