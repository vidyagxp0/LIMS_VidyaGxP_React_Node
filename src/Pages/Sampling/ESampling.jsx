
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const ESampling = () => {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

    const employees = [

        { product: "LUPIN MIRA S 21", containersSampled: '37', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 22", containersSampled: '130', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { product: "LUPIN MIRA S 23", containersSampled: '37', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'DROPPED' },
        { product: "LUPIN MIRA S 24", containersSampled: '56', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { product: "LUPIN MIRA S 25", containersSampled: '38', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 26", containersSampled: '31', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'REINITIATED' },
        { product: "LUPIN MIRA S 27", containersSampled: '49', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'REJECTED' },
        { product: "LUPIN MIRA S 28", containersSampled: '37', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },
        { product: "LUPIN MIRA S 29", containersSampled: '21', numberOfContainers: '3', addedOn: '2024-05-15', samplingConclusion: 'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 30", containersSampled: '37', numberOfContainers: '5', addedOn: '2024-05-16', samplingConclusion: 'PASS', status: 'INITIATED' },


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
                <td>{employee.product}</td>
                <td>{employee.containersSampled}</td>
                <td>{employee.addedOn}</td>
                <td>{employee.numberOfContainers}</td>
                <td>{employee.samplingConclusion}</td>
                <td >
                    <button
                        className="py-2 px-3 small rounded fw-bold"
                        style={
                            employee.status === "INITIATED"
                                ? badgeStyle2
                                : employee.status === "APPROVED"
                                    ? badgeStyle3
                                    : employee.status === "REJECTED"
                                        ? badgeStyle4
                                        : employee.status === "REINITIATED"
                                            ? badgeStyle5
                                            : employee.status === "DROPPED"
                                                ? badgeStyle6
                                                : badgeStyle
                        }
                    >
                        {employee.status}
                    </button>
                    </td>
                <td>
                    <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                    <Link to="#" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="offcanvas" data-bs-target="#addESampling" aria-controls="offcanvasRight" className='mx-2'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
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
                    <div className="title fw-bold fs-5 py-4">E-Sampling</div>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select style={{outline:"none"}} id='selectOption' onChange={(e) => {
                                setSelectedStatus(e.target.value);

                                setCurrentPage(1); // Reset to the first page on filter change
                            }}>
                                <option value="All">All</option>
                                <option value="INITIATED">Initiated</option>
                                <option value="APPROVED">Approved</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="REINITIATED">Reinitiated</option>
                                <option value="DROPPED">Dropped</option>
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
                        data-bs-target="#addESampling"
                        aria-controls="offcanvasRight"
                        style={{ background: "#4B49B6" }}
                    >
                        <CgAddR />  <span>Add E-Sampling</span>
                    </button>
                </div>

                <div
                    className="offcanvas offcanvas-end overflow-y-scroll"
                    tabIndex="-1"
                    id="addESampling"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header ">
                        <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Add E-Sampling
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
                            <label htmlFor="SamplingConfiguration" className="form-label">Sampling Configuration</label>
                            <select className="form-select" id='SamplingConfiguration' aria-label="Default select example">
                                <option defaultValue>Select </option>
                                <option value="1">SC-072023-0000001</option>
                                <option value="2">SC-072023-0000002</option>
                                <option value="3">SC-072023-0000003</option>
                                <option value="4">SC-072023-0000004</option>
                                <option value="5">SC-072023-0000005</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product/Material Name</label>
                            <input type="text" className="form-control" id="productName" placeholder="Product" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="testPlan" className="form-label">Test Plan</label>
                            <input type="text" className="form-control" id="testPlan" placeholder="Test Plan" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ARNo" className="form-label">A.R. No</label>
                            <select className="form-select" id='ARNo' aria-label="Default select example">
                                <option defaultValue>Select </option>
                                <option value="ARPC010110">ARPC010110</option>
                                <option value="ARPC012122">ARPC012122</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010111">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                                <option value="ARPC010110">ARPC010111</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="noOfContainers" className="form-label">Total No. of containers</label>
                            <input type="number" className="form-control" id="noOfContainers" placeholder="Total No. of containers" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sampledContainerNo" className="form-label">No. of containers to be sampled</label>
                            <input type="number" className="form-control" id="sampledContainerNo" placeholder="No. of containers to be sampled" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sampledContainer" className="form-label">Containers sampled</label>
                            <select className="form-select" id='sampledContainer' aria-label="Default select example">
                                <option defaultValue >Select </option>
                                <option disabled>No. Of Sampled Containers </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sampling Conclusion</label>
                            <div className="d-flex flex-row gap-4" >
                                <div>
                                    <input type="radio" className='form-check-input mx-3' name="conclusion" id="pass" />
                                    <label htmlFor="pass">Pass</label>
                                </div>
                                <div>
                                    <input type="radio" className='form-check-input mx-3' name="conclusion" id="fail" />
                                    <label htmlFor="fail">Fail</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Check point passed</label>
                            <div className="d-flex flex-row gap-4" >
                                <div>
                                    <input type="radio" className='form-check-input mx-3' name="CheckPointPassed" id="pass" />
                                    <label htmlFor="yes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" className='form-check-input mx-3' name="CheckPointPassed" id="fail" />
                                    <label htmlFor="no">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Document if any</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comments" className="form-label">Comments</label>
                            <input type="text" className="form-control" id="comments" placeholder="Comment here ..." />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InitiatedBy" className="form-label">Initiated By</label>
                            <input type="number" className="form-control" id="InitiatedBy" placeholder="Admin" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InitiatedOn" className="form-label">Initiated On</label>
                            <input type="date" className="form-control" id="InitiatedOn" placeholder="2024-05-23" />
                        </div>

                        <div className="d-flex justify-content-center gap-4 mt-4">
                            <button type="button" className='btn btn-secondary w-100' data-bs-dismiss="offcanvas" aria-label="Close">&lt; Back</button>
                            <button type="button" className='btn btn-primary w-100'>Add</button>
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
                            <div id="line1"><h5 className="offcanvas-title" id="deleteOffcanvasLabel">Delete E-Sample</h5>
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
                            <p>Do you want to delete this E-Sample {selectedEmployee.product}?</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-light" data-bs-dismiss="offcanvas" onClick={() => setSelectedEmployee(null)}>Back</button>
                                <button className="btn btn-info" onClick={handleDelete}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className='table-responsive bg-white rounded py-3 px-4 mt-5' style={{ boxShadow: "0px 0px 3px black" }}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Product/Material Name</th>
                            <th>Containers Sampled</th>
                            <th>Added On</th>
                            <th>Number Of Containers</th>
                            <th>Sampling Conclusion</th>
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

export default ESampling
