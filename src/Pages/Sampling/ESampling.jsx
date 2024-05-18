
import React, { useState } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { CgAddR } from 'react-icons/cg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';


const ESampling = () => {
    const pageSize = 9; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    
    

    // data for the table
    const employees = [

        { product: "LUPIN MIRA S 21", containersSampled:'37', numberOfContainers: '3',  addedOn: '2024-05-15', samplingConclusion:'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 22", containersSampled:'130', numberOfContainers: '5',  addedOn: '2024-05-16',samplingConclusion:'PASS', status: 'INITIATED' },
        { product: "LUPIN MIRA S 23", containersSampled:'37', numberOfContainers: '3',  addedOn: '2024-05-15',samplingConclusion:'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 24", containersSampled:'56', numberOfContainers: '5',  addedOn: '2024-05-16', samplingConclusion:'PASS',status: 'INITIATED' },
        { product: "LUPIN MIRA S 25", containersSampled:'38', numberOfContainers: '3',  addedOn: '2024-05-15',samplingConclusion:'PASS', status: 'APPROVED' },
        { product: "LUPIN MIRA S 26", containersSampled:'31', numberOfContainers: '5',  addedOn: '2024-05-16',samplingConclusion:'PASS', status: 'INITIATED' },
        { product: "LUPIN MIRA S 27", containersSampled:'49', numberOfContainers: '3',  addedOn: '2024-05-15', samplingConclusion:'PASS',status: 'APPROVED' },
        { product: "LUPIN MIRA S 28", containersSampled:'37', numberOfContainers: '5',  addedOn: '2024-05-16', samplingConclusion:'PASS',status: 'INITIATED' },
        { product: "LUPIN MIRA S 29", containersSampled:'21', numberOfContainers: '3',  addedOn: '2024-05-15', samplingConclusion:'PASS',status: 'APPROVED' },
        { product: "LUPIN MIRA S 30", containersSampled:'37', numberOfContainers: '5',  addedOn: '2024-05-16', samplingConclusion:'PASS',status: 'INITIATED' },
2
        
    ];

    // Function to calculate start and end indices for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    // Function to render table rows for current page
    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.product}</td>
                <td>{employee.containersSampled}</td>                              
                <td>{employee.addedOn}</td>
                <td>{employee.numberOfContainers}</td>
                <td>{employee.samplingConclusion}</td>
                <td className={`rounded-5 ${employee.status === 'APPROVED' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'APPROVED' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
                <td>
                <FontAwesomeIcon icon={faEye} />
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrashCan} />
                                                  

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
                    <div className="title fw-bold fs-5">E-Sampling</div>
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
                        <CgAddR />  <span>Add E-Sampling</span>
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
                    <p className='p-3'>Please Add User To fill This Details</p>

                    <label id="line3" htmlFor="">User Name</label>
                    <input id="line4" required type="text" placeholder="Name here" />

                    <label id="line3" htmlFor="">Contact Number</label>
                    <input id="line4" required type="text" placeholder="+91 0000000000" />

                    <label id="line3" htmlFor="">Gmail Address</label>
                    <input id="line4" required type="text" placeholder="sample@gamail.com" />

                    <label id="line3" htmlFor="">Address</label>
                    <input id="line4" required type="text" placeholder="Name" />

                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>
                        <button>Add</button>


                    </div>
                </div>




            </div>

            {/* Employee table */}
            <div className='table-responsive shadow p-4 container1'>
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

export default ESampling
